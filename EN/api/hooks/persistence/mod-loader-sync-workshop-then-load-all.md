---
title: ModLoader.SyncWorkshopThenLoadAll
description: Hook event for ModLoader.SyncWorkshopThenLoadAll
path: /api/hooks/persistence/mod-loader-sync-workshop-then-load-all
---

# ModLoader.SyncWorkshopThenLoadAll

> **Hook ID:** `greg.persistence.modloader.syncworkshopthenloadall`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ModLoader.SyncWorkshopThenLoadAll()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator SyncWorkshopThenLoadAll()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `SyncWorkshopThenLoadAll` events in `ModLoader`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.modloader.syncworkshopthenloadall", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.modloader.syncworkshopthenloadall", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.modloader.syncworkshopthenloadall")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.modloader.syncworkshopthenloadall", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.modloader.syncworkshopthenloadall", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.modloader.syncworkshopthenloadall", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
