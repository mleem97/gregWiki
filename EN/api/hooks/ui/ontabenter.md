---
title: OnTabEnter
description: Documentation for greg.UI.OnTabEnter
path: /api/hooks/ui/ontabenter
---

# OnTabEnter

> **Hook ID:** `greg.UI.OnTabEnter`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu_TabGroup.OnTabEnter

## Native Signature
```csharp
Il2Cpp.PauseMenu_TabGroup::OnTabEnter(PauseMenu_TabButton)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnTabEnter` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnTabEnter", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnTabEnter");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnTabEnter", function(payload)
    greg.log("Hook greg.UI.OnTabEnter received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnTabEnter fired")

greg.on("greg.UI.OnTabEnter", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnTabEnter", (payload) => {
    console.log("Hook greg.UI.OnTabEnter triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnTabEnter".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnTabEnter", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnTabEnter fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
