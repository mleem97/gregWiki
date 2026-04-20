---
title: ReusableFunctions.ImageScrollingUI
description: Hook event for ReusableFunctions.ImageScrollingUI
path: /api/hooks/visualui/reusable-functions-image-scrolling-ui
---

# ReusableFunctions.ImageScrollingUI

> **Hook ID:** `greg.visualui.reusablefunctions.imagescrollingui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.ImageScrollingUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator ImageScrollingUI(Il2CppReferenceArray`1 _sprites, Image _image)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_sprites` | `Il2CppReferenceArray`1` | ... |
| `_image` | `Image` | ... |


## Using this Hook

::: tip
Use this hook to react to `ImageScrollingUI` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.reusablefunctions.imagescrollingui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.reusablefunctions.imagescrollingui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.reusablefunctions.imagescrollingui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.reusablefunctions.imagescrollingui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.reusablefunctions.imagescrollingui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.reusablefunctions.imagescrollingui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
