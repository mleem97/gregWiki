---
title: ShowBackground
description: Documentation for greg.SYSTEM.ShowBackground
path: /api/hooks/system/showbackground
---

# ShowBackground

> **Hook ID:** `greg.SYSTEM.ShowBackground`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.ShowBackground

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::ShowBackground(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowBackground` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowBackground", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowBackground");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowBackground", function(payload)
    greg.log("Hook greg.SYSTEM.ShowBackground received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowBackground fired")

greg.on("greg.SYSTEM.ShowBackground", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowBackground", (payload) => {
    console.log("Hook greg.SYSTEM.ShowBackground triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowBackground".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowBackground", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowBackground fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
