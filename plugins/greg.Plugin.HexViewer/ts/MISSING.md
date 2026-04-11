# Missing gregCore APIs for `HexViewer.ts`

## Scope

This file documents TypeScript bridge APIs required by HexViewer that are not verified by the provided gregCore context.

## Missing API 1: TS payload bridge

- **Name:** `greg.payload.get<T>`
- **Expected signature:** `get<T>(payload: unknown, fieldName: string, fallback: T): T`
- **Behavior:** Typed field extraction mapped to `GregPayload.Get<T>(payload, fieldName, fallback)`
- **Required layer:** `LanguageBridges` (TS host runtime)

## Missing API 2: TS event bridge

- **Name:** `greg.events.on`
- **Expected signature:** `on(hookName: string, handler: (payload: unknown) => void, modId: string): void`
- **Behavior:** Subscribe TS callback to `GregEventDispatcher.On(...)`
- **Required layer:** `ModLoader` + TS bridge runtime

## Missing API 3: TS OnGUI bridge

- **Name:** `greg.events.onGui`
- **Expected signature:** `onGui(handler: () => void, modId: string): void`
- **Behavior:** Executes TS callback during native host `OnGUI()` phase.
- **Required layer:** `ModLoader` UI bridge

## Missing API 4: TS HUD helpers

- **Name:** `greg.hud.beginPanel / label / endPanel`
- **Expected signatures:**
  - `beginPanel(id: string, rect: PanelRect): void`
  - `label(value: string): void`
  - `endPanel(): void`
- **Behavior:** Proxy rendering to Unity IMGUI host API (`GUI.Box`, `GUILayout.Label`).
- **Required layer:** `Sdk` + `ModLoader` UI bridge

## Missing API 5: TS target/raycast bridge

- **Name:** `greg.target.raycastForward`
- **Expected signature:** `raycastForward(maxDistance: number): FocusHit | null`
- **Behavior:** Camera-forward raycast via gregCore targeting system.
- **Required layer:** `gregFramework.Core.Systems`

## Missing API 6: TS registry + tick bridge

- **Name:** `greg.registry.registerMod`, `greg.framework.publishTick`
- **Expected signatures:**
  - `registerMod(meta: { id: string; name: string; version: string }): void`
  - `publishTick(tick: { deltaTime: number; frame: number }): void`
- **Behavior:** Register module and publish framework tick event.
- **Required layer:** `ModLoader` host runtime

## Pseudo-code naming proposal (greg conventions)

```text
greg.events.on(hook, handler, modId)
  -> GregEventDispatcher.On(hook, WrapTsHandler(handler), modId)

greg.framework.publishTick({ deltaTime, frame })
  -> ModFramework.Events.Publish(new ModTickEvent(deltaTime, frame))
```
