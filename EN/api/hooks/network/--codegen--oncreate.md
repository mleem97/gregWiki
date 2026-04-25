---
title: __codegen__OnCreate
description: Documentation for greg.NETWORK.__codegen__OnCreate
path: /api/hooks/network/--codegen--oncreate
---

# __codegen__OnCreate

> **Hook ID:** `greg.NETWORK.__codegen__OnCreate`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PacketSpawnerSystem.__codegen__OnCreate

## Native Signature
```csharp
Il2Cpp.PacketSpawnerSystem::__codegen__OnCreate(System.IntPtr, System.IntPtr)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__codegen__OnCreate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.__codegen__OnCreate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.__codegen__OnCreate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.__codegen__OnCreate", function(payload)
    greg.log("Hook greg.NETWORK.__codegen__OnCreate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.__codegen__OnCreate fired")

greg.on("greg.NETWORK.__codegen__OnCreate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.__codegen__OnCreate", (payload) => {
    console.log("Hook greg.NETWORK.__codegen__OnCreate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.__codegen__OnCreate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.__codegen__OnCreate", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.__codegen__OnCreate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
