# Distinct Youngsters — School Subject Quiz

A responsive, accessible, installable web app for curious minds, built with plain HTML, CSS, and JavaScript. Enter a name, age, and class; choose a Science, Commercial, or Arts department and one of its listed subjects. Quiz difficulty is estimated from age and common class/year formats. Choose an available question count and a 30–150 minute time limit. Answers receive instant explanations, with a percentage score at the end.

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
- Every subject offers 20, 30, 40, 50, or 60 questions
- Mathematics and Integrated Science have 60 unique questions; other subject banks have 20 unique questions and repeat questions for longer rounds
- Dark high-contrast interface with navy, electric blue, and yellow accents
- Adjustable 30, 60, 90, 120, or 150-minute countdown
- Installable Progressive Web App (PWA) with offline quiz access after first visit
- Shuffled questions, answer choices, progress indicator, and score
- Immediate right/wrong feedback with a brief explanation
- Age/class-based easy, standard, or advanced question selection and progression
- Final percentage, score summary, and replay option
- Responsive layout, keyboard-friendly controls, and reduced-motion support
- No external libraries or runtime dependencies

Difficulty is estimated from age and common class formats such as Grade 6, Year 6, Class 6, JSS 1, or SSS 1. If a class format is not recognized, the age is used as the estimate.
