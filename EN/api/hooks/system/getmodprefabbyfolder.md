---
title: GetModPrefabByFolder
description: Documentation for greg.SYSTEM.GetModPrefabByFolder
path: /api/hooks/system/getmodprefabbyfolder
---

# GetModPrefabByFolder

> **Hook ID:** `greg.SYSTEM.GetModPrefabByFolder`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ModLoader.GetModPrefabByFolder

## Native Signature
```csharp
Il2Cpp.ModLoader::GetModPrefabByFolder(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetModPrefabByFolder` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetModPrefabByFolder", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetModPrefabByFolder");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetModPrefabByFolder", function(payload)
    greg.log("Hook greg.SYSTEM.GetModPrefabByFolder received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetModPrefabByFolder fired")

greg.on("greg.SYSTEM.GetModPrefabByFolder", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetModPrefabByFolder", (payload) => {
    console.log("Hook greg.SYSTEM.GetModPrefabByFolder triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetModPrefabByFolder".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetModPrefabByFolder", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetModPrefabByFolder fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
