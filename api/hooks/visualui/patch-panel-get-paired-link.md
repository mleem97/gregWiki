---
title: PatchPanel.GetPairedLink
description: Hook event for PatchPanel.GetPairedLink
path: /api/hooks/visualui/patch-panel-get-paired-link
---

# PatchPanel.GetPairedLink

> **Hook ID:** `greg.visualui.patchpanel.getpairedlink`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PatchPanel.GetPairedLink()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
CableLink GetPairedLink(CableLink link)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `link` | `CableLink` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetPairedLink` events in `PatchPanel`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.patchpanel.getpairedlink", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.patchpanel.getpairedlink", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.patchpanel.getpairedlink")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.patchpanel.getpairedlink", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.patchpanel.getpairedlink", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.patchpanel.getpairedlink", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `CableLink`
- **Safe to block?**: Yes
