---
title: IsPatchPanelPort
description: Documentation for greg.NETWORK.IsPatchPanelPort
path: /api/hooks/network/ispatchpanelport
---

# IsPatchPanelPort

> **Hook ID:** `greg.NETWORK.IsPatchPanelPort`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.IsPatchPanelPort

## Native Signature
```csharp
Il2Cpp.NetworkMap::IsPatchPanelPort(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsPatchPanelPort` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsPatchPanelPort", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsPatchPanelPort");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsPatchPanelPort", function(payload)
    greg.log("Hook greg.NETWORK.IsPatchPanelPort received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsPatchPanelPort fired")

greg.on("greg.NETWORK.IsPatchPanelPort", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsPatchPanelPort", (payload) => {
    console.log("Hook greg.NETWORK.IsPatchPanelPort triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsPatchPanelPort".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsPatchPanelPort", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsPatchPanelPort fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
