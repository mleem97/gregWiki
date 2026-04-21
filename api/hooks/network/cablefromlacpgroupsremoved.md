---
title: CableFromLACPGroupsRemoved
description: Documentation for greg.NETWORK.CableFromLACPGroupsRemoved
path: /api/hooks/network/cablefromlacpgroupsremoved
---

# CableFromLACPGroupsRemoved

> **Hook ID:** `greg.NETWORK.CableFromLACPGroupsRemoved`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.RemoveCableFromLACPGroups

## Native Signature
```csharp
Il2Cpp.NetworkMap::RemoveCableFromLACPGroups(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CableFromLACPGroupsRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CableFromLACPGroupsRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CableFromLACPGroupsRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CableFromLACPGroupsRemoved", function(payload)
    greg.log("Hook greg.NETWORK.CableFromLACPGroupsRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CableFromLACPGroupsRemoved fired")

greg.on("greg.NETWORK.CableFromLACPGroupsRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CableFromLACPGroupsRemoved", (payload) => {
    console.log("Hook greg.NETWORK.CableFromLACPGroupsRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CableFromLACPGroupsRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CableFromLACPGroupsRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CableFromLACPGroupsRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
