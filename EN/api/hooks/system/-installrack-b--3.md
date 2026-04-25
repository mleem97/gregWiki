---
title: _InstallRack_b__3
description: Documentation for greg.SYSTEM._InstallRack_b__3
path: /api/hooks/system/-installrack-b--3
---

# _InstallRack_b__3

> **Hook ID:** `greg.SYSTEM._InstallRack_b__3`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__c__DisplayClass6_0._InstallRack_b__3

## Native Signature
```csharp
Il2Cpp.__c__DisplayClass6_0::_InstallRack_b__3()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_InstallRack_b__3` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._InstallRack_b__3", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._InstallRack_b__3");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._InstallRack_b__3", function(payload)
    greg.log("Hook greg.SYSTEM._InstallRack_b__3 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._InstallRack_b__3 fired")

greg.on("greg.SYSTEM._InstallRack_b__3", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._InstallRack_b__3", (payload) => {
    console.log("Hook greg.SYSTEM._InstallRack_b__3 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._InstallRack_b__3".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._InstallRack_b__3", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._InstallRack_b__3 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
