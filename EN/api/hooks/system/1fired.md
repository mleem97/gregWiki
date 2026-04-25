---
title: 1Fired
description: Documentation for greg.SYSTEM.1Fired
path: /api/hooks/system/1fired
---

# 1Fired

> **Hook ID:** `greg.SYSTEM.1Fired`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.Fire1

## Native Signature
```csharp
Il2Cpp.viperInput::Fire1()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `1Fired` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.1Fired", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.1Fired");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.1Fired", function(payload)
    greg.log("Hook greg.SYSTEM.1Fired received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.1Fired fired")

greg.on("greg.SYSTEM.1Fired", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.1Fired", (payload) => {
    console.log("Hook greg.SYSTEM.1Fired triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.1Fired".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.1Fired", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.1Fired fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
