---
title: Continue
description: Documentation for greg.UI.Continue
path: /api/hooks/ui/continue
---

# Continue

> **Hook ID:** `greg.UI.Continue`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainMenu.Continue

## Native Signature
```csharp
Il2Cpp.MainMenu::Continue()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Continue` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.Continue", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.Continue");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.Continue", function(payload)
    greg.log("Hook greg.UI.Continue received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.Continue fired")

greg.on("greg.UI.Continue", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.Continue", (payload) => {
    console.log("Hook greg.UI.Continue triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.Continue".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.Continue", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.Continue fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
