---
title: OnPause
description: Documentation for greg.UI.OnPause
path: /api/hooks/ui/onpause
---

# OnPause

> **Hook ID:** `greg.UI.OnPause`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.OnPause

## Native Signature
```csharp
Il2Cpp.PauseMenu::OnPause(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnPause` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnPause", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnPause");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnPause", function(payload)
    greg.log("Hook greg.UI.OnPause received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnPause fired")

greg.on("greg.UI.OnPause", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnPause", (payload) => {
    console.log("Hook greg.UI.OnPause triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnPause".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnPause", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnPause fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
