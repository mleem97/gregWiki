---
title: InsertText
description: Documentation for greg.SYSTEM.InsertText
path: /api/hooks/system/inserttext
---

# InsertText

> **Hook ID:** `greg.SYSTEM.InsertText`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.InsertText

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::InsertText(string, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InsertText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InsertText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InsertText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InsertText", function(payload)
    greg.log("Hook greg.SYSTEM.InsertText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InsertText fired")

greg.on("greg.SYSTEM.InsertText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InsertText", (payload) => {
    console.log("Hook greg.SYSTEM.InsertText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InsertText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InsertText", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InsertText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
