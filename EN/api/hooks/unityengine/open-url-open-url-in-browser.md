---
title: OpenURL.OpenURLInBrowser
description: Hook event for OpenURL.OpenURLInBrowser
path: /api/hooks/unityengine/open-url-open-url-in-browser
---

# OpenURL.OpenURLInBrowser

> **Hook ID:** `greg.unityengine.openurl.openurlinbrowser`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `OpenURL.OpenURLInBrowser()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OpenURLInBrowser()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OpenURLInBrowser` events in `OpenURL`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.openurl.openurlinbrowser", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.openurl.openurlinbrowser", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.openurl.openurlinbrowser")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.openurl.openurlinbrowser", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.openurl.openurlinbrowser", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.openurl.openurlinbrowser", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
