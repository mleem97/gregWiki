---
title: IsSubnetValid
description: Documentation for greg.SYSTEM.IsSubnetValid
path: /api/hooks/system/issubnetvalid
---

# IsSubnetValid

> **Hook ID:** `greg.SYSTEM.IsSubnetValid`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.IsSubnetValid

## Native Signature
```csharp
Il2Cpp.MainGameManager::IsSubnetValid(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsSubnetValid` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsSubnetValid", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsSubnetValid");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsSubnetValid", function(payload)
    greg.log("Hook greg.SYSTEM.IsSubnetValid received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsSubnetValid fired")

greg.on("greg.SYSTEM.IsSubnetValid", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsSubnetValid", (payload) => {
    console.log("Hook greg.SYSTEM.IsSubnetValid triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsSubnetValid".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsSubnetValid", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsSubnetValid fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
