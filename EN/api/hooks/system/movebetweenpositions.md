---
title: MoveBetweenPositions
description: Documentation for greg.SYSTEM.MoveBetweenPositions
path: /api/hooks/system/movebetweenpositions
---

# MoveBetweenPositions

> **Hook ID:** `greg.SYSTEM.MoveBetweenPositions`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.MoveBetweenPositions

## Native Signature
```csharp
Il2Cpp.UsableObject::MoveBetweenPositions(Vector3, Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MoveBetweenPositions` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MoveBetweenPositions", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MoveBetweenPositions");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MoveBetweenPositions", function(payload)
    greg.log("Hook greg.SYSTEM.MoveBetweenPositions received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MoveBetweenPositions fired")

greg.on("greg.SYSTEM.MoveBetweenPositions", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MoveBetweenPositions", (payload) => {
    console.log("Hook greg.SYSTEM.MoveBetweenPositions triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MoveBetweenPositions".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MoveBetweenPositions", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MoveBetweenPositions fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
