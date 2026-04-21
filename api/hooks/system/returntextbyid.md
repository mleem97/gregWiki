---
title: ReturnTextByID
description: Documentation for greg.SYSTEM.ReturnTextByID
path: /api/hooks/system/returntextbyid
---

# ReturnTextByID

> **Hook ID:** `greg.SYSTEM.ReturnTextByID`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Localisation.ReturnTextByID

## Native Signature
```csharp
Il2Cpp.Localisation::ReturnTextByID(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReturnTextByID` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReturnTextByID", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReturnTextByID");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReturnTextByID", function(payload)
    greg.log("Hook greg.SYSTEM.ReturnTextByID received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReturnTextByID fired")

greg.on("greg.SYSTEM.ReturnTextByID", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReturnTextByID", (payload) => {
    console.log("Hook greg.SYSTEM.ReturnTextByID triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReturnTextByID".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReturnTextByID", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReturnTextByID fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
