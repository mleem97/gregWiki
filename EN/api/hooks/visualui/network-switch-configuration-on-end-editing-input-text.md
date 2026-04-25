---
title: NetworkSwitchConfiguration.OnEndEditingInputText
description: Hook event for NetworkSwitchConfiguration.OnEndEditingInputText
path: /api/hooks/visualui/network-switch-configuration-on-end-editing-input-text
---

# NetworkSwitchConfiguration.OnEndEditingInputText

> **Hook ID:** `greg.visualui.networkswitchconfiguration.onendeditinginputtext`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.OnEndEditingInputText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnEndEditingInputText(String s)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `s` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnEndEditingInputText` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.networkswitchconfiguration.onendeditinginputtext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.networkswitchconfiguration.onendeditinginputtext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.networkswitchconfiguration.onendeditinginputtext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.networkswitchconfiguration.onendeditinginputtext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.networkswitchconfiguration.onendeditinginputtext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.networkswitchconfiguration.onendeditinginputtext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
