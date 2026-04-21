---
title: ButtonClearAllWarnings
description: Documentation for greg.SYSTEM.ButtonClearAllWarnings
path: /api/hooks/system/buttonclearallwarnings
---

# ButtonClearAllWarnings

> **Hook ID:** `greg.SYSTEM.ButtonClearAllWarnings`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonClearAllWarnings

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonClearAllWarnings()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonClearAllWarnings` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonClearAllWarnings", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonClearAllWarnings");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonClearAllWarnings", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonClearAllWarnings received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonClearAllWarnings fired")

greg.on("greg.SYSTEM.ButtonClearAllWarnings", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonClearAllWarnings", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonClearAllWarnings triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonClearAllWarnings".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonClearAllWarnings", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonClearAllWarnings fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
