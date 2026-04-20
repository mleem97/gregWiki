---
title: KeyHint.ShowKeyboadMelee
description: Hook event for KeyHint.ShowKeyboadMelee
path: /api/hooks/input/key-hint-show-keyboad-melee
---

# KeyHint.ShowKeyboadMelee

> **Hook ID:** `greg.input.keyhint.showkeyboadmelee`
> **Category:** Input
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `KeyHint.ShowKeyboadMelee()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowKeyboadMelee()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ShowKeyboadMelee` events in `KeyHint`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.keyhint.showkeyboadmelee", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.keyhint.showkeyboadmelee", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.keyhint.showkeyboadmelee")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.keyhint.showkeyboadmelee", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.keyhint.showkeyboadmelee", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.keyhint.showkeyboadmelee", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
