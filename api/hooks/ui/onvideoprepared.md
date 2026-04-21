---
title: OnVideoPrepared
description: Documentation for greg.UI.OnVideoPrepared
path: /api/hooks/ui/onvideoprepared
---

# OnVideoPrepared

> **Hook ID:** `greg.UI.OnVideoPrepared`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.OnVideoPrepared

## Native Signature
```csharp
Il2Cpp.Tutorials::OnVideoPrepared(VideoPlayer)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnVideoPrepared` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnVideoPrepared", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnVideoPrepared");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnVideoPrepared", function(payload)
    greg.log("Hook greg.UI.OnVideoPrepared received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnVideoPrepared fired")

greg.on("greg.UI.OnVideoPrepared", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnVideoPrepared", (payload) => {
    console.log("Hook greg.UI.OnVideoPrepared triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnVideoPrepared".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnVideoPrepared", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnVideoPrepared fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
