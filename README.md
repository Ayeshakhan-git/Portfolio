# Ayesha Khan — Portfolio

Plain HTML/CSS/JS portfolio. No build step, no dependencies — just open `index.html` in a browser, or deploy it straight to Vercel.

## Files
- `index.html` — page structure & content
- `style.css` — all styling (mustard + white theme)
- `script.js` — mobile menu, active-tab highlight, scroll reveal
- `images/` — put your screenshots here

## Things to update before sending this out

1. **Contact info** — in `index.html`, find the `contact.sh` terminal block and replace:
   - `your.email@example.com`
   - `github.com/your-username`
   - `linkedin.com/in/your-profile`

2. **Project & design images** — drop image files into `images/` with these exact names (or change the `src` in `index.html` to match your filenames):
   - `images/crew-project.jpg`
   - `images/bank-management.jpg`
   - `images/figma-ui.jpg`
   - `images/canva-product.jpg`
   
   Until an image is added, that spot shows a clean placeholder pattern instead of a broken image — so the site still looks finished.

3. **Project descriptions** — the Crew Project text is a generic placeholder since exact details weren't provided. Search `index.html` for "PROJECT 1 — CREW PROJECT" and edit the paragraph + tag list to match the real project.

4. **Third design piece** — the "More on the way" card in the Design section is ready for whatever you add next. Duplicate one of the two filled design-cards above it and fill in the details when ready.

5. **Project links** — the "View project →" links currently point to `#`. Point them at GitHub repos, live demos, or case studies once you have them.

## Deploying to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into Vercel's dashboard).
2. In Vercel: **New Project → Import** your repo.
3. Framework preset: choose **Other** (it's a static site, no build command needed).
4. Deploy. Vercel will give you a live URL you can share with the company.

No environment variables, no backend, nothing else to configure.
