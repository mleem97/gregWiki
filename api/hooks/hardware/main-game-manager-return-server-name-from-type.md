---
title: MainGameManager.ReturnServerNameFromType
description: Hook event for MainGameManager.ReturnServerNameFromType
path: /api/hooks/hardware/main-game-manager-return-server-name-from-type
---

# MainGameManager.ReturnServerNameFromType

> **Hook ID:** `greg.hardware.maingamemanager.returnservernamefromtype`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `MainGameManager.ReturnServerNameFromType()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ReturnServerNameFromType(Int32 type)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `type` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ReturnServerNameFromType` events in `MainGameManager`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.maingamemanager.returnservernamefromtype", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.maingamemanager.returnservernamefromtype", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.maingamemanager.returnservernamefromtype")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.maingamemanager.returnservernamefromtype", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.maingamemanager.returnservernamefromtype", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.maingamemanager.returnservernamefromtype", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
