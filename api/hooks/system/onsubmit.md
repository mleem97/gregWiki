---
title: OnSubmit
description: Documentation for greg.SYSTEM.OnSubmit
path: /api/hooks/system/onsubmit
---

# OnSubmit

> **Hook ID:** `greg.SYSTEM.OnSubmit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnSubmit

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnSubmit(BaseEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSubmit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnSubmit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnSubmit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnSubmit", function(payload)
    greg.log("Hook greg.SYSTEM.OnSubmit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnSubmit fired")

greg.on("greg.SYSTEM.OnSubmit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnSubmit", (payload) => {
    console.log("Hook greg.SYSTEM.OnSubmit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnSubmit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnSubmit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnSubmit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
