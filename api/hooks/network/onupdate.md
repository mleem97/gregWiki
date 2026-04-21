---
title: OnUpdate
description: Documentation for greg.NETWORK.OnUpdate
path: /api/hooks/network/onupdate
---

# OnUpdate

> **Hook ID:** `greg.NETWORK.OnUpdate`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PacketSpawnerSystem.OnUpdate

## Native Signature
```csharp
Il2Cpp.PacketSpawnerSystem::OnUpdate(SystemState)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.OnUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.OnUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.OnUpdate", function(payload)
    greg.log("Hook greg.NETWORK.OnUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.OnUpdate fired")

greg.on("greg.NETWORK.OnUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.OnUpdate", (payload) => {
    console.log("Hook greg.NETWORK.OnUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.OnUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.OnUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.OnUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
