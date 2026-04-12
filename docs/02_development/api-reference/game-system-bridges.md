---
title: Game System Bridges (IL2CPP)
sidebar_label: Game System Bridges
description: typsichere C# Bridges für interne IL2CPP Spielsysteme (GameManager, Shop, Technicians etc.).
---

# Game System Bridges (IL2CPP)

Seit `v1.0.0-pre.5` bietet `gregCore` typsichere Abstraktionen für die wichtigsten internen Spielsysteme. Diese ermöglichen es, komplexe Spiellogik zu steuern, ohne direkt mit IL2CPP-Objekten hantieren zu müssen.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Verfügbare Services (gregSdk.Services)

### 1. GregGameManagerService

Steuerung des globalen Spielzustands und der UI-Layer.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#" default>
    ```csharp
    using gregSdk.Services;
    GregGameManagerService.CloseAnyCanvas();
    ```
  </TabItem>
  <TabItem value="lua" label="Lua">
    ```lua
    greg.game.close_any_canvas()
    ```
  </TabItem>
  <TabItem value="rust" label="Rust">
    ```rust
    // via v8 API table
    (api.close_any_canvas)();
    ```
  </TabItem>
</Tabs>

### 2. GregPlayerManagerService

Interaktion mit dem Spieler-Avatar und dem Cursor.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#">
    ```csharp
    using gregSdk.Services;
    GregPlayerManagerService.ConfineCursorForUI();
    ```
  </TabItem>
  <TabItem value="lua" label="Lua">
    ```lua
    greg.player.confine_cursor()
    ```
  </TabItem>
</Tabs>

### 3. GregShopService

Vollständige Kontrolle über das Einkaufsmenü und physische Pakete.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#">
    ```csharp
    using gregSdk.Services;
    GregShopService.OpenColorPicker();
    ```
  </TabItem>
  <TabItem value="lua" label="Lua">
    ```lua
    greg.shop.open_color_picker()
    ```
  </TabItem>
</Tabs>

*(Weitere Services finden Sie in den entsprechenden Sprach-SDK-Referenzen.)*

## Best Practices

Alle Services nutzen intern `UnityEngine.Object.FindObjectOfType`. Rufen Sie diese Methoden daher **nicht** in jeder `Update()`-Schleife auf, sondern nur bei Bedarf (z.B. Event-getrieben), um die Performance zu schonen.
