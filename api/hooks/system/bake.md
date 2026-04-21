---
title: Bake
description: Documentation for greg.SYSTEM.Bake
path: /api/hooks/system/bake
---

# Bake

> **Hook ID:** `greg.SYSTEM.Bake`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Baker.Bake

## Native Signature
```csharp
Il2Cpp.Baker::Bake(PacketSpawnerAuthoring)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Bake` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Bake", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Bake");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Bake", function(payload)
    greg.log("Hook greg.SYSTEM.Bake received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Bake fired")

greg.on("greg.SYSTEM.Bake", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Bake", (payload) => {
    console.log("Hook greg.SYSTEM.Bake triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Bake".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Bake", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Bake fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
