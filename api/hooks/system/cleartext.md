---
title: ClearText
description: Documentation for greg.SYSTEM.ClearText
path: /api/hooks/system/cleartext
---

# ClearText

> **Hook ID:** `greg.SYSTEM.ClearText`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.ClearText

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::ClearText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClearText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClearText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClearText", function(payload)
    greg.log("Hook greg.SYSTEM.ClearText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClearText fired")

greg.on("greg.SYSTEM.ClearText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClearText", (payload) => {
    console.log("Hook greg.SYSTEM.ClearText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClearText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClearText", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClearText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
