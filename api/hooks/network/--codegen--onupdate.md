---
title: __codegen__OnUpdate
description: Documentation for greg.NETWORK.__codegen__OnUpdate
path: /api/hooks/network/--codegen--onupdate
---

# __codegen__OnUpdate

> **Hook ID:** `greg.NETWORK.__codegen__OnUpdate`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PacketSpawnerSystem.__codegen__OnUpdate

## Native Signature
```csharp
Il2Cpp.PacketSpawnerSystem::__codegen__OnUpdate(System.IntPtr, System.IntPtr)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__codegen__OnUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.__codegen__OnUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.__codegen__OnUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.__codegen__OnUpdate", function(payload)
    greg.log("Hook greg.NETWORK.__codegen__OnUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.__codegen__OnUpdate fired")

greg.on("greg.NETWORK.__codegen__OnUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.__codegen__OnUpdate", (payload) => {
    console.log("Hook greg.NETWORK.__codegen__OnUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.__codegen__OnUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.__codegen__OnUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.__codegen__OnUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
