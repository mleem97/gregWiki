---
title: GetAllAxis
description: Documentation for greg.SYSTEM.GetAllAxis
path: /api/hooks/system/getallaxis
---

# GetAllAxis

> **Hook ID:** `greg.SYSTEM.GetAllAxis`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetAllAxis

## Native Signature
```csharp
Il2Cpp.viperInput::GetAllAxis()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAllAxis` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetAllAxis", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetAllAxis");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetAllAxis", function(payload)
    greg.log("Hook greg.SYSTEM.GetAllAxis received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetAllAxis fired")

greg.on("greg.SYSTEM.GetAllAxis", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetAllAxis", (payload) => {
    console.log("Hook greg.SYSTEM.GetAllAxis triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetAllAxis".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetAllAxis", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetAllAxis fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
