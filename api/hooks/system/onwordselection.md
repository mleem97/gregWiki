---
title: OnWordSelection
description: Documentation for greg.SYSTEM.OnWordSelection
path: /api/hooks/system/onwordselection
---

# OnWordSelection

> **Hook ID:** `greg.SYSTEM.OnWordSelection`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventCheck.OnWordSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventCheck::OnWordSelection(string, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnWordSelection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnWordSelection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnWordSelection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnWordSelection", function(payload)
    greg.log("Hook greg.SYSTEM.OnWordSelection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnWordSelection fired")

greg.on("greg.SYSTEM.OnWordSelection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnWordSelection", (payload) => {
    console.log("Hook greg.SYSTEM.OnWordSelection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnWordSelection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnWordSelection", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnWordSelection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
