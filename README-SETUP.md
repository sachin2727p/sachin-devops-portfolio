# Setup and deployment guide

## 1. Install prerequisites
- Install Node.js LTS from https://nodejs.org/
- Install Git from https://git-scm.com/
- Create or sign in to a GitHub account at https://github.com/

## 2. Run the website locally
Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

Build-check before publishing:

```bash
npm run build
```

## 3. Personalize the site
In `src/main.jsx`, replace every `YOUR_USERNAME` with your GitHub username and `YOUR_EMAIL` with a public contact email you want to use. Update project repository links to real repositories you own. Remove any project card that does not represent work you can demonstrate. Update the skills list so it accurately reflects your experience.

## 4. Create the GitHub repositories
Recommended:
- `YOUR_USERNAME/YOUR_USERNAME` — GitHub profile README. The repository name must exactly match your GitHub username and be public.
- `portfolio-website` — this React/Vite website.

For the profile README, copy the content from the root `README.md` into the README file of the username-matching repository. You can keep this starter repository as a separate project or rename it.

## 5. Push the website to GitHub
Create an empty public repository named `portfolio-website` on GitHub. Do not initialize it with another README if you are pushing this folder as-is. Then, in this folder's terminal:

```bash
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual username. If `git remote add origin` says the remote already exists, use `git remote -v` to inspect it; use `git remote set-url origin https://github.com/YOUR_USERNAME/portfolio-website.git` only if you need to correct it.

## 6. Deploy on GitHub Pages
1. Open the `portfolio-website` repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Add the workflow below as `.github/workflows/deploy.yml`, commit and push.
5. Open the **Actions** tab and wait for the workflow to complete.
6. Your site should be available at `https://YOUR_USERNAME.github.io/portfolio-website/`.

If using a different repository name, change the `base` value in `vite.config.js` to `'/YOUR_REPOSITORY_NAME/'`. If using a custom domain, configure the domain and DNS in GitHub Pages settings and follow GitHub's current DNS instructions.

## 7. Keep your profile professional
- Never commit API keys, passwords, private keys, `.env` files, customer information, or employer-owned code.
- Add a short README to every project: purpose, architecture, prerequisites, setup, screenshots, tests, and cleanup instructions.
- For cloud demos, use a test account and set budgets/alerts; destroy billable resources when finished.
- Use honest claims. Label tutorial/sample projects as demos until you have completed and tested them.
