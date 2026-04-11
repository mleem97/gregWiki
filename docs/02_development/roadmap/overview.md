---
title: <span class="material-symbols-outlined">assignment</span> Roadmap to 100% Coverage
sidebar_label: Overview
description: Strategic plan for full coverage of all game systems.
---

# <span class="material-symbols-outlined">assignment</span> Roadmap to 100% Coverage

This document shows the current progress of the `gregCore` SDK compared to the internal systems of the game (IL2CPP).

| Phase | Area | Status | Goal |
| :--- | :--- | :--- | :--- |
| **Phase 0** | Baseline | <span class="material-symbols-outlined">check_circle</span> READY | Standalone Setup, Namespace Migration. |
| **Phase 1** | Foundation | <span class="material-symbols-outlined">check_circle</span> READY | Registration System, EventBus, Basic Hardware. |
| **Phase 2** | Runtime | <span class="material-symbols-outlined">check_circle</span> READY | SDK Services, Customer/Employee Registries. |
| **Phase 3** | Visual Layer | <span class="material-symbols-outlined">check_circle</span> READY | Model Overrides, JADE Style HUD. |
| **Phase 4** | Quality | <span class="material-symbols-outlined">check_circle</span> READY | Unit Tests, 30+ Unity Signals, Game Bridges. |
| **Phase 5** | Economy & Data | <span class="material-symbols-outlined">construction</span> WIP | SaveSystem, Finance, Localisation. |
| **Phase 6** | Deep Hardware | <span class="material-symbols-outlined">calendar_month</span> PLANNED | Port Details, Patch Panels, Audio, Tooltips. |
| **Phase 7** | Simulation | <span class="material-symbols-outlined">calendar_month</span> PLANNED | HR System, Steam Integration, Objectives. |
| **Phase 8** | Unity API | <span class="material-symbols-outlined">sync</span> ONGOING | Unity Scripting API Alignment, Standard Modules. |

## Current Coverage Level
We currently have approximately **65%** of the IL2CPP classes relevant to modders abstracted through type-safe bridges.

:::info <span class="material-symbols-outlined">sync</span> Ongoing Updates
This roadmap is a **living document**. Since *Data Center* is continuously expanded with new features and systems by the game developers, we adjust this list ongoingly. Our goal is to keep pace with the game's development and make new functions available in the `gregCore` SDK in a timely manner.
:::

:::info
If you need a specific system that is not yet listed, please open an issue in the [gregCore Repository](https://github.com/mleem97/gregCore).
:::
