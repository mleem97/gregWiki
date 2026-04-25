---
title: Localisation
description: Documentation for greg.SYSTEM.Localisation.OnLanguageChange
path: /api/hooks/system/localisation
---

# Localisation

> **Hook ID:** `greg.SYSTEM.Localisation.OnLanguageChange`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnLanguageChange.Localisation.OnLanguageChange

## Native Signature
```csharp
Il2Cpp.OnLanguageChange::Localisation.OnLanguageChange([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Localisation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Localisation.OnLanguageChange", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Localisation.OnLanguageChange");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Localisation.OnLanguageChange", function(payload)
    greg.log("Hook greg.SYSTEM.Localisation.OnLanguageChange received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Localisation.OnLanguageChange fired")

greg.on("greg.SYSTEM.Localisation.OnLanguageChange", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Localisation.OnLanguageChange", (payload) => {
    console.log("Hook greg.SYSTEM.Localisation.OnLanguageChange triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Localisation.OnLanguageChange".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Localisation.OnLanguageChange", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Localisation.OnLanguageChange fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
