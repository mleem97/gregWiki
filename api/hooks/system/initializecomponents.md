---
title: InitializeComponents
description: Documentation for greg.SYSTEM.InitializeComponents
path: /api/hooks/system/initializecomponents
---

# InitializeComponents

> **Hook ID:** `greg.SYSTEM.InitializeComponents`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/RopeMesh.InitializeComponents

## Native Signature
```csharp
Il2Cpp.RopeMesh::InitializeComponents()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitializeComponents` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InitializeComponents", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InitializeComponents");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InitializeComponents", function(payload)
    greg.log("Hook greg.SYSTEM.InitializeComponents received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InitializeComponents fired")

greg.on("greg.SYSTEM.InitializeComponents", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InitializeComponents", (payload) => {
    console.log("Hook greg.SYSTEM.InitializeComponents triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InitializeComponents".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InitializeComponents", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InitializeComponents fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
