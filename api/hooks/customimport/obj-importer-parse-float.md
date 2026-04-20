---
title: ObjImporter.ParseFloat
description: Hook event for ObjImporter.ParseFloat
path: /api/hooks/customimport/obj-importer-parse-float
---

# ObjImporter.ParseFloat

> **Hook ID:** `greg.customimport.objimporter.parsefloat`
> **Category:** Customimport
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjImporter.ParseFloat()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single ParseFloat(String s)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `s` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ParseFloat` events in `ObjImporter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.customimport.objimporter.parsefloat", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.customimport.objimporter.parsefloat", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.customimport.objimporter.parsefloat")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.customimport.objimporter.parsefloat", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.customimport.objimporter.parsefloat", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.customimport.objimporter.parsefloat", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
