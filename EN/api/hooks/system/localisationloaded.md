---
title: LocalisationLoaded
description: Documentation for greg.SYSTEM.LocalisationLoaded
path: /api/hooks/system/localisationloaded
---

# LocalisationLoaded

> **Hook ID:** `greg.SYSTEM.LocalisationLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Localisation.LoadLocalisation

## Native Signature
```csharp
Il2Cpp.Localisation::LoadLocalisation(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LocalisationLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LocalisationLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LocalisationLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LocalisationLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.LocalisationLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LocalisationLoaded fired")

greg.on("greg.SYSTEM.LocalisationLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LocalisationLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.LocalisationLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LocalisationLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LocalisationLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LocalisationLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
