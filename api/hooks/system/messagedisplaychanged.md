---
title: MessageDisplayChanged
description: Documentation for greg.SYSTEM.MessageDisplayChanged
path: /api/hooks/system/messagedisplaychanged
---

# MessageDisplayChanged

> **Hook ID:** `greg.SYSTEM.MessageDisplayChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.UpdateMessageDisplay

## Native Signature
```csharp
Il2Cpp.StaticUIElements::UpdateMessageDisplay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MessageDisplayChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MessageDisplayChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MessageDisplayChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MessageDisplayChanged", function(payload)
    greg.log("Hook greg.SYSTEM.MessageDisplayChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MessageDisplayChanged fired")

greg.on("greg.SYSTEM.MessageDisplayChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MessageDisplayChanged", (payload) => {
    console.log("Hook greg.SYSTEM.MessageDisplayChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MessageDisplayChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MessageDisplayChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MessageDisplayChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
