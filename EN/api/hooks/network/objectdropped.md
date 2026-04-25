---
title: ObjectDropped
description: Documentation for greg.NETWORK.ObjectDropped
path: /api/hooks/network/objectdropped
---

# ObjectDropped

> **Hook ID:** `greg.NETWORK.ObjectDropped`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.DropObject

## Native Signature
```csharp
Il2Cpp.CableSpinner::DropObject()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ObjectDropped` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ObjectDropped", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ObjectDropped");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ObjectDropped", function(payload)
    greg.log("Hook greg.NETWORK.ObjectDropped received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ObjectDropped fired")

greg.on("greg.NETWORK.ObjectDropped", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ObjectDropped", (payload) => {
    console.log("Hook greg.NETWORK.ObjectDropped triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ObjectDropped".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ObjectDropped", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ObjectDropped fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
