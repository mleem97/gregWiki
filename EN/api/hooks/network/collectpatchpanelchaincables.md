---
title: CollectPatchPanelChainCables
description: Documentation for greg.NETWORK.CollectPatchPanelChainCables
path: /api/hooks/network/collectpatchpanelchaincables
---

# CollectPatchPanelChainCables

> **Hook ID:** `greg.NETWORK.CollectPatchPanelChainCables`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.CollectPatchPanelChainCables

## Native Signature
```csharp
Il2Cpp.CableLink::CollectPatchPanelChainCables(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CollectPatchPanelChainCables` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CollectPatchPanelChainCables", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CollectPatchPanelChainCables");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CollectPatchPanelChainCables", function(payload)
    greg.log("Hook greg.NETWORK.CollectPatchPanelChainCables received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CollectPatchPanelChainCables fired")

greg.on("greg.NETWORK.CollectPatchPanelChainCables", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CollectPatchPanelChainCables", (payload) => {
    console.log("Hook greg.NETWORK.CollectPatchPanelChainCables triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CollectPatchPanelChainCables".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CollectPatchPanelChainCables", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CollectPatchPanelChainCables fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
