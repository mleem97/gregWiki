---
title: BuildPatchPanelCache
description: Documentation for greg.NETWORK.BuildPatchPanelCache
path: /api/hooks/network/buildpatchpanelcache
---

# BuildPatchPanelCache

> **Hook ID:** `greg.NETWORK.BuildPatchPanelCache`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.BuildPatchPanelCache

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::BuildPatchPanelCache()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `BuildPatchPanelCache` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.BuildPatchPanelCache", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.BuildPatchPanelCache");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.BuildPatchPanelCache", function(payload)
    greg.log("Hook greg.NETWORK.BuildPatchPanelCache received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.BuildPatchPanelCache fired")

greg.on("greg.NETWORK.BuildPatchPanelCache", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.BuildPatchPanelCache", (payload) => {
    console.log("Hook greg.NETWORK.BuildPatchPanelCache triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.BuildPatchPanelCache".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.BuildPatchPanelCache", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.BuildPatchPanelCache fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
