---
title: Text
description: Documentation for greg.SYSTEM.Text
path: /api/hooks/system/text
---

# Text

> **Hook ID:** `greg.SYSTEM.Text`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.Text

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::Text()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Text` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Text", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Text");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Text", function(payload)
    greg.log("Hook greg.SYSTEM.Text received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Text fired")

greg.on("greg.SYSTEM.Text", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Text", (payload) => {
    console.log("Hook greg.SYSTEM.Text triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Text".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Text", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Text fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
