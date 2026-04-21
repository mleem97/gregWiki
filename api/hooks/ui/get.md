---
title: Get
description: Documentation for greg.UI.Get
path: /api/hooks/ui/get
---

# Get

> **Hook ID:** `greg.UI.Get`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UIActions.Get

## Native Signature
```csharp
Il2Cpp.UIActions::Get()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Get` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Get", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Get");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Get", function(payload)
    greg.log("Hook greg.UI.Get received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Get fired")

greg.on("greg.UI.Get", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Get", (payload) => {
    console.log("Hook greg.UI.Get triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Get".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Get", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Get fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
