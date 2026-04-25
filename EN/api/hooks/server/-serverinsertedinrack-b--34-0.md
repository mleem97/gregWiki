---
title: _ServerInsertedInRack_b__34_0
description: Documentation for greg.SERVER._ServerInsertedInRack_b__34_0
path: /api/hooks/server/-serverinsertedinrack-b--34-0
---

# _ServerInsertedInRack_b__34_0

> **Hook ID:** `greg.SERVER._ServerInsertedInRack_b__34_0`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server._ServerInsertedInRack_b__34_0

## Native Signature
```csharp
Il2Cpp.Server::_ServerInsertedInRack_b__34_0(Server)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_ServerInsertedInRack_b__34_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER._ServerInsertedInRack_b__34_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER._ServerInsertedInRack_b__34_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER._ServerInsertedInRack_b__34_0", function(payload)
    greg.log("Hook greg.SERVER._ServerInsertedInRack_b__34_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER._ServerInsertedInRack_b__34_0 fired")

greg.on("greg.SERVER._ServerInsertedInRack_b__34_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER._ServerInsertedInRack_b__34_0", (payload) => {
    console.log("Hook greg.SERVER._ServerInsertedInRack_b__34_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER._ServerInsertedInRack_b__34_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER._ServerInsertedInRack_b__34_0", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER._ServerInsertedInRack_b__34_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
