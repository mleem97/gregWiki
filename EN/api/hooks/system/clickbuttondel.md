---
title: ClickButtonDel
description: Documentation for greg.SYSTEM.ClickButtonDel
path: /api/hooks/system/clickbuttondel
---

# ClickButtonDel

> **Hook ID:** `greg.SYSTEM.ClickButtonDel`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonDel

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonDel()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonDel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonDel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonDel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonDel", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonDel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonDel fired")

greg.on("greg.SYSTEM.ClickButtonDel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonDel", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonDel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonDel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonDel", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonDel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
