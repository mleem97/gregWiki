---
title: DisplayChanged
description: Documentation for greg.GAMEPLAY.DisplayChanged
path: /api/hooks/gameplay/displaychanged
---

# DisplayChanged

> **Hook ID:** `greg.GAMEPLAY.DisplayChanged`
> **Category:** Gameplay
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ObjectiveTimed.UpdateDisplay

## Native Signature
```csharp
Il2Cpp.ObjectiveTimed::UpdateDisplay(int, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DisplayChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.GAMEPLAY.DisplayChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.GAMEPLAY.DisplayChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.GAMEPLAY.DisplayChanged", function(payload)
    greg.log("Hook greg.GAMEPLAY.DisplayChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.GAMEPLAY.DisplayChanged fired")

greg.on("greg.GAMEPLAY.DisplayChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.GAMEPLAY.DisplayChanged", (payload) => {
    console.log("Hook greg.GAMEPLAY.DisplayChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.GAMEPLAY.DisplayChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.GAMEPLAY.DisplayChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.GAMEPLAY.DisplayChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
