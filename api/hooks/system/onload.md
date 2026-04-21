---
title: OnLoad
description: Documentation for greg.SYSTEM.OnLoad
path: /api/hooks/system/onload
---

# OnLoad

> **Hook ID:** `greg.SYSTEM.OnLoad`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Wall.OnLoad

## Native Signature
```csharp
Il2Cpp.Wall::OnLoad()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLoad", function(payload)
    greg.log("Hook greg.SYSTEM.OnLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLoad fired")

greg.on("greg.SYSTEM.OnLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLoad", (payload) => {
    console.log("Hook greg.SYSTEM.OnLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
