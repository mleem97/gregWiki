---
title: SlideIntoPort
description: Documentation for greg.NETWORK.SlideIntoPort
path: /api/hooks/network/slideintoport
---

# SlideIntoPort

> **Hook ID:** `greg.NETWORK.SlideIntoPort`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.SlideIntoPort

## Native Signature
```csharp
Il2Cpp.SFPModule::SlideIntoPort(Transform)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SlideIntoPort` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.SlideIntoPort", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.SlideIntoPort");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.SlideIntoPort", function(payload)
    greg.log("Hook greg.NETWORK.SlideIntoPort received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.SlideIntoPort fired")

greg.on("greg.NETWORK.SlideIntoPort", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.SlideIntoPort", (payload) => {
    console.log("Hook greg.NETWORK.SlideIntoPort triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.SlideIntoPort".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.SlideIntoPort", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.SlideIntoPort fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
