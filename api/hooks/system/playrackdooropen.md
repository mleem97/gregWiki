---
title: PlayRackDoorOpen
description: Documentation for greg.SYSTEM.PlayRackDoorOpen
path: /api/hooks/system/playrackdooropen
---

# PlayRackDoorOpen

> **Hook ID:** `greg.SYSTEM.PlayRackDoorOpen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AudioManager.PlayRackDoorOpen

## Native Signature
```csharp
Il2Cpp.AudioManager::PlayRackDoorOpen()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PlayRackDoorOpen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.PlayRackDoorOpen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.PlayRackDoorOpen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.PlayRackDoorOpen", function(payload)
    greg.log("Hook greg.SYSTEM.PlayRackDoorOpen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.PlayRackDoorOpen fired")

greg.on("greg.SYSTEM.PlayRackDoorOpen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.PlayRackDoorOpen", (payload) => {
    console.log("Hook greg.SYSTEM.PlayRackDoorOpen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.PlayRackDoorOpen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.PlayRackDoorOpen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.PlayRackDoorOpen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
