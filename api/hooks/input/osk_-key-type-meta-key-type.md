---
title: OSK_KeyTypeMeta.KeyType
description: Hook event for OSK_KeyTypeMeta.KeyType
path: /api/hooks/input/osk_-key-type-meta-key-type
---

# OSK_KeyTypeMeta.KeyType

> **Hook ID:** `greg.input.osk_keytypemeta.keytype`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_KeyTypeMeta.KeyType()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
OSK_KEY_TYPES KeyType(OSK_KeyCode key)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `key` | `OSK_KeyCode` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyType` events in `OSK_KeyTypeMeta`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_keytypemeta.keytype", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_keytypemeta.keytype", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_keytypemeta.keytype")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_keytypemeta.keytype", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_keytypemeta.keytype", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_keytypemeta.keytype", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `OSK_KEY_TYPES`
- **Safe to block?**: Yes
