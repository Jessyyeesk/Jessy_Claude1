# PPSY: Escape the Psych Clinic

A comedy escape-room learning game for **Introduction to Psychology (Foundation)**.
Topic: Abnormal Psychology. Outcome: differentiate major depressive disorder, bipolar disorder (mood disorders) and schizophrenia.
Plain HTML, CSS and JavaScript. No backend, no installation, no build step.

## Files
```
ppsy/
├── index.html   (page structure: home, instructions, game, results)
├── style.css    (all styling and layout)
├── script.js    (game logic + editable QUESTION BANK at the top)
└── README.md
```
All graphics are emoji and CSS, so there are no image files.

## How it plays
5 rooms. In each room, inspect 2 objects (clues), then try the door and answer a scenario question (forced choice). Wrong answers explain the mistake and let the student try again. Scoring is accuracy only: 20 / 10 / 5 points for 1st / 2nd / 3rd+ try. The 10-minute clock is optional ("Untimed mode") and never affects the score. The last room uses new cases to check understanding.

Controls: mouse or touch; keyboard `1`-`3` to inspect objects and the door, `1`-`4` to answer, `Esc` closes a clue, `Tab` / `Enter` also work.

## Test locally
Double-click `index.html` to open it in a browser. Nothing else is needed.

## Upload to GitHub and publish with GitHub Pages
1. Sign in at github.com and click **New repository**. Name it (for example `ppsy`), keep it **Public**, and click **Create repository**.
2. Click **uploading an existing file**, drag in `index.html`, `style.css`, `script.js` and `README.md` (the files themselves, not a folder around them), then **Commit changes**.
3. Go to **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, choose branch **main** and folder **/ (root)**, and click **Save**.
4. Wait 1-2 minutes. Your game will be at `https://YOUR-USERNAME.github.io/ppsy/`. Share that link with students.

All file paths are relative, so it works under the `/ppsy/` project address.

## Edit the questions
Open `script.js` and edit the block labelled **QUESTION BANK** at the top. Each room has: `room`, `theme` (2 colours), `intro`, `objects` (clues), `scenario`, `options` (each with `text` and `why`), `answer` (position of the correct option, counting from 0) and `summary`. Keep exactly 2 objects per room (the keys 1-3 map to objects and door), and 2-4 options per question. If you add or remove rooms, the score total and progress bar update automatically. Re-upload `script.js` to GitHub afterwards.

## Manual testing checklist
- [ ] Home: Play, How to play, and the untimed checkbox work.
- [ ] Instructions: Play and Back to home work.
- [ ] Door says to inspect all objects first if tried early.
- [ ] After both clues, the door opens the question; options are shuffled each play.
- [ ] Wrong answer: option is struck out, explanation shows, you can try again.
- [ ] Correct answer: points added once (click it repeatedly, score should not change), Continue appears.
- [ ] Keys 1-4 and Esc work; Tab and Enter work.
- [ ] Final room leads to the results page with the score and explanations.
- [ ] Restart, Home, Play again work.
- [ ] Check on a phone-width window (around 375 px) and a desktop window.
