# Missing gregCore APIs for `HexViewer.rs`

## Scope

This file documents Rust SDK endpoints required by HexViewer that are not verifiable from the provided context.

## Missing API 1: Rust payload access

- **Name:** `gregcore_sdk::payload::get_string`
- **Expected signature:** `fn get_string(payload: PayloadRef, field: &str, fallback: &str) -> String`
- **Behavior:** Read payload fields with gregCore semantics (`GregPayload.Get<string>(...)`).
- **Required layer:** `gregCore` Rust bridge crate (`gregcore_sdk`) + `Sdk` adapter

## Missing API 2: Rust event registration

- **Name:** `gregcore_sdk::events::on`
- **Expected signature:**
  `fn on(hook_name: &str, handler: fn(PayloadRef), mod_id: &str)`
- **Behavior:** Subscribe Rust callback to `GregEventDispatcher.On(hookName, handler, modId)`.
- **Required layer:** `ModLoader` bridge host

## Missing API 3: Rust update/gui hooks

- **Name:** `gregcore_sdk::events::on_update`, `gregcore_sdk::events::on_gui`
- **Expected behavior:** map Rust callbacks to host `OnUpdate()` and `OnGUI()` cycle.
- **Required layer:** `ModLoader` runtime callbacks

## Missing API 4: Rust HUD bridge

- **Name:** `gregcore_sdk::hud::{begin_panel,label,end_panel}`
- **Behavior:** draw native IMGUI panel through host Unity GUI calls.
- **Required layer:** `Sdk` UI bridge + `ModLoader`

## Missing API 5: Rust targeting bridge

- **Name:** `gregcore_sdk::targeting::raycast_forward`
- **Expected signature:** `fn raycast_forward(max_distance: f32) -> Option<FocusHit>`
- **Behavior:** use main camera forward raycast from gregCore host.
- **Required layer:** `gregFramework.Core.Systems` adapter exposed to Rust

## Missing API 6: Rust registry + tick bridge

- **Name:** `gregcore_sdk::registry::register_mod`, `gregcore_sdk::framework::publish_tick`
- **Behavior:** register mod metadata and publish framework tick equivalent to `ModTickEvent`.
- **Required layer:** `ModLoader` + framework event bridge

## Pseudo-code naming proposal (greg conventions)

```text
gregcore_sdk::events::on(hook, handler, modId)
  -> GregEventDispatcher.On(hook, WrapRustHandler(handler), modId)

gregcore_sdk::framework::publish_tick(deltaTime, frame)
  -> ModFramework.Events.Publish(new ModTickEvent(deltaTime, frame))
```
