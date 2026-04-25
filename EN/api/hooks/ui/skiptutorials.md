---
title: SkipTutorials
description: Documentation for greg.UI.SkipTutorials
path: /api/hooks/ui/skiptutorials
---

# SkipTutorials

> **Hook ID:** `greg.UI.SkipTutorials`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Tutorials.SkipTutorials

## Native Signature
```csharp
Il2Cpp.Tutorials::SkipTutorials()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SkipTutorials` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.SkipTutorials", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.SkipTutorials");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.SkipTutorials", function(payload)
    greg.log("Hook greg.UI.SkipTutorials received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.SkipTutorials fired")

greg.on("greg.UI.SkipTutorials", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.SkipTutorials", (payload) => {
    console.log("Hook greg.UI.SkipTutorials triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.SkipTutorials".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.SkipTutorials", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.SkipTutorials fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
