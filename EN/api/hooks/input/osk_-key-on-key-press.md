---
title: OSK_Key.OnKeyPress
description: Hook event for OSK_Key.OnKeyPress
path: /api/hooks/input/osk_-key-on-key-press
---

# OSK_Key.OnKeyPress

> **Hook ID:** `greg.input.osk_key.onkeypress`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Key.OnKeyPress()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnKeyPress(String keyDevice, OSK_Receiver inputfield)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `keyDevice` | `String` | ... |
| `inputfield` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnKeyPress` events in `OSK_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_key.onkeypress", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_key.onkeypress", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_key.onkeypress")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_key.onkeypress", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_key.onkeypress", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_key.onkeypress", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
