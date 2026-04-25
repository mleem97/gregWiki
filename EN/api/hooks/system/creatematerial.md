---
title: CreateMaterial
description: Documentation for greg.SYSTEM.CreateMaterial
path: /api/hooks/system/creatematerial
---

# CreateMaterial

> **Hook ID:** `greg.SYSTEM.CreateMaterial`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.CreateMaterial

## Native Signature
```csharp
Il2Cpp.ModLoader::CreateMaterial(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateMaterial` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateMaterial", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateMaterial");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateMaterial", function(payload)
    greg.log("Hook greg.SYSTEM.CreateMaterial received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateMaterial fired")

greg.on("greg.SYSTEM.CreateMaterial", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateMaterial", (payload) => {
    console.log("Hook greg.SYSTEM.CreateMaterial triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateMaterial".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateMaterial", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateMaterial fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
