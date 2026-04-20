---
title: UserReport.SetThumbnail
description: Hook event for UserReport.SetThumbnail
path: /api/hooks/unityengine/user-report-set-thumbnail
---

# UserReport.SetThumbnail

> **Hook ID:** `greg.unityengine.userreport.setthumbnail`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UserReport.SetThumbnail()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetThumbnail(Texture2D thumbnail)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `thumbnail` | `Texture2D` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetThumbnail` events in `UserReport`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.userreport.setthumbnail", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.userreport.setthumbnail", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.userreport.setthumbnail")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.userreport.setthumbnail", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.userreport.setthumbnail", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.userreport.setthumbnail", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
