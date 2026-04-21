---
title: ToChatOutputAdded
description: Documentation for greg.UI.ToChatOutputAdded
path: /api/hooks/ui/tochatoutputadded
---

# ToChatOutputAdded

> **Hook ID:** `greg.UI.ToChatOutputAdded`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ChatController.AddToChatOutput

## Native Signature
```csharp
Il2Cpp.ChatController::AddToChatOutput(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ToChatOutputAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ToChatOutputAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ToChatOutputAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ToChatOutputAdded", function(payload)
    greg.log("Hook greg.UI.ToChatOutputAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ToChatOutputAdded fired")

greg.on("greg.UI.ToChatOutputAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ToChatOutputAdded", (payload) => {
    console.log("Hook greg.UI.ToChatOutputAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ToChatOutputAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ToChatOutputAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ToChatOutputAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
