---
title: GetModPrefab
description: Documentation for greg.SYSTEM.GetModPrefab
path: /api/hooks/system/getmodprefab
---

# GetModPrefab

> **Hook ID:** `greg.SYSTEM.GetModPrefab`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.GetModPrefab

## Native Signature
```csharp
Il2Cpp.ModLoader::GetModPrefab(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetModPrefab` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetModPrefab", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetModPrefab");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetModPrefab", function(payload)
    greg.log("Hook greg.SYSTEM.GetModPrefab received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetModPrefab fired")

greg.on("greg.SYSTEM.GetModPrefab", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetModPrefab", (payload) => {
    console.log("Hook greg.SYSTEM.GetModPrefab triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetModPrefab".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetModPrefab", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetModPrefab fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
