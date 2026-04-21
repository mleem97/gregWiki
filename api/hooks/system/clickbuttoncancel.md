---
title: ClickButtonCancel
description: Documentation for greg.SYSTEM.ClickButtonCancel
path: /api/hooks/system/clickbuttoncancel
---

# ClickButtonCancel

> **Hook ID:** `greg.SYSTEM.ClickButtonCancel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonCancel

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonCancel()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonCancel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonCancel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonCancel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonCancel", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonCancel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonCancel fired")

greg.on("greg.SYSTEM.ClickButtonCancel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonCancel", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonCancel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonCancel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonCancel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonCancel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
