---
title: TrackFinances
description: Documentation for greg.UI.TrackFinances
path: /api/hooks/ui/trackfinances
---

# TrackFinances

> **Hook ID:** `greg.UI.TrackFinances`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.TrackFinances

## Native Signature
```csharp
Il2Cpp.BalanceSheet::TrackFinances()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TrackFinances` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.TrackFinances", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.TrackFinances");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.TrackFinances", function(payload)
    greg.log("Hook greg.UI.TrackFinances received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.TrackFinances fired")

greg.on("greg.UI.TrackFinances", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.TrackFinances", (payload) => {
    console.log("Hook greg.UI.TrackFinances triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.TrackFinances".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.TrackFinances", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.TrackFinances fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
