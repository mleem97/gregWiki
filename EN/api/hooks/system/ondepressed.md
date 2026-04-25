---
title: OnDepressed
description: Documentation for greg.SYSTEM.OnDepressed
path: /api/hooks/system/ondepressed
---

# OnDepressed

> **Hook ID:** `greg.SYSTEM.OnDepressed`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.OnDepressed

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::OnDepressed()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDepressed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnDepressed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnDepressed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnDepressed", function(payload)
    greg.log("Hook greg.SYSTEM.OnDepressed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnDepressed fired")

greg.on("greg.SYSTEM.OnDepressed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnDepressed", (payload) => {
    console.log("Hook greg.SYSTEM.OnDepressed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnDepressed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnDepressed", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnDepressed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
