---
title: AccentCharClick
description: Documentation for greg.SYSTEM.AccentCharClick
path: /api/hooks/system/accentcharclick
---

# AccentCharClick

> **Hook ID:** `greg.SYSTEM.AccentCharClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.AccentCharClick

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::AccentCharClick(string, OSK_Receiver)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AccentCharClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.AccentCharClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.AccentCharClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.AccentCharClick", function(payload)
    greg.log("Hook greg.SYSTEM.AccentCharClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.AccentCharClick fired")

greg.on("greg.SYSTEM.AccentCharClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.AccentCharClick", (payload) => {
    console.log("Hook greg.SYSTEM.AccentCharClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.AccentCharClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.AccentCharClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.AccentCharClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
