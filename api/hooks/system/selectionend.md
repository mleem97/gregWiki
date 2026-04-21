---
title: SelectionEnd
description: Documentation for greg.SYSTEM.SelectionEnd
path: /api/hooks/system/selectionend
---

# SelectionEnd

> **Hook ID:** `greg.SYSTEM.SelectionEnd`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.SelectionEnd

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::SelectionEnd()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectionEnd` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectionEnd", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectionEnd");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectionEnd", function(payload)
    greg.log("Hook greg.SYSTEM.SelectionEnd received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectionEnd fired")

greg.on("greg.SYSTEM.SelectionEnd", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectionEnd", (payload) => {
    console.log("Hook greg.SYSTEM.SelectionEnd triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectionEnd".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectionEnd", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectionEnd fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
