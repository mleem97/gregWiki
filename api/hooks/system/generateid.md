---
title: GenerateID
description: Documentation for greg.SYSTEM.GenerateID
path: /api/hooks/system/generateid
---

# GenerateID

> **Hook ID:** `greg.SYSTEM.GenerateID`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_Persistence.GenerateID

## Native Signature
```csharp
Il2Cpp.FCP_Persistence::GenerateID()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateID` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenerateID", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenerateID");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenerateID", function(payload)
    greg.log("Hook greg.SYSTEM.GenerateID received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenerateID fired")

greg.on("greg.SYSTEM.GenerateID", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenerateID", (payload) => {
    console.log("Hook greg.SYSTEM.GenerateID triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenerateID".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenerateID", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenerateID fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
