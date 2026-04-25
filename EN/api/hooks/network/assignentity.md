---
title: AssignEntity
description: Documentation for greg.NETWORK.AssignEntity
path: /api/hooks/network/assignentity
---

# AssignEntity

> **Hook ID:** `greg.NETWORK.AssignEntity`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.AssignEntity

## Native Signature
```csharp
Il2Cpp.CablePositions::AssignEntity(int, Entity)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AssignEntity` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.AssignEntity", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.AssignEntity");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.AssignEntity", function(payload)
    greg.log("Hook greg.NETWORK.AssignEntity received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.AssignEntity fired")

greg.on("greg.NETWORK.AssignEntity", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.AssignEntity", (payload) => {
    console.log("Hook greg.NETWORK.AssignEntity triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.AssignEntity".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.AssignEntity", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.AssignEntity fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
