---
title: PickG
description: Documentation for greg.SYSTEM.PickG
path: /api/hooks/system/pickg
---

# PickG

> **Hook ID:** `greg.SYSTEM.PickG`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BufferedColor.PickG

## Native Signature
```csharp
Il2Cpp.BufferedColor::PickG(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PickG` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PickG", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PickG");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PickG", function(payload)
    greg.log("Hook greg.SYSTEM.PickG received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PickG fired")

greg.on("greg.SYSTEM.PickG", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PickG", (payload) => {
    console.log("Hook greg.SYSTEM.PickG triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PickG".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PickG", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PickG fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
