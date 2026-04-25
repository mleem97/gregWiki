---
title: OnDeselect
description: Documentation for greg.SYSTEM.OnDeselect
path: /api/hooks/system/ondeselect
---

# OnDeselect

> **Hook ID:** `greg.SYSTEM.OnDeselect`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnDeselect

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnDeselect(BaseEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDeselect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnDeselect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnDeselect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnDeselect", function(payload)
    greg.log("Hook greg.SYSTEM.OnDeselect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnDeselect fired")

greg.on("greg.SYSTEM.OnDeselect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnDeselect", (payload) => {
    console.log("Hook greg.SYSTEM.OnDeselect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnDeselect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnDeselect", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnDeselect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
