---
title: __AssignQueries
description: Documentation for greg.NETWORK.__AssignQueries
path: /api/hooks/network/--assignqueries
---

# __AssignQueries

> **Hook ID:** `greg.NETWORK.__AssignQueries`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PacketSpawnerSystem.__AssignQueries

## Native Signature
```csharp
Il2Cpp.PacketSpawnerSystem::__AssignQueries(SystemState)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__AssignQueries` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.__AssignQueries", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.__AssignQueries");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.__AssignQueries", function(payload)
    greg.log("Hook greg.NETWORK.__AssignQueries received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.__AssignQueries fired")

greg.on("greg.NETWORK.__AssignQueries", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.__AssignQueries", (payload) => {
    console.log("Hook greg.NETWORK.__AssignQueries triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.__AssignQueries".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.__AssignQueries", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.__AssignQueries fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
