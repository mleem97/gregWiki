---
title: ModLoader.GetModPrefabByFolder
description: Hook event for ModLoader.GetModPrefabByFolder
path: /api/hooks/customimport/mod-loader-get-mod-prefab-by-folder
---

# ModLoader.GetModPrefabByFolder

> **Hook ID:** `greg.customimport.modloader.getmodprefabbyfolder`
> **Category:** Customimport
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.GetModPrefabByFolder()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject GetModPrefabByFolder(String folderName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `folderName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetModPrefabByFolder` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.customimport.modloader.getmodprefabbyfolder", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.customimport.modloader.getmodprefabbyfolder", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.customimport.modloader.getmodprefabbyfolder")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.customimport.modloader.getmodprefabbyfolder", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.customimport.modloader.getmodprefabbyfolder", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.customimport.modloader.getmodprefabbyfolder", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
