---
title: Server.GetNextCustomerID
description: Hook event for Server.GetNextCustomerID
path: /api/hooks/economy/server-get-next-customer-id
---

# Server.GetNextCustomerID

> **Hook ID:** `greg.economy.server.getnextcustomerid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.GetNextCustomerID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetNextCustomerID(Int32 currentCustomerID, Boolean forward)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `currentCustomerID` | `Int32` | ... |
| `forward` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetNextCustomerID` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.server.getnextcustomerid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.server.getnextcustomerid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.server.getnextcustomerid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.server.getnextcustomerid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.server.getnextcustomerid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.server.getnextcustomerid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
