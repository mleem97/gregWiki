---
title: PatchPanel.GenerateUniquePatchPanelId
description: Hook event for PatchPanel.GenerateUniquePatchPanelId
path: /api/hooks/visualui/patch-panel-generate-unique-patch-panel-id
---

# PatchPanel.GenerateUniquePatchPanelId

> **Hook ID:** `greg.visualui.patchpanel.generateuniquepatchpanelid`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PatchPanel.GenerateUniquePatchPanelId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GenerateUniquePatchPanelId()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GenerateUniquePatchPanelId` events in `PatchPanel`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.patchpanel.generateuniquepatchpanelid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.patchpanel.generateuniquepatchpanelid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.patchpanel.generateuniquepatchpanelid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.patchpanel.generateuniquepatchpanelid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.patchpanel.generateuniquepatchpanelid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.patchpanel.generateuniquepatchpanelid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
