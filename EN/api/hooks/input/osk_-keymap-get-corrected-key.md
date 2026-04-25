---
title: OSK_Keymap.GetCorrectedKey
description: Hook event for OSK_Keymap.GetCorrectedKey
path: /api/hooks/input/osk_-keymap-get-corrected-key
---

# OSK_Keymap.GetCorrectedKey

> **Hook ID:** `greg.input.osk_keymap.getcorrectedkey`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.GetCorrectedKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetCorrectedKey(String key)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `key` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCorrectedKey` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keymap.getcorrectedkey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keymap.getcorrectedkey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keymap.getcorrectedkey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keymap.getcorrectedkey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keymap.getcorrectedkey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keymap.getcorrectedkey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
