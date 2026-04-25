---
title: InsertDirectlyIntoPort
description: Documentation for greg.NETWORK.InsertDirectlyIntoPort
path: /api/hooks/network/insertdirectlyintoport
---

# InsertDirectlyIntoPort

> **Hook ID:** `greg.NETWORK.InsertDirectlyIntoPort`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.InsertDirectlyIntoPort

## Native Signature
```csharp
Il2Cpp.SFPModule::InsertDirectlyIntoPort(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InsertDirectlyIntoPort` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.InsertDirectlyIntoPort", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.InsertDirectlyIntoPort");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.InsertDirectlyIntoPort", function(payload)
    greg.log("Hook greg.NETWORK.InsertDirectlyIntoPort received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.InsertDirectlyIntoPort fired")

greg.on("greg.NETWORK.InsertDirectlyIntoPort", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.InsertDirectlyIntoPort", (payload) => {
    console.log("Hook greg.NETWORK.InsertDirectlyIntoPort triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.InsertDirectlyIntoPort".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.InsertDirectlyIntoPort", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.InsertDirectlyIntoPort fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
