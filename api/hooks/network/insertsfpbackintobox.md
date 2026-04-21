---
title: InsertSFPBackIntoBox
description: Documentation for greg.NETWORK.InsertSFPBackIntoBox
path: /api/hooks/network/insertsfpbackintobox
---

# InsertSFPBackIntoBox

> **Hook ID:** `greg.NETWORK.InsertSFPBackIntoBox`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.InsertSFPBackIntoBox

## Native Signature
```csharp
Il2Cpp.SFPBox::InsertSFPBackIntoBox()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InsertSFPBackIntoBox` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.InsertSFPBackIntoBox", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.InsertSFPBackIntoBox");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.InsertSFPBackIntoBox", function(payload)
    greg.log("Hook greg.NETWORK.InsertSFPBackIntoBox received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.InsertSFPBackIntoBox fired")

greg.on("greg.NETWORK.InsertSFPBackIntoBox", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.InsertSFPBackIntoBox", (payload) => {
    console.log("Hook greg.NETWORK.InsertSFPBackIntoBox triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.InsertSFPBackIntoBox".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.InsertSFPBackIntoBox", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.InsertSFPBackIntoBox fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
