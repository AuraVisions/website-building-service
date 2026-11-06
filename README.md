# Website Studio

A responsive static website for a professional website-building service. It uses plain HTML, CSS and JavaScript, with no build step or required package installation.

## Deploy

All three options publish the files in this folder as-is. Keep `index.html`, `styles.css` and `script.js` together at the published site root.

### Hostinger

Upload the contents of this folder to the website's document root (usually `public_html`) using Hostinger File Manager or FTP. Make sure `index.html` is directly in that root folder.

### GitHub Pages

Commit these files to the repository root, then enable Pages in the repository's Pages settings and publish from the chosen branch and `/ (root)`. This is a static site and does not need a GitHub Actions build workflow. A custom domain can be connected through the Pages settings.

### Netlify

Drag this folder into Netlify Drop, or connect the repository. For a repository deployment, use the repository root as the publish directory and leave the build command empty. No Netlify-specific configuration is required.

## Editable project details

- Edit package names, USD prices and included features in `script.js` in the `packages` array. Prices and unconfirmed package details are marked as placeholders.
- Replace contact information and business details in `index.html` when confirmed.
- The enquiry form currently validates name and email, then opens the visitor's email app with a prefilled message and a blank recipient. The visitor must add the correct recipient and send it. The form is not connected to a backend and does not store or deliver submissions.
- Confirm package page counts, features, revision rounds, launch support, prices, domain and hosting arrangements, and ongoing maintenance and update costs before publishing final commercial details.

The Google Fonts link in `index.html` is optional. If the font service is unavailable, the page falls back to system fonts.
