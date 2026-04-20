---
title: ObjImporter.ProcessFaceVertex
description: Hook event for ObjImporter.ProcessFaceVertex
path: /api/hooks/customimport/obj-importer-process-face-vertex
---

# ObjImporter.ProcessFaceVertex

> **Hook ID:** `greg.customimport.objimporter.processfacevertex`
> **Category:** Customimport
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ObjImporter.ProcessFaceVertex()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 ProcessFaceVertex(String faceVertex, List`1 positions, List`1 uvs, List`1 normals, List`1 outVerts, List`1 outUVs, List`1 outNorms, Dictionary`2 cache)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `faceVertex` | `String` | ... |
| `positions` | `List`1` | ... |
| `uvs` | `List`1` | ... |
| `normals` | `List`1` | ... |
| `outVerts` | `List`1` | ... |
| `outUVs` | `List`1` | ... |
| `outNorms` | `List`1` | ... |
| `cache` | `Dictionary`2` | ... |


## Using this Hook

::: tip
Use this hook to react to `ProcessFaceVertex` events in `ObjImporter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.customimport.objimporter.processfacevertex", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.customimport.objimporter.processfacevertex", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.customimport.objimporter.processfacevertex")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.customimport.objimporter.processfacevertex", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.customimport.objimporter.processfacevertex", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.customimport.objimporter.processfacevertex", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
