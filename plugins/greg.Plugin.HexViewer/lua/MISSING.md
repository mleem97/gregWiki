# Missing gregCore APIs for `HexViewer.lua`

## Scope

This file documents bridge APIs required by the Lua HexViewer implementation that are not verified in the provided gregCore context.

## Missing API 1: Lua payload reader

- **Name:** `greg.payload.get`
- **Expected signature:** `greg.payload.get(payload: any, fieldName: string, fallback: any): any`
- **Behavior:** Return typed payload field value using gregCore-compatible extraction semantics.
- **Required layer:** `gregCore/framework/ModLoader/LanguageBridges/LuaModules` (Sdk bridge surface)
- **Pseudo-code (greg naming):**

```text
LuaPayload.get(payload, field, fallback)
  -> GregPayload.Get<object>(payload, field, fallback)
```

## Missing API 2: Lua event subscription bridge

- **Name:** `greg.events.on`
- **Expected signature:** `greg.events.on(hookName: string, handler: function, modId: string): void`
- **Behavior:** Subscribe Lua handler to `GregEventDispatcher.On(hookName, handler, modId)`
- **Required layer:** `ModLoader` + `LanguageBridges`
- **Pseudo-code (greg naming):**

```text
greg.events.on(hookName, luaHandler, modId)
  -> GregEventDispatcher.On(hookName, payload => LuaInvoke(luaHandler, payload), modId)
```

## Missing API 3: Lua HUD panel bridge

- **Name:** `greg.hud.begin_panel / label / end_panel`
- **Expected signature:**
  - `begin_panel(panelId: string, rect: table): void`
  - `label(text: string): void`
  - `end_panel(): void`
- **Behavior:** Proxy to native IMGUI (`GUI.Box`, `GUILayout.Label`) rendered from host `OnGUI()`.
- **Required layer:** `ModLoader` UI bridge in gregCore
- **Pseudo-code (greg naming):**

```text
greg.hud.begin_panel(id, rect)
  -> GregGuiBridge.BeginPanel(id, rect)
```

## Missing API 4: Lua raycast bridge

- **Name:** `greg.target.raycast_forward`
- **Expected signature:** `greg.target.raycast_forward(distance: number): table|nil`
- **Behavior:** Execute camera-forward raycast and return simplified hit data.
- **Required layer:** `Sdk` system bridge (`gregFramework.Core.Systems`)
- **Pseudo-code (greg naming):**

```text
greg.target.raycast_forward(maxDistance)
  -> GregTargeting.RaycastFromMainCamera(maxDistance)
```

## Missing API 5: Lua tick bridge

- **Name:** `greg.framework.publish_tick`
- **Expected signature:** `greg.framework.publish_tick(tick: table): void`
- **Behavior:** Publish `ModTickEvent` in sync with host update loop.
- **Required layer:** `ModLoader` event bridge
- **Pseudo-code (greg naming):**

```text
greg.framework.publish_tick({ deltaTime, frame })
  -> ModFramework.Events.Publish(new ModTickEvent(deltaTime, frame))
```
