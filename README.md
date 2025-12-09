# Notes Manager

A tiny page to jot down notes that stay in your browser.

## How it works
- Type a note and press **Add**.
- Notes stay saved even after you refresh (they live in `localStorage`).
- Delete one note with its **Delete** button, or clear them all with **Clear all**.
- The page auto-loads your saved notes on open.

## Run it
Open `index.html` in a browser. Everything runs locally—no setup needed. If your browser blocks module scripts from the file system, start a tiny server instead: `npx serve .` (or `python -m http.server`) and open the shown URL.
