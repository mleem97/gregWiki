---
title: SelectedKey
description: Documentation for greg.SYSTEM.SelectedKey
path: /api/hooks/system/selectedkey
---

# SelectedKey

> **Hook ID:** `greg.SYSTEM.SelectedKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.SelectedKey

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::SelectedKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectedKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectedKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectedKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectedKey", function(payload)
    greg.log("Hook greg.SYSTEM.SelectedKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectedKey fired")

greg.on("greg.SYSTEM.SelectedKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectedKey", (payload) => {
    console.log("Hook greg.SYSTEM.SelectedKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectedKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectedKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectedKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
