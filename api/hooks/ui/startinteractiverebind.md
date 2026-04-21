---
title: StartInteractiveRebind
description: Documentation for greg.UI.StartInteractiveRebind
path: /api/hooks/ui/startinteractiverebind
---

# StartInteractiveRebind

> **Hook ID:** `greg.UI.StartInteractiveRebind`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RebindUIv2.StartInteractiveRebind

## Native Signature
```csharp
Il2Cpp.RebindUIv2::StartInteractiveRebind()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StartInteractiveRebind` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.StartInteractiveRebind", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.StartInteractiveRebind");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.StartInteractiveRebind", function(payload)
    greg.log("Hook greg.UI.StartInteractiveRebind received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.StartInteractiveRebind fired")

greg.on("greg.UI.StartInteractiveRebind", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.StartInteractiveRebind", (payload) => {
    console.log("Hook greg.UI.StartInteractiveRebind triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.StartInteractiveRebind".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.StartInteractiveRebind", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.StartInteractiveRebind fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
