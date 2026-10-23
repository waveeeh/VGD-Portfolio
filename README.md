# TESDA Portfolio — React + Vite

A responsive, multi-page portfolio starter inspired by the supplied Figma screenshots.

## Requirements
- Node.js (LTS)
- VS Code

## Run locally
1. Extract the ZIP.
2. Open the extracted `tesda-portfolio-react-vite` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Pages
- `/` — Home
- `/about` — résumé / education / training / experience
- `/projects` — project categories
- `/projects/logo-design`
- `/projects/print-media`
- `/projects/booth-design`
- `/projects/product-packaging`
- `/projects/ui-design`
- `/projects/ux-design`
- `/projects/closure`
- `/projects/continuation`
- `/projects/similarity`
- `/projects/proximity`
- `/projects/symmetry`
- `/projects/figure-ground`
- `/projects/periodicals-and-news`
- `/projects/literature-and-publications`
- `/projects/marketing-and-promotional-materials`
- `/projects/outdoor-and-display-print-media`

## Customize
- Replace bracketed placeholder text in `src/data/portfolio.js`.
- Replace the image placeholders by adding your own image files to `public/images` and updating `image` values in `src/data/portfolio.js`.
- Add your actual portrait, TESDA ARC, and certificate images only if you have permission to use them. The default page clearly labels these as placeholders.
- Update the browser title in `index.html`.

## Production build
```bash
npm run build
npm run preview
```

## Publish to GitHub and Vercel
1. Create a GitHub repository.
2. In VS Code terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Create TESDA portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPOSITORY_URL
   git push -u origin main
   ```
3. Sign in to Vercel and choose **Add New → Project**.
4. Import your GitHub repository.
5. Vercel should detect Vite automatically. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click **Deploy**.

The included `vercel.json` enables client-side routes to resolve on refresh.

## Notes
Sample project artwork is generated with CSS and is not presented as real client work. Replace it with your own work before sharing publicly.
