---
title: System_Collections_IEnumerable_GetEnumerator
description: Documentation for greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator
path: /api/hooks/system/system-collections-ienumerable-getenumerator
---

# System_Collections_IEnumerable_GetEnumerator

> **Hook ID:** `greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputController.System_Collections_IEnumerable_GetEnumerator

## Native Signature
```csharp
Il2Cpp.InputController::System_Collections_IEnumerable_GetEnumerator()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `System_Collections_IEnumerable_GetEnumerator` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator", function(payload)
    greg.log("Hook greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator fired")

greg.on("greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator", (payload) => {
    console.log("Hook greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.System_Collections_IEnumerable_GetEnumerator fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
