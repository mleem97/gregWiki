---
title: PickA
description: Documentation for greg.SYSTEM.PickA
path: /api/hooks/system/picka
---

# PickA

> **Hook ID:** `greg.SYSTEM.PickA`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BufferedColor.PickA

## Native Signature
```csharp
Il2Cpp.BufferedColor::PickA(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PickA` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PickA", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PickA");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PickA", function(payload)
    greg.log("Hook greg.SYSTEM.PickA received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PickA fired")

greg.on("greg.SYSTEM.PickA", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PickA", (payload) => {
    console.log("Hook greg.SYSTEM.PickA triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PickA".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PickA", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PickA fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
