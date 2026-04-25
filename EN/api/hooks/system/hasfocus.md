---
title: HasFocus
description: Documentation for greg.SYSTEM.HasFocus
path: /api/hooks/system/hasfocus
---

# HasFocus

> **Hook ID:** `greg.SYSTEM.HasFocus`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.HasFocus

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::HasFocus(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HasFocus` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HasFocus", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HasFocus");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HasFocus", function(payload)
    greg.log("Hook greg.SYSTEM.HasFocus received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HasFocus fired")

greg.on("greg.SYSTEM.HasFocus", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HasFocus", (payload) => {
    console.log("Hook greg.SYSTEM.HasFocus triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HasFocus".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HasFocus", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HasFocus fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
