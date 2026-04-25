---
title: ClickButtonOK
description: Documentation for greg.SYSTEM.ClickButtonOK
path: /api/hooks/system/clickbuttonok
---

# ClickButtonOK

> **Hook ID:** `greg.SYSTEM.ClickButtonOK`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonOK

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonOK()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonOK` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonOK", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonOK");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonOK", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonOK received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonOK fired")

greg.on("greg.SYSTEM.ClickButtonOK", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonOK", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonOK triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonOK".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonOK", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonOK fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
