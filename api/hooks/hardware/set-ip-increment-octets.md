---
title: SetIP.IncrementOctets
description: Hook event for SetIP.IncrementOctets
path: /api/hooks/hardware/set-ip-increment-octets
---

# SetIP.IncrementOctets

> **Hook ID:** `greg.hardware.setip.incrementoctets`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.IncrementOctets()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void IncrementOctets(Int32& o1, Int32& o2, Int32& o3, Int32& o4)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `o1` | `Int32&` | ... |
| `o2` | `Int32&` | ... |
| `o3` | `Int32&` | ... |
| `o4` | `Int32&` | ... |


## Using this Hook

::: tip
Use this hook to react to `IncrementOctets` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.setip.incrementoctets", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.setip.incrementoctets", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.setip.incrementoctets")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.setip.incrementoctets", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.setip.incrementoctets", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.setip.incrementoctets", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
