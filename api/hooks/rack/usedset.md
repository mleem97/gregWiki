---
title: UsedSet
description: Documentation for greg.RACK.UsedSet
path: /api/hooks/rack/usedset
---

# UsedSet

> **Hook ID:** `greg.RACK.UsedSet`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.SetUsed

## Native Signature
```csharp
Il2Cpp.RackPosition::SetUsed(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UsedSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.UsedSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.UsedSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.UsedSet", function(payload)
    greg.log("Hook greg.RACK.UsedSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.UsedSet fired")

greg.on("greg.RACK.UsedSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.UsedSet", (payload) => {
    console.log("Hook greg.RACK.UsedSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.UsedSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.UsedSet", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.UsedSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
