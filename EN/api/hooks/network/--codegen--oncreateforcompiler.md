---
title: __codegen__OnCreateForCompiler
description: Documentation for greg.NETWORK.__codegen__OnCreateForCompiler
path: /api/hooks/network/--codegen--oncreateforcompiler
---

# __codegen__OnCreateForCompiler

> **Hook ID:** `greg.NETWORK.__codegen__OnCreateForCompiler`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PacketSpawnerSystem.__codegen__OnCreateForCompiler

## Native Signature
```csharp
Il2Cpp.PacketSpawnerSystem::__codegen__OnCreateForCompiler(System.IntPtr, System.IntPtr)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__codegen__OnCreateForCompiler` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.__codegen__OnCreateForCompiler", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.__codegen__OnCreateForCompiler");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.__codegen__OnCreateForCompiler", function(payload)
    greg.log("Hook greg.NETWORK.__codegen__OnCreateForCompiler received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.__codegen__OnCreateForCompiler fired")

greg.on("greg.NETWORK.__codegen__OnCreateForCompiler", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.__codegen__OnCreateForCompiler", (payload) => {
    console.log("Hook greg.NETWORK.__codegen__OnCreateForCompiler triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.__codegen__OnCreateForCompiler".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.__codegen__OnCreateForCompiler", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.__codegen__OnCreateForCompiler fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
