---
title: Pause
description: Documentation for greg.UI.Pause
path: /api/hooks/ui/pause
---

# Pause

> **Hook ID:** `greg.UI.Pause`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.Pause

## Native Signature
```csharp
Il2Cpp.PauseMenu::Pause(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Pause` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Pause", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Pause");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Pause", function(payload)
    greg.log("Hook greg.UI.Pause received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Pause fired")

greg.on("greg.UI.Pause", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Pause", (payload) => {
    console.log("Hook greg.UI.Pause triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Pause".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Pause", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Pause fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
