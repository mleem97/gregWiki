---
title: RevealWords
description: Documentation for greg.SYSTEM.RevealWords
path: /api/hooks/system/revealwords
---

# RevealWords

> **Hook ID:** `greg.SYSTEM.RevealWords`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TextConsoleSimulator.RevealWords

## Native Signature
```csharp
Il2Cpp.TextConsoleSimulator::RevealWords(TMP_Text)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RevealWords` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RevealWords", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RevealWords");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RevealWords", function(payload)
    greg.log("Hook greg.SYSTEM.RevealWords received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RevealWords fired")

greg.on("greg.SYSTEM.RevealWords", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RevealWords", (payload) => {
    console.log("Hook greg.SYSTEM.RevealWords triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RevealWords".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RevealWords", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RevealWords fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
