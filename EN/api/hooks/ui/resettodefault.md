---
title: ResetToDefault
description: Documentation for greg.UI.ResetToDefault
path: /api/hooks/ui/resettodefault
---

# ResetToDefault

> **Hook ID:** `greg.UI.ResetToDefault`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RebindUIv2.ResetToDefault

## Native Signature
```csharp
Il2Cpp.RebindUIv2::ResetToDefault()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetToDefault` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ResetToDefault", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ResetToDefault");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ResetToDefault", function(payload)
    greg.log("Hook greg.UI.ResetToDefault received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ResetToDefault fired")

greg.on("greg.UI.ResetToDefault", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ResetToDefault", (payload) => {
    console.log("Hook greg.UI.ResetToDefault triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ResetToDefault".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ResetToDefault", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ResetToDefault fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
