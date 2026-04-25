---
title: OutputTextUpdate
description: Documentation for greg.SYSTEM.OutputTextUpdate
path: /api/hooks/system/outputtextupdate
---

# OutputTextUpdate

> **Hook ID:** `greg.SYSTEM.OutputTextUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.OutputTextUpdate

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::OutputTextUpdate(string, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OutputTextUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OutputTextUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OutputTextUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OutputTextUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.OutputTextUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OutputTextUpdate fired")

greg.on("greg.SYSTEM.OutputTextUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OutputTextUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.OutputTextUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OutputTextUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OutputTextUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OutputTextUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
