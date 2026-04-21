---
title: OnTriggerEnter
description: Documentation for greg.SYSTEM.OnTriggerEnter
path: /api/hooks/system/ontriggerenter
---

# OnTriggerEnter

> **Hook ID:** `greg.SYSTEM.OnTriggerEnter`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TrolleyTrigger.OnTriggerEnter

## Native Signature
```csharp
Il2Cpp.TrolleyTrigger::OnTriggerEnter(Collider)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnTriggerEnter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnTriggerEnter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnTriggerEnter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnTriggerEnter", function(payload)
    greg.log("Hook greg.SYSTEM.OnTriggerEnter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnTriggerEnter fired")

greg.on("greg.SYSTEM.OnTriggerEnter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnTriggerEnter", (payload) => {
    console.log("Hook greg.SYSTEM.OnTriggerEnter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnTriggerEnter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnTriggerEnter", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnTriggerEnter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
