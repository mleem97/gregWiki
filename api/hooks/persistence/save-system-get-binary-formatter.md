---
title: SaveSystem.GetBinaryFormatter
description: Hook event for SaveSystem.GetBinaryFormatter
path: /api/hooks/persistence/save-system-get-binary-formatter
---

# SaveSystem.GetBinaryFormatter

> **Hook ID:** `greg.persistence.savesystem.getbinaryformatter`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SaveSystem.GetBinaryFormatter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
BinaryFormatter GetBinaryFormatter()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetBinaryFormatter` events in `SaveSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.savesystem.getbinaryformatter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.savesystem.getbinaryformatter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.savesystem.getbinaryformatter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.savesystem.getbinaryformatter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.savesystem.getbinaryformatter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.savesystem.getbinaryformatter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `BinaryFormatter`
- **Safe to block?**: Yes
