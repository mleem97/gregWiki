---
title: UnLoadLevel
description: Documentation for greg.UI.UnLoadLevel
path: /api/hooks/ui/unloadlevel
---

# UnLoadLevel

> **Hook ID:** `greg.UI.UnLoadLevel`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.UnLoadLevel

## Native Signature
```csharp
Il2Cpp.LoadingScreen::UnLoadLevel(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `UnLoadLevel` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.UnLoadLevel", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.UnLoadLevel");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.UnLoadLevel", function(payload)
    greg.log("Hook greg.UI.UnLoadLevel received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.UnLoadLevel fired")

greg.on("greg.UI.UnLoadLevel", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.UnLoadLevel", (payload) => {
    console.log("Hook greg.UI.UnLoadLevel triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.UnLoadLevel".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.UnLoadLevel", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.UnLoadLevel fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
