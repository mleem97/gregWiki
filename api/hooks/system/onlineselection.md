---
title: OnLineSelection
description: Documentation for greg.SYSTEM.OnLineSelection
path: /api/hooks/system/onlineselection
---

# OnLineSelection

> **Hook ID:** `greg.SYSTEM.OnLineSelection`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventCheck.OnLineSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventCheck::OnLineSelection(string, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLineSelection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLineSelection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLineSelection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLineSelection", function(payload)
    greg.log("Hook greg.SYSTEM.OnLineSelection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLineSelection fired")

greg.on("greg.SYSTEM.OnLineSelection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLineSelection", (payload) => {
    console.log("Hook greg.SYSTEM.OnLineSelection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLineSelection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLineSelection", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLineSelection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
