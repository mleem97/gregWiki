---
title: MessagesCoroutineChanged
description: Documentation for greg.SYSTEM.MessagesCoroutineChanged
path: /api/hooks/system/messagescoroutinechanged
---

# MessagesCoroutineChanged

> **Hook ID:** `greg.SYSTEM.MessagesCoroutineChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.UpdateMessagesCoroutine

## Native Signature
```csharp
Il2Cpp.StaticUIElements::UpdateMessagesCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MessagesCoroutineChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MessagesCoroutineChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MessagesCoroutineChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MessagesCoroutineChanged", function(payload)
    greg.log("Hook greg.SYSTEM.MessagesCoroutineChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MessagesCoroutineChanged fired")

greg.on("greg.SYSTEM.MessagesCoroutineChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MessagesCoroutineChanged", (payload) => {
    console.log("Hook greg.SYSTEM.MessagesCoroutineChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MessagesCoroutineChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MessagesCoroutineChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MessagesCoroutineChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
