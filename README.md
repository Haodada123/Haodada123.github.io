# Hao Nie — Academic Homepage

A static English academic homepage prepared for GitHub Pages.

## Deploy on GitHub Pages

1. Create a repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Upload **all files and folders in this directory** to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then save.
6. Your site will appear at `https://YOUR_GITHUB_USERNAME.github.io/`.

No build step is required.

## Update the site

- Main content: `index.html`
- Design: `styles.css`
- Small interactions: `script.js`
- Portrait: `assets/profile.jpg`

### Important checks before publishing

- The site currently uses `nie@hust.edu.cn`, which is the email in the newer academic form supplied for this draft. If you prefer another address, replace it in `index.html`.
- The Google Scholar button points to: `https://scholar.google.com/citations?user=cpetpmUAAAAJ&hl=en`.
- Citation counts / h-index are intentionally not hard-coded because they change over time.
- Personal phone number, date of birth, ID number, hometown, and other private profile fields from the supplied forms are intentionally **not** included on the public website.

## Optional custom domain

If you later buy a domain, add a file named `CNAME` containing only your domain, e.g.:

```text
hao-nie.com
```

Then configure the corresponding DNS records with your domain provider and enable the custom domain in GitHub Pages settings.
