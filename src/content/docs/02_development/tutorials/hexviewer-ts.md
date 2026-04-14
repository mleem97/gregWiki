---
id: hexviewer-ts
title: HexViewer Mod Tutorial (TypeScript)
sidebar_label: HexViewer in TypeScript
slug: /development/tutorials/hexviewer-ts
description: Technical writing tutorial for the HexViewer TypeScript implementation using JADE Style and the greg bridge object.
---

This page implements the **TypeScript UI layer** for HexViewer using the JADE Style.

Role in architecture:

- Use the global `greg` object for engine interaction
- Perform targeting via `greg.target.raycastForward`
- Render JADE-compliant HUD via `greg.hud.*` methods

> Layer ownership: TypeScript runs in the **Language Bridge layer** and uses the Official SDK API.

## Introduction

TypeScript allows for rapid development of UI-focused mods. This tutorial demonstrates how to create a JADE-style HUD using the `greg` bridge object.

## Project structure (TypeScript)

```text
gregMod.HexViewer/ts/
├─ package.json
├─ tsconfig.json
├─ manifest.json
└─ src/
   └─ HexViewer.ts
```

## TypeScript implementation

`src/HexViewer.ts`:

```ts
/**
 * HexViewer - JADE Style Implementation (TypeScript)
 */

declare const greg: any;

export class HexViewer {
    private target: any = null;
    private config: any = {
        raycastDistance: 10.0,
        hud: {
            panelWidth: 400
        }
    };

    onLoad(): void {
        console.log("HexViewer loaded (TypeScript)");
        
        // Load config using Official SDK API
        if (typeof (greg as any).config !== 'undefined') {
            this.config = greg.config.load('HexViewer');
        }

        // Subscribe to events using Official SDK API
        greg.events.onUpdate((dt: number) => this.onUpdate(dt));
        greg.events.onGui(() => this.onGui());
    }

    onUpdate(dt: number): void {
        // Targeting: Use Official SDK API raycastForward
        this.target = greg.target.raycastForward(this.config.raycastDistance);
    }

    onGui(): void {
        if (!this.target) return;

        const { name, distance, point } = this.target;

        // Rendering: JADE Style Panel (400px width)
        greg.hud.beginPanel("HexViewerJadeTS", 0.5, 0.1, this.config.hud.panelWidth, 200);

        // Header: ▶ <TYPE>
        greg.hud.label(`▶ ${name.toUpperCase()}`);
        greg.hud.label(" "); // Spacer

        // Data:   KEY      : Value (8-char keys)
        this.drawRow("NAME", name);
        this.drawRow("DIST", distance.toFixed(2) + "m");
        this.drawRow("POS", `${point.x.toFixed(1)}, ${point.y.toFixed(1)}, ${point.z.toFixed(1)}`);

        greg.hud.endPanel();
    }

    private drawRow(key: string, value: string): void {
        // JADE formatting: KEY (8-char) : Value
        const paddedKey = key.toUpperCase().padEnd(8);
        greg.hud.label(`  ${paddedKey} : ${value}`);
    }
}
```

## Official SDK API Policy

Always prefer the `greg` object over direct bridge calls. This ensures compatibility across different language bridge versions.

- `greg.target.raycastForward` (Targeting)
- `greg.hud.beginPanel` (HUD)
- `greg.events.onUpdate` (Ticks)

## Build pipeline

`package.json`:

```json
{
  "scripts": {
    "build": "tsup src/HexViewer.ts --format iife --global-name HexViewerMod"
  }
}
```

## Integration

1. The bridge loads the compiled `.js` bundle.
2. `onLoad()` is called once.
3. `onUpdate()` handles raycasting every frame.
4. `onGui()` renders the JADE panel when a target is detected.

## Deploy and test

Validation checklist:

- JS bundle is loaded by the bridge.
- HUD appears at top-center (x=0.5, y=0.1).
- "POS" field displays coordinates correctly formatted.

## Troubleshooting

- `greg` is not defined: Ensure the TypeScript bridge is correctly initialized.
- Raycast returns null: Check if the player is looking at a valid hex entity.
- Padding issues: Ensure `padEnd(8)` is used for the key column.
