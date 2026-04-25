---
title: OnDestroy
description: Documentation for greg.UI.OnDestroy
path: /api/hooks/ui/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.UI.OnDestroy`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.OnDestroy

## Native Signature
```csharp
Il2Cpp.Tutorials::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OnDestroy", function(payload)
    greg.log("Hook greg.UI.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OnDestroy fired")

greg.on("greg.UI.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OnDestroy", (payload) => {
    console.log("Hook greg.UI.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
