---
title: GetAxis
description: Documentation for greg.SYSTEM.GetAxis
path: /api/hooks/system/getaxis
---

# GetAxis

> **Hook ID:** `greg.SYSTEM.GetAxis`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetAxis

## Native Signature
```csharp
Il2Cpp.viperInput::GetAxis(AXIS_INPUT)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAxis` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetAxis", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetAxis");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetAxis", function(payload)
    greg.log("Hook greg.SYSTEM.GetAxis received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetAxis fired")

greg.on("greg.SYSTEM.GetAxis", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetAxis", (payload) => {
    console.log("Hook greg.SYSTEM.GetAxis triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetAxis".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetAxis", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetAxis fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
