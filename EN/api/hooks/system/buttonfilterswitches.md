---
title: ButtonFilterSwitches
description: Documentation for greg.SYSTEM.ButtonFilterSwitches
path: /api/hooks/system/buttonfilterswitches
---

# ButtonFilterSwitches

> **Hook ID:** `greg.SYSTEM.ButtonFilterSwitches`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonFilterSwitches

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonFilterSwitches()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFilterSwitches` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonFilterSwitches", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonFilterSwitches");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonFilterSwitches", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonFilterSwitches received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonFilterSwitches fired")

greg.on("greg.SYSTEM.ButtonFilterSwitches", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonFilterSwitches", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonFilterSwitches triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonFilterSwitches".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonFilterSwitches", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonFilterSwitches fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
