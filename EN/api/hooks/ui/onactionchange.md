---
title: OnActionChange
description: Documentation for greg.UI.OnActionChange
path: /api/hooks/ui/onactionchange
---

# OnActionChange

> **Hook ID:** `greg.UI.OnActionChange`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RebindUIv2.OnActionChange

## Native Signature
```csharp
Il2Cpp.RebindUIv2::OnActionChange(Il2CppSystem.Object, InputActionChange)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnActionChange` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnActionChange", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnActionChange");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnActionChange", function(payload)
    greg.log("Hook greg.UI.OnActionChange received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnActionChange fired")

greg.on("greg.UI.OnActionChange", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnActionChange", (payload) => {
    console.log("Hook greg.UI.OnActionChange triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnActionChange".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnActionChange", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnActionChange fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
