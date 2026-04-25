---
title: ProcessConsoleCommand
description: Documentation for greg.UI.ProcessConsoleCommand
path: /api/hooks/ui/processconsolecommand
---

# ProcessConsoleCommand

> **Hook ID:** `greg.UI.ProcessConsoleCommand`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PauseMenu.ProcessConsoleCommand

## Native Signature
```csharp
Il2Cpp.PauseMenu::ProcessConsoleCommand(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ProcessConsoleCommand` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ProcessConsoleCommand", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ProcessConsoleCommand");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ProcessConsoleCommand", function(payload)
    greg.log("Hook greg.UI.ProcessConsoleCommand received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ProcessConsoleCommand fired")

greg.on("greg.UI.ProcessConsoleCommand", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ProcessConsoleCommand", (payload) => {
    console.log("Hook greg.UI.ProcessConsoleCommand triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ProcessConsoleCommand".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ProcessConsoleCommand", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ProcessConsoleCommand fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
