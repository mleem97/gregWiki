---
title: ConsoleRemoved
description: Documentation for greg.SYSTEM.ConsoleRemoved
path: /api/hooks/system/consoleremoved
---

# ConsoleRemoved

> **Hook ID:** `greg.SYSTEM.ConsoleRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.RemoveConsole

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::RemoveConsole()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConsoleRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ConsoleRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ConsoleRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ConsoleRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.ConsoleRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ConsoleRemoved fired")

greg.on("greg.SYSTEM.ConsoleRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ConsoleRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.ConsoleRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ConsoleRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ConsoleRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ConsoleRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
