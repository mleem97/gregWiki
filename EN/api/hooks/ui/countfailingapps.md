---
title: CountFailingApps
description: Documentation for greg.UI.CountFailingApps
path: /api/hooks/ui/countfailingapps
---

# CountFailingApps

> **Hook ID:** `greg.UI.CountFailingApps`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.CountFailingApps

## Native Signature
```csharp
Il2Cpp.BalanceSheet::CountFailingApps(CustomerBase)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CountFailingApps` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.CountFailingApps", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.CountFailingApps");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.CountFailingApps", function(payload)
    greg.log("Hook greg.UI.CountFailingApps received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.CountFailingApps fired")

greg.on("greg.UI.CountFailingApps", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.CountFailingApps", (payload) => {
    console.log("Hook greg.UI.CountFailingApps triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.CountFailingApps".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.CountFailingApps", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.CountFailingApps fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
