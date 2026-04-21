---
title: CreateNewCable
description: Documentation for greg.NETWORK.CreateNewCable
path: /api/hooks/network/createnewcable
---

# CreateNewCable

> **Hook ID:** `greg.NETWORK.CreateNewCable`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.CreateNewCable

## Native Signature
```csharp
Il2Cpp.CablePositions::CreateNewCable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateNewCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CreateNewCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CreateNewCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CreateNewCable", function(payload)
    greg.log("Hook greg.NETWORK.CreateNewCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CreateNewCable fired")

greg.on("greg.NETWORK.CreateNewCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CreateNewCable", (payload) => {
    console.log("Hook greg.NETWORK.CreateNewCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CreateNewCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CreateNewCable", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CreateNewCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
