---
title: TweenHorizontal
description: Documentation for greg.SYSTEM.TweenHorizontal
path: /api/hooks/system/tweenhorizontal
---

# TweenHorizontal

> **Hook ID:** `greg.SYSTEM.TweenHorizontal`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LeanTweenUIElement.TweenHorizontal

## Native Signature
```csharp
Il2Cpp.LeanTweenUIElement::TweenHorizontal(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TweenHorizontal` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TweenHorizontal", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TweenHorizontal");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TweenHorizontal", function(payload)
    greg.log("Hook greg.SYSTEM.TweenHorizontal received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TweenHorizontal fired")

greg.on("greg.SYSTEM.TweenHorizontal", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TweenHorizontal", (payload) => {
    console.log("Hook greg.SYSTEM.TweenHorizontal triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TweenHorizontal".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TweenHorizontal", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TweenHorizontal fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
