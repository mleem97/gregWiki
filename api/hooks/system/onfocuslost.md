---
title: OnFocusLost
description: Documentation for greg.SYSTEM.OnFocusLost
path: /api/hooks/system/onfocuslost
---

# OnFocusLost

> **Hook ID:** `greg.SYSTEM.OnFocusLost`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.OnFocusLost

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::OnFocusLost()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnFocusLost` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnFocusLost", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnFocusLost");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnFocusLost", function(payload)
    greg.log("Hook greg.SYSTEM.OnFocusLost received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnFocusLost fired")

greg.on("greg.SYSTEM.OnFocusLost", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnFocusLost", (payload) => {
    console.log("Hook greg.SYSTEM.OnFocusLost triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnFocusLost".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnFocusLost", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnFocusLost fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
