---
title: _Start_b__11_0
description: Documentation for greg.UI._Start_b__11_0
path: /api/hooks/ui/-start-b--11-0
---

# _Start_b__11_0

> **Hook ID:** `greg.UI._Start_b__11_0`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials._Start_b__11_0

## Native Signature
```csharp
Il2Cpp.Tutorials::_Start_b__11_0(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_Start_b__11_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI._Start_b__11_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI._Start_b__11_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI._Start_b__11_0", function(payload)
    greg.log("Hook greg.UI._Start_b__11_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI._Start_b__11_0 fired")

greg.on("greg.UI._Start_b__11_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI._Start_b__11_0", (payload) => {
    console.log("Hook greg.UI._Start_b__11_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI._Start_b__11_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI._Start_b__11_0", func(p greg.Payload) {
    fmt.Println("Hook greg.UI._Start_b__11_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
