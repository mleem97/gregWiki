---
title: GetSettingHash
description: Documentation for greg.SYSTEM.GetSettingHash
path: /api/hooks/system/getsettinghash
---

# GetSettingHash

> **Hook ID:** `greg.SYSTEM.GetSettingHash`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_SpriteMeshEditor.GetSettingHash

## Native Signature
```csharp
Il2Cpp.FCP_SpriteMeshEditor::GetSettingHash()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSettingHash` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSettingHash", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSettingHash");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSettingHash", function(payload)
    greg.log("Hook greg.SYSTEM.GetSettingHash received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSettingHash fired")

greg.on("greg.SYSTEM.GetSettingHash", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSettingHash", (payload) => {
    console.log("Hook greg.SYSTEM.GetSettingHash triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSettingHash".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSettingHash", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSettingHash fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
