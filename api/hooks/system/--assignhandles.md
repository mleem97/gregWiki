---
title: __AssignHandles
description: Documentation for greg.SYSTEM.__AssignHandles
path: /api/hooks/system/--assignhandles
---

# __AssignHandles

> **Hook ID:** `greg.SYSTEM.__AssignHandles`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TypeHandle.__AssignHandles

## Native Signature
```csharp
Il2Cpp.TypeHandle::__AssignHandles(SystemState)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__AssignHandles` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.__AssignHandles", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.__AssignHandles");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.__AssignHandles", function(payload)
    greg.log("Hook greg.SYSTEM.__AssignHandles received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.__AssignHandles fired")

greg.on("greg.SYSTEM.__AssignHandles", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.__AssignHandles", (payload) => {
    console.log("Hook greg.SYSTEM.__AssignHandles triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.__AssignHandles".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.__AssignHandles", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.__AssignHandles fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
