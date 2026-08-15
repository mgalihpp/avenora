# Destinations Section Design

## Goal

Add the "Destinations For Unforgettable Journeys." section after the Travora intro, matching the Avenora Webflow reference (markup + CSS values extracted from `avenora.webflow.shared.b8240b304.css` and the published HTML).

## Reference Facts (extracted)

- Page `body` background is `--_color---proclein: #ecf2f6`; sections have no own background.
- Container max-width `82rem`, horizontal padding `1rem`.
- Layout: `sticky-wrap` height `400vh` > `destination-main` (`position: sticky; top: 0`, flex, `justify-content: space-between`, gap `3rem`) with three columns: heading, card list, place list.
- Heading: Arial (site's `microsoft-sans` custom font fails to load, falls back to Arial), `3.75rem`, `line-height: 1em`, `font-weight: 400`, `letter-spacing: -0.17rem`, color `#030505` (night). Top spacer `8rem` (base `--_spacing---space-8-small`).
- Card list wrapper: `max-width: 27.9375rem`, `max-height: 65.625rem`, `overflow: hidden`, gap `1.5rem`, with two `10rem` gradient overlays fading to `#ecf2f6` (top and bottom).
- Card: white bg, radius `2rem`, padding `0.75rem 0.75rem 1rem`, inner gap `1.75rem`; image wrapper radius `2rem`, `max-width: 26.6rem`, image `object-fit: cover`; content row `justify-content: space-between; align-items: flex-end`, `padding-left: 1.25rem`.
- Rating: star icon `1rem` color night + text `4.5` (Inter Tight `1rem`, opacity `.6`).
- Card name: Arial, `1.75rem`, weight 400, `line-height 1.2em`, `letter-spacing: -0.05rem`, color `#030505`.
- Location: pin icon `1.30956rem` + Inter Tight `1.125rem`, weight 500, `line-height 1.4em`, color black.
- Arrow button: circle `3.60131rem`, radius `999px`, bg `#e6f6ff` (lily-white), up-right arrow.
- Place list (right, `max-width: 15rem`, `position: sticky; top: 50%`, gap `1.25rem`, hidden below tablet): item = column, gap `0.75rem`, `padding-bottom 1.25rem`; number blue `#2739ff` `1.5rem` absolutely positioned `bottom -30% left -11%`, `scale(0)` when inactive; name opacity `.2` when inactive, `1` when active; 1px bottom line `#0003` with blue fill line `#2739ff` at `0%` width when inactive, `100%` when active. Only item 1 starts active.
- Five destinations (name, location, rating `4.5`, image from `cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/`): Santorini Private Escape (image 129), Malibu Cliff Retreat (131), Modern Desert Haven (145), Santorini Sunset Tour (146), Bali Island Escape (147).
- Scroll choreography (Webflow IX2): as the user scrolls through the `400vh` sticky range, the card list translates upward one card per step and the place items activate in sequence (name full, number scaled in, blue line filled); previous items reset. Initial states applied only after JS runs.
- Responsive: right column hidden below `991px`; mobile renders a simple stacked card list (the reference duplicates the list with `hide-desktop`). Card/image radius `1.25rem`, icon `3rem`, image `max-height 12rem` below `767px`; single column below `479px`.

## Implementation Notes

- Reuse existing route conventions: server-rendered section component + client-only GSAP wrapper component, `gsap.context()` scoped to a root ref, cleanup on unmount, `prefers-reduced-motion` respected.
- Use the existing hero-style JS gating pattern (`html.hero-js:not(.destinations-anim-ready) [data-destinations-anim] { opacity: 0 }`) so content is hidden until JS applies initial states.
- Desktop: CSS sticky + GSAP timeline scrubbed across the `400vh` wrapper. Card list translated `y` by `4 × (cardHeight + gap)` over 5 segments; each segment activates the corresponding place item and resets the previous one.
- Mobile: plain stacked cards, no sticky choreography.
- Fix the Travora intro background from `#eaf3f8` to `#ecf2f6` to match the reference body color.

## Verification

- Biome lint and production build pass.
- Desktop: sticky choreography cycles all five destinations; overlays and place list behave like the reference.
- Mobile: stacked cards render without overflow.
- Reduced motion: all content visible, no translation.
