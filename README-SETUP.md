# Portfolio setup guide

## Run locally

Install Node.js LTS, then run:

```bash
npm install
npm run dev
```

Run a production build check:

```bash
npm run build
```

## Publish on GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Choose **GitHub Actions** under Build and deployment.
4. The workflow in `.github/workflows/deploy.yml` builds the Vite app and deploys the `dist` folder.
5. Check the **Actions** tab. After a successful deploy, the site URL should be:
   https://sachin2727p.github.io/sachin-devops-portfolio/

## Personalize

- Update the project cards in `src/main.jsx` with real project repository URLs and descriptions.
- Add a contact email by changing the `mailto:` link.
- Review skills so they accurately reflect your experience.
- Do not publish API keys, passwords, private employer source code, or customer data.
