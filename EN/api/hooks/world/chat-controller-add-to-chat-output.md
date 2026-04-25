---
title: ChatController.AddToChatOutput
description: Hook event for ChatController.AddToChatOutput
path: /api/hooks/world/chat-controller-add-to-chat-output
---

# ChatController.AddToChatOutput

> **Hook ID:** `greg.world.chatcontroller.addtochatoutput`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ChatController.AddToChatOutput()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddToChatOutput(String newText)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `newText` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddToChatOutput` events in `ChatController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.chatcontroller.addtochatoutput", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.chatcontroller.addtochatoutput", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.chatcontroller.addtochatoutput")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.chatcontroller.addtochatoutput", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.chatcontroller.addtochatoutput", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.chatcontroller.addtochatoutput", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
