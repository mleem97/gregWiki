---
title: PatchPanel.InsertedInRack
description: Hook event for PatchPanel.InsertedInRack
path: /api/hooks/visualui/patch-panel-inserted-in-rack
---

# PatchPanel.InsertedInRack

> **Hook ID:** `greg.visualui.patchpanel.insertedinrack`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PatchPanel.InsertedInRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void InsertedInRack(PatchPanelSaveData saveData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `saveData` | `PatchPanelSaveData` | ... |


## Using this Hook

::: tip
Use this hook to react to `InsertedInRack` events in `PatchPanel`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.patchpanel.insertedinrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.patchpanel.insertedinrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.patchpanel.insertedinrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.patchpanel.insertedinrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.patchpanel.insertedinrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.patchpanel.insertedinrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
