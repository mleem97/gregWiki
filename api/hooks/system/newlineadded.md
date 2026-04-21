---
title: NewLineAdded
description: Documentation for greg.SYSTEM.NewLineAdded
path: /api/hooks/system/newlineadded
---

# NewLineAdded

> **Hook ID:** `greg.SYSTEM.NewLineAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.AddNewLine

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::AddNewLine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NewLineAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.NewLineAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.NewLineAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.NewLineAdded", function(payload)
    greg.log("Hook greg.SYSTEM.NewLineAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.NewLineAdded fired")

greg.on("greg.SYSTEM.NewLineAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.NewLineAdded", (payload) => {
    console.log("Hook greg.SYSTEM.NewLineAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.NewLineAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.NewLineAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.NewLineAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
