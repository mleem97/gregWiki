---
title: PacketComponent.BoxIl2CppObject
description: Hook event for PacketComponent.BoxIl2CppObject
path: /api/hooks/networking/packet-component-box-il2-cpp-object
---

# PacketComponent.BoxIl2CppObject

> **Hook ID:** `greg.networking.packetcomponent.boxil2cppobject`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PacketComponent.BoxIl2CppObject()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Object BoxIl2CppObject()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `BoxIl2CppObject` events in `PacketComponent`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.packetcomponent.boxil2cppobject", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.packetcomponent.boxil2cppobject", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.packetcomponent.boxil2cppobject")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.packetcomponent.boxil2cppobject", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.packetcomponent.boxil2cppobject", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.packetcomponent.boxil2cppobject", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Object`
- **Safe to block?**: Yes
