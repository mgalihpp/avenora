# Travel Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the scaffold marketing page with a responsive Avenora-inspired travel hero that closely matches the supplied screenshot and uses the reference site's visual media.

**Architecture:** Keep the marketing route server-rendered and make the hero a focused page component. Use CSS gradients and absolute layers for the composition, Next/Image for the local fallback background and remote Webflow media, and minimal client behavior only if needed for media playback controls.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next/image`, Lucide React.

## Global Constraints

- Full-viewport mountain image using a visual asset from the Avenora Webflow site, with the existing `public/hero.webp` as a local fallback.
- Layered blue-to-cyan gradient and dark lower vignette for readable white content.
- Navigation and CTA remain links to existing routes where appropriate.
- Keep auth, dashboard, tRPC, Prisma, and shadcn primitives unchanged.
- Ensure the oversized background word does not cause horizontal overflow on mobile.
- Run Biome lint/check and a production build after implementation.

---

### Task 1: Configure Remote Webflow Media

**Files:**
- Modify: `next.config.ts`

**Interfaces:**
- Produces: allowed Webflow image host configuration for `next/image`.

- [ ] **Step 1: Inspect current image configuration**

Run: `read next.config.ts` or inspect the existing file before editing.

Expected: preserve any existing Next.js configuration and add only the needed remote image host.

- [ ] **Step 2: Add the Webflow CDN hostname**

Add a narrow `images.remotePatterns` entry for `cdn.prod.website-files.com`, using HTTPS, without changing unrelated settings.

- [ ] **Step 3: Run type/build configuration verification**

Run: `npm run lint`

Expected: no configuration or formatting errors.

- [ ] **Step 4: Commit the configuration**

```bash
git add next.config.ts
git commit -m "chore: allow Webflow media assets"
```

### Task 2: Build the Responsive Hero Page

**Files:**
- Modify: `app/(marketing)/page.tsx`
- Modify: `app/(marketing)/layout.tsx`

**Interfaces:**
- Consumes: `/hero.webp` fallback asset and the Webflow CDN media URL.
- Produces: the complete `/` marketing hero with semantic navigation, links, responsive layout, and accessible labels.

- [ ] **Step 1: Replace the scaffold page with the hero composition**

Implement a server component with a `main` root using `relative min-h-svh overflow-hidden bg-slate-950 text-white`, a full-bleed `Image` sourced from `/hero.webp`, two aria-hidden gradient layers, and a relative foreground content wrapper. Add a low-opacity oversized `Travelo` layer, the left headline and CTA, and the floating right card. The card should use the reference site's mountain-hiker poster URL, rounded image corners, and an accessible decorative pause button.

- [ ] **Step 2: Add the responsive desktop and mobile layout**

Use breakpoint classes so desktop matches the screenshot's two-column composition, while mobile stacks the headline, CTA, and card. Use `clamp()` values for display typography and constrain all absolutely positioned decorative layers to the viewport.

- [ ] **Step 3: Replace the marketing shell header/footer presentation**

Update `app/(marketing)/layout.tsx` to avoid the existing opaque sticky header and footer. Keep a lightweight wrapper around the page, because the hero owns the full-screen navigation. Preserve the existing auth route links only where they do not conflict with the screenshot design.

- [ ] **Step 4: Run the formatter and lint check**

Run: `npm run fix`

Expected: Biome formats changed files and reports no remaining check failures.

- [ ] **Step 5: Commit the hero implementation**

```bash
git add "app/(marketing)/page.tsx" "app/(marketing)/layout.tsx"
git commit -m "feat: build Avenora travel hero"
```

### Task 3: Verify Production Rendering

**Files:**
- Verify: `app/(marketing)/page.tsx`
- Verify: `app/(marketing)/layout.tsx`
- Verify: `next.config.ts`

**Interfaces:**
- Consumes: completed hero implementation.
- Produces: verified production build and clean working tree aside from unrelated user changes.

- [ ] **Step 1: Run the full lint check**

Run: `npm run lint`

Expected: Biome exits successfully.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: Next.js completes the production build without TypeScript, route, or remote-image configuration errors.

- [ ] **Step 3: Inspect responsive behavior**

Run the dev server with `npm run dev`, then inspect `/` at desktop and mobile widths. Confirm the hero fills the viewport, remote media loads or falls back safely, navigation remains readable, and no horizontal scrollbar appears.

- [ ] **Step 4: Review final status**

Run: `git status --short`

Expected: only intentional implementation changes remain.
