---
title: SaveSystem.GetRawSaveEntry
description: Hook event for SaveSystem.GetRawSaveEntry
path: /api/hooks/persistence/save-system-get-raw-save-entry
---

# SaveSystem.GetRawSaveEntry

> **Hook ID:** `greg.persistence.savesystem.getrawsaveentry`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.GetRawSaveEntry()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetRawSaveEntry(String displayName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `displayName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetRawSaveEntry` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.getrawsaveentry", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.getrawsaveentry", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.getrawsaveentry")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.getrawsaveentry", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.getrawsaveentry", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.getrawsaveentry", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
