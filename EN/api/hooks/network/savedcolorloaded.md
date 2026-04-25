---
title: SavedColorLoaded
description: Documentation for greg.NETWORK.SavedColorLoaded
path: /api/hooks/network/savedcolorloaded
---

# SavedColorLoaded

> **Hook ID:** `greg.NETWORK.SavedColorLoaded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.LoadSavedColor

## Native Signature
```csharp
Il2Cpp.CableSpinner::LoadSavedColor()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SavedColorLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SavedColorLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SavedColorLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SavedColorLoaded", function(payload)
    greg.log("Hook greg.NETWORK.SavedColorLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SavedColorLoaded fired")

greg.on("greg.NETWORK.SavedColorLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SavedColorLoaded", (payload) => {
    console.log("Hook greg.NETWORK.SavedColorLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SavedColorLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SavedColorLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SavedColorLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
