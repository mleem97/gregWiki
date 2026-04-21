---
title: CreateNewReverseCable
description: Documentation for greg.NETWORK.CreateNewReverseCable
path: /api/hooks/network/createnewreversecable
---

# CreateNewReverseCable

> **Hook ID:** `greg.NETWORK.CreateNewReverseCable`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.CreateNewReverseCable

## Native Signature
```csharp
Il2Cpp.CablePositions::CreateNewReverseCable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateNewReverseCable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CreateNewReverseCable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CreateNewReverseCable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CreateNewReverseCable", function(payload)
    greg.log("Hook greg.NETWORK.CreateNewReverseCable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CreateNewReverseCable fired")

greg.on("greg.NETWORK.CreateNewReverseCable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CreateNewReverseCable", (payload) => {
    console.log("Hook greg.NETWORK.CreateNewReverseCable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CreateNewReverseCable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CreateNewReverseCable", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CreateNewReverseCable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
