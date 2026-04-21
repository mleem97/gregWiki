---
title: GetRandomFromRequest
description: Documentation for greg.SYSTEM.GetRandomFromRequest
path: /api/hooks/system/getrandomfromrequest
---

# GetRandomFromRequest

> **Hook ID:** `greg.SYSTEM.GetRandomFromRequest`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FootSteps.GetRandomFromRequest

## Native Signature
```csharp
Il2Cpp.FootSteps::GetRandomFromRequest(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetRandomFromRequest` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetRandomFromRequest", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetRandomFromRequest");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetRandomFromRequest", function(payload)
    greg.log("Hook greg.SYSTEM.GetRandomFromRequest received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetRandomFromRequest fired")

greg.on("greg.SYSTEM.GetRandomFromRequest", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetRandomFromRequest", (payload) => {
    console.log("Hook greg.SYSTEM.GetRandomFromRequest triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetRandomFromRequest".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetRandomFromRequest", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetRandomFromRequest fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
