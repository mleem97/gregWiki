---
title: SFPModule.InsertDirectlyIntoPort
description: Hook event for SFPModule.InsertDirectlyIntoPort
path: /api/hooks/settings/sfp-module-insert-directly-into-port
---

# SFPModule.InsertDirectlyIntoPort

> **Hook ID:** `greg.settings.sfpmodule.insertdirectlyintoport`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SFPModule.InsertDirectlyIntoPort()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InsertDirectlyIntoPort(CableLink _link)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_link` | `CableLink` | ... |


## Using this Hook

::: tip
Use this hook to react to `InsertDirectlyIntoPort` events in `SFPModule`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.sfpmodule.insertdirectlyintoport", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.sfpmodule.insertdirectlyintoport", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.sfpmodule.insertdirectlyintoport")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.sfpmodule.insertdirectlyintoport", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.sfpmodule.insertdirectlyintoport", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.sfpmodule.insertdirectlyintoport", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
