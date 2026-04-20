---
title: TMP_DigitValidator.Validate
description: Hook event for TMP_DigitValidator.Validate
path: /api/hooks/visualui/tmp_-digit-validator-validate
---

# TMP_DigitValidator.Validate

> **Hook ID:** `greg.visualui.tmp_digitvalidator.validate`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro`

This hook intercepts calls to `TMP_DigitValidator.Validate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Char Validate(String& text, Int32& pos, Char ch)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `text` | `String&` | ... |
| `pos` | `Int32&` | ... |
| `ch` | `Char` | ... |


## Using this Hook

::: tip
Use this hook to react to `Validate` events in `TMP_DigitValidator`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_digitvalidator.validate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_digitvalidator.validate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_digitvalidator.validate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_digitvalidator.validate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_digitvalidator.validate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_digitvalidator.validate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Char`
- **Safe to block?**: Yes
