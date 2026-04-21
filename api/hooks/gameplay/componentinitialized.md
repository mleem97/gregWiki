---
title: ComponentInitialized
description: Documentation for greg.GAMEPLAY.ComponentInitialized
path: /api/hooks/gameplay/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.GAMEPLAY.ComponentInitialized`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Objectives.Start

## Native Signature
```csharp
Il2Cpp.Objectives::Start()
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
        GregAPI.Hooks.On("greg.GAMEPLAY.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.ComponentInitialized", function(payload)
    greg.log("Hook greg.GAMEPLAY.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.ComponentInitialized fired")

greg.on("greg.GAMEPLAY.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.ComponentInitialized", (payload) => {
    console.log("Hook greg.GAMEPLAY.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
