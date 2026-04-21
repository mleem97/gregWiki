---
title: UIDSet
description: Documentation for greg.RACK.UIDSet
path: /api/hooks/rack/uidset
---

# UIDSet

> **Hook ID:** `greg.RACK.UIDSet`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.SetUID

## Native Signature
```csharp
Il2Cpp.RackPosition::SetUID(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UIDSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.UIDSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.UIDSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.UIDSet", function(payload)
    greg.log("Hook greg.RACK.UIDSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.UIDSet fired")

greg.on("greg.RACK.UIDSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.UIDSet", (payload) => {
    console.log("Hook greg.RACK.UIDSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.UIDSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.UIDSet", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.UIDSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
