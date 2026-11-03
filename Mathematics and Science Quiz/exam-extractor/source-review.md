# Source review: freely viewable vs. reusable

Reviewed 2026-11-03. “Free to access/download” is not the same as “licensed for scraping, redistribution, or commercial reuse.” This quiz offers paid access, so sources with a NonCommercial restriction are not imported.

## Official examination-board pages

| Source | Public page | Finding | Import decision |
|---|---|---|---|
| AQA | [Past papers and mark schemes](https://www.aqa.org.uk/past-papers-and-mark-schemes-finder) | Searchable page exposes question-paper and mark-scheme PDFs. Its terms/copyright do not grant an open licence to republish the question text. | Link as a study reference only; do not scrape text into the bank. |
| Pearson Edexcel | [Past papers](https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html) and [Pearson copyright policy](https://qualifications.pearson.com/en/support/support-topics/exams/past-papers/pearson-copyright-policy.html) | The papers are available free to teachers/students subject to availability, but that is not an open reuse licence. | Link as a study reference only; do not scrape text into the bank. |
| OCR | [Past-paper finder](https://www.ocr.org.uk/qualifications/past-paper-finder/) and its [past-paper policy](https://www.ocr.org.uk/qualifications/past-paper-finder/past-paper-policy/) | Finder provides papers and materials under OCR's own policy, not a general open licence to republish question text. | Link as a study reference only; do not scrape text into the bank. |

## Open educational repositories checked

- [OpenStax licensing update](https://openstax.org/blog/openstax-licensing): OpenStax says its textbook library transitioned to CC BY-NC-SA across the library for newly released and updated versions, with limited exceptions. Free access is available, but NonCommercial makes these resources unsuitable for importing into this paid-access quiz unless separate written permission is obtained. Check the exact edition/item licence before any use.
- [MIT OpenCourseWare terms](https://ocw.mit.edu/terms/): the materials use CC BY-NC-SA 4.0 and MIT explicitly says commercial courses or works derived from OCW cannot be sold/profited from. Not imported.

This review did not identify an official AQA, Pearson Edexcel, or OCR past-paper page that automatically grants commercial question-text reuse. Publicly accessible PDFs are therefore not scraped. Before adding any other third-party source, record its item-level licence and check whether commercial redistribution and adaptations are allowed.

## Questions added instead

`incoming/original-math-practice.json` is created by `generate_original_questions.py`. It contains original parameterized practice questions written for this project and released under CC0 1.0; it does not contain copied exam-board questions. The generator is deterministic and template-based (not a call to an external AI service). Each track has 150 items distributed over 15 topic families: arithmetic, fractions/decimals, percentages, ratio/proportion, algebra, sequences, geometry, mensuration, statistics, probability, rates/motion, indices, sets/logic, financial mathematics, and coordinates/graphs. Track names mean **style practice**, not official exam questions or a claim of syllabus validation. A teacher should review accuracy and syllabus coverage before high-stakes use.
