# WebsiteStudioz

A static business website built with HTML, CSS and JavaScript. It has no build step or required package installation.

## Project files

- `index.html` — page content and metadata
- `styles.css` — layout and styling
- `script.js` — package cards, navigation and enquiry form behavior
- `favicon.svg` — matching browser-tab icon

## Review locally

Open `index.html` in a browser. The Google Fonts connection needs internet access; system font fallbacks are used when the fonts cannot load. The enquiry form opens the visitor’s email app with a prepared message and a blank recipient. The visitor must enter the business email address and send it; this site does not store or deliver submissions. To prefill a recipient automatically, update the `mailto:` URL in `script.js` before launch.

## Deploy

### Netlify from GitHub

Connect this repository to Netlify. Use the repository root as the publish directory and leave the build command empty. Netlify can publish changes automatically when you push to the connected branch.

### Hostinger

Upload the project files to the website’s document root, usually `public_html`, using Hostinger File Manager or FTP. Keep `index.html`, `styles.css`, `script.js` and `favicon.svg` together in that folder.

## Updating package details

Package names, prices and inclusions are in the `packages` array near the top of `script.js`.

