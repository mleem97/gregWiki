---
title: OnDestroy
description: Documentation for greg.GAMEPLAY.OnDestroy
path: /api/hooks/gameplay/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.GAMEPLAY.OnDestroy`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.OnDestroy

## Native Signature
```csharp
Il2Cpp.Objectives::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.OnDestroy", function(payload)
    greg.log("Hook greg.GAMEPLAY.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.OnDestroy fired")

greg.on("greg.GAMEPLAY.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.OnDestroy", (payload) => {
    console.log("Hook greg.GAMEPLAY.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
