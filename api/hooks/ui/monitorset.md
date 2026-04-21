---
title: MonitorSet
description: Documentation for greg.UI.MonitorSet
path: /api/hooks/ui/monitorset
---

# MonitorSet

> **Hook ID:** `greg.UI.MonitorSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.SetMonitor

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::SetMonitor(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MonitorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.MonitorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.MonitorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.MonitorSet", function(payload)
    greg.log("Hook greg.UI.MonitorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.MonitorSet fired")

greg.on("greg.UI.MonitorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.MonitorSet", (payload) => {
    console.log("Hook greg.UI.MonitorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.MonitorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.MonitorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.MonitorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
