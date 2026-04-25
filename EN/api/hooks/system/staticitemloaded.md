---
title: StaticItemLoaded
description: Documentation for greg.SYSTEM.StaticItemLoaded
path: /api/hooks/system/staticitemloaded
---

# StaticItemLoaded

> **Hook ID:** `greg.SYSTEM.StaticItemLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.LoadStaticItem

## Native Signature
```csharp
Il2Cpp.ModLoader::LoadStaticItem(string, string, StaticItemConfig)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StaticItemLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StaticItemLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StaticItemLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StaticItemLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.StaticItemLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StaticItemLoaded fired")

greg.on("greg.SYSTEM.StaticItemLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StaticItemLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.StaticItemLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StaticItemLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StaticItemLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StaticItemLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
