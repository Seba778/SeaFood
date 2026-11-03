# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A one-page static website for Seafood Shack, a seafood restaurant with 3 locations: Northwest Hwy and Webb Chapel in Dallas, and Mesquite, TX. It is built with Vite and vanilla JS, with no framework. The client's goals for the site are menu, location, contact and good photos. Project notes are written in Spanish; the site's UI is bilingual (EN/ES).

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: static build into `dist/`
- `npm run preview`: serve `dist/` on port 4173
- `npm run images`: regenerate optimized WebP images from `source/` into `public/img/` (uses sharp)

There are no tests or linter.

## Architecture

- `src/data.js` is the single source of truth for all content: locations, phones, hours, daily specials, favorites and the full menu. Price or dish changes go here, not in the HTML.
- `src/main.js` renders every dynamic section from `data.js` into empty containers in `index.html` (`#favorites`, `#specialsGrid`, `#menuBody`, `#locList`, etc.). A language change re-renders everything (`renderAll`). A location change only re-renders the menu and calls `markActiveLoc()`; it does not rebuild the location cards, so their map iframes don't reload.
- Menu UI: the menu is a set of tabs. `#catNav` holds `role="tab"` buttons (`CAT_IDS`). The default tab, `'all'` ("Full menu"), lists every category on the landing page in 2 columns. Any other tab shows only that category (`catId`, `setCat()`, `renderCategory()`, and the `.menu__body--single` class). Any element with `data-cat-link="<catId>"` opens that tab; the specials section uses this for the lunch banner. Don't use `#cat-*` anchor links. The location picker is a `role="radio"` group. Left/right arrow keys work in both.
- Locations: each location card embeds its own Google Maps iframe (`mapSrc()`). The "See its menu" button (`data-see-menu`) selects that location and scrolls to the menu.
- i18n: UI strings live in the `STR` dictionary in `main.js`. Static elements in `index.html` are tagged `data-i18n` / `data-i18n-html`. Content objects in `data.js` use `{ en, es }` pairs, resolved with `L()`. Menu item names and descriptions stay as printed on the restaurant's menu and are not translated.
- Per-location menu differences are declared on menu items:
  - `only: [locId]` shows an item only at those locations.
  - `replace: { locId: {...} }` swaps an item's fields at a location.
  - The selected location is stored in `localStorage` under `ss-loc`. The language is stored under `ss-lang`.
- "Open now" status and the "today" special are computed in `America/Chicago` time from `HOURS`, which apply to all locations.
- `schema.org/Restaurant` JSON-LD is generated at runtime from `LOCATIONS` and `HOURS`.

## Assets

- `source/` holds the original client files (gitignored; ~150 MB):
  - `menu/`: printed menus, 2 sides per location
  - `fotos/`: interior shots
  - `logo/`
  - `platillos/`: dish photos cropped out of the printed menus
- `public/img/` holds the generated, web-sized WebP files referenced by the site. They follow the naming pattern `<name>-<width>.webp`. Add any new width to both `scripts/optimize-images.mjs` and the `srcset` strings in `main.js`/`index.html`.
- The original material came from the client's Google Drive folders, which are linked in the project brief.
- The brand palette comes from the logo: navy text, plus aqua / royal blue / yellow tiles. The palette is defined as CSS variables at the top of `src/style.css`. Fonts are Lilita One for display text and Figtree for body text. The yellow brush-style headings mimic the printed menu. The client turned down a "luxury" restyle (serif fonts, gold, sharp corners) in favor of this playful look.
