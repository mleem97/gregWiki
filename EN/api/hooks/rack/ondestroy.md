---
title: OnDestroy
description: Documentation for greg.RACK.OnDestroy
path: /api/hooks/rack/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.RACK.OnDestroy`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.OnDestroy

## Native Signature
```csharp
Il2Cpp.RackPosition::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.OnDestroy", function(payload)
    greg.log("Hook greg.RACK.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.OnDestroy fired")

greg.on("greg.RACK.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.OnDestroy", (payload) => {
    console.log("Hook greg.RACK.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
