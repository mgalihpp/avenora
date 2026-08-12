# Travel Hero Design

## Goal

Replace the scaffold marketing page with a responsive, screenshot-inspired Avenora travel hero. The implementation should preserve the existing Next.js and Tailwind setup and focus on the visible first viewport rather than recreating the entire Webflow site.

## Visual Direction

- Full-viewport mountain image using the existing `public/hero.webp` asset.
- Layered blue-to-cyan gradient and dark lower vignette for readable white content.
- Transparent top navigation with a white active `Home` pill and soft translucent inactive pills.
- Large, low-opacity `Travelo` display word behind the foreground content.
- Left-aligned headline: “Tailored journeys for travelers who want more than a standard trip”.
- White rounded `Explore Destination` CTA with a blue circular arrow affordance.
- Right floating white card with a blue bullet, vacation-planning copy, image panel, and pause control.

## Responsive Behavior

- Desktop: navigation centered between brand and top-right CTA; hero content occupies the lower-left; vacation card floats at the lower-right.
- Tablet: reduce display type and card width while preserving the two-column composition where space permits.
- Mobile: collapse navigation to a compact menu-like row, stack content and card, and ensure the oversized background word does not cause horizontal overflow.

## Interactions

- Navigation and CTA remain links to existing routes where appropriate.
- The pause control is presentational only because no video asset or playback behavior exists in the project.
- Hover and focus states use subtle opacity/color transitions and visible focus rings.

## Implementation Boundaries

- Replace the current marketing page and marketing layout presentation only.
- Keep auth, dashboard, tRPC, Prisma, and shadcn primitives unchanged.
- Use CSS/Tailwind for gradients, positioning, sizing, and responsive behavior.
- Avoid adding external image dependencies; use the checked-in hero asset for reliable local rendering.

## Verification

- Run Biome lint/check on changed files.
- Run a production build to verify Next.js rendering and TypeScript correctness.
- Inspect desktop and mobile layouts for clipping, contrast, and responsive stacking.
