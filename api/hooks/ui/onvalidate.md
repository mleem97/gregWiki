---
title: OnValidate
description: Documentation for greg.UI.OnValidate
path: /api/hooks/ui/onvalidate
---

# OnValidate

> **Hook ID:** `greg.UI.OnValidate`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ReBindUI.OnValidate

## Native Signature
```csharp
Il2Cpp.ReBindUI::OnValidate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnValidate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnValidate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnValidate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnValidate", function(payload)
    greg.log("Hook greg.UI.OnValidate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnValidate fired")

greg.on("greg.UI.OnValidate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnValidate", (payload) => {
    console.log("Hook greg.UI.OnValidate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnValidate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnValidate", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnValidate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
