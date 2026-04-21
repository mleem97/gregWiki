---
title: ComponentInitialized
description: Documentation for greg.SYSTEM.ComponentInitialized
path: /api/hooks/system/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.SYSTEM.ComponentInitialized`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/ThirdPersonCharacter.Awake

## Native Signature
```csharp
Il2Cpp.ThirdPersonCharacter::Awake()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ComponentInitialized", function(payload)
    greg.log("Hook greg.SYSTEM.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ComponentInitialized fired")

greg.on("greg.SYSTEM.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ComponentInitialized", (payload) => {
    console.log("Hook greg.SYSTEM.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
