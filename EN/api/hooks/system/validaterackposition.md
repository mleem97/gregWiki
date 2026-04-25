---
title: ValidateRackPosition
description: Documentation for greg.SYSTEM.ValidateRackPosition
path: /api/hooks/system/validaterackposition
---

# ValidateRackPosition

> **Hook ID:** `greg.SYSTEM.ValidateRackPosition`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PatchPanel.ValidateRackPosition

## Native Signature
```csharp
Il2Cpp.PatchPanel::ValidateRackPosition()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ValidateRackPosition` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ValidateRackPosition", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ValidateRackPosition");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ValidateRackPosition", function(payload)
    greg.log("Hook greg.SYSTEM.ValidateRackPosition received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ValidateRackPosition fired")

greg.on("greg.SYSTEM.ValidateRackPosition", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ValidateRackPosition", (payload) => {
    console.log("Hook greg.SYSTEM.ValidateRackPosition triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ValidateRackPosition".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ValidateRackPosition", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ValidateRackPosition fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
