---
title: GetLACPGroupForCable
description: Documentation for greg.NETWORK.GetLACPGroupForCable
path: /api/hooks/network/getlacpgroupforcable
---

# GetLACPGroupForCable

> **Hook ID:** `greg.NETWORK.GetLACPGroupForCable`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.GetLACPGroupForCable

## Native Signature
```csharp
Il2Cpp.NetworkMap::GetLACPGroupForCable(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetLACPGroupForCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetLACPGroupForCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetLACPGroupForCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetLACPGroupForCable", function(payload)
    greg.log("Hook greg.NETWORK.GetLACPGroupForCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetLACPGroupForCable fired")

greg.on("greg.NETWORK.GetLACPGroupForCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetLACPGroupForCable", (payload) => {
    console.log("Hook greg.NETWORK.GetLACPGroupForCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetLACPGroupForCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetLACPGroupForCable", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetLACPGroupForCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
