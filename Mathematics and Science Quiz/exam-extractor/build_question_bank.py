"""Validate rights-cleared incoming batches and emit the quiz's generated JS bank."""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
INCOMING = ROOT / "incoming"
OUTPUT = ROOT / "question-bank.generated.js"
ALLOWED_LICENSES = {"CC0-1.0", "CC-BY-4.0", "CC-BY-SA-4.0", "public-domain", "permission-granted"}
ALLOWED_EXAMS = {"waec", "neco", "jamb", "gcse"}
ALLOWED_SUBJECTS = {
    "math", "science", "english", "physics", "chemistry", "biology", "geography",
    "economics", "commerce", "businessStudies", "furtherMaths", "agriculture", "computerStudies",
    "accounting", "marketing", "officePractice", "literature", "government", "history",
    "civicEducation", "crs", "irs",
}


def fail(path: Path, message: str) -> ValueError:
    return ValueError(f"{path.name}: {message}")


def validate_batch(path: Path, batch: object) -> list[dict]:
    if not isinstance(batch, dict) or not isinstance(batch.get("source"), dict):
        raise fail(path, "expected an object with source metadata and questions")
    source = batch["source"]
    for key in ("title", "url", "license"):
        if not isinstance(source.get(key), str) or not source[key].strip():
            raise fail(path, f"source.{key} is required")
    if not source["url"].startswith("https://"):
        raise fail(path, "source.url must use HTTPS")
    if source["license"] not in ALLOWED_LICENSES:
        raise fail(path, f"license {source['license']!r} is not approved by this importer")
    if source["license"] in {"CC-BY-4.0", "CC-BY-SA-4.0"} and not source.get("attribution", "").strip():
        raise fail(path, "attribution is required by the declared licence")
    if source["license"] == "permission-granted" and not source.get("permissionReference", "").strip():
        raise fail(path, "permissionReference is required for permission-granted content")
    questions = batch.get("questions")
    if not isinstance(questions, list) or not questions:
        raise fail(path, "questions must be a non-empty array")

    normalized = []
    for number, item in enumerate(questions, 1):
        prefix = f"question {number}"
        if not isinstance(item, dict):
            raise fail(path, f"{prefix} must be an object")
        exam = item.get("examStandard")
        subject = item.get("subject")
        prompt = item.get("question")
        answers = item.get("answers")
        correct = item.get("correct")
        explanation = item.get("fact")
        if exam not in ALLOWED_EXAMS:
            raise fail(path, f"{prefix}: examStandard must be one of {sorted(ALLOWED_EXAMS)}")
        if subject not in ALLOWED_SUBJECTS:
            raise fail(path, f"{prefix}: unsupported app subject key {subject!r}")
        if not isinstance(prompt, str) or len(prompt.strip()) < 8:
            raise fail(path, f"{prefix}: question must contain at least 8 characters")
        if not isinstance(answers, list) or len(answers) != 4 or any(not isinstance(a, str) or not a.strip() for a in answers):
            raise fail(path, f"{prefix}: exactly four non-empty answer strings are required")
        if len({a.strip().casefold() for a in answers}) != 4:
            raise fail(path, f"{prefix}: answer options must be distinct")
        if isinstance(correct, bool) or not isinstance(correct, int) or correct not in range(4):
            raise fail(path, f"{prefix}: correct must be an answer index from 0 to 3")
        if not isinstance(explanation, str) or not explanation.strip():
            raise fail(path, f"{prefix}: a concise explanation is required")
        normalized.append({
            "category": str(item.get("category") or subject).upper(),
            "subject": subject,
            "question": prompt.strip(),
            "answers": [answer.strip() for answer in answers],
            "correct": correct,
            "answerValue": item.get("answerValue"),
            "fact": explanation.strip(),
            "examStandard": exam,
            "sourceTitle": source["title"].strip(),
            "sourceUrl": source["url"].strip(),
            "license": source["license"],
            "attribution": str(source.get("attribution", "")).strip(),
            "topic": str(item.get("topic", "")).strip(),
            "year": item.get("year"),
        })
    return normalized


def main() -> None:
    INCOMING.mkdir(parents=True, exist_ok=True)
    merged: dict[str, dict[str, list[dict]]] = {}
    seen: set[tuple[str, str, str]] = set()
    files = sorted(INCOMING.glob("*.json"))
    for path in files:
        try:
            batch = json.loads(path.read_text(encoding="utf-8"))
            questions = validate_batch(path, batch)
        except (json.JSONDecodeError, OSError, ValueError) as error:
            raise SystemExit(str(error)) from error
        for item in questions:
            key = (item["examStandard"], item["subject"], re.sub(r"\s+", " ", item["question"]).casefold())
            if key in seen:
                raise SystemExit(f"{path.name}: duplicate question for {key[0]}/{key[1]}: {item['question']}")
            seen.add(key)
            merged.setdefault(item["examStandard"], {}).setdefault(item["subject"], []).append(item)

    payload = json.dumps(merged, ensure_ascii=False, indent=2)
    built_at = datetime.now(timezone.utc).isoformat(timespec="seconds")
    OUTPUT.write_text(
        "/* Generated by build_question_bank.py. Do not edit by hand. */\n"
        f"/* Built at {built_at}; imported items: {len(seen)} */\n"
        f"window.DY_EXAM_QUESTION_BANK = {payload};\n",
        encoding="utf-8",
    )
    print(f"Built {OUTPUT.name}: {len(seen)} licensed questions from {len(files)} batch file(s).")


if __name__ == "__main__":
    main()
