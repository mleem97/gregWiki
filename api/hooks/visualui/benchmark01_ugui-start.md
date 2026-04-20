---
title: Benchmark01_UGUI.Start
description: Hook event for Benchmark01_UGUI.Start
path: /api/hooks/visualui/benchmark01_ugui-start
---

# Benchmark01_UGUI.Start

> **Hook ID:** `greg.visualui.benchmark01_ugui.start`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `Benchmark01_UGUI.Start()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator Start()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Start` events in `Benchmark01_UGUI`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.benchmark01_ugui.start", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.benchmark01_ugui.start", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.benchmark01_ugui.start")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.benchmark01_ugui.start", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.benchmark01_ugui.start", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.benchmark01_ugui.start", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
