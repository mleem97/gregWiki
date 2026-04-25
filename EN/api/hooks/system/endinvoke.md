---
title: EndInvoke
description: Documentation for greg.SYSTEM.EndInvoke
path: /api/hooks/system/endinvoke
---

# EndInvoke

> **Hook ID:** `greg.SYSTEM.EndInvoke`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnEndOfTheDay.EndInvoke

## Native Signature
```csharp
Il2Cpp.OnEndOfTheDay::EndInvoke(Il2CppSystem.IAsyncResult)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `EndInvoke` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.EndInvoke", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.EndInvoke");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.EndInvoke", function(payload)
    greg.log("Hook greg.SYSTEM.EndInvoke received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.EndInvoke fired")

greg.on("greg.SYSTEM.EndInvoke", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.EndInvoke", (payload) => {
    console.log("Hook greg.SYSTEM.EndInvoke triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.EndInvoke".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.EndInvoke", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.EndInvoke fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
