---
title: OnButtonClick
description: Documentation for greg.SYSTEM.OnButtonClick
path: /api/hooks/system/onbuttonclick
---

# OnButtonClick

> **Hook ID:** `greg.SYSTEM.OnButtonClick`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/DropdownSample.OnButtonClick

## Native Signature
```csharp
Il2Cpp.DropdownSample::OnButtonClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnButtonClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnButtonClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnButtonClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnButtonClick", function(payload)
    greg.log("Hook greg.SYSTEM.OnButtonClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnButtonClick fired")

greg.on("greg.SYSTEM.OnButtonClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnButtonClick", (payload) => {
    console.log("Hook greg.SYSTEM.OnButtonClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnButtonClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnButtonClick", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnButtonClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
