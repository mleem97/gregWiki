---
title: GetPointAt
description: Documentation for greg.SYSTEM.GetPointAt
path: /api/hooks/system/getpointat
---

# GetPointAt

> **Hook ID:** `greg.SYSTEM.GetPointAt`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.GetPointAt

## Native Signature
```csharp
Il2Cpp.Rope::GetPointAt(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPointAt` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPointAt", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPointAt");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPointAt", function(payload)
    greg.log("Hook greg.SYSTEM.GetPointAt received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPointAt fired")

greg.on("greg.SYSTEM.GetPointAt", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPointAt", (payload) => {
    console.log("Hook greg.SYSTEM.GetPointAt triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPointAt".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPointAt", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPointAt fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
