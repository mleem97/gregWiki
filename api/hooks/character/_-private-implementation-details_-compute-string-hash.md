---
title: _PrivateImplementationDetails_.ComputeStringHash
description: Hook event for _PrivateImplementationDetails_.ComputeStringHash
path: /api/hooks/character/_-private-implementation-details_-compute-string-hash
---

# _PrivateImplementationDetails_.ComputeStringHash

> **Hook ID:** `greg.character._privateimplementationdetails_.computestringhash`
> **Category:** Character
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `_PrivateImplementationDetails_.ComputeStringHash()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
UInt32 ComputeStringHash(String s)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `s` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ComputeStringHash` events in `_PrivateImplementationDetails_`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character._privateimplementationdetails_.computestringhash", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character._privateimplementationdetails_.computestringhash", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character._privateimplementationdetails_.computestringhash")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character._privateimplementationdetails_.computestringhash", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character._privateimplementationdetails_.computestringhash", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character._privateimplementationdetails_.computestringhash", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `UInt32`
- **Safe to block?**: Yes
