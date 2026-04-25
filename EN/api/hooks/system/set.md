---
title: Set
description: Documentation for greg.SYSTEM.Set
path: /api/hooks/system/set
---

# Set

> **Hook ID:** `greg.SYSTEM.Set`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.Set

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::Set(OSK_LongPressPacket)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Set` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Set", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Set");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Set", function(payload)
    greg.log("Hook greg.SYSTEM.Set received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Set fired")

greg.on("greg.SYSTEM.Set", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Set", (payload) => {
    console.log("Hook greg.SYSTEM.Set triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Set".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Set", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Set fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
