---
title: SteamStatsOnMainMenuTop.OnGlobalStatsReceived
description: Hook event for SteamStatsOnMainMenuTop.OnGlobalStatsReceived
path: /api/hooks/visualui/steam-stats-on-main-menu-top-on-global-stats-received
---

# SteamStatsOnMainMenuTop.OnGlobalStatsReceived

> **Hook ID:** `greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamStatsOnMainMenuTop.OnGlobalStatsReceived()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnGlobalStatsReceived(GlobalStatsReceived_t result, Boolean ioFailure)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `result` | `GlobalStatsReceived_t` | ... |
| `ioFailure` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnGlobalStatsReceived` events in `SteamStatsOnMainMenuTop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.steamstatsonmainmenutop.onglobalstatsreceived", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
