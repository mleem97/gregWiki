---
title: ButtonFilterEOL
description: Documentation for greg.SYSTEM.ButtonFilterEOL
path: /api/hooks/system/buttonfiltereol
---

# ButtonFilterEOL

> **Hook ID:** `greg.SYSTEM.ButtonFilterEOL`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AssetManagement.ButtonFilterEOL

## Native Signature
```csharp
Il2Cpp.AssetManagement::ButtonFilterEOL()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonFilterEOL` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonFilterEOL", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonFilterEOL");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonFilterEOL", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonFilterEOL received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonFilterEOL fired")

greg.on("greg.SYSTEM.ButtonFilterEOL", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonFilterEOL", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonFilterEOL triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonFilterEOL".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonFilterEOL", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonFilterEOL fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
