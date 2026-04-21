---
title: CreateLACP
description: Documentation for greg.NETWORK.CreateLACP
path: /api/hooks/network/createlacp
---

# CreateLACP

> **Hook ID:** `greg.NETWORK.CreateLACP`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.CreateLACP

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::CreateLACP()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateLACP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CreateLACP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CreateLACP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CreateLACP", function(payload)
    greg.log("Hook greg.NETWORK.CreateLACP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CreateLACP fired")

greg.on("greg.NETWORK.CreateLACP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CreateLACP", (payload) => {
    console.log("Hook greg.NETWORK.CreateLACP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CreateLACP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CreateLACP", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CreateLACP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
