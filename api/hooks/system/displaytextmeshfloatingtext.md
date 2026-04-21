---
title: DisplayTextMeshFloatingText
description: Documentation for greg.SYSTEM.DisplayTextMeshFloatingText
path: /api/hooks/system/displaytextmeshfloatingtext
---

# DisplayTextMeshFloatingText

> **Hook ID:** `greg.SYSTEM.DisplayTextMeshFloatingText`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TextMeshProFloatingText.DisplayTextMeshFloatingText

## Native Signature
```csharp
Il2Cpp.TextMeshProFloatingText::DisplayTextMeshFloatingText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisplayTextMeshFloatingText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DisplayTextMeshFloatingText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DisplayTextMeshFloatingText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DisplayTextMeshFloatingText", function(payload)
    greg.log("Hook greg.SYSTEM.DisplayTextMeshFloatingText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DisplayTextMeshFloatingText fired")

greg.on("greg.SYSTEM.DisplayTextMeshFloatingText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DisplayTextMeshFloatingText", (payload) => {
    console.log("Hook greg.SYSTEM.DisplayTextMeshFloatingText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DisplayTextMeshFloatingText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DisplayTextMeshFloatingText", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DisplayTextMeshFloatingText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
