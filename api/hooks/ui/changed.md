---
title: Changed
description: Documentation for greg.UI.Changed
path: /api/hooks/ui/changed
---

# Changed

> **Hook ID:** `greg.UI.Changed`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UI_SelectedBorder.Update

## Native Signature
```csharp
Il2Cpp.UI_SelectedBorder::Update()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Changed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Changed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Changed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Changed", function(payload)
    greg.log("Hook greg.UI.Changed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Changed fired")

greg.on("greg.UI.Changed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Changed", (payload) => {
    console.log("Hook greg.UI.Changed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Changed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Changed", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Changed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
