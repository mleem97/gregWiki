---
title: CustomerBase.GetServerTypeForIP
description: Hook event for CustomerBase.GetServerTypeForIP
path: /api/hooks/networking/customer-base-get-server-type-for-ip
---

# CustomerBase.GetServerTypeForIP

> **Hook ID:** `greg.networking.customerbase.getservertypeforip`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CustomerBase.GetServerTypeForIP()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 GetServerTypeForIP(String ip)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ip` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetServerTypeForIP` events in `CustomerBase`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.customerbase.getservertypeforip", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.customerbase.getservertypeforip", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.customerbase.getservertypeforip")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.customerbase.getservertypeforip", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.customerbase.getservertypeforip", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.customerbase.getservertypeforip", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
