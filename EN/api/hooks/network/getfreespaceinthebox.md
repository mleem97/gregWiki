---
title: GetFreeSpaceInTheBox
description: Documentation for greg.NETWORK.GetFreeSpaceInTheBox
path: /api/hooks/network/getfreespaceinthebox
---

# GetFreeSpaceInTheBox

> **Hook ID:** `greg.NETWORK.GetFreeSpaceInTheBox`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.GetFreeSpaceInTheBox

## Native Signature
```csharp
Il2Cpp.SFPBox::GetFreeSpaceInTheBox()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetFreeSpaceInTheBox` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetFreeSpaceInTheBox", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetFreeSpaceInTheBox");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetFreeSpaceInTheBox", function(payload)
    greg.log("Hook greg.NETWORK.GetFreeSpaceInTheBox received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetFreeSpaceInTheBox fired")

greg.on("greg.NETWORK.GetFreeSpaceInTheBox", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetFreeSpaceInTheBox", (payload) => {
    console.log("Hook greg.NETWORK.GetFreeSpaceInTheBox triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetFreeSpaceInTheBox".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetFreeSpaceInTheBox", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetFreeSpaceInTheBox fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
