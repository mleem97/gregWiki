---
title: Talk
description: Documentation for greg.SYSTEM.Talk
path: /api/hooks/system/talk
---

# Talk

> **Hook ID:** `greg.SYSTEM.Talk`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.Talk

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::Talk(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Talk` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Talk", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Talk");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Talk", function(payload)
    greg.log("Hook greg.SYSTEM.Talk received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Talk fired")

greg.on("greg.SYSTEM.Talk", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Talk", (payload) => {
    console.log("Hook greg.SYSTEM.Talk triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Talk".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Talk", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Talk fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
