---
title: InsertedInSFPPort
description: Documentation for greg.NETWORK.InsertedInSFPPort
path: /api/hooks/network/insertedinsfpport
---

# InsertedInSFPPort

> **Hook ID:** `greg.NETWORK.InsertedInSFPPort`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.InsertedInSFPPort

## Native Signature
```csharp
Il2Cpp.SFPModule::InsertedInSFPPort(CableLink, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InsertedInSFPPort` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.InsertedInSFPPort", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.InsertedInSFPPort");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.InsertedInSFPPort", function(payload)
    greg.log("Hook greg.NETWORK.InsertedInSFPPort received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.InsertedInSFPPort fired")

greg.on("greg.NETWORK.InsertedInSFPPort", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.InsertedInSFPPort", (payload) => {
    console.log("Hook greg.NETWORK.InsertedInSFPPort triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.InsertedInSFPPort".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.InsertedInSFPPort", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.InsertedInSFPPort fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
