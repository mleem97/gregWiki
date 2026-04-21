---
title: LACPGroupsSet
description: Documentation for greg.NETWORK.LACPGroupsSet
path: /api/hooks/network/lacpgroupsset
---

# LACPGroupsSet

> **Hook ID:** `greg.NETWORK.LACPGroupsSet`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.SetLACPGroups

## Native Signature
```csharp
Il2Cpp.NetworkMap::SetLACPGroups(Dictionary<int, NetworkMap.LACPGroup>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LACPGroupsSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.LACPGroupsSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.LACPGroupsSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.LACPGroupsSet", function(payload)
    greg.log("Hook greg.NETWORK.LACPGroupsSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.LACPGroupsSet fired")

greg.on("greg.NETWORK.LACPGroupsSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.LACPGroupsSet", (payload) => {
    console.log("Hook greg.NETWORK.LACPGroupsSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.LACPGroupsSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.LACPGroupsSet", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.LACPGroupsSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
