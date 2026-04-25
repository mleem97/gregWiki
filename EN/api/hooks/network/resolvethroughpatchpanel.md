---
title: ResolveThroughPatchPanel
description: Documentation for greg.NETWORK.ResolveThroughPatchPanel
path: /api/hooks/network/resolvethroughpatchpanel
---

# ResolveThroughPatchPanel

> **Hook ID:** `greg.NETWORK.ResolveThroughPatchPanel`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.ResolveThroughPatchPanel

## Native Signature
```csharp
Il2Cpp.NetworkMap::ResolveThroughPatchPanel(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResolveThroughPatchPanel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ResolveThroughPatchPanel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ResolveThroughPatchPanel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ResolveThroughPatchPanel", function(payload)
    greg.log("Hook greg.NETWORK.ResolveThroughPatchPanel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ResolveThroughPatchPanel fired")

greg.on("greg.NETWORK.ResolveThroughPatchPanel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ResolveThroughPatchPanel", (payload) => {
    console.log("Hook greg.NETWORK.ResolveThroughPatchPanel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ResolveThroughPatchPanel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ResolveThroughPatchPanel", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ResolveThroughPatchPanel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
