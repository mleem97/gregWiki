---
title: UnitySourceGeneratedAssemblyMonoScriptTypes_v1.Get
description: Hook event for UnitySourceGeneratedAssemblyMonoScriptTypes_v1.Get
path: /api/hooks/serialization/unity-source-generated-assembly-mono-script-types_v1-get
---

# UnitySourceGeneratedAssemblyMonoScriptTypes_v1.Get

> **Hook ID:** `greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get`
> **Category:** Serialization
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UnitySourceGeneratedAssemblyMonoScriptTypes_v1.Get()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
MonoScriptData Get()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Get` events in `UnitySourceGeneratedAssemblyMonoScriptTypes_v1`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.serialization.unitysourcegeneratedassemblymonoscripttypes_v1.get", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `MonoScriptData`
- **Safe to block?**: Yes
