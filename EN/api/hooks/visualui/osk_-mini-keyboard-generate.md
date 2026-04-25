---
title: OSK_MiniKeyboard.Generate
description: Hook event for OSK_MiniKeyboard.Generate
path: /api/hooks/visualui/osk_-mini-keyboard-generate
---

# OSK_MiniKeyboard.Generate

> **Hook ID:** `greg.visualui.osk_minikeyboard.generate`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_MiniKeyboard.Generate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Generate(List`1 chars, Boolean shiftup, Action`2 callbackAction, Boolean bottomLeftOrder)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `chars` | `List`1` | ... |
| `shiftup` | `Boolean` | ... |
| `callbackAction` | `Action`2` | ... |
| `bottomLeftOrder` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `Generate` events in `OSK_MiniKeyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_minikeyboard.generate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_minikeyboard.generate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_minikeyboard.generate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_minikeyboard.generate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_minikeyboard.generate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_minikeyboard.generate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
