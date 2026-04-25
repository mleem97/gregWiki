---
title: ButtonHideShowHint
description: Documentation for greg.SYSTEM.ButtonHideShowHint
path: /api/hooks/system/buttonhideshowhint
---

# ButtonHideShowHint

> **Hook ID:** `greg.SYSTEM.ButtonHideShowHint`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ButtonHideShowHint

## Native Signature
```csharp
Il2Cpp.SetIP::ButtonHideShowHint()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonHideShowHint` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonHideShowHint", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonHideShowHint");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonHideShowHint", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonHideShowHint received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonHideShowHint fired")

greg.on("greg.SYSTEM.ButtonHideShowHint", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonHideShowHint", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonHideShowHint triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonHideShowHint".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonHideShowHint", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonHideShowHint fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
