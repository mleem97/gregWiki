---
title: BackScale
description: Documentation for greg.SYSTEM.BackScale
path: /api/hooks/system/backscale
---

# BackScale

> **Hook ID:** `greg.SYSTEM.BackScale`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.BackScale

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::BackScale(Vector3)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BackScale` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.BackScale", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.BackScale");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.BackScale", function(payload)
    greg.log("Hook greg.SYSTEM.BackScale received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.BackScale fired")

greg.on("greg.SYSTEM.BackScale", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.BackScale", (payload) => {
    console.log("Hook greg.SYSTEM.BackScale triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.BackScale".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.BackScale", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.BackScale fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
