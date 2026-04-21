---
title: OnCableRemoved
description: Documentation for greg.SYSTEM.OnCableRemoved
path: /api/hooks/system/oncableremoved
---

# OnCableRemoved

> **Hook ID:** `greg.SYSTEM.OnCableRemoved`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/WaypointInitializationSystem.OnCableRemoved

## Native Signature
```csharp
Il2Cpp.WaypointInitializationSystem::OnCableRemoved(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCableRemoved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCableRemoved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCableRemoved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCableRemoved", function(payload)
    greg.log("Hook greg.SYSTEM.OnCableRemoved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCableRemoved fired")

greg.on("greg.SYSTEM.OnCableRemoved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCableRemoved", (payload) => {
    console.log("Hook greg.SYSTEM.OnCableRemoved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCableRemoved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCableRemoved", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCableRemoved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
