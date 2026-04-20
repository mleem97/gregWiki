---
title: OSK_Keymap.AutoCorrectRecursive
description: Hook event for OSK_Keymap.AutoCorrectRecursive
path: /api/hooks/settings/osk_-keymap-auto-correct-recursive
---

# OSK_Keymap.AutoCorrectRecursive

> **Hook ID:** `greg.settings.osk_keymap.autocorrectrecursive`
> **Category:** Settings
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.AutoCorrectRecursive()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AutoCorrectRecursive(String input, List`1 result)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `input` | `String` | ... |
| `result` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `AutoCorrectRecursive` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.osk_keymap.autocorrectrecursive", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.osk_keymap.autocorrectrecursive", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.osk_keymap.autocorrectrecursive")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.osk_keymap.autocorrectrecursive", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.osk_keymap.autocorrectrecursive", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.osk_keymap.autocorrectrecursive", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
