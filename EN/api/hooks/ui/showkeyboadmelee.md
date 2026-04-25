---
title: ShowKeyboadMelee
description: Documentation for greg.UI.ShowKeyboadMelee
path: /api/hooks/ui/showkeyboadmelee
---

# ShowKeyboadMelee

> **Hook ID:** `greg.UI.ShowKeyboadMelee`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/KeyHint.ShowKeyboadMelee

## Native Signature
```csharp
Il2Cpp.KeyHint::ShowKeyboadMelee()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowKeyboadMelee` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.ShowKeyboadMelee", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.ShowKeyboadMelee");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.ShowKeyboadMelee", function(payload)
    greg.log("Hook greg.UI.ShowKeyboadMelee received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.ShowKeyboadMelee fired")

greg.on("greg.UI.ShowKeyboadMelee", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.ShowKeyboadMelee", (payload) => {
    console.log("Hook greg.UI.ShowKeyboadMelee triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.ShowKeyboadMelee".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.ShowKeyboadMelee", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.ShowKeyboadMelee fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
