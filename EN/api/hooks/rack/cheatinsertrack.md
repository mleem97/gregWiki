---
title: CheatInsertRack
description: Documentation for greg.RACK.CheatInsertRack
path: /api/hooks/rack/cheatinsertrack
---

# CheatInsertRack

> **Hook ID:** `greg.RACK.CheatInsertRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackMount.CheatInsertRack

## Native Signature
```csharp
Il2Cpp.RackMount::CheatInsertRack(GameObject, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CheatInsertRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.CheatInsertRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.CheatInsertRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.CheatInsertRack", function(payload)
    greg.log("Hook greg.RACK.CheatInsertRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.CheatInsertRack fired")

greg.on("greg.RACK.CheatInsertRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.CheatInsertRack", (payload) => {
    console.log("Hook greg.RACK.CheatInsertRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.CheatInsertRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.CheatInsertRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.CheatInsertRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
