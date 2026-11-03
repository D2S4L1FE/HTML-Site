# Distinct Youngsters — School Subject Quiz

A responsive, accessible, installable web app for curious minds, built with plain HTML, CSS, and JavaScript. Create a learner profile with name, age, class, and email; the same browser keeps the learner signed in until they choose **Sign out**, and restores their details after reload. Choose a target exam (WAEC, NECO, JAMB/UTME, or GCSE), a Science, Commercial, or Arts department, and a subject. Choose 20, 30, 40, or 50 questions and a 30–150 minute time limit. During the first seven days after the first quiz, the selected round is available in full. After the trial, a selected round is limited to 18 questions; a full-access request appears after that capped round. Answers receive instant explanations, with a percentage score at the end. Reflection pathways and their free four-page stories are on the separate You Matter page, D2S.html.

## Run locally

For a quick preview, open `index.html` in a modern web browser. No build step or package installation is needed.

## Install on Windows or Android

The app must be served from a secure HTTPS website to be installable and to enable offline support. Deploy this folder to a static HTTPS host (for example, GitHub Pages), then open the published address:

- **Windows:** In Microsoft Edge or Chrome, use the install icon in the address bar or the browser menu and choose **Install Distinct Youngsters**.
- **Android:** In Chrome, tap the browser menu and choose **Install app** or **Add to Home screen**.

After the first online visit, the quiz shell and questions are cached for offline use. Opening the local `index.html` file is only a preview; browser installation and service workers do not work from `file://` URLs.

## Features

- Science, Commercial, and Arts departments with subject-specific quizzes
- Available subjects include Mathematics, Integrated Science, English Language, Physics, Chemistry, Biology, Further Mathematics, Agricultural Science, Computer Studies / ICT, Geography, Economics, Commerce, Financial Accounting, Business Studies, Marketing, Office Practice, Literature in English, Government, History, Civic Education, and Religious Studies (CRS / IRS)
- Required candidate name, age, class, subject, and question-count details
- Target exam selector for WAEC, NECO, JAMB/UTME, or GCSE; selected track is displayed in the quiz and saved locally with the participant profile
- Every subject offers 20, 30, 40, or 50 questions
- Mathematics and Integrated Science have 60 unique questions; other subject banks have 20 unique questions and repeat questions for longer rounds
- Dark high-contrast interface with navy, electric blue, and yellow accents
- Adjustable 30, 60, 90, 120, or 150-minute countdown
- Installable Progressive Web App (PWA) with offline quiz access after first visit
- Shuffled questions, answer choices, progress indicator, and score
- Immediate right/wrong feedback with a brief explanation
- Class/age stage estimate shown separately from the participant-selected exam track
- Final percentage, score summary, and replay option
- Responsive layout, keyboard-friendly controls, and reduced-motion support
- A seven-day full-access trial starts with the learner's first quiz. After it expires, each selected 20-, 30-, 40-, or 50-question round is capped at 18 questions; the subscription request appears after the capped round.
- Email-based profile recall and persistent local sign-in save learner details in the same browser/device; a global Sign out action is available from the quiz, setup, and results screens.
- With participant consent (and parent/guardian approval for participants under 18), the participant's name and email are sent to the administrator through FormSubmit on their first quiz. If automatic delivery fails, the page provides an email-app fallback.
- No external libraries or runtime dependencies

**Exam-standard content status:** The selector labels the requested examination track, but the current in-app subject banks are small, general sample sets and have not yet been individually validated or rewritten to WAEC, NECO, JAMB/UTME, or GCSE syllabuses. The interface flags this on the subject setup. Do not treat the current samples as a complete exam-preparation bank until subject-specific content is expanded and reviewed against current specifications.

## Subscription request and approval limits

Participant registration and the access request form submit through FormSubmit to adesanya.adegbemi@gmail.com and require an internet connection. The mailbox may need to be activated by confirming FormSubmit's first verification email. If participant registration delivery fails, the page offers a prefilled email-app fallback; if access-request delivery fails, its form also offers a fallback. Registration forwards only the participant's name and email. Payment instructions show Access Bank account 0065408200. Participants must send proof of payment to the email address; full access should be granted only after payment is confirmed and the request is approved.

This project is still a static front end. Requests can be emailed for manual review, but approval cannot securely synchronize back to a participant's device from email alone. Production approval, payment verification, password-protected sign-in, and cross-device access require a server-side service or payment/authentication provider. Profile details, quiz records, and the active sign-in session are stored only in the participant's browser. Email sign-in is local profile recall, not identity verification or secure authentication; participants using the same browser can access locally stored profiles, and clearing browser storage removes them. Browser-only trial controls can be altered and are not an enforcement mechanism for paid access. Obtain consent before collecting participant details; for minors, obtain parent/guardian approval and follow applicable privacy requirements.

## You Matter story updates

The You Matter page keeps its stories freely readable by all visitors. Stories are original page content in D2S.html. The site does not scrape or copy story text from Google; Google search results and book previews do not grant permission to republish copyrighted text. New stories should be original or supplied from a source with reuse rights.

Class/age stage is estimated from common formats such as Grade 6, Year 6, Class 6, JSS 1, or SSS 1. The participant chooses the target examination standard separately. Current question content still needs item-by-item review against the selected exam syllabus before it can be described as WAEC, NECO, JAMB/UTME, or GCSE standard.
