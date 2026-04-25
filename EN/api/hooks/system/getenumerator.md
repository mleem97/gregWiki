---
title: GetEnumerator
description: Documentation for greg.SYSTEM.GetEnumerator
path: /api/hooks/system/getenumerator
---

# GetEnumerator

> **Hook ID:** `greg.SYSTEM.GetEnumerator`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Enumerator.GetEnumerator

## Native Signature
```csharp
Il2Cpp.Enumerator::GetEnumerator()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetEnumerator` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetEnumerator", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetEnumerator");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetEnumerator", function(payload)
    greg.log("Hook greg.SYSTEM.GetEnumerator received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetEnumerator fired")

greg.on("greg.SYSTEM.GetEnumerator", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetEnumerator", (payload) => {
    console.log("Hook greg.SYSTEM.GetEnumerator triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetEnumerator".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetEnumerator", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetEnumerator fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
