---
title: PacketTypeSet
description: Documentation for greg.UI.PacketTypeSet
path: /api/hooks/ui/packettypeset
---

# PacketTypeSet

> **Hook ID:** `greg.UI.PacketTypeSet`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SettingsGameplay.SetPacketType

## Native Signature
```csharp
Il2Cpp.SettingsGameplay::SetPacketType(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PacketTypeSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.PacketTypeSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.PacketTypeSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.PacketTypeSet", function(payload)
    greg.log("Hook greg.UI.PacketTypeSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.PacketTypeSet fired")

greg.on("greg.UI.PacketTypeSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.PacketTypeSet", (payload) => {
    console.log("Hook greg.UI.PacketTypeSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.PacketTypeSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.PacketTypeSet", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.PacketTypeSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
