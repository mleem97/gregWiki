---
title: ChangeLocalisation
description: Documentation for greg.SYSTEM.ChangeLocalisation
path: /api/hooks/system/changelocalisation
---

# ChangeLocalisation

> **Hook ID:** `greg.SYSTEM.ChangeLocalisation`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Localisation.ChangeLocalisation

## Native Signature
```csharp
Il2Cpp.Localisation::ChangeLocalisation(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ChangeLocalisation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ChangeLocalisation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ChangeLocalisation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ChangeLocalisation", function(payload)
    greg.log("Hook greg.SYSTEM.ChangeLocalisation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ChangeLocalisation fired")

greg.on("greg.SYSTEM.ChangeLocalisation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ChangeLocalisation", (payload) => {
    console.log("Hook greg.SYSTEM.ChangeLocalisation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ChangeLocalisation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ChangeLocalisation", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ChangeLocalisation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
