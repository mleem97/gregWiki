---
title: Resume
description: Documentation for greg.UI.Resume
path: /api/hooks/ui/resume
---

# Resume

> **Hook ID:** `greg.UI.Resume`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.Resume

## Native Signature
```csharp
Il2Cpp.PauseMenu::Resume()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Resume` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Resume", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Resume");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Resume", function(payload)
    greg.log("Hook greg.UI.Resume received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Resume fired")

greg.on("greg.UI.Resume", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Resume", (payload) => {
    console.log("Hook greg.UI.Resume triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Resume".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Resume", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Resume fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
