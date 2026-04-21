---
title: ButtonClearWarningSign
description: Documentation for greg.SYSTEM.ButtonClearWarningSign
path: /api/hooks/system/buttonclearwarningsign
---

# ButtonClearWarningSign

> **Hook ID:** `greg.SYSTEM.ButtonClearWarningSign`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagementDeviceLine.ButtonClearWarningSign

## Native Signature
```csharp
Il2Cpp.AssetManagementDeviceLine::ButtonClearWarningSign()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonClearWarningSign` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonClearWarningSign", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonClearWarningSign");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonClearWarningSign", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonClearWarningSign received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonClearWarningSign fired")

greg.on("greg.SYSTEM.ButtonClearWarningSign", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonClearWarningSign", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonClearWarningSign triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonClearWarningSign".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonClearWarningSign", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonClearWarningSign fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
