---
title: ClickButtonNextIP
description: Documentation for greg.SYSTEM.ClickButtonNextIP
path: /api/hooks/system/clickbuttonnextip
---

# ClickButtonNextIP

> **Hook ID:** `greg.SYSTEM.ClickButtonNextIP`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonNextIP

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonNextIP()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonNextIP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonNextIP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonNextIP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonNextIP", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonNextIP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonNextIP fired")

greg.on("greg.SYSTEM.ClickButtonNextIP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonNextIP", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonNextIP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonNextIP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonNextIP", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonNextIP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
