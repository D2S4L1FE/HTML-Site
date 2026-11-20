# You Matter — with Distinct Youngsters

The installable PWA is named **You Matter**. It opens on **Distinct Youngsters**, the complete quiz experience, and includes a You Matter link for reflection, stories, gallery, and live-session features. The You Matter page remains in `D2S.html` so its content stays separate from quiz logic while both experiences are connected in the app.

## Distinct Youngsters — School Subject Quiz

A responsive, accessible, installable web app for curious minds, built with plain HTML, CSS, and JavaScript. Create a learner profile with name, age, class, and email; the same browser keeps the learner signed in until they choose **Sign out**, and restores their details after reload. Choose a question-bank track (WAEC, NECO, JAMB/UTME, GCSE, or Nigeria JSS 1), a Science, Commercial, or Arts department, and a subject. The Nigeria JSS 1 track includes 100 Mathematics, 100 Basic Science, and 100 English Studies questions, each paired with its answer and explanation from the editable Markdown sources in `question-bank/`. Choose 20, 30, 40, 50, or (for a 100-question bank) 100 questions; the quiz time is calculated automatically at 45 seconds (three-quarter minute) per question actually included in the round. During the first seven days after the first quiz, the selected round is available in full. After the trial, a selected round is limited to 18 questions; a full-access request appears after that capped round. Answers receive instant explanations, with a percentage score at the end. Reflection pathways and their free four-page stories are on the separate You Matter page, D2S.html.

## Run locally

For a quick preview, open `index.html` in a modern web browser. No build step or package installation is needed.

## Install on Windows or Android

The app must be served from a secure HTTPS website to be installable and to enable offline support. Deploy this folder to a static HTTPS host (for example, GitHub Pages), then open the published address:

- **Windows:** In Microsoft Edge or Chrome, use the install icon in the address bar or the browser menu and choose **Install You Matter**.
- **Android:** In Chrome, tap the browser menu and choose **Install app** or **Add to Home screen**.

After the first online visit, the app shell and all three JSS 1 question-and-answer source files are cached for offline use. The full JSS 1 bank can then be loaded and played without internet. Profile registration emails and access requests still require a connection. Opening the local `index.html` file is only a preview; browser installation and service workers do not work from `file://` URLs.

## Features

- Science, Commercial, and Arts departments with subject-specific quizzes
- Available subjects include Mathematics, Integrated Science, English Language, Physics, Chemistry, Biology, Further Mathematics, Agricultural Science, Computer Studies / ICT, Geography, Economics, Commerce, Financial Accounting, Business Studies, Marketing, Office Practice, Literature in English, Government, History, Civic Education, and Religious Studies (CRS / IRS)
- Required candidate name, age, class, subject, and question-count details
- Question-bank track selector for WAEC, NECO, JAMB/UTME, GCSE, or Nigeria JSS 1; selected track is displayed in the quiz and saved locally with the participant profile
- Nigeria JSS 1 curriculum track with 100 Mathematics, 100 Basic Science, and 100 English Studies questions; each bank uses its numbered answer key and teaching explanations
- Every subject offers 20, 30, 40, or 50 questions; 100 is also available for the three complete JSS 1 banks
- Generated exam-specific Mathematics banks currently contain 150 original practice questions per WAEC, NECO, JAMB/UTME, and GCSE-style track; other subjects use built-in sample questions unless a rights-cleared subject bank is imported
- Dark high-contrast interface with navy, electric blue, and yellow accents
- Automatic countdown of 45 seconds per question actually included in the quiz (for example, 20 questions receive 15 minutes; 100 questions receive 75 minutes)
- Installable Progressive Web App (PWA) that precaches the app and JSS 1 banks for offline quiz access after the first online installation
- Shuffled questions, answer choices, progress indicator, and score
- Immediate right/wrong feedback with a brief explanation
- Class/age stage estimate shown separately from the participant-selected exam track
- Final percentage, score summary, and replay option
- Responsive layout, keyboard-friendly controls, and reduced-motion support
- A seven-day full-access trial starts with the learner's first quiz. After it expires, every selected round is capped at 18 questions; the subscription request appears after the capped round.
- Email-based profile recall and persistent local sign-in save learner details in the same browser/device; a global Sign out action is available from the quiz, setup, and results screens.
- With participant consent (and parent/guardian approval for participants under 18), the participant's name and email are sent to the administrator through FormSubmit on their first quiz. If automatic delivery fails, the page provides an email-app fallback.
- No external libraries or runtime dependencies

**Question-bank content status:** The three Nigeria JSS 1 sets are working drafts and should be checked against the applicable school scheme of work before formal assessment use. The WAEC, NECO, JAMB/UTME, and GCSE tracks continue to use their existing exam-style banks; other subjects continue to use built-in samples unless a rights-cleared subject bank is imported. The interface identifies which bank is connected.

## Exam question sources

The [exam-extractor](exam-extractor/README.md) folder provides a rights-cleared API/import pipeline, provenance and licence validation, and generation of the bank consumed by the quiz. It currently includes 150 original CC0 math practice questions for each WAEC-style, NECO-style, JAMB/UTME-style, and GCSE-style track. These are not copied official papers and are not yet teacher-verified against current syllabuses. It does not crawl AQA, Pearson Edexcel, or OCR past-paper pages: publicly viewable/downloadable papers are not automatically licensed for republication. See [the source review](exam-extractor/source-review.md). Until verified API documentation and content reuse terms are supplied for Alikho and the unnamed educational API, their provider entries remain configuration placeholders. No API credentials should be placed in the browser app.

## Subscription request and approval limits

Participant registration and the access request form submit through FormSubmit to adesanya.adegbemi@gmail.com and require an internet connection. The mailbox may need to be activated by confirming FormSubmit's first verification email. If participant registration delivery fails, the page offers a prefilled email-app fallback; if access-request delivery fails, its form also offers a fallback. Registration forwards only the participant's name and email. Payment instructions show Access Bank account 0065408200. Participants must send proof of payment to the email address; full access should be granted only after payment is confirmed and the request is approved.

This project is still a static front end. Requests can be emailed for manual review, but approval cannot securely synchronize back to a participant's device from email alone. Production approval, payment verification, password-protected sign-in, and cross-device access require a server-side service or payment/authentication provider. Profile details, quiz records, and the active sign-in session are stored only in the participant's browser. Email sign-in is local profile recall, not identity verification or secure authentication; participants using the same browser can access locally stored profiles, and clearing browser storage removes them. Browser-only trial controls can be altered and are not an enforcement mechanism for paid access. Obtain consent before collecting participant details; for minors, obtain parent/guardian approval and follow applicable privacy requirements.

## You Matter story updates

The You Matter page keeps its stories freely readable by all visitors. Stories are original page content in D2S.html. The site does not scrape or copy story text from Google; Google search results and book previews do not grant permission to republish copyrighted text. New stories should be original or supplied from a source with reuse rights.

Class/age stage is estimated from common formats such as Grade 6, Year 6, Class 6, JSS 1, or SSS 1. The participant chooses the target examination standard separately. Current question content still needs item-by-item review against the selected exam syllabus before it can be described as WAEC, NECO, JAMB/UTME, or GCSE standard.
