# AnyDesk Concept Website

A responsive, two-page website inspired by AnyDesk, built with HTML, CSS, and JavaScript. The site presents a remote-access product concept and lets visitors personalize its appearance.

## Features

- Home page with connected-device illustrations, feature cards, and a sample connection ID.
- Personalization page with separate app theme and logo color controls.
- Color presets and custom color pickers with instant updates.
- Saved color preferences using the browser's localStorage.
- Responsive layout and collapsible mobile navigation.
- Copy ID button with success and error feedback.
- Transparent PNG and SVG logo assets.

## Getting started

Open `index.html` in a modern browser. No installation, build step, or backend is required.

For consistent browser storage and clipboard behavior, serve the project using a local web server, such as an editor's Live Server extension. Clipboard access may require localhost or HTTPS and browser permission.

Google Fonts supplies DM Sans and Manrope, so an internet connection is needed to load those fonts. The site uses fallback fonts when they are unavailable.

## Project structure

```text
ProjektnaNaloga2/
|-- index.html                 # Home page
|-- custom.html                # Personalization page
|-- images/
|   |-- anydesk_bezier.svg     # Vector logo source and phone logo
|   `-- anydesk_logo.png       # Transparent logo used on the home page
|-- scripts/
|   `-- script.js              # Colors, saved preferences, navigation, clipboard
|-- styles/
|   `-- style.css              # Shared styling and responsive layouts
`-- README.md
```

## Personalizing the website

1. Open **Personalize** from the navigation.
2. Choose an **App theme** preset or use its color picker.
3. Choose a **Logo color** preset or use its color picker.
4. Return to the home page to see the saved app theme.

Preferences are saved automatically in the current browser under `anydesk-personal-colors`. They are shared between the pages when both are served from the same origin. Clearing the site's browser storage restores the default colors (`#F04438`).

All five logos on `custom.html` use inline SVG geometry from `images/anydesk_bezier.svg`. Their paths use `currentColor`, and the `.brand-mark` style uses `--logo-color`, allowing the logo controls to recolor them immediately.

The home page uses the SVG file for the phone logo and PNG images for the other logos. These external image files keep their original logo color. The connection strip uses a darker blend of the selected theme color.

## Editing the project

- Edit page content in `index.html` and `custom.html`.
- Adjust colors, spacing, and responsive layouts in `styles/style.css`.
- Change interactive behavior and default colors in `scripts/script.js`.
- Keep image paths relative to the HTML files.
- When changing the SVG geometry, update the inline SVG copies in `custom.html` as well as the source asset.

## Scope

This is a frontend concept project. The connection ID and connected-device visuals are demonstrations; the website does not establish remote sessions or provide an actual AnyDesk download. AnyDesk branding belongs to its respective owner.
