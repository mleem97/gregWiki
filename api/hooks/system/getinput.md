---
title: GetInput
description: Documentation for greg.SYSTEM.GetInput
path: /api/hooks/system/getinput
---

# GetInput

> **Hook ID:** `greg.SYSTEM.GetInput`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.GetInput

## Native Signature
```csharp
Il2Cpp.FirstPersonController::GetInput(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetInput` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetInput", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetInput");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetInput", function(payload)
    greg.log("Hook greg.SYSTEM.GetInput received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetInput fired")

greg.on("greg.SYSTEM.GetInput", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetInput", (payload) => {
    console.log("Hook greg.SYSTEM.GetInput triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetInput".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetInput", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetInput fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
