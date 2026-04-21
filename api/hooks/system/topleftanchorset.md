---
title: TopLeftAnchorSet
description: Documentation for greg.SYSTEM.TopLeftAnchorSet
path: /api/hooks/system/topleftanchorset
---

# TopLeftAnchorSet

> **Hook ID:** `greg.SYSTEM.TopLeftAnchorSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/VerticalRecyclingSystem.SetTopLeftAnchor

## Native Signature
```csharp
Il2Cpp.VerticalRecyclingSystem::SetTopLeftAnchor(RectTransform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TopLeftAnchorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.TopLeftAnchorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.TopLeftAnchorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.TopLeftAnchorSet", function(payload)
    greg.log("Hook greg.SYSTEM.TopLeftAnchorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.TopLeftAnchorSet fired")

greg.on("greg.SYSTEM.TopLeftAnchorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.TopLeftAnchorSet", (payload) => {
    console.log("Hook greg.SYSTEM.TopLeftAnchorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.TopLeftAnchorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.TopLeftAnchorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.TopLeftAnchorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
