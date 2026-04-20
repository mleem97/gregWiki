---
title: Server.GenerateUniqueServerId
description: Hook event for Server.GenerateUniqueServerId
path: /api/hooks/hardware/server-generate-unique-server-id
---

# Server.GenerateUniqueServerId

> **Hook ID:** `greg.hardware.server.generateuniqueserverid`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.GenerateUniqueServerId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GenerateUniqueServerId()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GenerateUniqueServerId` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.server.generateuniqueserverid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.server.generateuniqueserverid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.server.generateuniqueserverid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.server.generateuniqueserverid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.server.generateuniqueserverid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.server.generateuniqueserverid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
