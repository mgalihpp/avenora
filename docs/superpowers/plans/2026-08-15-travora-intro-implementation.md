# Travora Intro Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the screenshot-matched Travora intro and statistics section immediately after the existing hero.

**Architecture:** Keep the section markup server-rendered in a focused route-local component. Add one client-only GSAP component scoped to that section for scroll reveals and number count-up, with cleanup and reduced-motion handling. Integrate both into the existing marketing page without changing the hero.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next/image`, GSAP 3.15, Lucide React.

## Global Constraints

- Stop after the three statistic cards; the destinations section is out of scope.
- Use the Webflow CDN images for the snowy-trail and blue-jacket hiker assets.
- Keep the page and section markup server-rendered; only animation code is client-only.
- Use the existing display typography, arrow button treatment, and color language.
- Mobile stacks images, copy, CTA, and metric cards without horizontal overflow.
- Preserve meaningful image alt text and visible keyboard focus states.
- Respect `prefers-reduced-motion: reduce` and clean up GSAP on unmount.
- Do not add dependencies or change auth, dashboard, tRPC, Prisma, or shadcn code.

---

### Task 1: Build the Travora Intro Markup

**Files:**
- Create: `app/(marketing)/_components/travora-intro.tsx`
- Modify: `app/(marketing)/page.tsx`

**Interfaces:**
- Consumes: the existing `ArrowButton` component behavior and the two Webflow CDN image URLs.
- Produces: a server component named `TravoraIntro` with semantic section markup and animation-target descendants.

- [ ] **Step 1: Add the section component with the reference content**

Create `TravoraIntro` as a server component. Use this content and asset mapping:

```tsx
const images = {
  trail:
    "https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a15cce6fe0bbe11248ab6b8_image%2021.webp",
  hiker:
    "https://cdn.prod.website-files.com/6a13e532999601af0ed6354d/6a15cce685e88a679cd5e083_image%2015%20(4).webp",
};
```

Render a semantic `section` with `aria-labelledby`, a two-column editorial row, the exact Travora paragraph, a `Link` to `#destinations` labeled `View Destinations`, and three metric cards with these values:

```tsx
const stats = [
  { value: 189, suffix: "K+", label: "HAPPY CLIENTS SERVED" },
  { value: 16, suffix: "K+", label: "ACTIVE TRAVELLING PEOPLE", accent: true },
  { value: 120, suffix: "+", label: "AVAILABLE COUNTRIES" },
];
```

Give the two `Image` elements meaningful alt text and use `fill` inside fixed aspect-ratio wrappers so the remote assets crop consistently.

- [ ] **Step 2: Add responsive layout classes**

Use a pale blue section background, a centered max-width wrapper, rounded `1.5rem` image corners, and a desktop layout with the large left image, copy in the center, and smaller right image. Use a three-column stats grid below the editorial row. At tablet widths reduce gaps and image heights; at mobile widths use one column and let the images and cards flow in document order.

- [ ] **Step 3: Integrate the section after the hero**

In `app/(marketing)/page.tsx`, place `<TravoraIntro />` immediately after the existing hero `main` and before the page ends. Do not move or rewrite the current hero layers, navigation, or hero animation.

- [ ] **Step 4: Run the formatter and type-facing lint check**

Run: `bun run lint`

Expected: Biome reports no errors for the new component and page integration.

- [ ] **Step 5: Commit the markup**

```bash
git add "app/(marketing)/_components/travora-intro.tsx" "app/(marketing)/page.tsx"
git commit -m "feat: add Travora intro section"
```

### Task 2: Add Scoped GSAP Reveal and Counters

**Files:**
- Create: `app/(marketing)/_components/travora-intro-animation.tsx`
- Modify: `app/(marketing)/_components/travora-intro.tsx`

**Interfaces:**
- Consumes: the `data-travora-intro` root and descendants marked `data-travora-anim` and `data-stat-value`.
- Produces: a client component named `TravoraIntroAnimation` that runs once when the section enters the viewport.

- [ ] **Step 1: Mark animation targets in the server markup**

Add `data-travora-anim` to both image wrappers, the copy block, the CTA, and each metric card. Render each number as a span with `data-stat-value`, `data-stat-target`, and a visible suffix span. Keep the suffix outside the animated numeric text so `K+` and `+` remain stable.

- [ ] **Step 2: Implement the client animation with scoped cleanup**

Use a root ref and `gsap.context()` inside a client component. Create a `ScrollTrigger` timeline scoped to the root that reveals targets from `{ autoAlpha: 0, y: 36 }` to `{ autoAlpha: 1, y: 0 }` with a short stagger. Register `ScrollTrigger` and use `once: true` so the count-up runs once per page load.

For counters, use a single plain object per number and `gsap.to(counter, { value: target, snap: { value: 1 }, duration: 1.2, ease: "power2.out", onUpdate: ... })`, writing `Math.round(counter.value).toString()` into the span. Return `ctx.revert()` from cleanup. If reduced motion matches, set targets visible and write final number values without creating tweens.

- [ ] **Step 3: Mount the animator as the scoped wrapper**

Make `TravoraIntroAnimation` accept `children: React.ReactNode` and render one `<div ref={rootRef} data-travora-intro>` around those children. In `TravoraIntro`, put the semantic `section` and its complete server-rendered content inside `<TravoraIntroAnimation>`. The client wrapper owns only the ref and animation lifecycle; keep all selector queries scoped to `rootRef.current` and do not use document-wide selectors.

- [ ] **Step 4: Run lint and a production build**

Run: `bun run lint`

Expected: no Biome errors, including hook and import rules.

Run: `bun run build`

Expected: Next.js completes the production build without SSR or TypeScript errors.

- [ ] **Step 5: Commit the animation**

```bash
git add "app/(marketing)/_components/travora-intro.tsx" "app/(marketing)/_components/travora-intro-animation.tsx"
git commit -m "feat: animate Travora intro section"
```

### Task 3: Verify Responsive Rendering and Accessibility

**Files:**
- Verify: `app/(marketing)/page.tsx`
- Verify: `app/(marketing)/_components/travora-intro.tsx`
- Verify: `app/(marketing)/_components/travora-intro-animation.tsx`

**Interfaces:**
- Consumes: the completed section and animation implementation.
- Produces: a verified desktop/mobile marketing page with no regressions to the existing hero.

- [ ] **Step 1: Start the development server**

Run: `bun run dev`

Open `/` and inspect the section below the hero at desktop width. Confirm the two image sizes and vertical offsets match the reference, the copy sits between them, the CTA is readable, and the middle statistic card is blue.

- [ ] **Step 2: Inspect mobile behavior**

Use a mobile viewport and confirm the section stacks cleanly, image crops remain intentional, the CTA remains reachable, cards do not overflow horizontally, and the existing mobile hero remains unchanged.

- [ ] **Step 3: Inspect motion and reduced motion**

Reload near the section and confirm the reveal occurs once on scroll and counters settle at `189K+`, `16K+`, and `120+`. Enable reduced motion and confirm content is immediately visible with final values and no visible animation.

- [ ] **Step 4: Run final checks**

Run: `bun run lint`

Run: `bun run build`

Expected: both commands pass with no errors.

- [ ] **Step 5: Review final worktree**

Run: `git status --short`

Expected: only intentional section implementation files remain changed after the implementation commits.
