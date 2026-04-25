---
title: I_OSK_Key.OnKeyDepress
description: Hook event for I_OSK_Key.OnKeyDepress
path: /api/hooks/input/i_osk_-key-on-key-depress
---

# I_OSK_Key.OnKeyDepress

> **Hook ID:** `greg.input.i_osk_key.onkeydepress`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `I_OSK_Key.OnKeyDepress()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnKeyDepress(String keyDevice, OSK_Receiver inputfield)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `keyDevice` | `String` | ... |
| `inputfield` | `OSK_Receiver` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnKeyDepress` events in `I_OSK_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.i_osk_key.onkeydepress", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.i_osk_key.onkeydepress", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.i_osk_key.onkeydepress")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.i_osk_key.onkeydepress", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.i_osk_key.onkeydepress", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.i_osk_key.onkeydepress", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
