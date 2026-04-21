---
title: InsertSFP
description: Documentation for greg.NETWORK.InsertSFP
path: /api/hooks/network/insertsfp
---

# InsertSFP

> **Hook ID:** `greg.NETWORK.InsertSFP`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.InsertSFP

## Native Signature
```csharp
Il2Cpp.CableLink::InsertSFP(float, int, SFPModule)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InsertSFP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.InsertSFP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.InsertSFP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.InsertSFP", function(payload)
    greg.log("Hook greg.NETWORK.InsertSFP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.InsertSFP fired")

greg.on("greg.NETWORK.InsertSFP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.InsertSFP", (payload) => {
    console.log("Hook greg.NETWORK.InsertSFP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.InsertSFP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.InsertSFP", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.InsertSFP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
