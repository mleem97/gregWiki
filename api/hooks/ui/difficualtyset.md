---
title: DifficualtySet
description: Documentation for greg.UI.DifficualtySet
path: /api/hooks/ui/difficualtyset
---

# DifficualtySet

> **Hook ID:** `greg.UI.DifficualtySet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LoadingScreen.SetDifficualty

## Native Signature
```csharp
Il2Cpp.LoadingScreen::SetDifficualty(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DifficualtySet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.DifficualtySet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.DifficualtySet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.DifficualtySet", function(payload)
    greg.log("Hook greg.UI.DifficualtySet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.DifficualtySet fired")

greg.on("greg.UI.DifficualtySet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.DifficualtySet", (payload) => {
    console.log("Hook greg.UI.DifficualtySet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.DifficualtySet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.DifficualtySet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.DifficualtySet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
