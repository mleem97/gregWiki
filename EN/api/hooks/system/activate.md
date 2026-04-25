---
title: Activate
description: Documentation for greg.SYSTEM.Activate
path: /api/hooks/system/activate
---

# Activate

> **Hook ID:** `greg.SYSTEM.Activate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_GamepadHelper.Activate

## Native Signature
```csharp
Il2Cpp.OSK_GamepadHelper::Activate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Activate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Activate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Activate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Activate", function(payload)
    greg.log("Hook greg.SYSTEM.Activate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Activate fired")

greg.on("greg.SYSTEM.Activate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Activate", (payload) => {
    console.log("Hook greg.SYSTEM.Activate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Activate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Activate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Activate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
