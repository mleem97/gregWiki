---
title: OnWaitForPressKey
description: Documentation for greg.SYSTEM.OnWaitForPressKey
path: /api/hooks/system/onwaitforpresskey
---

# OnWaitForPressKey

> **Hook ID:** `greg.SYSTEM.OnWaitForPressKey`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LeanTweenUIElement.OnWaitForPressKey

## Native Signature
```csharp
Il2Cpp.LeanTweenUIElement::OnWaitForPressKey()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnWaitForPressKey` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnWaitForPressKey", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnWaitForPressKey");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnWaitForPressKey", function(payload)
    greg.log("Hook greg.SYSTEM.OnWaitForPressKey received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnWaitForPressKey fired")

greg.on("greg.SYSTEM.OnWaitForPressKey", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnWaitForPressKey", (payload) => {
    console.log("Hook greg.SYSTEM.OnWaitForPressKey triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnWaitForPressKey".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnWaitForPressKey", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnWaitForPressKey fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
