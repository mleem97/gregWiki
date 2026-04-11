---
title: "Phase 8: Unity Scripting API Integration"
sidebar_label: Phase 8 (Ongoing)
description: Dokumentation für den Abgleich und die Integration der offiziellen Unity Scripting API.
---

:::caution WIP
This document contains placeholders (TODOs) and is currently under development.
:::

# Phase 8: Unity Scripting API Integration (Laufend)

Zusätzlich zu den spezifischen IL2CPP-Klassen des Spiels (Phase 5-7) gleicht `gregCore` auch systematisch die offiziellen [Unity Scripting API Docs](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/) ab. Unser Ziel ist es, alle theoretisch über Unity ansteuerbaren Funktionen, die im Kontext von *Data Center* Sinn machen, als sichere, typisierte Module in das SDK aufzunehmen.

## Geplante Modul-Bridges

### 1. Physics & Collision (Erweitert)
- **TODO**: Tieferer Zugriff auf Rigidbodies und Raycast-Filter.
- **Target**: `UnityEngine.PhysicsModule`.

### 2. Scene Management
- **TODO**: Abstraktion für das Laden/Entladen von Szene-Addons (z.B. für custom Räume).
- **Target**: `UnityEngine.SceneManagement`.

### 3. AI & Navigation (NavMesh)
- **TODO**: Manipulation der NavMeshAgent-Pfade für custom Mitarbeiter-Routen.
- **Target**: `UnityEngine.AIModule`.

### 4. Audio & Sound (Erweitert)
- **TODO**: Steuerung von Audio-Mischern und Umgebungssounds.
- **Target**: `UnityEngine.AudioModule`.

### 5. UI & Canvas (Erweitert)
- **TODO**: Dynamische Erstellung von nativen uGUI/Canvas Elementen ohne Rect-Hacks.
- **Target**: `UnityEngine.UIModule` / `UnityEngine.TextRenderingModule`.

:::info Kontinuierlicher Prozess
Diese Liste wächst ständig. Sobald das Spiel auf eine neuere Unity-Version aktualisiert wird oder Entwickler neue Subsysteme (wie z.B. VFX Graph) einbinden, werden wir die entsprechenden Bridges in diese Roadmap aufnehmen und im `gregSdk` implementieren.
:::
