---
title: TweenVertical
description: Documentation for greg.SYSTEM.TweenVertical
path: /api/hooks/system/tweenvertical
---

# TweenVertical

> **Hook ID:** `greg.SYSTEM.TweenVertical`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LeanTweenUIElement.TweenVertical

## Native Signature
```csharp
Il2Cpp.LeanTweenUIElement::TweenVertical(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TweenVertical` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TweenVertical", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TweenVertical");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TweenVertical", function(payload)
    greg.log("Hook greg.SYSTEM.TweenVertical received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TweenVertical fired")

greg.on("greg.SYSTEM.TweenVertical", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TweenVertical", (payload) => {
    console.log("Hook greg.SYSTEM.TweenVertical triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TweenVertical".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TweenVertical", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TweenVertical fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
