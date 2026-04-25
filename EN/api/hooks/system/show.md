---
title: Show
description: Documentation for greg.SYSTEM.Show
path: /api/hooks/system/show
---

# Show

> **Hook ID:** `greg.SYSTEM.Show`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Cursor.Show

## Native Signature
```csharp
Il2Cpp.OSK_UI_Cursor::Show(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Show` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Show", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Show");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Show", function(payload)
    greg.log("Hook greg.SYSTEM.Show received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Show fired")

greg.on("greg.SYSTEM.Show", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Show", (payload) => {
    console.log("Hook greg.SYSTEM.Show triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Show".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Show", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Show fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
