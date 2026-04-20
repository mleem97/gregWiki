---
title: CableLink.CollectPatchPanelChainCables
description: Hook event for CableLink.CollectPatchPanelChainCables
path: /api/hooks/networking/cable-link-collect-patch-panel-chain-cables
---

# CableLink.CollectPatchPanelChainCables

> **Hook ID:** `greg.networking.cablelink.collectpatchpanelchaincables`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CableLink.CollectPatchPanelChainCables()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 CollectPatchPanelChainCables(Int32 startCableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `startCableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `CollectPatchPanelChainCables` events in `CableLink`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.cablelink.collectpatchpanelchaincables", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.cablelink.collectpatchpanelchaincables", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.cablelink.collectpatchpanelchaincables")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.cablelink.collectpatchpanelchaincables", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.cablelink.collectpatchpanelchaincables", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.cablelink.collectpatchpanelchaincables", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
