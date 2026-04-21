---
title: Assign
description: Documentation for greg.SYSTEM.Assign
path: /api/hooks/system/assign
---

# Assign

> **Hook ID:** `greg.SYSTEM.Assign`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.Assign

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::Assign(OSK_KeyCode, OSK_KEY_TYPES, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Assign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Assign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Assign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Assign", function(payload)
    greg.log("Hook greg.SYSTEM.Assign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Assign fired")

greg.on("greg.SYSTEM.Assign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Assign", (payload) => {
    console.log("Hook greg.SYSTEM.Assign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Assign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Assign", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Assign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
