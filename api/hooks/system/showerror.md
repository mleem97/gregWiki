---
title: ShowError
description: Documentation for greg.SYSTEM.ShowError
path: /api/hooks/system/showerror
---

# ShowError

> **Hook ID:** `greg.SYSTEM.ShowError`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UserReport.ShowError

## Native Signature
```csharp
Il2Cpp.UserReport::ShowError()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowError` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowError", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowError");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowError", function(payload)
    greg.log("Hook greg.SYSTEM.ShowError received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowError fired")

greg.on("greg.SYSTEM.ShowError", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowError", (payload) => {
    console.log("Hook greg.SYSTEM.ShowError triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowError".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowError", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowError fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
