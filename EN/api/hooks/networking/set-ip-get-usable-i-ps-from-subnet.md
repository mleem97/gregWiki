---
title: SetIP.GetUsableIPsFromSubnet
description: Hook event for SetIP.GetUsableIPsFromSubnet
path: /api/hooks/networking/set-ip-get-usable-i-ps-from-subnet
---

# SetIP.GetUsableIPsFromSubnet

> **Hook ID:** `greg.networking.setip.getusableipsfromsubnet`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP.GetUsableIPsFromSubnet()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStringArray GetUsableIPsFromSubnet(String subnet)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `subnet` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetUsableIPsFromSubnet` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.setip.getusableipsfromsubnet", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.setip.getusableipsfromsubnet", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.setip.getusableipsfromsubnet")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.setip.getusableipsfromsubnet", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.setip.getusableipsfromsubnet", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.setip.getusableipsfromsubnet", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStringArray`
- **Safe to block?**: Yes
