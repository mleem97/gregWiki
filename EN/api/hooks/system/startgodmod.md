---
title: StartGodMod
description: Documentation for greg.SYSTEM.StartGodMod
path: /api/hooks/system/startgodmod
---

# StartGodMod

> **Hook ID:** `greg.SYSTEM.StartGodMod`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GODMOD.StartGodMod

## Native Signature
```csharp
Il2Cpp.GODMOD::StartGodMod()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StartGodMod` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.StartGodMod", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.StartGodMod");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.StartGodMod", function(payload)
    greg.log("Hook greg.SYSTEM.StartGodMod received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.StartGodMod fired")

greg.on("greg.SYSTEM.StartGodMod", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.StartGodMod", (payload) => {
    console.log("Hook greg.SYSTEM.StartGodMod triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.StartGodMod".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.StartGodMod", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.StartGodMod fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
