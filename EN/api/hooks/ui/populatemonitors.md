---
title: PopulateMonitors
description: Documentation for greg.UI.PopulateMonitors
path: /api/hooks/ui/populatemonitors
---

# PopulateMonitors

> **Hook ID:** `greg.UI.PopulateMonitors`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.PopulateMonitors

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::PopulateMonitors()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PopulateMonitors` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.PopulateMonitors", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.PopulateMonitors");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.PopulateMonitors", function(payload)
    greg.log("Hook greg.UI.PopulateMonitors received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.PopulateMonitors fired")

greg.on("greg.UI.PopulateMonitors", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.PopulateMonitors", (payload) => {
    console.log("Hook greg.UI.PopulateMonitors triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.PopulateMonitors".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.PopulateMonitors", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.PopulateMonitors fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
