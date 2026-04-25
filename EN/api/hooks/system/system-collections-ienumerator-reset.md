---
title: System_Collections_IEnumerator_Reset
description: Documentation for greg.SYSTEM.System_Collections_IEnumerator_Reset
path: /api/hooks/system/system-collections-ienumerator-reset
---

# System_Collections_IEnumerator_Reset

> **Hook ID:** `greg.SYSTEM.System_Collections_IEnumerator_Reset`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/_OnFinishSubmit_d__25.System_Collections_IEnumerator_Reset

## Native Signature
```csharp
Il2Cpp._OnFinishSubmit_d__25::System_Collections_IEnumerator_Reset()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `System_Collections_IEnumerator_Reset` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.System_Collections_IEnumerator_Reset", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.System_Collections_IEnumerator_Reset");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.System_Collections_IEnumerator_Reset", function(payload)
    greg.log("Hook greg.SYSTEM.System_Collections_IEnumerator_Reset received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.System_Collections_IEnumerator_Reset fired")

greg.on("greg.SYSTEM.System_Collections_IEnumerator_Reset", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.System_Collections_IEnumerator_Reset", (payload) => {
    console.log("Hook greg.SYSTEM.System_Collections_IEnumerator_Reset triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.System_Collections_IEnumerator_Reset".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.System_Collections_IEnumerator_Reset", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.System_Collections_IEnumerator_Reset fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
