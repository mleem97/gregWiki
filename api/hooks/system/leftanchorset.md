---
title: LeftAnchorSet
description: Documentation for greg.SYSTEM.LeftAnchorSet
path: /api/hooks/system/leftanchorset
---

# LeftAnchorSet

> **Hook ID:** `greg.SYSTEM.LeftAnchorSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyAndCode/HorizontalRecyclingSystem.SetLeftAnchor

## Native Signature
```csharp
Il2Cpp.HorizontalRecyclingSystem::SetLeftAnchor(RectTransform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LeftAnchorSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LeftAnchorSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LeftAnchorSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LeftAnchorSet", function(payload)
    greg.log("Hook greg.SYSTEM.LeftAnchorSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LeftAnchorSet fired")

greg.on("greg.SYSTEM.LeftAnchorSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LeftAnchorSet", (payload) => {
    console.log("Hook greg.SYSTEM.LeftAnchorSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LeftAnchorSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LeftAnchorSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LeftAnchorSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
