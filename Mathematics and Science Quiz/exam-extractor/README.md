# Exam Extractor

This folder is the controlled source pipeline for quiz questions. It is designed to ingest material only from an API or file whose terms explicitly permit reuse in this quiz, and then publish a static question-bank file consumed by the app.

## Important source and licensing limits

- A page being publicly viewable does **not** make its exam questions free to copy. AQA, Pearson Edexcel, and OCR exam papers/questions are generally protected by copyright and may have specific download/reuse terms. Do not scrape, bulk-copy, bypass a login/anti-bot control, or publish their question text unless you have an explicit reuse licence/permission. The sample config only allows storing official links and metadata for these boards.
- For board materials, use the official public page links in `providers.example.json` as references. The extractor does not crawl those pages or ingest their question text.
- For OpenAI, Alikho, or any “educational API”, use an official documented endpoint and verify the provider's content licence before importing. “Adesanya S.A” appears to identify the account/owner, not an API product or documentation URL, so no Alikho/Educational API endpoint has been guessed or hard-coded.
- Never put a private API key in HTML/JavaScript served to learners. `fetch_open_api.py` reads its bearer token from an environment variable and runs locally. For a live hosted quiz that needs runtime API calls, put credentials behind a server-side endpoint.

## Files

- `providers.example.json` — example provider/end-board registry; replace API placeholders only with verified documentation and licence details.
- `question.schema.json` — canonical import format and required reuse/provenance fields.
- `incoming/` — put normalized JSON question batches here. Keep only rights-cleared content.
- `build_question_bank.py` — validates source/licence/provenance and builds `question-bank.generated.js`.
- `generate_original_questions.py` — a deterministic, template-based generator (no external AI API) that creates 150 original CC0 mathematics practice items for each selected exam-style track (600 total) across 15 topic families.
- `test_question_generator.py` — independent checks for track counts, unique prompts, answer keys, and generated arithmetic.
- `fetch_open_api.py` — optional direct JSON API client, configured to map an authorized API response to the canonical format.
- `question-bank.generated.js` — generated static bank loaded by the quiz. It is empty until a cleared source batch is added.

## Build and connect

From the project root, run:

`python exam-extractor/generate_original_questions.py`

Then build the static bank:

`python exam-extractor/build_question_bank.py`

The builder rejects missing source title/URL/licence, unsupported licences, invalid question choices, or incorrect answer indexes. Accepted licence values are `CC0-1.0`, `CC-BY-4.0`, `CC-BY-SA-4.0`, `public-domain`, and `permission-granted`. Include attribution in `attribution` for attribution licences. Do not mark material as licensed unless you have checked the actual source terms.

The quiz loads this generated file before `script.js`. Imported items are grouped by `examStandard` and `subject`; if a matching exam-specific set exists, it is used instead of the generic fallback bank. If no licensed items exist for that exam+subject, the quiz uses its existing built-in sample set and labels it as not yet exam-verified. The generated items are original style practice and are not scraped or official examination questions.

### API response mapping

Copy `providers.example.json` to `providers.json` and configure an official JSON API endpoint plus response mapping. Set the API key environment variable named by `authEnv` in your local shell. Then run:

`python exam-extractor/fetch_open_api.py --config exam-extractor/providers.json --provider YOUR_PROVIDER_ID --output exam-extractor/incoming/provider-batch.json`

The API response must contain question items with a prompt, four choices, a correct answer index, and explanation. The endpoint must be authorized for automated access, and its contract/licence must permit the resulting content to be reused. This generic connector does not discover undocumented endpoints or map unknown vendor APIs automatically.

## Supported exam keys

Use `waec`, `neco`, `jamb`, or `gcse` for `examStandard`. `subject` must match an app subject key such as `math`, `science`, `english`, `physics`, `chemistry`, `biology`, `geography`, `economics`, `commerce`, or `businessStudies`.

## Original generated question coverage

`incoming/original-math-practice.json` is created by `generate_original_questions.py`. It contains original parameterized practice questions written for this project and released under CC0 1.0; it does not contain copied exam-board questions. The generator is deterministic and template-based (not a call to an external AI service). Each track has 150 items distributed across arithmetic, fractions/decimals, percentages, ratio, algebra, sequences, geometry, mensuration, statistics, probability, rates, indices, sets, financial mathematics, and coordinates/graphs. Track names mean **style practice**, not official exam questions or a claim of syllabus validation. A teacher should review accuracy and syllabus coverage before high-stakes use.

## Search/source findings

See [source-review.md](source-review.md) for official AQA, Pearson Edexcel, OCR, OpenStax, and MIT OCW access/licensing findings. Some papers are free to download but are not licensed for republishing; OpenStax/MIT NC materials are excluded because this app offers paid access. The source review links to the public official pages but intentionally does not scrape their question text.
