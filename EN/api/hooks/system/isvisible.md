---
title: IsVisible
description: Documentation for greg.SYSTEM.IsVisible
path: /api/hooks/system/isvisible
---

# IsVisible

> **Hook ID:** `greg.SYSTEM.IsVisible`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.IsVisible

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::IsVisible()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsVisible` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsVisible", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsVisible");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsVisible", function(payload)
    greg.log("Hook greg.SYSTEM.IsVisible received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsVisible fired")

greg.on("greg.SYSTEM.IsVisible", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsVisible", (payload) => {
    console.log("Hook greg.SYSTEM.IsVisible triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsVisible".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsVisible", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsVisible fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
