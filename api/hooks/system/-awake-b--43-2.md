---
title: _Awake_b__43_2
description: Documentation for greg.SYSTEM._Awake_b__43_2
path: /api/hooks/system/-awake-b--43-2
---

# _Awake_b__43_2

> **Hook ID:** `greg.SYSTEM._Awake_b__43_2`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UsableObject._Awake_b__43_2

## Native Signature
```csharp
Il2Cpp.UsableObject::_Awake_b__43_2(InputAction.CallbackContext)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_Awake_b__43_2` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._Awake_b__43_2", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._Awake_b__43_2");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._Awake_b__43_2", function(payload)
    greg.log("Hook greg.SYSTEM._Awake_b__43_2 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._Awake_b__43_2 fired")

greg.on("greg.SYSTEM._Awake_b__43_2", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._Awake_b__43_2", (payload) => {
    console.log("Hook greg.SYSTEM._Awake_b__43_2 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._Awake_b__43_2".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._Awake_b__43_2", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._Awake_b__43_2 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
