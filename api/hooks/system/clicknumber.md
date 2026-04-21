---
title: ClickNumber
description: Documentation for greg.SYSTEM.ClickNumber
path: /api/hooks/system/clicknumber
---

# ClickNumber

> **Hook ID:** `greg.SYSTEM.ClickNumber`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickNumber

## Native Signature
```csharp
Il2Cpp.SetIP::ClickNumber(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickNumber` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickNumber", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickNumber");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickNumber", function(payload)
    greg.log("Hook greg.SYSTEM.ClickNumber received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickNumber fired")

greg.on("greg.SYSTEM.ClickNumber", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickNumber", (payload) => {
    console.log("Hook greg.SYSTEM.ClickNumber triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickNumber".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickNumber", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickNumber fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
