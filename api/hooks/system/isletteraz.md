---
title: IsLetterAZ
description: Documentation for greg.SYSTEM.IsLetterAZ
path: /api/hooks/system/isletteraz
---

# IsLetterAZ

> **Hook ID:** `greg.SYSTEM.IsLetterAZ`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperTools/viperInput.IsLetterAZ

## Native Signature
```csharp
Il2Cpp.viperInput::IsLetterAZ(KeyCode)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsLetterAZ` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsLetterAZ", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsLetterAZ");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsLetterAZ", function(payload)
    greg.log("Hook greg.SYSTEM.IsLetterAZ received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsLetterAZ fired")

greg.on("greg.SYSTEM.IsLetterAZ", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsLetterAZ", (payload) => {
    console.log("Hook greg.SYSTEM.IsLetterAZ triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsLetterAZ".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsLetterAZ", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsLetterAZ fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
