---
title: OSK_AccentConsole.LoadAccentMap
description: Hook event for OSK_AccentConsole.LoadAccentMap
path: /api/hooks/persistence/osk_-accent-console-load-accent-map
---

# OSK_AccentConsole.LoadAccentMap

> **Hook ID:** `greg.persistence.osk_accentconsole.loadaccentmap`
> **Category:** Persistence
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_AccentConsole.LoadAccentMap()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadAccentMap(OSK_AccentAssetObj accents)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `accents` | `OSK_AccentAssetObj` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadAccentMap` events in `OSK_AccentConsole`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.osk_accentconsole.loadaccentmap", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.osk_accentconsole.loadaccentmap", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.osk_accentconsole.loadaccentmap")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.osk_accentconsole.loadaccentmap", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.osk_accentconsole.loadaccentmap", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.osk_accentconsole.loadaccentmap", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
