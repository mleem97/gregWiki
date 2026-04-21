---
title: CopyDirectory
description: Documentation for greg.SYSTEM.CopyDirectory
path: /api/hooks/system/copydirectory
---

# CopyDirectory

> **Hook ID:** `greg.SYSTEM.CopyDirectory`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.CopyDirectory

## Native Signature
```csharp
Il2Cpp.ModLoader::CopyDirectory(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CopyDirectory` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CopyDirectory", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CopyDirectory");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CopyDirectory", function(payload)
    greg.log("Hook greg.SYSTEM.CopyDirectory received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CopyDirectory fired")

greg.on("greg.SYSTEM.CopyDirectory", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CopyDirectory", (payload) => {
    console.log("Hook greg.SYSTEM.CopyDirectory triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CopyDirectory".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CopyDirectory", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CopyDirectory fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
