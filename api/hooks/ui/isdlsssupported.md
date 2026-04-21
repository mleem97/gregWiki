---
title: IsDLSSSupported
description: Documentation for greg.UI.IsDLSSSupported
path: /api/hooks/ui/isdlsssupported
---

# IsDLSSSupported

> **Hook ID:** `greg.UI.IsDLSSSupported`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGraphics.IsDLSSSupported

## Native Signature
```csharp
Il2Cpp.SettingsGraphics::IsDLSSSupported()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsDLSSSupported` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.IsDLSSSupported", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.IsDLSSSupported");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.IsDLSSSupported", function(payload)
    greg.log("Hook greg.UI.IsDLSSSupported received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.IsDLSSSupported fired")

greg.on("greg.UI.IsDLSSSupported", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.IsDLSSSupported", (payload) => {
    console.log("Hook greg.UI.IsDLSSSupported triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.IsDLSSSupported".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.IsDLSSSupported", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.IsDLSSSupported fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
