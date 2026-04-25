---
title: InactiveAllSet
description: Documentation for greg.UI.InactiveAllSet
path: /api/hooks/ui/inactiveallset
---

# InactiveAllSet

> **Hook ID:** `greg.UI.InactiveAllSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/KeyHint.SetInactiveAll

## Native Signature
```csharp
Il2Cpp.KeyHint::SetInactiveAll()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InactiveAllSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.InactiveAllSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.InactiveAllSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.InactiveAllSet", function(payload)
    greg.log("Hook greg.UI.InactiveAllSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.InactiveAllSet fired")

greg.on("greg.UI.InactiveAllSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.InactiveAllSet", (payload) => {
    console.log("Hook greg.UI.InactiveAllSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.InactiveAllSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.InactiveAllSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.InactiveAllSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
