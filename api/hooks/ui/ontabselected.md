---
title: OnTabSelected
description: Documentation for greg.UI.OnTabSelected
path: /api/hooks/ui/ontabselected
---

# OnTabSelected

> **Hook ID:** `greg.UI.OnTabSelected`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu_TabGroup.OnTabSelected

## Native Signature
```csharp
Il2Cpp.PauseMenu_TabGroup::OnTabSelected(PauseMenu_TabButton)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnTabSelected` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnTabSelected", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnTabSelected");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnTabSelected", function(payload)
    greg.log("Hook greg.UI.OnTabSelected received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnTabSelected fired")

greg.on("greg.UI.OnTabSelected", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnTabSelected", (payload) => {
    console.log("Hook greg.UI.OnTabSelected triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnTabSelected".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnTabSelected", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnTabSelected fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
