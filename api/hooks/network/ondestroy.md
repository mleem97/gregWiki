---
title: OnDestroy
description: Documentation for greg.NETWORK.OnDestroy
path: /api/hooks/network/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.NETWORK.OnDestroy`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.OnDestroy

## Native Signature
```csharp
Il2Cpp.SFPModule::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.OnDestroy", function(payload)
    greg.log("Hook greg.NETWORK.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.OnDestroy fired")

greg.on("greg.NETWORK.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.OnDestroy", (payload) => {
    console.log("Hook greg.NETWORK.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
