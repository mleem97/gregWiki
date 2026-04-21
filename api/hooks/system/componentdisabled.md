---
title: ComponentDisabled
description: Documentation for greg.SYSTEM.ComponentDisabled
path: /api/hooks/system/componentdisabled
---

# ComponentDisabled

> **Hook ID:** `greg.SYSTEM.ComponentDisabled`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Cursor.OnDisable

## Native Signature
```csharp
Il2Cpp.OSK_UI_Cursor::OnDisable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentDisabled` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ComponentDisabled", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ComponentDisabled");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ComponentDisabled", function(payload)
    greg.log("Hook greg.SYSTEM.ComponentDisabled received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ComponentDisabled fired")

greg.on("greg.SYSTEM.ComponentDisabled", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ComponentDisabled", (payload) => {
    console.log("Hook greg.SYSTEM.ComponentDisabled triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ComponentDisabled".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ComponentDisabled", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ComponentDisabled fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
