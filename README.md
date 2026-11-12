# WebsiteStudioz

A static business website built with HTML, CSS and JavaScript. It has no build step or required package installation.

## Project files

- `index.html` — page content and metadata
- `styles.css` — layout and styling
- `script.js` — package cards, navigation and enquiry form behavior
- `favicon.svg` — matching browser-tab icon

## Review locally

Open `index.html` in a browser. The Google Fonts connection needs internet access; system font fallbacks are used when the fonts cannot load. The enquiry form uses Netlify Forms and submits to the site’s Netlify form handler when deployed.

## Deploy

### Netlify from GitHub

Connect this repository to Netlify. Use the repository root as the publish directory and leave the build command empty. Enable form detection in the Netlify dashboard and configure email notifications there if enquiries should be emailed. Netlify can publish changes automatically when you push to the connected branch.

### Hostinger

Upload the project files to the website’s document root (usually `public_html`) using Hostinger File Manager or FTP. Keep `index.html`, `styles.css`, `script.js` and `favicon.svg` together in that folder.

## Updating package details

Package names, prices and inclusions are in the `packages` array near the top of `script.js`.

