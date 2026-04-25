---
title: GetAllDisallowedVlans
description: Documentation for greg.NETWORK.GetAllDisallowedVlans
path: /api/hooks/network/getalldisallowedvlans
---

# GetAllDisallowedVlans

> **Hook ID:** `greg.NETWORK.GetAllDisallowedVlans`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.GetAllDisallowedVlans

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::GetAllDisallowedVlans()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllDisallowedVlans` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllDisallowedVlans", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllDisallowedVlans");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllDisallowedVlans", function(payload)
    greg.log("Hook greg.NETWORK.GetAllDisallowedVlans received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllDisallowedVlans fired")

greg.on("greg.NETWORK.GetAllDisallowedVlans", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllDisallowedVlans", (payload) => {
    console.log("Hook greg.NETWORK.GetAllDisallowedVlans triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllDisallowedVlans".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllDisallowedVlans", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllDisallowedVlans fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
