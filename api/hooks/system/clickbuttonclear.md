---
title: ClickButtonClear
description: Documentation for greg.SYSTEM.ClickButtonClear
path: /api/hooks/system/clickbuttonclear
---

# ClickButtonClear

> **Hook ID:** `greg.SYSTEM.ClickButtonClear`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonClear

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonClear()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonClear` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonClear", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonClear");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonClear", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonClear received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonClear fired")

greg.on("greg.SYSTEM.ClickButtonClear", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonClear", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonClear triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonClear".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonClear", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonClear fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
