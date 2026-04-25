---
title: SFPsFromSaveLoaded
description: Documentation for greg.NETWORK.SFPsFromSaveLoaded
path: /api/hooks/network/sfpsfromsaveloaded
---

# SFPsFromSaveLoaded

> **Hook ID:** `greg.NETWORK.SFPsFromSaveLoaded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.LoadSFPsFromSave

## Native Signature
```csharp
Il2Cpp.SFPBox::LoadSFPsFromSave()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SFPsFromSaveLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SFPsFromSaveLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SFPsFromSaveLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SFPsFromSaveLoaded", function(payload)
    greg.log("Hook greg.NETWORK.SFPsFromSaveLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SFPsFromSaveLoaded fired")

greg.on("greg.NETWORK.SFPsFromSaveLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SFPsFromSaveLoaded", (payload) => {
    console.log("Hook greg.NETWORK.SFPsFromSaveLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SFPsFromSaveLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SFPsFromSaveLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SFPsFromSaveLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
