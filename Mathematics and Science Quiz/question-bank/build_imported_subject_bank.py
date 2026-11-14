from __future__ import annotations

import html
import json
import re
from pathlib import Path
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parent.parent
DOCS = Path(r"c:/Users/BUY-PC/Desktop/HTML Site/Question Bank")
OUTPUT = ROOT / "question-bank" / "imported-subject-bank.js"

SUBJECT_MAP = {
    "principles_of_accounting_500_objective_quiz.docx": "accounting",
    "British_Curriculum_English_500_Quiz.docx": "britishEnglish",
    "chemistry_500_objective_quiz.docx": "chemistry",
    "civic_education_500_objective_quiz.docx": "civicEducation",
    "Commerce_500_Objective_Quiz.docx": "commerce",
    "government_500_objective_quiz.docx": "government",
    "lit_in_english_500_objective_quiz.docx": "literature",
    "mathematics_500_objective_quiz.docx": "mathematics",
}


def clean_line(raw: str) -> str:
    return re.sub(r"\s+", " ", raw).strip()


def question_starts(line: str) -> bool:
    return bool(re.match(r"^(?:Q|Question\s*)\d+\s*[:.]?", line, flags=re.I))


def answer_key_hint(line: str) -> bool:
    return any(marker in line for marker in ["Answer Key", "Master Answer Key", "Complete Assessment Answer Key", "Marking Guide"])


def extract_text_from_docx(path: Path) -> list[str]:
    with ZipFile(path) as zf:
        xml = zf.read("word/document.xml")
    text = html.unescape(xml.decode("utf-8", errors="ignore"))
    text = re.sub(r"<.*?>", "\n", text)
    text = re.sub(r"\r\n?", "\n", text)
    lines = []
    for raw in text.splitlines():
        cleaned = clean_line(raw)
        if cleaned:
            lines.append(cleaned)
    return lines


def parse_option_value(line: str):
    s = line.strip()
    if not s:
        return None
    if re.fullmatch(r"\(?[A-D]\)?", s):
        return s.strip("()[] "), ""
    match = re.match(r"^\(?([A-D])\)?[\).:]?\s*(.*)$", s)
    if match:
        return match.group(1).upper(), match.group(2).strip()
    match = re.match(r"^\[\s*\]\s*([A-D])\.?\s*(.*)$", s)
    if match:
        return match.group(1).upper(), match.group(2).strip()
    match = re.match(r"^\(\s*([A-D])\s*\)\s*(.*)$", s)
    if match:
        return match.group(1).upper(), match.group(2).strip()
    return None


def parse_docx(path: Path):
    lines = extract_text_from_docx(path)
    answer_map = {}
    for index, line in enumerate(lines):
        if answer_key_hint(line):
            for j in range(index + 1, min(index + 400, len(lines))):
                answer_match = re.search(r"(?:Q|Question\s*)?(\d+)\s*[:.]?\s*([A-D])", lines[j], flags=re.I)
                if answer_match:
                    answer_map[int(answer_match.group(1))] = answer_match.group(2).upper()
                elif re.search(r"^\d+\.?\s*[A-D]\s*(?:\||$)", lines[j]):
                    for m in re.finditer(r"(\d+)\.\s*([A-D])", lines[j], flags=re.I):
                        answer_map[int(m.group(1))] = m.group(2).upper()
                elif question_starts(lines[j]):
                    break
    questions = []
    i = 0
    while i < len(lines):
        line = lines[i]
        match = re.match(r"^(?:Q|Question\s*)(\d+)\s*[:.]?\s*(.*)$", line, flags=re.I)
        if not match:
            i += 1
            continue
        qnum = int(match.group(1))
        prompt = clean_line(match.group(2))
        options = []
        j = i + 1
        while j < len(lines):
            if question_starts(lines[j]) or answer_key_hint(lines[j]):
                break
            parsed = parse_option_value(lines[j])
            if parsed:
                letter, value = parsed
                if value:
                    options.append((letter, clean_line(value)))
                    j += 1
                    continue
                if j + 1 < len(lines):
                    next_value = clean_line(lines[j + 1])
                    if not question_starts(next_value) and not answer_key_hint(next_value):
                        options.append((letter, next_value))
                        j += 2
                        continue
            if not prompt and lines[j]:
                prompt = clean_line(lines[j])
            j += 1
        if len(options) >= 4:
            ordered = ["A", "B", "C", "D"]
            values = []
            for letter in ordered:
                found = next((value for l, value in options if l == letter), "")
                values.append(found)
            if all(values):
                correct_index = answer_map.get(qnum, "A")
                if isinstance(correct_index, str) and correct_index.upper() in "ABCD":
                    correct_index = "ABCD".index(correct_index.upper())
                else:
                    correct_index = max(0, (qnum - 1) % 4)
                questions.append({
                    "number": qnum,
                    "question": prompt or f"Question {qnum}",
                    "answers": values,
                    "correct": correct_index,
                    "fact": f"Correct answer: {chr(65 + correct_index)}. Refer to the marking guide in the original question-bank document.",
                })
        i = j
        if len(questions) >= 50:
            break
    return questions


bank = {}
for filename, subject_key in SUBJECT_MAP.items():
    file_path = DOCS / filename
    if file_path.exists():
        items = parse_docx(file_path)
        if items:
            bank[subject_key] = items

OUTPUT.write_text("window.DY_IMPORTED_QUESTION_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
print(f"Wrote {OUTPUT} with {sum(len(v) for v in bank.values())} imported questions across {len(bank)} subjects.")
