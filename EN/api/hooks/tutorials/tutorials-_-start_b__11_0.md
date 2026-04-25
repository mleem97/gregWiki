---
title: Tutorials._Start_b__11_0
description: Hook event for Tutorials._Start_b__11_0
path: /api/hooks/tutorials/tutorials-_-start_b__11_0
---

# Tutorials._Start_b__11_0

> **Hook ID:** `greg.tutorials.tutorials._start_b__11_0`
> **Category:** Tutorials
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials._Start_b__11_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Start_b__11_0(CallbackContext context)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `context` | `CallbackContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `_Start_b__11_0` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.tutorials.tutorials._start_b__11_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.tutorials.tutorials._start_b__11_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.tutorials.tutorials._start_b__11_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.tutorials.tutorials._start_b__11_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.tutorials.tutorials._start_b__11_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.tutorials.tutorials._start_b__11_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
