---
title: Prep
description: Documentation for greg.SYSTEM.Prep
path: /api/hooks/system/prep
---

# Prep

> **Hook ID:** `greg.SYSTEM.Prep`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.Prep

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::Prep()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Prep` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Prep", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Prep");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Prep", function(payload)
    greg.log("Hook greg.SYSTEM.Prep received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Prep fired")

greg.on("greg.SYSTEM.Prep", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Prep", (payload) => {
    console.log("Hook greg.SYSTEM.Prep triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Prep".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Prep", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Prep fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
