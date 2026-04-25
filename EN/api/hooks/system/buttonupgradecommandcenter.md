---
title: ButtonUpgradeCommandCenter
description: Documentation for greg.SYSTEM.ButtonUpgradeCommandCenter
path: /api/hooks/system/buttonupgradecommandcenter
---

# ButtonUpgradeCommandCenter

> **Hook ID:** `greg.SYSTEM.ButtonUpgradeCommandCenter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.ButtonUpgradeCommandCenter

## Native Signature
```csharp
Il2Cpp.CommandCenter::ButtonUpgradeCommandCenter()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonUpgradeCommandCenter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonUpgradeCommandCenter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonUpgradeCommandCenter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonUpgradeCommandCenter", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonUpgradeCommandCenter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonUpgradeCommandCenter fired")

greg.on("greg.SYSTEM.ButtonUpgradeCommandCenter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonUpgradeCommandCenter", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonUpgradeCommandCenter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonUpgradeCommandCenter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonUpgradeCommandCenter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonUpgradeCommandCenter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
