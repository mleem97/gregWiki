---
title: OnValueChangedListener
description: Documentation for greg.SYSTEM.OnValueChangedListener
path: /api/hooks/system/onvaluechangedlistener
---

# OnValueChangedListener

> **Hook ID:** `greg.SYSTEM.OnValueChangedListener`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.OnValueChangedListener

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::OnValueChangedListener(Vector2)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnValueChangedListener` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnValueChangedListener", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnValueChangedListener");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnValueChangedListener", function(payload)
    greg.log("Hook greg.SYSTEM.OnValueChangedListener received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnValueChangedListener fired")

greg.on("greg.SYSTEM.OnValueChangedListener", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnValueChangedListener", (payload) => {
    console.log("Hook greg.SYSTEM.OnValueChangedListener triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnValueChangedListener".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnValueChangedListener", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnValueChangedListener fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
