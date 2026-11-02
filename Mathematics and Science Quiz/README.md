# Distinct Youngsters — School Subject Quiz

A responsive, accessible, installable web app for curious minds, built with plain HTML, CSS, and JavaScript. Enter a name, age, and class; choose a Science, Commercial, or Arts department and one of its listed subjects. Quiz difficulty is estimated from age and common class/year formats. Choose a 20, 30, 40, or 50-question round and a 30–150 minute time limit. Answers receive instant explanations, with a percentage score at the end. Reflection pathways and their free four-page stories are on the separate You Matter page, D2S.html.

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
- Every subject offers 20, 30, 40, or 50 questions
- Mathematics and Integrated Science have 60 unique questions; other subject banks have 20 unique questions and repeat questions for longer rounds
- Dark high-contrast interface with navy, electric blue, and yellow accents
- Adjustable 30, 60, 90, 120, or 150-minute countdown
- Installable Progressive Web App (PWA) with offline quiz access after first visit
- Shuffled questions, answer choices, progress indicator, and score
- Immediate right/wrong feedback with a brief explanation
- Age/class-based easy, standard, or advanced question selection and progression
- Final percentage, score summary, and replay option
- Responsive layout, keyboard-friendly controls, and reduced-motion support
- After 20 trial questions per email, a subscription request asks for country, contact details, account type (Individual, School, or Organization), and plan ($1 weekly or $5 monthly)
- No external libraries or runtime dependencies

## Subscription request and approval limits

The access request form submits to FormSubmit at adesanya.adegbemi@gmail.com and requires an internet connection. The mailbox may need to be activated by confirming FormSubmit's first verification email. If automatic delivery fails, the submit action offers a prefilled email-app fallback. Payment instructions show Access Bank account 0065408200. Participants must send proof of payment to the email address; full access should be granted only after payment is confirmed and the request is approved.

This project is still a static front end. Requests can be emailed for manual review, but approval cannot securely synchronize back to a participant's device from email alone. Production approval, payment verification, and cross-device access require a server-side service or payment/authentication provider. Quiz records and the trial counter are stored only in the participant's browser.

## You Matter story updates

The You Matter page keeps its stories freely readable by all visitors. Stories are original page content in D2S.html. The site does not scrape or copy story text from Google; Google search results and book previews do not grant permission to republish copyrighted text. New stories should be original or supplied from a source with reuse rights.

Difficulty is estimated from age and common class formats such as Grade 6, Year 6, Class 6, JSS 1, or SSS 1. If a class format is not recognized, the age is used as the estimate.
