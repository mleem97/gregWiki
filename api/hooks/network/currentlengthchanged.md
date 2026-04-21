---
title: CurrentLengthChanged
description: Documentation for greg.NETWORK.CurrentLengthChanged
path: /api/hooks/network/currentlengthchanged
---

# CurrentLengthChanged

> **Hook ID:** `greg.NETWORK.CurrentLengthChanged`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableSpinner.UpdateCurrentLength

## Native Signature
```csharp
Il2Cpp.CableSpinner::UpdateCurrentLength(float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CurrentLengthChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CurrentLengthChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CurrentLengthChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CurrentLengthChanged", function(payload)
    greg.log("Hook greg.NETWORK.CurrentLengthChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CurrentLengthChanged fired")

greg.on("greg.NETWORK.CurrentLengthChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CurrentLengthChanged", (payload) => {
    console.log("Hook greg.NETWORK.CurrentLengthChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CurrentLengthChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CurrentLengthChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CurrentLengthChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
