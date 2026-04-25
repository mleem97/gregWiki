---
title: ResetTabs
description: Documentation for greg.UI.ResetTabs
path: /api/hooks/ui/resettabs
---

# ResetTabs

> **Hook ID:** `greg.UI.ResetTabs`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu_TabGroup.ResetTabs

## Native Signature
```csharp
Il2Cpp.PauseMenu_TabGroup::ResetTabs()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ResetTabs` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ResetTabs", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ResetTabs");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ResetTabs", function(payload)
    greg.log("Hook greg.UI.ResetTabs received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ResetTabs fired")

greg.on("greg.UI.ResetTabs", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ResetTabs", (payload) => {
    console.log("Hook greg.UI.ResetTabs triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ResetTabs".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ResetTabs", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ResetTabs fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
