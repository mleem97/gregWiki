---
title: OnCreated
description: Documentation for greg.SYSTEM.OnCreated
path: /api/hooks/system/oncreated
---

# OnCreated

> **Hook ID:** `greg.SYSTEM.OnCreated`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/AICharacterExpressions.OnCreated

## Native Signature
```csharp
Il2Cpp.AICharacterExpressions::OnCreated(UMAData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnCreated` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnCreated", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnCreated");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnCreated", function(payload)
    greg.log("Hook greg.SYSTEM.OnCreated received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnCreated fired")

greg.on("greg.SYSTEM.OnCreated", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnCreated", (payload) => {
    console.log("Hook greg.SYSTEM.OnCreated triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnCreated".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnCreated", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnCreated fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
