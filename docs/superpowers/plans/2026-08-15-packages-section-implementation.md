# Packages Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the reference-matching "Our Packages" dark section after Destinations, with a scroll-reveal animation.

**Architecture:** Server-rendered `packages.tsx` (badge, heading, 2x2 card grid, CTA) wrapped in client `packages-animation.tsx` that reveals targets with GSAP ScrollTrigger; CSS gating hides targets until JS is ready.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next/image`, GSAP 3.15, Lucide React.

## Global Constraints

- Background `#020e26`, container `82rem`, heading Arial `3.75rem` centered, badge pill translucent white.
- Card: bg `#101a2d`, radius `1.75rem`, row layout, image `aspect-[4/5]` capped at `17.875rem` on desktop; below `480px` stacked with `max-height 13rem`; arrow circle `2.487rem` bg `#020e26`, absolute top-right below `768px`.
- Grid: 2 columns `>=992px`, 1 column below.
- Reuse `ArrowButton` + `reference-card-title`; add `id="packages"` and `id="destinations"`.
- No new dependencies; cleanup + reduced motion respected.

---

### Task 1: Packages Markup

**Files:**
- Create: `app/(marketing)/_components/packages.tsx`
- Modify: `app/(marketing)/_components/destinations.tsx` (add `id="destinations"`)
- Modify: `app/(marketing)/page.tsx` (render `<Packages />` after `<Destinations />`)

**Interfaces:**
- Produces: server component `Packages` with `data-packages-anim` targets (title block, grid, CTA).
- Consumes: `ArrowButton`, `reference-card-title`, Webflow CDN images.

- [ ] **Step 1: Define the package data**

```tsx
const packages = [
  { title: "7-Day Bali Wellness Journey", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d93ab05e3a945d9090ce_image%20134.webp", alt: "Overwater villa in tropical lagoon" },
  { title: "Maldives Honeymoon Stay", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d95620222119606874d6_image%20133.webp", alt: "Overwater villa in tropical lagoon" },
  { title: "Morocco Desert Experience", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d97ee1e09d55a3aa2827_image%20135.webp", alt: "Overwater villa in tropical lagoon" },
  { title: "Thailand Bali Wellness Journey", image: "https://cdn.prod.website-files.com/6a15d8dc9f4424ca591e9f49/6a15d9a9d29bd61388cb6664_image%20137.webp", alt: "Overwater villa in tropical lagoon" },
];
```

- [ ] **Step 2: Write the section markup**

`<section id="packages" class="bg-[#020e26] py-32 text-white">` > container `max-w-[82rem] px-4` > centered title block (badge pill `bg-white/10 rounded-full px-4 py-2` with "Our Packages", h2 `reference-card-title max-w-[49.625rem] text-[3.75rem] tracking-[-0.17rem]`, paragraph `max-w-[37.1875rem] text-white/60`) > card grid `grid gap-5 min-[992px]:grid-cols-2` > centered CTA `Link` with `ArrowButton` labeled "Explore Packages". Each `PackageCard`: `Link` row layout `flex flex-col min-[480px]:flex-row items-stretch gap-4 min-[480px]:gap-8 rounded-[1.75rem] bg-[#101a2d] p-2 min-[480px]:pr-4`; image wrapper `relative w-full min-[480px]:max-w-[17.875rem] aspect-[16/10] min-[480px]:aspect-[4/5] overflow-hidden rounded-[1.5rem] max-[479px]:max-h-[13rem]` with `fill object-cover` image; content column `flex w-full flex-col justify-between py-2 gap-6` containing title, description (white/60), price+review row (`justify-between`, price underlined, star `size-5 fill-current`), arrow circle `flex size-[2.487rem] items-center justify-center rounded-full bg-[#020e26] max-[767px]:absolute max-[767px]:right-3 max-[767px]:top-3` inside a `relative` content wrapper. Cards link to `#packages`.

- [ ] **Step 3: Add section ids and integrate**

Add `id="destinations"` to the destinations section element in `destinations.tsx`. In `page.tsx` import `Packages` and render `<Packages />` after `<Destinations />`.

- [ ] **Step 4: Lint and commit**

Run: `bun run lint`. Commit: `feat: add packages section markup`

### Task 2: Reveal Animation + Gating

**Files:**
- Create: `app/(marketing)/_components/packages-animation.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `data-packages-anim` targets.
- Produces: client `PackagesAnimation` wrapper adding `packages-anim-ready` and revealing targets once on scroll.

- [ ] **Step 1: Implement the wrapper**

`"use client"` component holding a root ref; `useEffect` adds `document.documentElement.classList.add("packages-anim-ready")`, queries `[data-packages-anim]`, returns early on reduced motion (`gsap.set(targets, { clearProps: "all" })`), else `gsap.context` sets `{ autoAlpha: 0, y: 36 }` and tweens to visible with `stagger: 0.12`, `duration: 0.8`, `ease: "power2.out"`, `scrollTrigger: { trigger: root, start: "top 78%", once: true }`; cleanup returns `ctx.revert()`. Render `<div ref={rootRef} className="bg-[#020e26]">{children}</div>`.

- [ ] **Step 2: Add gating CSS**

In `app/globals.css` mirror the destinations gate:

```css
html.hero-js:not(.packages-anim-ready) [data-packages-anim] {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  html.hero-js:not(.packages-anim-ready) [data-packages-anim] {
    opacity: 1;
  }
}
```

- [ ] **Step 3: Lint, build, commit**

Run: `bun run lint` and `bun run build`. Commit: `feat: animate packages section`

### Task 3: Verify

- [ ] **Step 1:** `bun run dev`; check dark section, badge, heading, 4 cards, CTA; reveal on scroll.
- [ ] **Step 2:** Mobile: single column, stacked cards, floating arrow circle.
- [ ] **Step 3:** Reduced motion: static visible content.
- [ ] **Step 4:** `bun run lint` + `bun run build` clean; `git status --short` shows only intended files.
