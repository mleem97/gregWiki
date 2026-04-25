---
title: OpenCloseSection
description: Documentation for greg.UI.OpenCloseSection
path: /api/hooks/ui/openclosesection
---

# OpenCloseSection

> **Hook ID:** `greg.UI.OpenCloseSection`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UI_Section.OpenCloseSection

## Native Signature
```csharp
Il2Cpp.UI_Section::OpenCloseSection()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenCloseSection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.OpenCloseSection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.OpenCloseSection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.OpenCloseSection", function(payload)
    greg.log("Hook greg.UI.OpenCloseSection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.OpenCloseSection fired")

greg.on("greg.UI.OpenCloseSection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.OpenCloseSection", (payload) => {
    console.log("Hook greg.UI.OpenCloseSection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.OpenCloseSection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.OpenCloseSection", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.OpenCloseSection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
