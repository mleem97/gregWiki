---
title: InitializeLineRenderer
description: Documentation for greg.SYSTEM.InitializeLineRenderer
path: /api/hooks/system/initializelinerenderer
---

# InitializeLineRenderer

> **Hook ID:** `greg.SYSTEM.InitializeLineRenderer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppGogoGaga/Rope.InitializeLineRenderer

## Native Signature
```csharp
Il2Cpp.Rope::InitializeLineRenderer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitializeLineRenderer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InitializeLineRenderer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InitializeLineRenderer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InitializeLineRenderer", function(payload)
    greg.log("Hook greg.SYSTEM.InitializeLineRenderer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InitializeLineRenderer fired")

greg.on("greg.SYSTEM.InitializeLineRenderer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InitializeLineRenderer", (payload) => {
    console.log("Hook greg.SYSTEM.InitializeLineRenderer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InitializeLineRenderer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InitializeLineRenderer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InitializeLineRenderer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
