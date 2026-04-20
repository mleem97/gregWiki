---
title: ModLoader.LoadDll
description: Hook event for ModLoader.LoadDll
path: /api/hooks/persistence/mod-loader-load-dll
---

# ModLoader.LoadDll

> **Hook ID:** `greg.persistence.modloader.loaddll`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.LoadDll()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadDll(String folderPath, DllEntry dll)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `folderPath` | `String` | ... |
| `dll` | `DllEntry` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadDll` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.modloader.loaddll", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.modloader.loaddll", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.modloader.loaddll")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.modloader.loaddll", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.modloader.loaddll", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.modloader.loaddll", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
