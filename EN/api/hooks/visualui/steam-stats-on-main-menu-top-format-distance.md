---
title: SteamStatsOnMainMenuTop.FormatDistance
description: Hook event for SteamStatsOnMainMenuTop.FormatDistance
path: /api/hooks/visualui/steam-stats-on-main-menu-top-format-distance
---

# SteamStatsOnMainMenuTop.FormatDistance

> **Hook ID:** `greg.visualui.steamstatsonmainmenutop.formatdistance`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamStatsOnMainMenuTop.FormatDistance()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String FormatDistance(Double meters)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `meters` | `Double` | ... |


## Using this Hook

::: tip
Use this hook to react to `FormatDistance` events in `SteamStatsOnMainMenuTop`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.steamstatsonmainmenutop.formatdistance", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.steamstatsonmainmenutop.formatdistance", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.steamstatsonmainmenutop.formatdistance")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.steamstatsonmainmenutop.formatdistance", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.steamstatsonmainmenutop.formatdistance", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.steamstatsonmainmenutop.formatdistance", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
