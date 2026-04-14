---
title: "Phase 8: Unity Scripting API Integration"
sidebar_label: "Phase 8 (Ongoing)"
description: "Documentation for alignment and integration of the official Unity Scripting API."
---

:::caution WIP
This document contains placeholders (TODOs) and is currently under development.
:::

# Phase 8: Unity Scripting API Integration (Ongoing)

In addition to specific IL2CPP classes of the game (Phases 5-7), `gregCore` systematically aligns with the official [Unity Scripting API Docs](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/). Our goal is to include all functions that are theoretically controllable via Unity and make sense in the context of *Data Center* as safe, typed modules in the SDK.

## Planned Module Bridges

### 1. Physics & Collision (Extended)

- **TODO**: Deeper access to rigidbodies and raycast filters.
- **Target**: `UnityEngine.PhysicsModule`.

### 2. Scene Management

- **TODO**: Abstraction for loading/unloading scene addons (e.g., for custom rooms).
- **Target**: `UnityEngine.SceneManagement`.

### 3. AI & Navigation (NavMesh)

- **TODO**: Manipulation of NavMeshAgent paths for custom employee routes.
- **Target**: `UnityEngine.AIModule`.

### 4. Audio & Sound (Extended)

- **TODO**: Control of audio mixers and ambient sounds.
- **Target**: `UnityEngine.AudioModule`.

### 5. UI & Canvas (Extended)

- **TODO**: Dynamic creation of native uGUI/Canvas elements without rect hacks.
- **Target**: `UnityEngine.UIModule` / `UnityEngine.TextRenderingModule`.

:::info Continuous Process
This list is constantly growing. As soon as the game is updated to a newer Unity version or developers integrate new subsystems (such as VFX Graph), we will include the corresponding bridges in this roadmap and implement them in the `gregSdk`.
:::
