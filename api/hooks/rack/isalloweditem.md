---
title: IsAllowedItem
description: Documentation for greg.RACK.IsAllowedItem
path: /api/hooks/rack/isalloweditem
---

# IsAllowedItem

> **Hook ID:** `greg.RACK.IsAllowedItem`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.IsAllowedItem

## Native Signature
```csharp
Il2Cpp.RackPosition::IsAllowedItem(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAllowedItem` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.IsAllowedItem", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.IsAllowedItem");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.IsAllowedItem", function(payload)
    greg.log("Hook greg.RACK.IsAllowedItem received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.IsAllowedItem fired")

greg.on("greg.RACK.IsAllowedItem", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.IsAllowedItem", (payload) => {
    console.log("Hook greg.RACK.IsAllowedItem triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.IsAllowedItem".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.IsAllowedItem", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.IsAllowedItem fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
