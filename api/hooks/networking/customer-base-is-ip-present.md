---
title: CustomerBase.IsIPPresent
description: Hook event for CustomerBase.IsIPPresent
path: /api/hooks/networking/customer-base-is-ip-present
---

# CustomerBase.IsIPPresent

> **Hook ID:** `greg.networking.customerbase.isippresent`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.IsIPPresent()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsIPPresent(String ip)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ip` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsIPPresent` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.customerbase.isippresent", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.customerbase.isippresent", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.customerbase.isippresent")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.customerbase.isippresent", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.customerbase.isippresent", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.customerbase.isippresent", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
