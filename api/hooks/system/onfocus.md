---
title: OnFocus
description: Documentation for greg.SYSTEM.OnFocus
path: /api/hooks/system/onfocus
---

# OnFocus

> **Hook ID:** `greg.SYSTEM.OnFocus`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.OnFocus

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::OnFocus()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnFocus` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnFocus", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnFocus");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnFocus", function(payload)
    greg.log("Hook greg.SYSTEM.OnFocus received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnFocus fired")

greg.on("greg.SYSTEM.OnFocus", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnFocus", (payload) => {
    console.log("Hook greg.SYSTEM.OnFocus triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnFocus".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnFocus", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnFocus fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
