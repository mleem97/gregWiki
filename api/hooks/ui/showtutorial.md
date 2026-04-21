---
title: ShowTutorial
description: Documentation for greg.UI.ShowTutorial
path: /api/hooks/ui/showtutorial
---

# ShowTutorial

> **Hook ID:** `greg.UI.ShowTutorial`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.ShowTutorial

## Native Signature
```csharp
Il2Cpp.Tutorials::ShowTutorial(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowTutorial` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ShowTutorial", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ShowTutorial");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ShowTutorial", function(payload)
    greg.log("Hook greg.UI.ShowTutorial received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ShowTutorial fired")

greg.on("greg.UI.ShowTutorial", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ShowTutorial", (payload) => {
    console.log("Hook greg.UI.ShowTutorial triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ShowTutorial".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ShowTutorial", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ShowTutorial fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
