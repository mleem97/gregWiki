---
title: StopTutorial
description: Documentation for greg.UI.StopTutorial
path: /api/hooks/ui/stoptutorial
---

# StopTutorial

> **Hook ID:** `greg.UI.StopTutorial`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.StopTutorial

## Native Signature
```csharp
Il2Cpp.Tutorials::StopTutorial()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StopTutorial` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.StopTutorial", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.StopTutorial");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.StopTutorial", function(payload)
    greg.log("Hook greg.UI.StopTutorial received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.StopTutorial fired")

greg.on("greg.UI.StopTutorial", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.StopTutorial", (payload) => {
    console.log("Hook greg.UI.StopTutorial triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.StopTutorial".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.StopTutorial", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.StopTutorial fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
