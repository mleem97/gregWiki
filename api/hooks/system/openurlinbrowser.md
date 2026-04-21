---
title: OpenURLInBrowser
description: Documentation for greg.SYSTEM.OpenURLInBrowser
path: /api/hooks/system/openurlinbrowser
---

# OpenURLInBrowser

> **Hook ID:** `greg.SYSTEM.OpenURLInBrowser`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OpenURL.OpenURLInBrowser

## Native Signature
```csharp
Il2Cpp.OpenURL::OpenURLInBrowser()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenURLInBrowser` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OpenURLInBrowser", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OpenURLInBrowser");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OpenURLInBrowser", function(payload)
    greg.log("Hook greg.SYSTEM.OpenURLInBrowser received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OpenURLInBrowser fired")

greg.on("greg.SYSTEM.OpenURLInBrowser", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OpenURLInBrowser", (payload) => {
    console.log("Hook greg.SYSTEM.OpenURLInBrowser triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OpenURLInBrowser".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OpenURLInBrowser", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OpenURLInBrowser fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
