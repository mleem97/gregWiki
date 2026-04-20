---
id: contributor-workflow
title: Contributor Workflow (Astro/Starlight)
---

## Local workflow

Markdown and MDX live in `gregWiki/src/content/docs/`. The docs app runs on Astro/Starlight in `gregWiki/`.

```bash
cd gregWiki
pnpm install
pnpm dev
```

## Build workflow

```bash
cd gregWiki
pnpm build
pnpm preview
```

## Can we hide docs build stuff from non-contributors?

Short answer for a **public repo**: **not fully**.

What you can do:

- Keep generated output (`dist/`, `.astro/`, `node_modules/`) out of Git using `.gitignore`.
- Keep docs tooling in `gregWiki/` so core runtime contributors can ignore it.
- Use path-based CODEOWNERS to limit review noise.
- Trigger docs CI on `gregWiki/src/content/docs/**` and `gregWiki/**` changes.

What you cannot do in a public repo:

- Fully hide tracked source files from non-contributors.

If you need true visibility restriction, use a private repo/submodule for docs infrastructure.
