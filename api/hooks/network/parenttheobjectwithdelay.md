---
title: ParentTheObjectWithDelay
description: Documentation for greg.NETWORK.ParentTheObjectWithDelay
path: /api/hooks/network/parenttheobjectwithdelay
---

# ParentTheObjectWithDelay

> **Hook ID:** `greg.NETWORK.ParentTheObjectWithDelay`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.ParentTheObjectWithDelay

## Native Signature
```csharp
Il2Cpp.SFPBox::ParentTheObjectWithDelay(Transform, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ParentTheObjectWithDelay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ParentTheObjectWithDelay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ParentTheObjectWithDelay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ParentTheObjectWithDelay", function(payload)
    greg.log("Hook greg.NETWORK.ParentTheObjectWithDelay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ParentTheObjectWithDelay fired")

greg.on("greg.NETWORK.ParentTheObjectWithDelay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ParentTheObjectWithDelay", (payload) => {
    console.log("Hook greg.NETWORK.ParentTheObjectWithDelay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ParentTheObjectWithDelay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ParentTheObjectWithDelay", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ParentTheObjectWithDelay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
