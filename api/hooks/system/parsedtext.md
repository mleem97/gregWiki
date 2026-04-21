---
title: ParsedText
description: Documentation for greg.SYSTEM.ParsedText
path: /api/hooks/system/parsedtext
---

# ParsedText

> **Hook ID:** `greg.SYSTEM.ParsedText`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_InputReceiver.ParsedText

## Native Signature
```csharp
Il2Cpp.OSK_UI_InputReceiver::ParsedText()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ParsedText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ParsedText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ParsedText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ParsedText", function(payload)
    greg.log("Hook greg.SYSTEM.ParsedText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ParsedText fired")

greg.on("greg.SYSTEM.ParsedText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ParsedText", (payload) => {
    console.log("Hook greg.SYSTEM.ParsedText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ParsedText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ParsedText", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ParsedText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
