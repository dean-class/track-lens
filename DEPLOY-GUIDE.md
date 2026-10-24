# Publishing Track Lens to GitHub Pages

**Target:** `https://github.com/dean-class/track-lens` (public repository) → `https://dean-class.github.io/track-lens/` after Pages is enabled and deployed.

1. Sign in to the GitHub account `dean-class` and create a **public** repository named `track-lens` at https://github.com/new. Set default branch to `main`; do not pre-populate with a README (this package includes one).
2. Download the `track-lens-github-upload-v0.8.2.zip` package and **extract it**. Do not upload the outer ZIP alone.
3. In the repository, select **uploading an existing file** or **Add file → Upload files** and drag the **contents** of the extracted folder, including `index.html`, `style.css`, `site.js`, `assets`, `downloads`, `.github`, `.nojekyll`, and `README.md`. Keep the directory structure intact. Commit to `main`.
4. Open **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: / (root)** and click **Save**.
5. Open `https://dean-class.github.io/track-lens/` after GitHub shows it is live. Check the ZIP link, dark/light preview, guide, privacy, changelog and Issues form.
6. Share the URL with your DJ mates. Unpacked Chrome extensions must be updated manually; see the website guide.

**If browser upload drops hidden folders/files:** Use a local git push instead, or enable show hidden files. `.github` enables the Issues forms; `.nojekyll` is optional for this simple website but included.

**Privacy:** GitHub Pages and repository files will be publicly accessible. There are no API tokens or user library exports in the package. Use GitHub Issues for public, non-sensitive feedback only.

**Not yet live:** This document describes a proposed destination. Do not share the URL until the Pages deployment has succeeded.
