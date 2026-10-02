# Harshavarthan Venkatesan — Portfolio

Rebuilt source for harshavarathanportfolio.netlify.app.
Stack: React 19 + Vite + Tailwind CSS 3 + Framer Motion + Lucide icons.

## First-time setup

```bash
npm install
npm run fetch-assets   # downloads images + resume/certificate PDFs from the old live site into /public
npm run dev            # open http://localhost:5173
```

## Editing content

All text lives in `src/data/`, so you rarely need to touch the components:

- `projects.js` – Selected Works cards and case-study popups
- `recognitions.js` – Global Impact section
- `credentials.js` – Credentials & Honors
- `gallery.js` – Visual Archive images
- `skills.jsx` – Technical Capabilities and Languages

Images go in `public/images/`, and `resume.pdf` goes in `public/`.

## Deploy to Netlify

Option A (drag & drop): `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop

Option B (recommended): push this folder to GitHub, then in Netlify choose
"Add new site → Import from Git". `netlify.toml` already sets the build command and output folder.
Every push then redeploys automatically, and your source code is always safe on GitHub.
