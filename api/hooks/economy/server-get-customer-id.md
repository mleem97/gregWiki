---
title: Server.GetCustomerID
description: Hook event for Server.GetCustomerID
path: /api/hooks/economy/server-get-customer-id
---

# Server.GetCustomerID

> **Hook ID:** `greg.economy.server.getcustomerid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.GetCustomerID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetCustomerID()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetCustomerID` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.server.getcustomerid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.server.getcustomerid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.server.getcustomerid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.server.getcustomerid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.server.getcustomerid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.server.getcustomerid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
