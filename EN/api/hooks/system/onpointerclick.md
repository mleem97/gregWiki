---
title: OnPointerClick
description: Documentation for greg.SYSTEM.OnPointerClick
path: /api/hooks/system/onpointerclick
---

# OnPointerClick

> **Hook ID:** `greg.SYSTEM.OnPointerClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnPointerClick

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnPointerClick(PointerEventData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPointerClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnPointerClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnPointerClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnPointerClick", function(payload)
    greg.log("Hook greg.SYSTEM.OnPointerClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnPointerClick fired")

greg.on("greg.SYSTEM.OnPointerClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnPointerClick", (payload) => {
    console.log("Hook greg.SYSTEM.OnPointerClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnPointerClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnPointerClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnPointerClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
