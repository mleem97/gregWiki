---
title: GetPlayerAButton
description: Documentation for greg.SYSTEM.GetPlayerAButton
path: /api/hooks/system/getplayerabutton
---

# GetPlayerAButton

> **Hook ID:** `greg.SYSTEM.GetPlayerAButton`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetPlayerAButton

## Native Signature
```csharp
Il2Cpp.viperInput::GetPlayerAButton(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPlayerAButton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPlayerAButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPlayerAButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPlayerAButton", function(payload)
    greg.log("Hook greg.SYSTEM.GetPlayerAButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPlayerAButton fired")

greg.on("greg.SYSTEM.GetPlayerAButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPlayerAButton", (payload) => {
    console.log("Hook greg.SYSTEM.GetPlayerAButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPlayerAButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPlayerAButton", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPlayerAButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
