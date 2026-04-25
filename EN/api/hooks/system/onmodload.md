---
title: OnModLoad
description: Documentation for greg.SYSTEM.OnModLoad
path: /api/hooks/system/onmodload
---

# OnModLoad

> **Hook ID:** `greg.SYSTEM.OnModLoad`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/IModPlugin.OnModLoad

## Native Signature
```csharp
Il2Cpp.IModPlugin::OnModLoad(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnModLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnModLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnModLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnModLoad", function(payload)
    greg.log("Hook greg.SYSTEM.OnModLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnModLoad fired")

greg.on("greg.SYSTEM.OnModLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnModLoad", (payload) => {
    console.log("Hook greg.SYSTEM.OnModLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnModLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnModLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnModLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
