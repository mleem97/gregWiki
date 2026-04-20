---
title: ModLoader.Awake
description: Hook event for ModLoader.Awake
path: /api/hooks/customimport/mod-loader-awake
---

# ModLoader.Awake

> **Hook ID:** `greg.customimport.modloader.awake`
> **Category:** Customimport
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.Awake()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Awake()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Awake` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.customimport.modloader.awake", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.customimport.modloader.awake", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.customimport.modloader.awake")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.customimport.modloader.awake", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.customimport.modloader.awake", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.customimport.modloader.awake", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
