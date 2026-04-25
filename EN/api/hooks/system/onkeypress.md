---
title: OnKeyPress
description: Documentation for greg.SYSTEM.OnKeyPress
path: /api/hooks/system/onkeypress
---

# OnKeyPress

> **Hook ID:** `greg.SYSTEM.OnKeyPress`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.OnKeyPress

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::OnKeyPress(string, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnKeyPress` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnKeyPress", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnKeyPress");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnKeyPress", function(payload)
    greg.log("Hook greg.SYSTEM.OnKeyPress received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnKeyPress fired")

greg.on("greg.SYSTEM.OnKeyPress", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnKeyPress", (payload) => {
    console.log("Hook greg.SYSTEM.OnKeyPress triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnKeyPress".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnKeyPress", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnKeyPress fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
