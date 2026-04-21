---
title: UIChanged
description: Documentation for greg.SYSTEM.UIChanged
path: /api/hooks/system/uichanged
---

# UIChanged

> **Hook ID:** `greg.SYSTEM.UIChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ActionKeyHint.UpdateUI

## Native Signature
```csharp
Il2Cpp.ActionKeyHint::UpdateUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UIChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.UIChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.UIChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.UIChanged", function(payload)
    greg.log("Hook greg.SYSTEM.UIChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.UIChanged fired")

greg.on("greg.SYSTEM.UIChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.UIChanged", (payload) => {
    console.log("Hook greg.SYSTEM.UIChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.UIChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.UIChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.UIChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
