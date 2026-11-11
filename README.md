# AppRo8 Week 3–4 — React Portfolio Website

A React portfolio built with Vite for the AppRo8 Frontend Development Internship Task 2.

## Requirements implemented
- React app bootstrapped with Vite
- Reusable Header, Hero, Projects, Skills, ContactForm and Footer components
- React Router routes: Home (`/`), Projects (`/projects`) and Contact (`/contact`)
- Projects stored in React state; add-project form appends projects to the current session
- Contact form validation for name, email and message; valid submission opens the visitor's email app
- Dark/light theme toggle persisted in localStorage
- Responsive desktop, tablet and mobile layouts

## Run locally
1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite.

## Build check
Run `npm run build` to create the production build in `dist/`.

## Before submitting
- Test all navigation routes.
- Test the theme toggle and refresh to confirm it remembers the selected theme.
- Add a sample project on the Projects page and refresh; note that this demo uses in-memory React state, so additions reset on page refresh.
- Test contact validation with empty and invalid values.
- Check mobile layout.
- Confirm project URLs and personal contact details.

## GitHub repository
Suggested repository name: `AppRo8_React_Portfolio`.

## Notes
This is a frontend-only contact form. It validates the fields and opens the user's email application; it does not store or send messages to a backend service. The project descriptions are presented as personal/concept work, not client commissions.
