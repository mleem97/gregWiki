---
title: Del
description: Documentation for greg.SYSTEM.Del
path: /api/hooks/system/del
---

# Del

> **Hook ID:** `greg.SYSTEM.Del`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.Del

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::Del()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Del` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Del", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Del");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Del", function(payload)
    greg.log("Hook greg.SYSTEM.Del received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Del fired")

greg.on("greg.SYSTEM.Del", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Del", (payload) => {
    console.log("Hook greg.SYSTEM.Del triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Del".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Del", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Del fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
