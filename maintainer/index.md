---
title: Maintainer Documentation
description: Internal guidelines for gregCore framework contributors
path: /maintainer
---

# 🛡️ Maintainer Documentation

This section is dedicated to the core contributors and maintainers of the gregCore framework. It covers internal workflows, hook generation policies, and stability guidelines.

## 🗝️ Core Responsibilities
1.  **Maintain Binary Compatibility**: Avoid breaking changes in public `GregAPI` signatures.
2.  **Hook Accuracy**: Ensure the 2100+ intercepts point to the correct IL2CPP methods.
3.  **Language Parity**: New framework features must be exposed to all language bridges (Lua, JS, Rust, etc.).

## 📖 Key Workflows

### 🪝 [Adding New Hooks](/maintainer/adding-hooks)
Learn how to use the **Metadata Scanner** to identify new game methods and add them to the canonical `greg_hooks.json`.

### 🧪 [Stability & Conflict Resolution](/maintainer/stability)
Guidelines on how to handle Harmony patch conflicts and memory leaks in long-running sessions.

### 📜 [Deprecation Policy](/maintainer/deprecation)
How to mark hooks as legacy and phase them out without breaking old mods.

### 🌐 [Syncing the Wiki](/maintainer/sync-wiki)
Automated scripts for updating the documentation based on the current hook catalog.

---

::: warning
**Direct Modification**: Never modify `greg_hooks.json` manually. Always use the provided generation scripts to ensure the metadata remains valid.
:::
