---
title: ObjectiveTimedText
description: Documentation for greg.GAMEPLAY.ObjectiveTimedText
path: /api/hooks/gameplay/objectivetimedtext
---

# ObjectiveTimedText

> **Hook ID:** `greg.GAMEPLAY.ObjectiveTimedText`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.ObjectiveTimedText

## Native Signature
```csharp
Il2Cpp.Objectives::ObjectiveTimedText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ObjectiveTimedText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.ObjectiveTimedText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.ObjectiveTimedText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.ObjectiveTimedText", function(payload)
    greg.log("Hook greg.GAMEPLAY.ObjectiveTimedText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.ObjectiveTimedText fired")

greg.on("greg.GAMEPLAY.ObjectiveTimedText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.ObjectiveTimedText", (payload) => {
    console.log("Hook greg.GAMEPLAY.ObjectiveTimedText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.ObjectiveTimedText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.ObjectiveTimedText", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.ObjectiveTimedText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
