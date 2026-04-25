---
title: RouteEvalIntervalSet
description: Documentation for greg.UI.RouteEvalIntervalSet
path: /api/hooks/ui/routeevalintervalset
---

# RouteEvalIntervalSet

> **Hook ID:** `greg.UI.RouteEvalIntervalSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGameplay.SetRouteEvalInterval

## Native Signature
```csharp
Il2Cpp.SettingsGameplay::SetRouteEvalInterval(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RouteEvalIntervalSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.RouteEvalIntervalSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.RouteEvalIntervalSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.RouteEvalIntervalSet", function(payload)
    greg.log("Hook greg.UI.RouteEvalIntervalSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.RouteEvalIntervalSet fired")

greg.on("greg.UI.RouteEvalIntervalSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.RouteEvalIntervalSet", (payload) => {
    console.log("Hook greg.UI.RouteEvalIntervalSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.RouteEvalIntervalSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.RouteEvalIntervalSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.RouteEvalIntervalSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
