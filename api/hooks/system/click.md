---
title: Click
description: Documentation for greg.SYSTEM.Click
path: /api/hooks/system/click
---

# Click

> **Hook ID:** `greg.SYSTEM.Click`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.Click

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::Click(string, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Click` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Click", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Click");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Click", function(payload)
    greg.log("Hook greg.SYSTEM.Click received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Click fired")

greg.on("greg.SYSTEM.Click", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Click", (payload) => {
    console.log("Hook greg.SYSTEM.Click triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Click".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Click", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Click fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
