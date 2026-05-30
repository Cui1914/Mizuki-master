# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server (port 3000), auto-syncs content first
pnpm build            # Full production build: update-anime → astro build → pagefind → compress-fonts
pnpm preview          # Preview production build
pnpm lint             # Biome check + auto-fix (src/)
pnpm format           # Biome format + auto-fix (src/)
pnpm type-check       # tsc --noEmit
pnpm check            # astro check
pnpm new-post         # Scaffold a new blog post
pnpm sync-content     # Sync content from external content repo
pnpm update-anime     # Fetch latest anime data from Bangumi API
```

Node.js >= 22 required. Use `pnpm` only — `preinstall` hook blocks npm/yarn.

## Post Frontmatter

```yaml
title: "Post Title"
published: 2023-09-09
description: "SEO description"
image: ./cover.jpg           # relative to post file
tags: [tag1, tag2]
category: Frontend
draft: false                 # hides from prod
pinned: false                # pins to top of list
comment: true                # enables comment section (requires global comment enabled)
lang: en                     # only set when differs from site language in config
```

Pinned posts sort before regular posts (both groups newest-first). Posts live in `src/content/posts/`, special pages in `src/content/spec/`.

## Markdown Extensions

Beyond GFM, Mizuki supports:
- **Callouts**: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!CAUTION]`, `> [!IMPORTANT]`
- **Math**: LaTeX via `$inline$` and `$$block$$` (KaTeX renderer)
- **GitHub Cards**: `::github{repo="user/repo"}`
- **Mermaid diagrams**: fenced code blocks with `mermaid` language
- Collapsible code sections, image galleries (PhotoSwipe), auto-linked headings

## Architecture

**Stack**: Astro 6 (static output) + Svelte 5 + Tailwind CSS 4 + TypeScript. Based on Fuwari. Page transitions via Swup. Search via Pagefind (built into `dist/` at build time).

**Content separation**: Blog posts live in a separate content repository. Enable via `.env`:
```
ENABLE_CONTENT_SYNC=true
CONTENT_REPO_URL=https://github.com/user/repo.git
```
Then `pnpm sync-content`. Auto-syncs before dev/build. See `docs/CONTENT_SEPARATION.md`.

**Component hierarchy** (Atomic Design):

```
atoms/       — Primitive UI elements (Button, Icon, Badge, Chip). No business logic.
molecules/   — 2–5 atoms combined (SearchBar, Pagination, ChipCloud).
organisms/   — Complex business components (Navbar, Sidebar, MusicPlayer). May have sub-directories.
widgets/     — Sidebar modules (Profile, Calendar, Tags). Use WidgetLayout from widgets/common/.
features/    — Feature clusters (comment/, auth/, albums/, anime/, diary/).
control/     — Interactive UI controls (ThemeSwitch, LayoutSwitch, FloatingTOC).
```

Astro components render server-side; Svelte components handle client-side interactivity. Assign hydration via `client:load` (critical), `client:visible` (below-fold), `client:idle` (non-critical like MusicPlayer).

**Sidebar widget registration** — 3 steps, all required:
1. Add type to `WidgetComponentType` in `src/types/config.ts`
2. Add entry to `sidebarLayoutConfig.components.{left|right|drawer}` in `src/config/index.ts`
3. Register in the `componentMap` of **every** sidebar renderer (step 3 is the most commonly missed)

**Key files**:
- `src/config/index.ts` — Site settings (title, theme color, banner, sidebar layout, nav links)
- `src/i18n/i18nKey.ts` + `src/i18n/languages/` — i18n system, use `i18n(I18nKey.xxx)` for all strings
- `src/plugins/` — Custom remark/rehype plugins and Expressive Code plugins
- `src/content.config.ts` — Astro content collection definitions

**Theme**: Light/dark via CSS variables defined in `src/styles/`. Do NOT use Tailwind `dark:` variants for theming.

## Key Conventions

- **No `!important`** anywhere except `src/styles/twikoo.css` (third-party comment override).
- **Component size**: atoms < 100, molecules < 200, organisms < 300 lines. Components > 500 lines split into sub-directory with `hooks/` and `types.ts`.
- **Reuse atoms first**: Check `src/components/atoms/` and `src/components/misc/` before writing new UI.
- **Linter**: Biome (not ESLint/Prettier). Run `pnpm lint` after edits.
- **Imports**: Use `@/*` path alias (`@components/atoms/Button.astro`) over relative imports.
- **Format**: `pnpm format` before committing.
