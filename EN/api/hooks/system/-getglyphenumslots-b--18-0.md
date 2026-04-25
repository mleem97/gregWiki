---
title: _GetGlyphEnumSlots_b__18_0
description: Documentation for greg.SYSTEM._GetGlyphEnumSlots_b__18_0
path: /api/hooks/system/-getglyphenumslots-b--18-0
---

# _GetGlyphEnumSlots_b__18_0

> **Hook ID:** `greg.SYSTEM._GetGlyphEnumSlots_b__18_0`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/__c__18._GetGlyphEnumSlots_b__18_0

## Native Signature
```csharp
Il2Cpp.__c__18::_GetGlyphEnumSlots_b__18_0(Il2CppSystem.ValueTuple<int, TEnum>, Il2CppSystem.ValueTuple<int, TEnum>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `_GetGlyphEnumSlots_b__18_0` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM._GetGlyphEnumSlots_b__18_0", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM._GetGlyphEnumSlots_b__18_0");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM._GetGlyphEnumSlots_b__18_0", function(payload)
    greg.log("Hook greg.SYSTEM._GetGlyphEnumSlots_b__18_0 received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM._GetGlyphEnumSlots_b__18_0 fired")

greg.on("greg.SYSTEM._GetGlyphEnumSlots_b__18_0", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM._GetGlyphEnumSlots_b__18_0", (payload) => {
    console.log("Hook greg.SYSTEM._GetGlyphEnumSlots_b__18_0 triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM._GetGlyphEnumSlots_b__18_0".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM._GetGlyphEnumSlots_b__18_0", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM._GetGlyphEnumSlots_b__18_0 fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
