---
title: SetIP.TryParseIpToOctets
description: Hook event for SetIP.TryParseIpToOctets
path: /api/hooks/networking/set-ip-try-parse-ip-to-octets
---

# SetIP.TryParseIpToOctets

> **Hook ID:** `greg.networking.setip.tryparseiptooctets`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.TryParseIpToOctets()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean TryParseIpToOctets(String ipString, Int32& o1, Int32& o2, Int32& o3, Int32& o4)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ipString` | `String` | ... |
| `o1` | `Int32&` | ... |
| `o2` | `Int32&` | ... |
| `o3` | `Int32&` | ... |
| `o4` | `Int32&` | ... |


## Using this Hook

::: tip
Use this hook to react to `TryParseIpToOctets` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.setip.tryparseiptooctets", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.setip.tryparseiptooctets", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.setip.tryparseiptooctets")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.setip.tryparseiptooctets", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.setip.tryparseiptooctets", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.setip.tryparseiptooctets", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
