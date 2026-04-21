---
title: Submit
description: Documentation for greg.SYSTEM.Submit
path: /api/hooks/system/submit
---

# Submit

> **Hook ID:** `greg.SYSTEM.Submit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.Submit

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::Submit()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Submit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Submit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Submit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Submit", function(payload)
    greg.log("Hook greg.SYSTEM.Submit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Submit fired")

greg.on("greg.SYSTEM.Submit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Submit", (payload) => {
    console.log("Hook greg.SYSTEM.Submit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Submit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Submit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Submit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
