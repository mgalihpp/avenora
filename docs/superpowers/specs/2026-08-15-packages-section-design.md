# Packages Section Design

## Goal

Add the "Our Packages" section after the Destinations section, matching the Avenora Webflow reference (values extracted from `avenora.webflow.shared.b8240b304.css` and the published HTML).

## Reference Facts (extracted)

- Section: `section.black` -> background `--_color---black-pearl: #020e26`; vertical spacer `8rem` above and below (`--_spacing---space-8-small` base).
- Container `82rem`, padding `1rem`.
- Title block (centered, `overflow: hidden`): badge pill (`padding .5rem 1rem`, `border-radius 999px`, translucent white bg `#ffffff0f`), then heading `"Curated Travel Packages With Room for Personal Details."` (`section-heading center`: Arial fallback via site's `microsoft-sans`, `3.75rem`, `line-height 1em`, weight 400, `letter-spacing -0.17rem`, white, `max-width 49.625rem`), then paragraph `"Choose from carefully designed journey ideas, then customize the pace, destination, hotel style, activities, and special moments around your preferences."` (Inter Tight `1rem`, `line-height 1.4em`, white 60%, `max-width 37.1875rem`).
- Cards grid: `grid-template-columns: 1fr 1fr`, gap `1.25rem`; single column below `991px`.
- Card (`package-card`): row layout, `background #101a2d` (mirage), radius `1.75rem` (border-1-large base), padding `0.5rem 1rem 0.5rem 0.5rem`, gap `2rem`, white text; image wrapper radius `1.5rem`, `max-width 17.875rem`, overflow hidden, image `object-fit: cover`; below `991px` image `max-height 18rem`, `max-width none`; below `767px` content grid `1fr 1.1fr`, arrow circle becomes absolute `top .7rem right .7rem`; below `479px` single column, image `max-height 13rem`.
- Card content (column): title (`font-1-medium`: Arial, `1.5rem`, `line-height 1.2em`, weight 400, `letter-spacing -0.05rem`, white, `max-width 12.1875rem`); description (Inter Tight `1rem` white 60%); bottom row `space-between`: price `"From $2,400"` (Inter Tight `1rem`, medium 500, white, `text-decoration: underline`) + review `"5.00 (589)"` with filled star `1.25rem`; arrow circle `2.487rem`, bg `#020e26`, white arrow `1.20581rem` (inner wrapper `overflow: hidden`). A `.demo` element with "Explore Beautiful Destinations" is `display: none` in the reference -> omit.
- All 4 cards: same description, price `From $2,400`, rating `5.00 (589)`. Titles: `7-Day Bali Wellness Journey` (image 134), `Maldives Honeymoon Stay` (133), `Morocco Desert Experience` (135), `Thailand Bali Wellness Journey` (137); images from `cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/`.
- CTA: centered primary-button pill (white, radius `999px`, semibold text + blue arrow circle) labeled `Explore Packages`.
- Animation: Webflow IX2 hides `.package-card`, `.package-title-wrapper`, `.package-icon-wrapper`, `.package-bottom`, `.package-button-wrapper`, `.package-image`, `.package-icon` until JS-ready; cards reveal on scroll.

## Implementation Notes

- Same architecture as previous sections: server-rendered `packages.tsx` + client `packages-animation.tsx` scoped wrapper, `gsap.context()` cleanup, reduced-motion handling, hero-style CSS gating (`html.hero-js:not(.packages-anim-ready)`).
- Reuse `ArrowButton` and the reference Arial class (`reference-card-title`) for the CTA and card titles.
- Add `id="packages"` to the section and `id="destinations"` to the destinations section so existing `#packages` / `#destinations` anchors resolve.
- Card links point to `#packages` (no package pages exist in this project).

## Verification

- Biome lint and production build pass.
- Desktop: 2x2 card grid, dark background, heading block, CTA centered.
- Mobile: cards stack, arrow circle floats top-right below `767px`.
- Reduced motion: all content visible, no animation.
