# Release Notes: v1.0.0.35 (The Dashboard Revolution)

## Overview
Version 1.0.0.35 marks a major architectural shift from IMGUI to a high-performance **UGUI-based framework**. This update ensures full stability for Unity 6 (IL2CPP) and introduces the **Vibrant Dark Mode** design system.

## Key Features

### 🎨 GregUI (UGUI Framework)
- **Total IMGUI Replacement:** Replaced all OnGUI windows with native persistent UGUI components to solve Method unstripping failed crashes.
- **Design System:** Applied the 'Luminescent Architect' aesthetic (#00bfa5 Teal, #10eade Cyan).
- **Procedural Assets:** Rounded corners and borders are now generated at runtime (100% graphics-free).
- **Virtualized Lists:** New AddSearchableList API for lag-free rendering of 10,000+ items.

### 🏗️ Furniture Placement System
- **Precision Snapping:** Implemented 0.5m grid snapping (1sq=4sq logic).
- **Surface Alignment:** Automatic detection and alignment for Wall and Floor mounting.
- **Ghost Preview:** Real-time semi-transparent Teal preview before placement.

### 🤖 AutoRackBuilder (Relief)
- **Fleet Automation:** Centralized dashboard (F4) for server room management.
- **Batch Actions:** Added 'Open All Walls' and prepared 'Batch Placement' routines.

### 🌍 Polyglot SDK & API
- **Unified Bridge:** New greg.Sdk.GregPublicAPI for Lua, Python, JS, and Rust.
- **Data Binding:** Global GameEventBus for reactive UI updates (Coins, XP, Reputation).
- **Legacy Support:** Restored gregEventDispatcher and stabilized gregNativeEventHooks to support older mods like CableThrottle.

## Stability & Maintenance
- **Unity 6 IL2CPP Fix:** Migrated away from managed IMGUI delegates to prevent stripping-related crashes.
- **Cache Policy:** Mandatory deletion of MelonLoader/Il2CppAssemblies required after this update to refresh metadata.

## Deployment
- **Built Version:** 1.0.0.35 (Release)
- **Status:** Deployed to Steam Library / Data Center / Mods
