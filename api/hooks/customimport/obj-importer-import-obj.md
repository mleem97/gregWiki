---
title: ObjImporter.ImportOBJ
description: Hook event for ObjImporter.ImportOBJ
path: /api/hooks/customimport/obj-importer-import-obj
---

# ObjImporter.ImportOBJ

> **Hook ID:** `greg.customimport.objimporter.importobj`
> **Category:** Customimport
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjImporter.ImportOBJ()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Mesh ImportOBJ(String filePath)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `filePath` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ImportOBJ` events in `ObjImporter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.customimport.objimporter.importobj", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.customimport.objimporter.importobj", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.customimport.objimporter.importobj")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.customimport.objimporter.importobj", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.customimport.objimporter.importobj", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.customimport.objimporter.importobj", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Mesh`
- **Safe to block?**: Yes
