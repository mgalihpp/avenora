# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Project guidance for AI coding agents working in **avenora**.

## Stack

- **Next.js 16** (App Router, RSC) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with CSS variables (`app/globals.css`)
- **shadcn/ui** (new-york style) components in `components/ui/`
- **Prisma** + the chosen database variant (see `.env.example`)
- **better-auth** for authentication (`features/auth/`)
- **tRPC v11** + **@tanstack/react-query** for typed APIs (`server/trpc/`)

## Project structure

- `app/` — routes, pages, and layouts (App Router)
- `features/` — feature-scoped modules (e.g. `features/auth/`)
- `server/trpc/` — tRPC router, procedures, and context
- `components/` — shared components; `components/ui/` holds shadcn/ui primitives
- `lib/` — shared utilities and client/provider setup
- `prisma/` — schema and migrations

## Next.js rules

- Prefer Server Components. Add `"use client"` only when a component needs hooks or event handlers.
- Server-side logic goes through tRPC procedures (`server/trpc/routers/`). Do not call Prisma directly from Client Components.
- Forms use react-hook-form with zod validation (`zodResolver`); schemas live in `features/*/lib/schemas.ts` and are shared with tRPC `.input()`.
- Use `useTransition` for pending/loading state instead of manual `useState` flags.
- Keep data fetching in Server Components or tRPC queries; avoid `useEffect` for fetching.
- Route groups and `_components` folders keep routing clean: `app/(dashboard)/settings/_components/settings-form.tsx`.

## Conventions

- Path alias `@/` maps to the project root.
- kebab-case for filenames and folders.
- `_components` folders for route-local components; feature code in `features/<name>/`.
- Run `bun run lint` (`biome check .`) and `bun run format` (`biome format --write .`) before committing.
