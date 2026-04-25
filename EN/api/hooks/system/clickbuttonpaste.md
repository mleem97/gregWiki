---
title: ClickButtonPaste
description: Documentation for greg.SYSTEM.ClickButtonPaste
path: /api/hooks/system/clickbuttonpaste
---

# ClickButtonPaste

> **Hook ID:** `greg.SYSTEM.ClickButtonPaste`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.ClickButtonPaste

## Native Signature
```csharp
Il2Cpp.SetIP::ClickButtonPaste()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickButtonPaste` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickButtonPaste", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickButtonPaste");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickButtonPaste", function(payload)
    greg.log("Hook greg.SYSTEM.ClickButtonPaste received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickButtonPaste fired")

greg.on("greg.SYSTEM.ClickButtonPaste", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickButtonPaste", (payload) => {
    console.log("Hook greg.SYSTEM.ClickButtonPaste triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickButtonPaste".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickButtonPaste", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickButtonPaste fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
