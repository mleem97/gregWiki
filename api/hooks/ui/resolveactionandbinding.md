---
title: ResolveActionAndBinding
description: Documentation for greg.UI.ResolveActionAndBinding
path: /api/hooks/ui/resolveactionandbinding
---

# ResolveActionAndBinding

> **Hook ID:** `greg.UI.ResolveActionAndBinding`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RebindUIv2.ResolveActionAndBinding

## Native Signature
```csharp
Il2Cpp.RebindUIv2::ResolveActionAndBinding(InputAction, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResolveActionAndBinding` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ResolveActionAndBinding", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ResolveActionAndBinding");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ResolveActionAndBinding", function(payload)
    greg.log("Hook greg.UI.ResolveActionAndBinding received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ResolveActionAndBinding fired")

greg.on("greg.UI.ResolveActionAndBinding", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ResolveActionAndBinding", (payload) => {
    console.log("Hook greg.UI.ResolveActionAndBinding triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ResolveActionAndBinding".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ResolveActionAndBinding", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ResolveActionAndBinding fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
