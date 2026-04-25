---
title: ReturnSFPDirectly
description: Documentation for greg.NETWORK.ReturnSFPDirectly
path: /api/hooks/network/returnsfpdirectly
---

# ReturnSFPDirectly

> **Hook ID:** `greg.NETWORK.ReturnSFPDirectly`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPBox.ReturnSFPDirectly

## Native Signature
```csharp
Il2Cpp.SFPBox::ReturnSFPDirectly(SFPModule)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReturnSFPDirectly` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ReturnSFPDirectly", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ReturnSFPDirectly");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ReturnSFPDirectly", function(payload)
    greg.log("Hook greg.NETWORK.ReturnSFPDirectly received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ReturnSFPDirectly fired")

greg.on("greg.NETWORK.ReturnSFPDirectly", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ReturnSFPDirectly", (payload) => {
    console.log("Hook greg.NETWORK.ReturnSFPDirectly triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ReturnSFPDirectly".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ReturnSFPDirectly", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ReturnSFPDirectly fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
