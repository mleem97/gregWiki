---
title: GetDisallowedVlans
description: Documentation for greg.NETWORK.GetDisallowedVlans
path: /api/hooks/network/getdisallowedvlans
---

# GetDisallowedVlans

> **Hook ID:** `greg.NETWORK.GetDisallowedVlans`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.GetDisallowedVlans

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::GetDisallowedVlans(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetDisallowedVlans` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetDisallowedVlans", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetDisallowedVlans");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetDisallowedVlans", function(payload)
    greg.log("Hook greg.NETWORK.GetDisallowedVlans received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetDisallowedVlans fired")

greg.on("greg.NETWORK.GetDisallowedVlans", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetDisallowedVlans", (payload) => {
    console.log("Hook greg.NETWORK.GetDisallowedVlans triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetDisallowedVlans".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetDisallowedVlans", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetDisallowedVlans fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
