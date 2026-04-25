---
title: IsRopeSettingsChanged
description: Documentation for greg.SYSTEM.IsRopeSettingsChanged
path: /api/hooks/system/isropesettingschanged
---

# IsRopeSettingsChanged

> **Hook ID:** `greg.SYSTEM.IsRopeSettingsChanged`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.IsRopeSettingsChanged

## Native Signature
```csharp
Il2Cpp.Rope::IsRopeSettingsChanged()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsRopeSettingsChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsRopeSettingsChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsRopeSettingsChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsRopeSettingsChanged", function(payload)
    greg.log("Hook greg.SYSTEM.IsRopeSettingsChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsRopeSettingsChanged fired")

greg.on("greg.SYSTEM.IsRopeSettingsChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsRopeSettingsChanged", (payload) => {
    console.log("Hook greg.SYSTEM.IsRopeSettingsChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsRopeSettingsChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsRopeSettingsChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsRopeSettingsChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
