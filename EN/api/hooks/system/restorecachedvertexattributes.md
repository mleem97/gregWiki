---
title: RestoreCachedVertexAttributes
description: Documentation for greg.SYSTEM.RestoreCachedVertexAttributes
path: /api/hooks/system/restorecachedvertexattributes
---

# RestoreCachedVertexAttributes

> **Hook ID:** `greg.SYSTEM.RestoreCachedVertexAttributes`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextSelector_B.RestoreCachedVertexAttributes

## Native Signature
```csharp
Il2Cpp.TMP_TextSelector_B::RestoreCachedVertexAttributes(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RestoreCachedVertexAttributes` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RestoreCachedVertexAttributes", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RestoreCachedVertexAttributes");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RestoreCachedVertexAttributes", function(payload)
    greg.log("Hook greg.SYSTEM.RestoreCachedVertexAttributes received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RestoreCachedVertexAttributes fired")

greg.on("greg.SYSTEM.RestoreCachedVertexAttributes", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RestoreCachedVertexAttributes", (payload) => {
    console.log("Hook greg.SYSTEM.RestoreCachedVertexAttributes triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RestoreCachedVertexAttributes".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RestoreCachedVertexAttributes", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RestoreCachedVertexAttributes fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
