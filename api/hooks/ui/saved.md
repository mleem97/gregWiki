---
title: Saved
description: Documentation for greg.UI.Saved
path: /api/hooks/ui/saved
---

# Saved

> **Hook ID:** `greg.UI.Saved`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.Save

## Native Signature
```csharp
Il2Cpp.PauseMenu::Save(string, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Saved` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Saved", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Saved");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Saved", function(payload)
    greg.log("Hook greg.UI.Saved received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Saved fired")

greg.on("greg.UI.Saved", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Saved", (payload) => {
    console.log("Hook greg.UI.Saved triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Saved".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Saved", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Saved fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
