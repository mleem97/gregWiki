---
title: TraversePatchPanels
description: Documentation for greg.NETWORK.TraversePatchPanels
path: /api/hooks/network/traversepatchpanels
---

# TraversePatchPanels

> **Hook ID:** `greg.NETWORK.TraversePatchPanels`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.TraversePatchPanels

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::TraversePatchPanels(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TraversePatchPanels` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.TraversePatchPanels", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.TraversePatchPanels");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.TraversePatchPanels", function(payload)
    greg.log("Hook greg.NETWORK.TraversePatchPanels received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.TraversePatchPanels fired")

greg.on("greg.NETWORK.TraversePatchPanels", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.TraversePatchPanels", (payload) => {
    console.log("Hook greg.NETWORK.TraversePatchPanels triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.TraversePatchPanels".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.TraversePatchPanels", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.TraversePatchPanels fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
