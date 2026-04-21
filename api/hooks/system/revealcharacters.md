---
title: RevealCharacters
description: Documentation for greg.SYSTEM.RevealCharacters
path: /api/hooks/system/revealcharacters
---

# RevealCharacters

> **Hook ID:** `greg.SYSTEM.RevealCharacters`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TextConsoleSimulator.RevealCharacters

## Native Signature
```csharp
Il2Cpp.TextConsoleSimulator::RevealCharacters(TMP_Text)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RevealCharacters` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.RevealCharacters", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.RevealCharacters");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.RevealCharacters", function(payload)
    greg.log("Hook greg.SYSTEM.RevealCharacters received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.RevealCharacters fired")

greg.on("greg.SYSTEM.RevealCharacters", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.RevealCharacters", (payload) => {
    console.log("Hook greg.SYSTEM.RevealCharacters triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.RevealCharacters".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.RevealCharacters", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.RevealCharacters fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
