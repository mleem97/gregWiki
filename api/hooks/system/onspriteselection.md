---
title: OnSpriteSelection
description: Documentation for greg.SYSTEM.OnSpriteSelection
path: /api/hooks/system/onspriteselection
---

# OnSpriteSelection

> **Hook ID:** `greg.SYSTEM.OnSpriteSelection`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventCheck.OnSpriteSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventCheck::OnSpriteSelection(char, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnSpriteSelection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnSpriteSelection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnSpriteSelection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnSpriteSelection", function(payload)
    greg.log("Hook greg.SYSTEM.OnSpriteSelection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnSpriteSelection fired")

greg.on("greg.SYSTEM.OnSpriteSelection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnSpriteSelection", (payload) => {
    console.log("Hook greg.SYSTEM.OnSpriteSelection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnSpriteSelection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnSpriteSelection", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnSpriteSelection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
