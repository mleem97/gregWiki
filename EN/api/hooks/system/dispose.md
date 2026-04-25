---
title: Dispose
description: Documentation for greg.SYSTEM.Dispose
path: /api/hooks/system/dispose
---

# Dispose

> **Hook ID:** `greg.SYSTEM.Dispose`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Enumerator.Dispose

## Native Signature
```csharp
Il2Cpp.Enumerator::Dispose()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Dispose` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Dispose", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Dispose");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Dispose", function(payload)
    greg.log("Hook greg.SYSTEM.Dispose received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Dispose fired")

greg.on("greg.SYSTEM.Dispose", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Dispose", (payload) => {
    console.log("Hook greg.SYSTEM.Dispose triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Dispose".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Dispose", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Dispose fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
