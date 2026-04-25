---
title: SyncWorkshopThenLoadAll
description: Documentation for greg.SYSTEM.SyncWorkshopThenLoadAll
path: /api/hooks/system/syncworkshopthenloadall
---

# SyncWorkshopThenLoadAll

> **Hook ID:** `greg.SYSTEM.SyncWorkshopThenLoadAll`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.SyncWorkshopThenLoadAll

## Native Signature
```csharp
Il2Cpp.ModLoader::SyncWorkshopThenLoadAll()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SyncWorkshopThenLoadAll` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SyncWorkshopThenLoadAll", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SyncWorkshopThenLoadAll");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SyncWorkshopThenLoadAll", function(payload)
    greg.log("Hook greg.SYSTEM.SyncWorkshopThenLoadAll received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SyncWorkshopThenLoadAll fired")

greg.on("greg.SYSTEM.SyncWorkshopThenLoadAll", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SyncWorkshopThenLoadAll", (payload) => {
    console.log("Hook greg.SYSTEM.SyncWorkshopThenLoadAll triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SyncWorkshopThenLoadAll".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SyncWorkshopThenLoadAll", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SyncWorkshopThenLoadAll fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
