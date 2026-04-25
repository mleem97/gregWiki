---
title: Disable
description: Documentation for greg.UI.Disable
path: /api/hooks/ui/disable
---

# Disable

> **Hook ID:** `greg.UI.Disable`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.Disable

## Native Signature
```csharp
Il2Cpp.UIActions::Disable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Disable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Disable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Disable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Disable", function(payload)
    greg.log("Hook greg.UI.Disable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Disable fired")

greg.on("greg.UI.Disable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Disable", (payload) => {
    console.log("Hook greg.UI.Disable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Disable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Disable", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Disable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
