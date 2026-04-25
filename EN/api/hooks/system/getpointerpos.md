---
title: GetPointerPos
description: Documentation for greg.SYSTEM.GetPointerPos
path: /api/hooks/system/getpointerpos
---

# GetPointerPos

> **Hook ID:** `greg.SYSTEM.GetPointerPos`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetPointerPos

## Native Signature
```csharp
Il2Cpp.viperInput::GetPointerPos()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPointerPos` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPointerPos", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPointerPos");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPointerPos", function(payload)
    greg.log("Hook greg.SYSTEM.GetPointerPos received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPointerPos fired")

greg.on("greg.SYSTEM.GetPointerPos", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPointerPos", (payload) => {
    console.log("Hook greg.SYSTEM.GetPointerPos triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPointerPos".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPointerPos", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPointerPos fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
