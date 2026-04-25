---
title: OnTabExit
description: Documentation for greg.UI.OnTabExit
path: /api/hooks/ui/ontabexit
---

# OnTabExit

> **Hook ID:** `greg.UI.OnTabExit`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu_TabGroup.OnTabExit

## Native Signature
```csharp
Il2Cpp.PauseMenu_TabGroup::OnTabExit(PauseMenu_TabButton)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnTabExit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnTabExit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnTabExit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnTabExit", function(payload)
    greg.log("Hook greg.UI.OnTabExit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnTabExit fired")

greg.on("greg.UI.OnTabExit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnTabExit", (payload) => {
    console.log("Hook greg.UI.OnTabExit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnTabExit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnTabExit", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnTabExit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
