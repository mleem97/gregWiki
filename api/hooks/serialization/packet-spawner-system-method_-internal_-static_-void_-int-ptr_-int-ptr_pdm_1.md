---
title: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1
description: Hook event for PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1
path: /api/hooks/serialization/packet-spawner-system-method_-internal_-static_-void_-int-ptr_-int-ptr_pdm_1
---

# PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1

> **Hook ID:** `greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1`
> **Category:** Serialization
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1(IntPtr self, IntPtr state)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `self` | `IntPtr` | ... |
| `state` | `IntPtr` | ... |


## Using this Hook

::: tip
Use this hook to react to `Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1` events in `PacketSpawnerSystem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.packetspawnersystem.method_internal_static_void_intptr_intptr_pdm_1", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
