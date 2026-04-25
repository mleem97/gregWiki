---
title: _Awake_b__28_1
description: Documentation for greg.UI._Awake_b__28_1
path: /api/hooks/ui/-awake-b--28-1
---

# _Awake_b__28_1

> **Hook ID:** `greg.UI._Awake_b__28_1`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu._Awake_b__28_1

## Native Signature
```csharp
Il2Cpp.PauseMenu::_Awake_b__28_1(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_Awake_b__28_1` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI._Awake_b__28_1", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI._Awake_b__28_1");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI._Awake_b__28_1", function(payload)
    greg.log("Hook greg.UI._Awake_b__28_1 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI._Awake_b__28_1 fired")

greg.on("greg.UI._Awake_b__28_1", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI._Awake_b__28_1", (payload) => {
    console.log("Hook greg.UI._Awake_b__28_1 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI._Awake_b__28_1".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI._Awake_b__28_1", func(p greg.Payload) {
    fmt.Println("Hook greg.UI._Awake_b__28_1 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
