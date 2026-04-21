---
title: OnCharacterSelection
description: Documentation for greg.SYSTEM.OnCharacterSelection
path: /api/hooks/system/oncharacterselection
---

# OnCharacterSelection

> **Hook ID:** `greg.SYSTEM.OnCharacterSelection`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppTMPro/TMP_TextEventCheck.OnCharacterSelection

## Native Signature
```csharp
Il2Cpp.TMP_TextEventCheck::OnCharacterSelection(char, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCharacterSelection` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCharacterSelection", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCharacterSelection");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCharacterSelection", function(payload)
    greg.log("Hook greg.SYSTEM.OnCharacterSelection received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCharacterSelection fired")

greg.on("greg.SYSTEM.OnCharacterSelection", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCharacterSelection", (payload) => {
    console.log("Hook greg.SYSTEM.OnCharacterSelection triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCharacterSelection".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCharacterSelection", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCharacterSelection fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
