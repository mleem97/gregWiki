---
title: ConvertKeyCodeToKey
description: Documentation for greg.SYSTEM.ConvertKeyCodeToKey
path: /api/hooks/system/convertkeycodetokey
---

# ConvertKeyCodeToKey

> **Hook ID:** `greg.SYSTEM.ConvertKeyCodeToKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.ConvertKeyCodeToKey

## Native Signature
```csharp
Il2Cpp.viperInput::ConvertKeyCodeToKey(KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ConvertKeyCodeToKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ConvertKeyCodeToKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ConvertKeyCodeToKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ConvertKeyCodeToKey", function(payload)
    greg.log("Hook greg.SYSTEM.ConvertKeyCodeToKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ConvertKeyCodeToKey fired")

greg.on("greg.SYSTEM.ConvertKeyCodeToKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ConvertKeyCodeToKey", (payload) => {
    console.log("Hook greg.SYSTEM.ConvertKeyCodeToKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ConvertKeyCodeToKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ConvertKeyCodeToKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ConvertKeyCodeToKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
