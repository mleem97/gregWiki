---
title: OnEndEditingInputText
description: Documentation for greg.NETWORK.OnEndEditingInputText
path: /api/hooks/network/onendeditinginputtext
---

# OnEndEditingInputText

> **Hook ID:** `greg.NETWORK.OnEndEditingInputText`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.OnEndEditingInputText

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::OnEndEditingInputText(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnEndEditingInputText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.OnEndEditingInputText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.OnEndEditingInputText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.OnEndEditingInputText", function(payload)
    greg.log("Hook greg.NETWORK.OnEndEditingInputText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.OnEndEditingInputText fired")

greg.on("greg.NETWORK.OnEndEditingInputText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.OnEndEditingInputText", (payload) => {
    console.log("Hook greg.NETWORK.OnEndEditingInputText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.OnEndEditingInputText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.OnEndEditingInputText", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.OnEndEditingInputText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
