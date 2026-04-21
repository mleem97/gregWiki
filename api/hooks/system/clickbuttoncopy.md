---
title: ClickButtonCopy
description: Documentation for greg.SYSTEM.ClickButtonCopy
path: /api/hooks/system/clickbuttoncopy
---

# ClickButtonCopy

> **Hook ID:** `greg.SYSTEM.ClickButtonCopy`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonCopy

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonCopy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonCopy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonCopy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonCopy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonCopy", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonCopy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonCopy fired")

greg.on("greg.SYSTEM.ClickButtonCopy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonCopy", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonCopy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonCopy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonCopy", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonCopy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
