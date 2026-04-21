---
title: DoRebind
description: Documentation for greg.UI.DoRebind
path: /api/hooks/ui/dorebind
---

# DoRebind

> **Hook ID:** `greg.UI.DoRebind`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ReBindUI.DoRebind

## Native Signature
```csharp
Il2Cpp.ReBindUI::DoRebind()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DoRebind` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.DoRebind", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.DoRebind");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.DoRebind", function(payload)
    greg.log("Hook greg.UI.DoRebind received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.DoRebind fired")

greg.on("greg.UI.DoRebind", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.DoRebind", (payload) => {
    console.log("Hook greg.UI.DoRebind triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.DoRebind".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.DoRebind", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.DoRebind fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
