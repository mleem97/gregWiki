---
title: Changed
description: Documentation for greg.SYSTEM.Changed
path: /api/hooks/system/changed
---

# Changed

> **Hook ID:** `greg.SYSTEM.Changed`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.Update

## Native Signature
```csharp
Il2Cpp.FirstPersonController::Update()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Changed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Changed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Changed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Changed", function(payload)
    greg.log("Hook greg.SYSTEM.Changed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Changed fired")

greg.on("greg.SYSTEM.Changed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Changed", (payload) => {
    console.log("Hook greg.SYSTEM.Changed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Changed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Changed", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Changed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
