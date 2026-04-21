---
title: Loaded
description: Documentation for greg.UI.Loaded
path: /api/hooks/ui/loaded
---

# Loaded

> **Hook ID:** `greg.UI.Loaded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.Load

## Native Signature
```csharp
Il2Cpp.PauseMenu::Load(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Loaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Loaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Loaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Loaded", function(payload)
    greg.log("Hook greg.UI.Loaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Loaded fired")

greg.on("greg.UI.Loaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Loaded", (payload) => {
    console.log("Hook greg.UI.Loaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Loaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Loaded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Loaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
