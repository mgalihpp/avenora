# Destinations Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the reference-matching "Destinations For Unforgettable Journeys." section after the Travora intro, with a GSAP-scrubbed sticky scroll choreography on desktop.

**Architecture:** Server-rendered section component (`destinations.tsx`) holding markup and data; client wrapper (`destinations-animation.tsx`) owning the root ref, the `400vh` ScrollTrigger timeline, initial-state application, and cleanup. CSS gating hides animated targets until JS is ready, mirroring the hero pattern.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next/image`, GSAP 3.15 (ScrollTrigger), Lucide React.

## Global Constraints

- Match extracted reference values: body bg `#ecf2f6`, container `82rem`, card radius `2rem`, heading Arial `3.75rem`/`-0.17rem`/`#030505`, card name Arial `1.75rem`, accent blue `#2739ff`, lily-white `#e6f6ff`.
- Desktop: `400vh` sticky wrap, 3 columns, 5-step scrubbed timeline; right column hidden below `lg`; mobile stacked cards.
- Reuse `gsap.context()` scoped cleanup and `prefers-reduced-motion` handling; no new dependencies.
- Keep hero and Travora intro unchanged except the intro background color fix.

---

### Task 1: Build the Destinations Markup

**Files:**
- Create: `app/(marketing)/_components/destinations.tsx`
- Modify: `app/(marketing)/_components/travora-intro-animation.tsx` (bg `#eaf3f8` -> `#ecf2f6`)

**Interfaces:**
- Produces: server component `Destinations` with `data-destinations-wrap`, `data-destinations-frame`, `data-destinations-list`, `data-destinations-item` (+ `-name`, `-number`, `-line` descendants) and a mobile stacked list; exports nothing else.

- [ ] **Step 1: Define the destination data array**

```tsx
const destinations = [
  { name: "Santorini Private Escape", location: "Santorini, Greece", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b311331fed60b9bc4490f_image%20129.webp", alt: "Overwater villa in tropical lagoon" },
  { name: "Malibu Cliff Retreat", location: "Malibu, California", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b31644f9f44f7acf8eac1_image%20131.webp", alt: "Luxury Maldives water villa resort" },
  { name: "Modern Desert Haven", location: "Dubai Desert, UAE", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b31b24f9f44f7acf8f3fb_image%20145.webp", alt: "Historic mosque tower in Morocco" },
  { name: "Santorini Sunset Tour", location: "Santorini, Greece", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b320c81b18d94597ffcd1_image%20146.webp", alt: "Longtail boat on tropical island beach" },
  { name: "Bali Island Escape", location: "Bali, Indonesia", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a1b323911b6e405a1d0cf95_image%20147.webp", alt: "Luxury Maldives water villa resort" },
];
```

- [ ] **Step 2: Write the card and section markup**

Extract a `DestinationCard` sub-component (image `aspect-[4/3]` fill wrapper + rating row with Lucide `Star` + name + location row with Lucide `MapPin` + circle arrow with Lucide `ArrowUpRight`). The section renders a `400vh` wrapper containing a sticky 3-column row: left heading (Arial classes, `pt-[8rem]`), middle `data-destinations-frame` (max-w/max-h/overflow-hidden + two `10rem` gradients + `data-destinations-list`), right `data-destinations-item` column. Below, a `lg:hidden` stacked card list. Wrap everything in a root client wrapper `<DestinationsAnimation>`.

- [ ] **Step 3: Fix the intro background**

In `travora-intro-animation.tsx` change the root class from `bg-[#eaf3f8]` to `bg-[#ecf2f6]`.

- [ ] **Step 4: Lint and commit**

Run: `bun run lint`. Then commit:
`feat: add destinations section markup`

### Task 2: Add the Scroll Choreography

**Files:**
- Create: `app/(marketing)/_components/destinations-animation.tsx`
- Modify: `app/globals.css` (gating + Arial class)

**Interfaces:**
- Consumes: the `data-*` attributes from Task 1.
- Produces: client component `DestinationsAnimation` that adds `destinations-anim-ready` to `document.documentElement`, applies initial states, and scrubs a 5-segment timeline against the `400vh` wrap.

- [ ] **Step 1: Implement the client animation**

In `useEffect`: add the ready class; query wrap/frame/list/items; on reduced motion, show everything statically (`maxHeight: none` on frame, clear items, no tweens) and return. Otherwise `gsap.context(() => { ... }, root)` with a timeline whose `scrollTrigger` is `{ trigger: wrap, start: "top top", end: "bottom bottom", scrub: 1 }`. Tween the list `y` by `4 * (first card offsetHeight + 24)` over duration 5, and for each item `i` add 1-duration segments at position `i` (name `autoAlpha` 1, number `scale` 1 with `back.out(2.5)`, line `width: "100%"`) and at `i + 1` (name `.2`, number `scale` 0, line `"0%"`) for all but the last item. Set initial states with `gsap.set` before building the timeline. Return `ctx.revert()`.

- [ ] **Step 2: Add CSS gating and the Arial title class**

In `app/globals.css`:

```css
.reference-card-title {
  font-family: Arial, sans-serif;
}

html.hero-js:not(.destinations-anim-ready) [data-destinations-anim] {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  html.hero-js:not(.destinations-anim-ready) [data-destinations-anim] {
    opacity: 1;
  }
}
```

Mark the frame, the place list, and the mobile list with `data-destinations-anim`.

- [ ] **Step 3: Lint, build, commit**

Run: `bun run lint` and `bun run build`. Commit:
`feat: animate destinations section`

### Task 3: Verify Rendering

- [ ] **Step 1:** Start `bun run dev` and inspect desktop: heading, 5 cards cycling with place items 01-05 in sync, overlays, blue lines.
- [ ] **Step 2:** Inspect mobile: stacked cards, no sticky, no overflow.
- [ ] **Step 3:** Reduced motion: everything visible statically.
- [ ] **Step 4:** Run `bun run lint` + `bun run build`, confirm clean, then `git status --short` shows only intended files.
