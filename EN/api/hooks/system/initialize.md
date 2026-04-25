---
title: Initialize
description: Documentation for greg.SYSTEM.Initialize
path: /api/hooks/system/initialize
---

# Initialize

> **Hook ID:** `greg.SYSTEM.Initialize`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/RecyclableScrollRect.Initialize

## Native Signature
```csharp
Il2Cpp.RecyclableScrollRect::Initialize(IRecyclableScrollRectDataSource)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Initialize` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Initialize", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Initialize");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Initialize", function(payload)
    greg.log("Hook greg.SYSTEM.Initialize received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Initialize fired")

greg.on("greg.SYSTEM.Initialize", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Initialize", (payload) => {
    console.log("Hook greg.SYSTEM.Initialize triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Initialize".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Initialize", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Initialize fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
