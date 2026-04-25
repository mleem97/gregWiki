---
title: ReHighlightKey
description: Documentation for greg.SYSTEM.ReHighlightKey
path: /api/hooks/system/rehighlightkey
---

# ReHighlightKey

> **Hook ID:** `greg.SYSTEM.ReHighlightKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.ReHighlightKey

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::ReHighlightKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReHighlightKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ReHighlightKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ReHighlightKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ReHighlightKey", function(payload)
    greg.log("Hook greg.SYSTEM.ReHighlightKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ReHighlightKey fired")

greg.on("greg.SYSTEM.ReHighlightKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ReHighlightKey", (payload) => {
    console.log("Hook greg.SYSTEM.ReHighlightKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ReHighlightKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ReHighlightKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ReHighlightKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
