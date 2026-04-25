---
title: OSK_MiniKeyboard.SetBaseKey
description: Hook event for OSK_MiniKeyboard.SetBaseKey
path: /api/hooks/input/osk_-mini-keyboard-set-base-key
---

# OSK_MiniKeyboard.SetBaseKey

> **Hook ID:** `greg.input.osk_minikeyboard.setbasekey`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_MiniKeyboard.SetBaseKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetBaseKey(GameObject base_key)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `base_key` | `GameObject` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetBaseKey` events in `OSK_MiniKeyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_minikeyboard.setbasekey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_minikeyboard.setbasekey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_minikeyboard.setbasekey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_minikeyboard.setbasekey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_minikeyboard.setbasekey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_minikeyboard.setbasekey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
