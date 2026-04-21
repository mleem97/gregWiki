---
title: ConsoleSet
description: Documentation for greg.SYSTEM.ConsoleSet
path: /api/hooks/system/consoleset
---

# ConsoleSet

> **Hook ID:** `greg.SYSTEM.ConsoleSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.SetConsole

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::SetConsole(OSK_LongPressPacket)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConsoleSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ConsoleSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ConsoleSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ConsoleSet", function(payload)
    greg.log("Hook greg.SYSTEM.ConsoleSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ConsoleSet fired")

greg.on("greg.SYSTEM.ConsoleSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ConsoleSet", (payload) => {
    console.log("Hook greg.SYSTEM.ConsoleSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ConsoleSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ConsoleSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ConsoleSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
