---
title: _Start_b__57_1
description: Documentation for greg.SYSTEM._Start_b__57_1
path: /api/hooks/system/-start-b--57-1
---

# _Start_b__57_1

> **Hook ID:** `greg.SYSTEM._Start_b__57_1`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController._Start_b__57_1

## Native Signature
```csharp
Il2Cpp.FirstPersonController::_Start_b__57_1(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_Start_b__57_1` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._Start_b__57_1", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._Start_b__57_1");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._Start_b__57_1", function(payload)
    greg.log("Hook greg.SYSTEM._Start_b__57_1 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._Start_b__57_1 fired")

greg.on("greg.SYSTEM._Start_b__57_1", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._Start_b__57_1", (payload) => {
    console.log("Hook greg.SYSTEM._Start_b__57_1 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._Start_b__57_1".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._Start_b__57_1", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._Start_b__57_1 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
