---
title: CreateLACPGroup
description: Documentation for greg.NETWORK.CreateLACPGroup
path: /api/hooks/network/createlacpgroup
---

# CreateLACPGroup

> **Hook ID:** `greg.NETWORK.CreateLACPGroup`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.CreateLACPGroup

## Native Signature
```csharp
Il2Cpp.NetworkMap::CreateLACPGroup(string, string, List<int>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateLACPGroup` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CreateLACPGroup", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CreateLACPGroup");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CreateLACPGroup", function(payload)
    greg.log("Hook greg.NETWORK.CreateLACPGroup received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CreateLACPGroup fired")

greg.on("greg.NETWORK.CreateLACPGroup", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CreateLACPGroup", (payload) => {
    console.log("Hook greg.NETWORK.CreateLACPGroup triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CreateLACPGroup".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CreateLACPGroup", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CreateLACPGroup fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
