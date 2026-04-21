---
title: ShowTextUnderCursor
description: Documentation for greg.SYSTEM.ShowTextUnderCursor
path: /api/hooks/system/showtextundercursor
---

# ShowTextUnderCursor

> **Hook ID:** `greg.SYSTEM.ShowTextUnderCursor`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.ShowTextUnderCursor

## Native Signature
```csharp
Il2Cpp.StaticUIElements::ShowTextUnderCursor(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowTextUnderCursor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowTextUnderCursor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowTextUnderCursor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowTextUnderCursor", function(payload)
    greg.log("Hook greg.SYSTEM.ShowTextUnderCursor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowTextUnderCursor fired")

greg.on("greg.SYSTEM.ShowTextUnderCursor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowTextUnderCursor", (payload) => {
    console.log("Hook greg.SYSTEM.ShowTextUnderCursor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowTextUnderCursor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowTextUnderCursor", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowTextUnderCursor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
