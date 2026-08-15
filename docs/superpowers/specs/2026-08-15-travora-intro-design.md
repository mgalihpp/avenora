# Travora Intro Section Design

## Goal

Add the homepage section immediately after the existing Avenora hero. It should match the supplied reference screenshot and stop after the three statistic cards; the destinations section is out of scope.

## Visual Direction

- Use a pale blue section background matching the reference.
- Place the large snowy-trail image on the left and the smaller blue-jacket hiker image on the right, with an editorial staggered composition.
- Place the Travora paragraph and `View Destinations` CTA between the images on desktop.
- Use rounded image corners and generous whitespace rather than borders or extra decoration.
- Render three large rounded metric cards below the editorial row. The first and third cards are white; the middle card is the reference blue with white text.
- Use the existing display typography, arrow button treatment, and color language from the hero.

## Content

- Copy: `Travora creates personalized travel experiences for clients who value thoughtful planning, handpicked stays, private experiences, and a journey designed around the way they actually want to travel.`
- CTA label: `View Destinations`, linking to `#destinations`.
- Metrics: `189K+` / `HAPPY CLIENTS SERVED`, `16K+` / `ACTIVE TRAVELLING PEOPLE`, and `120+` / `AVAILABLE COUNTRIES`.
- Images use the corresponding Webflow CDN assets already exposed by the reference page. The section must retain meaningful alt text.

## Responsive Behavior

- Desktop keeps the two-column editorial row and three-column metrics grid.
- Tablet reduces image and type scale while preserving the composition where space allows.
- Mobile stacks the images and copy, then stacks the metric cards; all decorative positioning stays inside the viewport.
- The section remains usable with keyboard navigation and has visible focus states.

## Animation

- Add a small client-only GSAP animator scoped to this section.
- On scroll entry, reveal the images, copy, CTA, and metric cards with a subtle upward motion and short stagger.
- Animate each metric from zero to its displayed value once, without changing the visible suffixes (`K+` and `+`).
- Use GSAP cleanup on unmount and skip motion when `prefers-reduced-motion: reduce` is active.
- Do not add hover animations or a new animation dependency; GSAP is already installed.

## Architecture

- Keep the page and section markup server-rendered.
- Add one route-local section component and one route-local GSAP animation component only if the existing hero animation cannot safely scope these targets.
- Reuse existing `ArrowButton` rather than creating a second CTA primitive.
- Do not change auth, dashboard, tRPC, Prisma, shadcn components, or the existing hero behavior.

## Verification

- Run Biome check on the changed files.
- Run a production build for TypeScript and Next.js rendering correctness.
- Inspect desktop and mobile layouts for image loading, card alignment, counter visibility, focus states, and horizontal overflow.
