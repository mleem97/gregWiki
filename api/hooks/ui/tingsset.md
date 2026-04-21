---
title: tingsSet
description: Documentation for greg.UI.tingsSet
path: /api/hooks/ui/tingsset
---

# tingsSet

> **Hook ID:** `greg.UI.tingsSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainMenu.Settings

## Native Signature
```csharp
Il2Cpp.MainMenu::Settings()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `tingsSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.tingsSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.tingsSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.tingsSet", function(payload)
    greg.log("Hook greg.UI.tingsSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.tingsSet fired")

greg.on("greg.UI.tingsSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.tingsSet", (payload) => {
    console.log("Hook greg.UI.tingsSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.tingsSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.tingsSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.tingsSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
