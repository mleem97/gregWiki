---
title: GetBindingInfo
description: Documentation for greg.UI.GetBindingInfo
path: /api/hooks/ui/getbindinginfo
---

# GetBindingInfo

> **Hook ID:** `greg.UI.GetBindingInfo`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ReBindUI.GetBindingInfo

## Native Signature
```csharp
Il2Cpp.ReBindUI::GetBindingInfo()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetBindingInfo` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.GetBindingInfo", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.GetBindingInfo");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.GetBindingInfo", function(payload)
    greg.log("Hook greg.UI.GetBindingInfo received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.GetBindingInfo fired")

greg.on("greg.UI.GetBindingInfo", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.GetBindingInfo", (payload) => {
    console.log("Hook greg.UI.GetBindingInfo triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.GetBindingInfo".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.GetBindingInfo", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.GetBindingInfo fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
