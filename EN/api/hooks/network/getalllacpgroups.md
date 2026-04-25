---
title: GetAllLACPGroups
description: Documentation for greg.NETWORK.GetAllLACPGroups
path: /api/hooks/network/getalllacpgroups
---

# GetAllLACPGroups

> **Hook ID:** `greg.NETWORK.GetAllLACPGroups`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetAllLACPGroups

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetAllLACPGroups()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllLACPGroups` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetAllLACPGroups", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetAllLACPGroups");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetAllLACPGroups", function(payload)
    greg.log("Hook greg.NETWORK.GetAllLACPGroups received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetAllLACPGroups fired")

greg.on("greg.NETWORK.GetAllLACPGroups", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetAllLACPGroups", (payload) => {
    console.log("Hook greg.NETWORK.GetAllLACPGroups triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetAllLACPGroups".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetAllLACPGroups", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetAllLACPGroups fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
