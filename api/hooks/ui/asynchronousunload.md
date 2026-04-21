---
title: AsynchronousUnLoad
description: Documentation for greg.UI.AsynchronousUnLoad
path: /api/hooks/ui/asynchronousunload
---

# AsynchronousUnLoad

> **Hook ID:** `greg.UI.AsynchronousUnLoad`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.AsynchronousUnLoad

## Native Signature
```csharp
Il2Cpp.LoadingScreen::AsynchronousUnLoad(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AsynchronousUnLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AsynchronousUnLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AsynchronousUnLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AsynchronousUnLoad", function(payload)
    greg.log("Hook greg.UI.AsynchronousUnLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AsynchronousUnLoad fired")

greg.on("greg.UI.AsynchronousUnLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AsynchronousUnLoad", (payload) => {
    console.log("Hook greg.UI.AsynchronousUnLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AsynchronousUnLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AsynchronousUnLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AsynchronousUnLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
