---
title: UnmountRack
description: Documentation for greg.RACK.UnmountRack
path: /api/hooks/rack/unmountrack
---

# UnmountRack

> **Hook ID:** `greg.RACK.UnmountRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.UnmountRack

## Native Signature
```csharp
Il2Cpp.Rack::UnmountRack()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnmountRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.UnmountRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.UnmountRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.UnmountRack", function(payload)
    greg.log("Hook greg.RACK.UnmountRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.UnmountRack fired")

greg.on("greg.RACK.UnmountRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.UnmountRack", (payload) => {
    console.log("Hook greg.RACK.UnmountRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.UnmountRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.UnmountRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.UnmountRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
