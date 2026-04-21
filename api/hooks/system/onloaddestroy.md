---
title: OnLoadDestroy
description: Documentation for greg.SYSTEM.OnLoadDestroy
path: /api/hooks/system/onloaddestroy
---

# OnLoadDestroy

> **Hook ID:** `greg.SYSTEM.OnLoadDestroy`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject.OnLoadDestroy

## Native Signature
```csharp
Il2Cpp.UsableObject::OnLoadDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoadDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnLoadDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnLoadDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnLoadDestroy", function(payload)
    greg.log("Hook greg.SYSTEM.OnLoadDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnLoadDestroy fired")

greg.on("greg.SYSTEM.OnLoadDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnLoadDestroy", (payload) => {
    console.log("Hook greg.SYSTEM.OnLoadDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnLoadDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnLoadDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnLoadDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
