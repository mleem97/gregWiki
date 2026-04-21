---
title: DelayedTrigger
description: Documentation for greg.RACK.DelayedTrigger
path: /api/hooks/rack/delayedtrigger
---

# DelayedTrigger

> **Hook ID:** `greg.RACK.DelayedTrigger`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackDoor.DelayedTrigger

## Native Signature
```csharp
Il2Cpp.RackDoor::DelayedTrigger()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DelayedTrigger` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.DelayedTrigger", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.DelayedTrigger");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.DelayedTrigger", function(payload)
    greg.log("Hook greg.RACK.DelayedTrigger received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.DelayedTrigger fired")

greg.on("greg.RACK.DelayedTrigger", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.DelayedTrigger", (payload) => {
    console.log("Hook greg.RACK.DelayedTrigger triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.DelayedTrigger".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.DelayedTrigger", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.DelayedTrigger fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
