---
title: DisplayTextMeshProFloatingText
description: Documentation for greg.SYSTEM.DisplayTextMeshProFloatingText
path: /api/hooks/system/displaytextmeshprofloatingtext
---

# DisplayTextMeshProFloatingText

> **Hook ID:** `greg.SYSTEM.DisplayTextMeshProFloatingText`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TextMeshProFloatingText.DisplayTextMeshProFloatingText

## Native Signature
```csharp
Il2Cpp.TextMeshProFloatingText::DisplayTextMeshProFloatingText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisplayTextMeshProFloatingText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.DisplayTextMeshProFloatingText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.DisplayTextMeshProFloatingText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.DisplayTextMeshProFloatingText", function(payload)
    greg.log("Hook greg.SYSTEM.DisplayTextMeshProFloatingText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.DisplayTextMeshProFloatingText fired")

greg.on("greg.SYSTEM.DisplayTextMeshProFloatingText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.DisplayTextMeshProFloatingText", (payload) => {
    console.log("Hook greg.SYSTEM.DisplayTextMeshProFloatingText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.DisplayTextMeshProFloatingText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.DisplayTextMeshProFloatingText", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.DisplayTextMeshProFloatingText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
