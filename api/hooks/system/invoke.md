---
title: Invoke
description: Documentation for greg.SYSTEM.Invoke
path: /api/hooks/system/invoke
---

# Invoke

> **Hook ID:** `greg.SYSTEM.Invoke`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnEndOfTheDay.Invoke

## Native Signature
```csharp
Il2Cpp.OnEndOfTheDay::Invoke()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Invoke` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Invoke", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Invoke");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Invoke", function(payload)
    greg.log("Hook greg.SYSTEM.Invoke received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Invoke fired")

greg.on("greg.SYSTEM.Invoke", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Invoke", (payload) => {
    console.log("Hook greg.SYSTEM.Invoke triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Invoke".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Invoke", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Invoke fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
