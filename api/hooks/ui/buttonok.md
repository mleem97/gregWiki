---
title: ButtonOK
description: Documentation for greg.UI.ButtonOK
path: /api/hooks/ui/buttonok
---

# ButtonOK

> **Hook ID:** `greg.UI.ButtonOK`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.ButtonOK

## Native Signature
```csharp
Il2Cpp.Tutorials::ButtonOK()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonOK` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ButtonOK", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ButtonOK");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ButtonOK", function(payload)
    greg.log("Hook greg.UI.ButtonOK received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ButtonOK fired")

greg.on("greg.UI.ButtonOK", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ButtonOK", (payload) => {
    console.log("Hook greg.UI.ButtonOK triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ButtonOK".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ButtonOK", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ButtonOK fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
