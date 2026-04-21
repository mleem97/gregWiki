---
title: ButtonDowngradeCommandCenter
description: Documentation for greg.SYSTEM.ButtonDowngradeCommandCenter
path: /api/hooks/system/buttondowngradecommandcenter
---

# ButtonDowngradeCommandCenter

> **Hook ID:** `greg.SYSTEM.ButtonDowngradeCommandCenter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CommandCenter.ButtonDowngradeCommandCenter

## Native Signature
```csharp
Il2Cpp.CommandCenter::ButtonDowngradeCommandCenter()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonDowngradeCommandCenter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonDowngradeCommandCenter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonDowngradeCommandCenter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonDowngradeCommandCenter", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonDowngradeCommandCenter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonDowngradeCommandCenter fired")

greg.on("greg.SYSTEM.ButtonDowngradeCommandCenter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonDowngradeCommandCenter", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonDowngradeCommandCenter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonDowngradeCommandCenter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonDowngradeCommandCenter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonDowngradeCommandCenter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
