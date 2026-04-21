---
title: SwitchInsertedInRack
description: Documentation for greg.NETWORK.SwitchInsertedInRack
path: /api/hooks/network/switchinsertedinrack
---

# SwitchInsertedInRack

> **Hook ID:** `greg.NETWORK.SwitchInsertedInRack`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.SwitchInsertedInRack

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::SwitchInsertedInRack(SwitchSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SwitchInsertedInRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SwitchInsertedInRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SwitchInsertedInRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SwitchInsertedInRack", function(payload)
    greg.log("Hook greg.NETWORK.SwitchInsertedInRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SwitchInsertedInRack fired")

greg.on("greg.NETWORK.SwitchInsertedInRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SwitchInsertedInRack", (payload) => {
    console.log("Hook greg.NETWORK.SwitchInsertedInRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SwitchInsertedInRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SwitchInsertedInRack", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SwitchInsertedInRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
