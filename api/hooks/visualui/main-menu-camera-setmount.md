---
title: MainMenuCamera.setmount
description: Hook event for MainMenuCamera.setmount
path: /api/hooks/visualui/main-menu-camera-setmount
---

# MainMenuCamera.setmount

> **Hook ID:** `greg.visualui.mainmenucamera.setmount`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenuCamera.setmount()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void setmount(Transform newmount)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `newmount` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `setmount` events in `MainMenuCamera`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.mainmenucamera.setmount", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.mainmenucamera.setmount", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.mainmenucamera.setmount")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.mainmenucamera.setmount", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.mainmenucamera.setmount", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.mainmenucamera.setmount", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
