---
title: MoveToHand
description: Documentation for greg.SYSTEM.MoveToHand
path: /api/hooks/system/movetohand
---

# MoveToHand

> **Hook ID:** `greg.SYSTEM.MoveToHand`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.MoveToHand

## Native Signature
```csharp
Il2Cpp.UsableObject::MoveToHand()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MoveToHand` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MoveToHand", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MoveToHand");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MoveToHand", function(payload)
    greg.log("Hook greg.SYSTEM.MoveToHand received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MoveToHand fired")

greg.on("greg.SYSTEM.MoveToHand", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MoveToHand", (payload) => {
    console.log("Hook greg.SYSTEM.MoveToHand triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MoveToHand".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MoveToHand", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MoveToHand fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
