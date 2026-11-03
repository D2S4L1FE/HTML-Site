"""Fetch JSON from a configured, authorized education API and normalize it.

This is a direct API client, not a website crawler or exam-board scraper.
"""
from __future__ import annotations

import argparse
import json
import os
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path



def value_at(record: object, path: str) -> object:
    value = record
    for part in path.split("."):
        if isinstance(value, dict):
            value = value.get(part)
        elif isinstance(value, list) and part.isdigit():
            value = value[int(part)] if int(part) < len(value) else None
        else:
            return None
    return value


def fetch_provider(config_path: Path, provider_id: str, output_path: Path) -> None:
    config = json.loads(config_path.read_text(encoding="utf-8"))
    provider = next((p for p in config.get("providers", []) if p.get("id") == provider_id), None)
    if not provider:
        raise ValueError(f"provider ID {provider_id!r} was not found")
    endpoint = provider.get("endpoint", "")
    if not endpoint.startswith("https://") or "REPLACE-WITH" in endpoint:
        raise ValueError("configure a real HTTPS endpoint from the provider's official API documentation first")
    if provider.get("method", "GET").upper() != "GET":
        raise ValueError("only documented GET endpoints are supported by this starter client")
    for key in ("contentLicense", "sourceTitle", "sourceUrl"):
        if not provider.get(key) or "REPLACE-WITH" in str(provider[key]):
            raise ValueError(f"configure verified {key} before fetching")

    headers = {"Accept": "application/json", "User-Agent": "DistinctYoungsters-ExamImporter/1.0"}
    auth_env = provider.get("authEnv")
    token = os.environ.get(auth_env, "") if auth_env else ""
    if auth_env and not token:
        raise ValueError(f"set the {auth_env} environment variable in your local shell")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    request = urllib.request.Request(endpoint, headers=headers, method="GET")
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            if response.status != 200:
                raise ValueError(f"provider returned HTTP {response.status}")
            body = json.loads(response.read().decode("utf-8"))
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
        raise ValueError(f"API request failed: {error}") from error

    records = value_at(body, provider.get("responsePath", "questions"))
    if not isinstance(records, list):
        raise ValueError("configured responsePath did not resolve to a JSON array")
    fields = provider.get("fields", {})
    required_fields = {"question", "answers", "correct", "fact", "subject", "examStandard"}
    if not required_fields.issubset(fields):
        raise ValueError(f"fields mapping must provide: {', '.join(sorted(required_fields))}")

    questions = []
    for index, record in enumerate(records, 1):
        item = {key: value_at(record, path) for key, path in fields.items()}
        item["subject"] = value_at(record, fields["subject"])
        if not item.get("category"):
            item["category"] = str(item.get("subject", "")).upper()
        if any(item.get(key) is None for key in required_fields):
            raise ValueError(f"record {index} is missing one or more mapped fields")
        questions.append(item)

    batch = {
        "source": {
            "title": provider["sourceTitle"],
            "url": provider["sourceUrl"],
            "license": provider["contentLicense"],
            "attribution": provider.get("attribution", ""),
            "permissionReference": provider.get("permissionReference", ""),
            "retrievedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        },
        "questions": questions,
    }
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(batch, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Fetched {len(questions)} record(s) from configured provider {provider_id!r} into {output_path}.")
    print("Next: inspect the batch and licence, then run build_question_bank.py.")


def main() -> None:
    parser = argparse.ArgumentParser(description="Fetch a configured authorized education JSON API.")
    parser.add_argument("--config", required=True, type=Path, help="Private provider config JSON (do not commit secrets)")
    parser.add_argument("--provider", required=True, help="Provider ID from the config")
    parser.add_argument("--output", required=True, type=Path, help="Normalized JSON batch path")
    args = parser.parse_args()
    try:
        fetch_provider(args.config, args.provider, args.output)
    except (ValueError, OSError, json.JSONDecodeError) as error:
        raise SystemExit(str(error)) from error


if __name__ == "__main__":
    main()
