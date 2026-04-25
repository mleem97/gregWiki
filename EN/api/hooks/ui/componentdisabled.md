---
title: ComponentDisabled
description: Documentation for greg.UI.ComponentDisabled
path: /api/hooks/ui/componentdisabled
---

# ComponentDisabled

> **Hook ID:** `greg.UI.ComponentDisabled`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UI_SelectedBorder.OnDisable

## Native Signature
```csharp
Il2Cpp.UI_SelectedBorder::OnDisable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentDisabled` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ComponentDisabled", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ComponentDisabled");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ComponentDisabled", function(payload)
    greg.log("Hook greg.UI.ComponentDisabled received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ComponentDisabled fired")

greg.on("greg.UI.ComponentDisabled", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ComponentDisabled", (payload) => {
    console.log("Hook greg.UI.ComponentDisabled triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ComponentDisabled".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ComponentDisabled", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ComponentDisabled fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
