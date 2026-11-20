# Rafael Tuelho’s blog

A static Astro blog for explorations in agentic AI, based on Astro’s official blog starter. Black and mint green in dark mode, white and forest green in light mode. The theme follows the system preference by default, with a persistent manual override.

## Develop

Use Node 24 LTS and pnpm 11.5.0.

```sh
pnpm install
pnpm dev --background
```

Open the local URL printed by Astro. Manage the server with `pnpm astro dev status`, `pnpm astro dev logs`, and `pnpm astro dev stop`.

```sh
pnpm check
pnpm build
pnpm preview
```

## Write a post

Create a Markdown or MDX file under `src/content/blog/`. Copy `writing-template.md` to get started. Its filename determines the URL, so `my-experiment.md` becomes `/blog/my-experiment/`.

```yaml
---
title: "What I learned building an agent"
description: "A short summary of the exploration."
pubDate: 2026-11-20
draft: true
tags: ["Agentic AI"]
---
```

Write below the frontmatter. Set `draft: false` when ready to publish. Drafts are excluded from the homepage, generated article routes, RSS, and sitemap, including during local development. Future-dated posts stay unpublished until a build runs on or after their publication date. Set an optional `updatedDate` when revising a post.

The included template is an unpublished writing aid. The construction submittal assistant article can be authored separately and copied here when ready.

## Hosting

GitHub Pages serves the generated `dist/` directory at <https://rafaeltuelho.github.io/>. This keeps the static blog with its source repository and works for future personal pages too.

The workflow checks and builds pull requests. Pushes to `master` also deploy. Before the first Astro deployment, set **Settings → Pages → Build and deployment → Source → GitHub Actions**. The previous branch-based Jekyll publishing mode cannot build Astro.

Pushing the workflow requires a GitHub credential with workflow access. For GitHub CLI OAuth authentication, the account owner can grant it with `gh auth refresh -h github.com -s workflow` before pushing.

The deployment workflow uses Astro’s official GitHub Action and the committed pnpm lockfile. No hosting adapter or runtime server is required.

## Customize

- `src/consts.ts` holds the site name, description, and GitHub links.
- `src/styles/global.css` holds the theme tokens and typography. Geist is bundled locally.
- `src/pages/about.astro` holds the short personal introduction.
- Add more `.astro` pages under `src/pages/` and link them from `src/layouts/BaseLayout.astro` as the site grows.
- `astro.config.mjs` holds the canonical site address. Update it if you add a custom domain.

RSS is available at `/rss.xml`, with a generated sitemap and `robots.txt`. The previous Jekyll starter and demo posts have been removed.
