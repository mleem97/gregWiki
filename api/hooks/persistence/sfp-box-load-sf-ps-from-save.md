---
title: SFPBox.LoadSFPsFromSave
description: Hook event for SFPBox.LoadSFPsFromSave
path: /api/hooks/persistence/sfp-box-load-sf-ps-from-save
---

# SFPBox.LoadSFPsFromSave

> **Hook ID:** `greg.persistence.sfpbox.loadsfpsfromsave`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPBox.LoadSFPsFromSave()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadSFPsFromSave()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `LoadSFPsFromSave` events in `SFPBox`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.sfpbox.loadsfpsfromsave", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.sfpbox.loadsfpsfromsave", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.sfpbox.loadsfpsfromsave")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.sfpbox.loadsfpsfromsave", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.sfpbox.loadsfpsfromsave", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.sfpbox.loadsfpsfromsave", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
