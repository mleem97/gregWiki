---
title: Enable
description: Documentation for greg.UI.Enable
path: /api/hooks/ui/enable
---

# Enable

> **Hook ID:** `greg.UI.Enable`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.Enable

## Native Signature
```csharp
Il2Cpp.UIActions::Enable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Enable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Enable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Enable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Enable", function(payload)
    greg.log("Hook greg.UI.Enable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Enable fired")

greg.on("greg.UI.Enable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Enable", (payload) => {
    console.log("Hook greg.UI.Enable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Enable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Enable", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Enable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
