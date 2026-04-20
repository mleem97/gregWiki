---
title: UserReport.ClearForm
description: Hook event for UserReport.ClearForm
path: /api/hooks/unityengine/user-report-clear-form
---

# UserReport.ClearForm

> **Hook ID:** `greg.unityengine.userreport.clearform`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UserReport.ClearForm()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ClearForm()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ClearForm` events in `UserReport`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.userreport.clearform", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.userreport.clearform", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.userreport.clearform")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.userreport.clearform", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.userreport.clearform", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.userreport.clearform", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
