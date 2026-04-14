---
title: TypeScript/JS Modding Guide
sidebar_label: TypeScript/JS
description: How to build web-tech mods using gregCore and the TS/JS bridge.
---

# TypeScript & JavaScript Modding

gregCore supports web-tech modding for developers who prefer modern tooling and rapid iteration.

## 1. Project Setup

Use the **`HexLabelMod`** TypeScript template.

1. Copy the `typescript/` folder from the `HexLabelMod` template.
2. Install dependencies: `npm install`.
3. The template includes a `tsconfig.json` and a build script to bundle your code.

## 2. Using the API

The bridge provides a globally accessible `greg` object (signatures are consistent with the Lua API).

### Event Handling

```typescript
greg.events.on("greg.SERVER.LoadingStarted", (payload) => {
    const serverId = greg.payload.get(payload, "EntityId", "unknown");
    greg.log(`TS Mod: Server detected -> ${serverId}`);
});

greg.events.onUpdate((dt) => {
    // Process continuous logic
});
```

### Targeting & HUD Panels

```typescript
greg.events.onGui(() => {
    const hit = greg.target.raycastForward(10.0);

    if (hit) {
        greg.hud.beginPanel("WebHUD", 10, 10, 300, 100);
        greg.hud.label("TypeScript Bridge Active");
        greg.hud.label(`Targeting: ${hit.name}`);
        greg.hud.endPanel();
    }
});
```

## 3. Deployment

1. Build your project: `npm run build`.
2. Copy the resulting `.js` file and its `manifest.json` to `Data Center/Mods/ScriptMods/tsjs/<YourModName>/`.
3. Ensure `gregCore.dll` is active.
