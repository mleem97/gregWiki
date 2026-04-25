---
title: GetPlayerBButton
description: Documentation for greg.SYSTEM.GetPlayerBButton
path: /api/hooks/system/getplayerbbutton
---

# GetPlayerBButton

> **Hook ID:** `greg.SYSTEM.GetPlayerBButton`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetPlayerBButton

## Native Signature
```csharp
Il2Cpp.viperInput::GetPlayerBButton(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPlayerBButton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPlayerBButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPlayerBButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPlayerBButton", function(payload)
    greg.log("Hook greg.SYSTEM.GetPlayerBButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPlayerBButton fired")

greg.on("greg.SYSTEM.GetPlayerBButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPlayerBButton", (payload) => {
    console.log("Hook greg.SYSTEM.GetPlayerBButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPlayerBButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPlayerBButton", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPlayerBButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
