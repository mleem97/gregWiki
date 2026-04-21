---
title: DelayedUpdateUI
description: Documentation for greg.SYSTEM.DelayedUpdateUI
path: /api/hooks/system/delayedupdateui
---

# DelayedUpdateUI

> **Hook ID:** `greg.SYSTEM.DelayedUpdateUI`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ActionKeyHint.DelayedUpdateUI

## Native Signature
```csharp
Il2Cpp.ActionKeyHint::DelayedUpdateUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DelayedUpdateUI` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DelayedUpdateUI", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DelayedUpdateUI");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DelayedUpdateUI", function(payload)
    greg.log("Hook greg.SYSTEM.DelayedUpdateUI received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DelayedUpdateUI fired")

greg.on("greg.SYSTEM.DelayedUpdateUI", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DelayedUpdateUI", (payload) => {
    console.log("Hook greg.SYSTEM.DelayedUpdateUI triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DelayedUpdateUI".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DelayedUpdateUI", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DelayedUpdateUI fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
