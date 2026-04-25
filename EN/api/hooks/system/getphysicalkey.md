---
title: GetPhysicalKey
description: Documentation for greg.SYSTEM.GetPhysicalKey
path: /api/hooks/system/getphysicalkey
---

# GetPhysicalKey

> **Hook ID:** `greg.SYSTEM.GetPhysicalKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.GetPhysicalKey

## Native Signature
```csharp
Il2Cpp.viperInput::GetPhysicalKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPhysicalKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPhysicalKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPhysicalKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPhysicalKey", function(payload)
    greg.log("Hook greg.SYSTEM.GetPhysicalKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPhysicalKey fired")

greg.on("greg.SYSTEM.GetPhysicalKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPhysicalKey", (payload) => {
    console.log("Hook greg.SYSTEM.GetPhysicalKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPhysicalKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPhysicalKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPhysicalKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
