---
title: ScrollAuto
description: Documentation for greg.SYSTEM.ScrollAuto
path: /api/hooks/system/scrollauto
---

# ScrollAuto

> **Hook ID:** `greg.SYSTEM.ScrollAuto`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AutoScrollRect.ScrollAuto

## Native Signature
```csharp
Il2Cpp.AutoScrollRect::ScrollAuto()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ScrollAuto` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ScrollAuto", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ScrollAuto");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ScrollAuto", function(payload)
    greg.log("Hook greg.SYSTEM.ScrollAuto received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ScrollAuto fired")

greg.on("greg.SYSTEM.ScrollAuto", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ScrollAuto", (payload) => {
    console.log("Hook greg.SYSTEM.ScrollAuto triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ScrollAuto".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ScrollAuto", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ScrollAuto fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
