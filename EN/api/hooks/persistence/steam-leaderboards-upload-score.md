---
title: SteamLeaderboards.UploadScore
description: Hook event for SteamLeaderboards.UploadScore
path: /api/hooks/persistence/steam-leaderboards-upload-score
---

# SteamLeaderboards.UploadScore

> **Hook ID:** `greg.persistence.steamleaderboards.uploadscore`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamLeaderboards.UploadScore()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UploadScore(Single moneyPerSecond)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `moneyPerSecond` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `UploadScore` events in `SteamLeaderboards`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.steamleaderboards.uploadscore", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.steamleaderboards.uploadscore", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.steamleaderboards.uploadscore")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.steamleaderboards.uploadscore", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.steamleaderboards.uploadscore", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.steamleaderboards.uploadscore", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
