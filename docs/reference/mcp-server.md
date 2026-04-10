---
title: MCP server (LLM-friendly modding)
sidebar_label: MCP server
description: Model Context Protocol server bundled with the docs Docker image for assistants and IDEs.
---

# MCP server (gregFramework / gregCore)

The **gregCore** repository ships a **Model Context Protocol (MCP)** server at **`gregCore/mcp-server/`**. It lets assistants **ground** answers in your repo: documentation, **`greg.*`** hook catalog (`greg_hooks.json`), optional legacy **`fmf_hooks.json`**, and **CONTRIBUTING**.

Use it when you want an assistant (Cursor, Claude Code, or any MCP client) to **not guess** APIs or hook names.

## Docker (single container)

The root `Dockerfile` builds **Docusaurus** into static files and runs **one Node process** that:

- Serves the wiki at **`http://<host>:3000/`** (static HTML).
- Exposes **Streamable HTTP MCP** at **`POST /mcp`** and **`GET /mcp`** (SSE), plus **`GET /health`**.

From the repo root:

```bash
docker compose up docs-mcp
```

Default mapping: **`http://localhost:3040`** (host) → container port **3000**.

- Docs: `http://localhost:3040/wiki/`
- Health: `http://localhost:3040/health`
- MCP: `http://localhost:3040/mcp` (client must speak MCP Streamable HTTP; session via `mcp-session-id` header).

:::note Security

Binding to `0.0.0.0` exposes the MCP endpoint on your network. Use only on trusted networks or behind a reverse proxy with authentication.

:::

## Local (stdio) for Cursor

Source: **`gregCore/mcp-server/`** (see **`README.md`** in that folder). Install dependencies with `npm install`, then run `node src/index.mjs --stdio --data-root <root>`, where `<root>` is usually **`gregCore/`** (parent of `mcp-server/`). That folder should contain **`docs/`**, **`CONTRIBUTING.md`**, and preferably **`framework/gregFramework/greg_hooks.json`** (canonical **greg.*** hook list). Legacy **`fmf_hooks.json`** (flat or under `FrikaModFramework/`) is still supported via **`fmf_hook_registry`**.

Set **`GREG_MCP_DATA_ROOT`** (or **`FMF_MCP_DATA_ROOT`**) if your layout differs. Point your MCP client at the stdio command.

## Tools (what each one does)

| Tool | What it returns | When to use it |
|------|------------------|----------------|
| **`fmf_search_docs`** | Paths under `docs/` + short snippets around the match | Find a topic before reading a whole page |
| **`fmf_read_doc`** | Full Markdown for one `docs/` path | You already know the file path |
| **`fmf_list_doc_paths`** | List of `.md` paths (capped) | Discover what docs exist |
| **`greg_hook_registry`** | Entire **`greg_hooks.json`** (can be large) | Need the full generated hook catalog |
| **`greg_hook_search`** | Filtered `hooks[]` entries matching a query | Find specific `greg.*` hooks without loading the whole JSON |
| **`greg_hook_stats`** | `version`, `stats`, `generationOptions`, etc. (no `hooks` array) | Quick sanity check after regenerating hooks |
| **`fmf_hook_registry`** | Legacy **`fmf_hooks.json`** if present | Older FMF/FFM declarative lists |
| **`fmf_read_contributing`** | `CONTRIBUTING.md` | Conventions and workflow |
| **`fmf_repo_layout`** | Static Markdown overview of `gregCore` layout | Orientation before deeper reads |

**Resources:** `greg://repo/overview` (alias `fmf://repo/overview`) — same text as `fmf_repo_layout`.

**Prompt:** `fmf_modding_context` — short starter text + optional `topic`; always pair with tools for authoritative content.

## Related

- [Hook naming](./fmf-hook-naming.md)
- [Hooks catalog](./fmf-hooks-catalog.md)
- [Monorepo target layout](../contributors/monorepo-target-layout.md)
