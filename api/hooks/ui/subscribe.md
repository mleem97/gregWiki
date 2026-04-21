---
title: Subscribe
description: Documentation for greg.UI.Subscribe
path: /api/hooks/ui/subscribe
---

# Subscribe

> **Hook ID:** `greg.UI.Subscribe`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu_TabGroup.Subscribe

## Native Signature
```csharp
Il2Cpp.PauseMenu_TabGroup::Subscribe(PauseMenu_TabButton)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Subscribe` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Subscribe", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Subscribe");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Subscribe", function(payload)
    greg.log("Hook greg.UI.Subscribe received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Subscribe fired")

greg.on("greg.UI.Subscribe", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Subscribe", (payload) => {
    console.log("Hook greg.UI.Subscribe triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Subscribe".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Subscribe", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Subscribe fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
