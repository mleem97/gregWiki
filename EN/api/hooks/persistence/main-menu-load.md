---
title: MainMenu.Load
description: Hook event for MainMenu.Load
path: /api/hooks/persistence/main-menu-load
---

# MainMenu.Load

> **Hook ID:** `greg.persistence.mainmenu.load`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainMenu.Load()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Load(TextMeshProUGUI _text)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_text` | `TextMeshProUGUI` | ... |


## Using this Hook

::: tip
Use this hook to react to `Load` events in `MainMenu`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.mainmenu.load", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.mainmenu.load", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.mainmenu.load")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.mainmenu.load", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.mainmenu.load", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.mainmenu.load", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
