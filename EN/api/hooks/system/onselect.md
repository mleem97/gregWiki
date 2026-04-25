---
title: OnSelect
description: Documentation for greg.SYSTEM.OnSelect
path: /api/hooks/system/onselect
---

# OnSelect

> **Hook ID:** `greg.SYSTEM.OnSelect`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnSelect

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnSelect(BaseEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSelect` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnSelect", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnSelect");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnSelect", function(payload)
    greg.log("Hook greg.SYSTEM.OnSelect received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnSelect fired")

greg.on("greg.SYSTEM.OnSelect", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnSelect", (payload) => {
    console.log("Hook greg.SYSTEM.OnSelect triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnSelect".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnSelect", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnSelect fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
