---
title: RestorePreviousSelection
description: Documentation for greg.SYSTEM.RestorePreviousSelection
path: /api/hooks/system/restorepreviousselection
---

# RestorePreviousSelection

> **Hook ID:** `greg.SYSTEM.RestorePreviousSelection`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.RestorePreviousSelection

## Native Signature
```csharp
Il2Cpp.StaticUIElements::RestorePreviousSelection()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RestorePreviousSelection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RestorePreviousSelection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RestorePreviousSelection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RestorePreviousSelection", function(payload)
    greg.log("Hook greg.SYSTEM.RestorePreviousSelection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RestorePreviousSelection fired")

greg.on("greg.SYSTEM.RestorePreviousSelection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RestorePreviousSelection", (payload) => {
    console.log("Hook greg.SYSTEM.RestorePreviousSelection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RestorePreviousSelection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RestorePreviousSelection", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RestorePreviousSelection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
