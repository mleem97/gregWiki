---
title: TopAnchorSet
description: Documentation for greg.SYSTEM.TopAnchorSet
path: /api/hooks/system/topanchorset
---

# TopAnchorSet

> **Hook ID:** `greg.SYSTEM.TopAnchorSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.SetTopAnchor

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::SetTopAnchor(RectTransform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TopAnchorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TopAnchorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TopAnchorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TopAnchorSet", function(payload)
    greg.log("Hook greg.SYSTEM.TopAnchorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TopAnchorSet fired")

greg.on("greg.SYSTEM.TopAnchorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TopAnchorSet", (payload) => {
    console.log("Hook greg.SYSTEM.TopAnchorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TopAnchorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TopAnchorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TopAnchorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
