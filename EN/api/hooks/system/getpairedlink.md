---
title: GetPairedLink
description: Documentation for greg.SYSTEM.GetPairedLink
path: /api/hooks/system/getpairedlink
---

# GetPairedLink

> **Hook ID:** `greg.SYSTEM.GetPairedLink`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/PatchPanel.GetPairedLink

## Native Signature
```csharp
Il2Cpp.PatchPanel::GetPairedLink(CableLink)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetPairedLink` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetPairedLink", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetPairedLink");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetPairedLink", function(payload)
    greg.log("Hook greg.SYSTEM.GetPairedLink received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetPairedLink fired")

greg.on("greg.SYSTEM.GetPairedLink", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetPairedLink", (payload) => {
    console.log("Hook greg.SYSTEM.GetPairedLink triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetPairedLink".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetPairedLink", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetPairedLink fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
