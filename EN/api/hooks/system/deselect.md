---
title: Deselect
description: Documentation for greg.SYSTEM.Deselect
path: /api/hooks/system/deselect
---

# Deselect

> **Hook ID:** `greg.SYSTEM.Deselect`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_CustomReceiver.Deselect

## Native Signature
```csharp
Il2Cpp.OSK_UI_CustomReceiver::Deselect()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Deselect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Deselect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Deselect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Deselect", function(payload)
    greg.log("Hook greg.SYSTEM.Deselect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Deselect fired")

greg.on("greg.SYSTEM.Deselect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Deselect", (payload) => {
    console.log("Hook greg.SYSTEM.Deselect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Deselect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Deselect", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Deselect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
