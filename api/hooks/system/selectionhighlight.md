---
title: SelectionHighlight
description: Documentation for greg.SYSTEM.SelectionHighlight
path: /api/hooks/system/selectionhighlight
---

# SelectionHighlight

> **Hook ID:** `greg.SYSTEM.SelectionHighlight`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_CustomReceiver.SelectionHighlight

## Native Signature
```csharp
Il2Cpp.OSK_UI_CustomReceiver::SelectionHighlight(Color32, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectionHighlight` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectionHighlight", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectionHighlight");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectionHighlight", function(payload)
    greg.log("Hook greg.SYSTEM.SelectionHighlight received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectionHighlight fired")

greg.on("greg.SYSTEM.SelectionHighlight", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectionHighlight", (payload) => {
    console.log("Hook greg.SYSTEM.SelectionHighlight triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectionHighlight".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectionHighlight", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectionHighlight fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
