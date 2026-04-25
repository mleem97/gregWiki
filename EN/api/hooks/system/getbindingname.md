---
title: GetBindingName
description: Documentation for greg.SYSTEM.GetBindingName
path: /api/hooks/system/getbindingname
---

# GetBindingName

> **Hook ID:** `greg.SYSTEM.GetBindingName`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/InputManager.GetBindingName

## Native Signature
```csharp
Il2Cpp.InputManager::GetBindingName(string, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetBindingName` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetBindingName", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetBindingName");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetBindingName", function(payload)
    greg.log("Hook greg.SYSTEM.GetBindingName received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetBindingName fired")

greg.on("greg.SYSTEM.GetBindingName", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetBindingName", (payload) => {
    console.log("Hook greg.SYSTEM.GetBindingName triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetBindingName".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetBindingName", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetBindingName fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
