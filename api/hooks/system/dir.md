---
title: Dir
description: Documentation for greg.SYSTEM.Dir
path: /api/hooks/system/dir
---

# Dir

> **Hook ID:** `greg.SYSTEM.Dir`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.Dir

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::Dir(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Dir` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Dir", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Dir");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Dir", function(payload)
    greg.log("Hook greg.SYSTEM.Dir received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Dir fired")

greg.on("greg.SYSTEM.Dir", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Dir", (payload) => {
    console.log("Hook greg.SYSTEM.Dir triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Dir".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Dir", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Dir fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
