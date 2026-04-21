---
title: Cursor
description: Documentation for greg.SYSTEM.Cursor
path: /api/hooks/system/cursor
---

# Cursor

> **Hook ID:** `greg.SYSTEM.Cursor`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Cursor.Cursor

## Native Signature
```csharp
Il2Cpp.OSK_UI_Cursor::Cursor()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Cursor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Cursor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Cursor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Cursor", function(payload)
    greg.log("Hook greg.SYSTEM.Cursor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Cursor fired")

greg.on("greg.SYSTEM.Cursor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Cursor", (payload) => {
    console.log("Hook greg.SYSTEM.Cursor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Cursor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Cursor", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Cursor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
