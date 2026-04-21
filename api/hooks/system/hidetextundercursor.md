---
title: HideTextUnderCursor
description: Documentation for greg.SYSTEM.HideTextUnderCursor
path: /api/hooks/system/hidetextundercursor
---

# HideTextUnderCursor

> **Hook ID:** `greg.SYSTEM.HideTextUnderCursor`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.HideTextUnderCursor

## Native Signature
```csharp
Il2Cpp.StaticUIElements::HideTextUnderCursor()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HideTextUnderCursor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.HideTextUnderCursor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.HideTextUnderCursor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.HideTextUnderCursor", function(payload)
    greg.log("Hook greg.SYSTEM.HideTextUnderCursor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.HideTextUnderCursor fired")

greg.on("greg.SYSTEM.HideTextUnderCursor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.HideTextUnderCursor", (payload) => {
    console.log("Hook greg.SYSTEM.HideTextUnderCursor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.HideTextUnderCursor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.HideTextUnderCursor", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.HideTextUnderCursor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
