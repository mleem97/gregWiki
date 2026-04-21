---
title: ComponentInitialized
description: Documentation for greg.RACK.ComponentInitialized
path: /api/hooks/rack/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.RACK.ComponentInitialized`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.Awake

## Native Signature
```csharp
Il2Cpp.RackPosition::Awake()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.ComponentInitialized", function(payload)
    greg.log("Hook greg.RACK.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.ComponentInitialized fired")

greg.on("greg.RACK.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.ComponentInitialized", (payload) => {
    console.log("Hook greg.RACK.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
