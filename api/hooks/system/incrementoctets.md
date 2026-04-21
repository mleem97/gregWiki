---
title: IncrementOctets
description: Documentation for greg.SYSTEM.IncrementOctets
path: /api/hooks/system/incrementoctets
---

# IncrementOctets

> **Hook ID:** `greg.SYSTEM.IncrementOctets`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SetIP.IncrementOctets

## Native Signature
```csharp
Il2Cpp.SetIP::IncrementOctets(int, int, int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IncrementOctets` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IncrementOctets", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IncrementOctets");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IncrementOctets", function(payload)
    greg.log("Hook greg.SYSTEM.IncrementOctets received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IncrementOctets fired")

greg.on("greg.SYSTEM.IncrementOctets", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IncrementOctets", (payload) => {
    console.log("Hook greg.SYSTEM.IncrementOctets triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IncrementOctets".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IncrementOctets", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IncrementOctets fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
