---
title: GetMouseLook
description: Documentation for greg.SYSTEM.GetMouseLook
path: /api/hooks/system/getmouselook
---

# GetMouseLook

> **Hook ID:** `greg.SYSTEM.GetMouseLook`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.GetMouseLook

## Native Signature
```csharp
Il2Cpp.FirstPersonController::GetMouseLook()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetMouseLook` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetMouseLook", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetMouseLook");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetMouseLook", function(payload)
    greg.log("Hook greg.SYSTEM.GetMouseLook received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetMouseLook fired")

greg.on("greg.SYSTEM.GetMouseLook", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetMouseLook", (payload) => {
    console.log("Hook greg.SYSTEM.GetMouseLook triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetMouseLook".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetMouseLook", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetMouseLook fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
