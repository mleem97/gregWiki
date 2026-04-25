---
title: GetByUID
description: Documentation for greg.RACK.GetByUID
path: /api/hooks/rack/getbyuid
---

# GetByUID

> **Hook ID:** `greg.RACK.GetByUID`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/RackPosition.GetByUID

## Native Signature
```csharp
Il2Cpp.RackPosition::GetByUID(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetByUID` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.GetByUID", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.GetByUID");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.GetByUID", function(payload)
    greg.log("Hook greg.RACK.GetByUID received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.GetByUID fired")

greg.on("greg.RACK.GetByUID", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.GetByUID", (payload) => {
    console.log("Hook greg.RACK.GetByUID triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.GetByUID".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.GetByUID", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.GetByUID fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
