---
title: AsynchronousLoad
description: Documentation for greg.UI.AsynchronousLoad
path: /api/hooks/ui/asynchronousload
---

# AsynchronousLoad

> **Hook ID:** `greg.UI.AsynchronousLoad`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.AsynchronousLoad

## Native Signature
```csharp
Il2Cpp.LoadingScreen::AsynchronousLoad(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AsynchronousLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.AsynchronousLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.AsynchronousLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.AsynchronousLoad", function(payload)
    greg.log("Hook greg.UI.AsynchronousLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.AsynchronousLoad fired")

greg.on("greg.UI.AsynchronousLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.AsynchronousLoad", (payload) => {
    console.log("Hook greg.UI.AsynchronousLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.AsynchronousLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.AsynchronousLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.AsynchronousLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
