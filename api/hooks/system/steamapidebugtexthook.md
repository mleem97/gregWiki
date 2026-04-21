---
title: SteamAPIDebugTextHook
description: Documentation for greg.SYSTEM.SteamAPIDebugTextHook
path: /api/hooks/system/steamapidebugtexthook
---

# SteamAPIDebugTextHook

> **Hook ID:** `greg.SYSTEM.SteamAPIDebugTextHook`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SteamManager.SteamAPIDebugTextHook

## Native Signature
```csharp
Il2Cpp.SteamManager::SteamAPIDebugTextHook(int, StringBuilder)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SteamAPIDebugTextHook` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SteamAPIDebugTextHook", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SteamAPIDebugTextHook");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SteamAPIDebugTextHook", function(payload)
    greg.log("Hook greg.SYSTEM.SteamAPIDebugTextHook received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SteamAPIDebugTextHook fired")

greg.on("greg.SYSTEM.SteamAPIDebugTextHook", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SteamAPIDebugTextHook", (payload) => {
    console.log("Hook greg.SYSTEM.SteamAPIDebugTextHook triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SteamAPIDebugTextHook".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SteamAPIDebugTextHook", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SteamAPIDebugTextHook fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
