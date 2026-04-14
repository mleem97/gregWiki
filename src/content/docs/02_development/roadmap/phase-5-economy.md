---
title: "Phase 5: Economy & Data"
sidebar_label: "Phase 5 (WIP)"
description: "Documentation for planned Economy and Data bridges."
---

:::caution WIP
This document contains placeholders (TODOs) and is currently under development.
:::

# Phase 5: Economy & Data (WIP)

In this phase, we focus on access to the game's persistent data and economic simulation.

## Planned Systems

### 1. SaveSystem Bridge

Allows mods to read and write data to the global game state.

- **TODO**: Implementation of `GregSaveService`.
- **Target**: `Il2Cpp.SaveSystem`.

### 2. Finance & BalanceSheet

Direct access to the economic simulation.

- **TODO**: API for income/expense statistics.
- **Target**: `Il2Cpp.BalanceSheet`.

### 3. Localisation Service

Usage of the internal translation system.

- **TODO**: Method `GregLocalisation.GetTerm(string key)`.
- **Target**: `Il2Cpp.Localisation`.
