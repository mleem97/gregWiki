---
title: FootSteps.GetRandomFromRequest
description: Hook event for FootSteps.GetRandomFromRequest
path: /api/hooks/unityengine/foot-steps-get-random-from-request
---

# FootSteps.GetRandomFromRequest

> **Hook ID:** `greg.unityengine.footsteps.getrandomfromrequest`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FootSteps.GetRandomFromRequest()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
AudioClip GetRandomFromRequest(Int32 _clipArray)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_clipArray` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetRandomFromRequest` events in `FootSteps`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.footsteps.getrandomfromrequest", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.footsteps.getrandomfromrequest", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.footsteps.getrandomfromrequest")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.footsteps.getrandomfromrequest", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.footsteps.getrandomfromrequest", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.footsteps.getrandomfromrequest", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `AudioClip`
- **Safe to block?**: Yes
