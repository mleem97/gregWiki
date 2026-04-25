---
title: GetLACPGroupBetween
description: Documentation for greg.NETWORK.GetLACPGroupBetween
path: /api/hooks/network/getlacpgroupbetween
---

# GetLACPGroupBetween

> **Hook ID:** `greg.NETWORK.GetLACPGroupBetween`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetLACPGroupBetween

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetLACPGroupBetween(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetLACPGroupBetween` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetLACPGroupBetween", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetLACPGroupBetween");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetLACPGroupBetween", function(payload)
    greg.log("Hook greg.NETWORK.GetLACPGroupBetween received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetLACPGroupBetween fired")

greg.on("greg.NETWORK.GetLACPGroupBetween", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetLACPGroupBetween", (payload) => {
    console.log("Hook greg.NETWORK.GetLACPGroupBetween triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetLACPGroupBetween".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetLACPGroupBetween", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetLACPGroupBetween fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
