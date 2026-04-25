---
title: _InsertedInRack_b__8_0
description: Documentation for greg.SYSTEM._InsertedInRack_b__8_0
path: /api/hooks/system/-insertedinrack-b--8-0
---

# _InsertedInRack_b__8_0

> **Hook ID:** `greg.SYSTEM._InsertedInRack_b__8_0`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/__c._InsertedInRack_b__8_0

## Native Signature
```csharp
Il2Cpp.__c::_InsertedInRack_b__8_0(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_InsertedInRack_b__8_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._InsertedInRack_b__8_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._InsertedInRack_b__8_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._InsertedInRack_b__8_0", function(payload)
    greg.log("Hook greg.SYSTEM._InsertedInRack_b__8_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._InsertedInRack_b__8_0 fired")

greg.on("greg.SYSTEM._InsertedInRack_b__8_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._InsertedInRack_b__8_0", (payload) => {
    console.log("Hook greg.SYSTEM._InsertedInRack_b__8_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._InsertedInRack_b__8_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._InsertedInRack_b__8_0", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._InsertedInRack_b__8_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
