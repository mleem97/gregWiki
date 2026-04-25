---
title: Disabling
description: Documentation for greg.SYSTEM.Disabling
path: /api/hooks/system/disabling
---

# Disabling

> **Hook ID:** `greg.SYSTEM.Disabling`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LeanTweenUIElement.Disabling

## Native Signature
```csharp
Il2Cpp.LeanTweenUIElement::Disabling()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Disabling` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Disabling", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Disabling");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Disabling", function(payload)
    greg.log("Hook greg.SYSTEM.Disabling received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Disabling fired")

greg.on("greg.SYSTEM.Disabling", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Disabling", (payload) => {
    console.log("Hook greg.SYSTEM.Disabling triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Disabling".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Disabling", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Disabling fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
