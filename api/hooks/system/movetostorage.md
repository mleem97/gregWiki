---
title: MoveToStorage
description: Documentation for greg.SYSTEM.MoveToStorage
path: /api/hooks/system/movetostorage
---

# MoveToStorage

> **Hook ID:** `greg.SYSTEM.MoveToStorage`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.MoveToStorage

## Native Signature
```csharp
Il2Cpp.UsableObject::MoveToStorage(Transform, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MoveToStorage` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MoveToStorage", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MoveToStorage");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MoveToStorage", function(payload)
    greg.log("Hook greg.SYSTEM.MoveToStorage received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MoveToStorage fired")

greg.on("greg.SYSTEM.MoveToStorage", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MoveToStorage", (payload) => {
    console.log("Hook greg.SYSTEM.MoveToStorage triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MoveToStorage".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MoveToStorage", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MoveToStorage fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
