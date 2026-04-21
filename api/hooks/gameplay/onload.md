---
title: OnLoad
description: Documentation for greg.GAMEPLAY.OnLoad
path: /api/hooks/gameplay/onload
---

# OnLoad

> **Hook ID:** `greg.GAMEPLAY.OnLoad`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.OnLoad

## Native Signature
```csharp
Il2Cpp.Objectives::OnLoad()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.OnLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.OnLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.OnLoad", function(payload)
    greg.log("Hook greg.GAMEPLAY.OnLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.OnLoad fired")

greg.on("greg.GAMEPLAY.OnLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.OnLoad", (payload) => {
    console.log("Hook greg.GAMEPLAY.OnLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.OnLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.OnLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.OnLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
