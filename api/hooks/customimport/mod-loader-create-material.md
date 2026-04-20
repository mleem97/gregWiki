---
title: ModLoader.CreateMaterial
description: Hook event for ModLoader.CreateMaterial
path: /api/hooks/customimport/mod-loader-create-material
---

# ModLoader.CreateMaterial

> **Hook ID:** `greg.customimport.modloader.creatematerial`
> **Category:** Customimport
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.CreateMaterial()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Material CreateMaterial(String folderPath, String textureFile)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `folderPath` | `String` | ... |
| `textureFile` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateMaterial` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.customimport.modloader.creatematerial", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.customimport.modloader.creatematerial", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.customimport.modloader.creatematerial")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.customimport.modloader.creatematerial", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.customimport.modloader.creatematerial", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.customimport.modloader.creatematerial", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Material`
- **Safe to block?**: Yes
