---
title: ComponentInitialized
description: Documentation for greg.UI.ComponentInitialized
path: /api/hooks/ui/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.UI.ComponentInitialized`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UI_SelectedBorder.Awake

## Native Signature
```csharp
Il2Cpp.UI_SelectedBorder::Awake()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ComponentInitialized", function(payload)
    greg.log("Hook greg.UI.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ComponentInitialized fired")

greg.on("greg.UI.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ComponentInitialized", (payload) => {
    console.log("Hook greg.UI.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
