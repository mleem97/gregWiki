---
title: Talking
description: Documentation for greg.SYSTEM.Talking
path: /api/hooks/system/talking
---

# Talking

> **Hook ID:** `greg.SYSTEM.Talking`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.Talking

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::Talking(List<string>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Talking` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Talking", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Talking");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Talking", function(payload)
    greg.log("Hook greg.SYSTEM.Talking received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Talking fired")

greg.on("greg.SYSTEM.Talking", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Talking", (payload) => {
    console.log("Hook greg.SYSTEM.Talking triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Talking".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Talking", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Talking fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
