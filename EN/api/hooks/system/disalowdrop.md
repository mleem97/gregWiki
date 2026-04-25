---
title: DisalowDrop
description: Documentation for greg.SYSTEM.DisalowDrop
path: /api/hooks/system/disalowdrop
---

# DisalowDrop

> **Hook ID:** `greg.SYSTEM.DisalowDrop`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.DisalowDrop

## Native Signature
```csharp
Il2Cpp.UsableObject::DisalowDrop()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisalowDrop` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DisalowDrop", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DisalowDrop");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DisalowDrop", function(payload)
    greg.log("Hook greg.SYSTEM.DisalowDrop received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DisalowDrop fired")

greg.on("greg.SYSTEM.DisalowDrop", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DisalowDrop", (payload) => {
    console.log("Hook greg.SYSTEM.DisalowDrop triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DisalowDrop".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DisalowDrop", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DisalowDrop fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
