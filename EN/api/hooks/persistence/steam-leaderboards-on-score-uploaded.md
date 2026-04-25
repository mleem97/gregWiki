---
title: SteamLeaderboards.OnScoreUploaded
description: Hook event for SteamLeaderboards.OnScoreUploaded
path: /api/hooks/persistence/steam-leaderboards-on-score-uploaded
---

# SteamLeaderboards.OnScoreUploaded

> **Hook ID:** `greg.persistence.steamleaderboards.onscoreuploaded`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamLeaderboards.OnScoreUploaded()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnScoreUploaded(LeaderboardScoreUploaded_t result, Boolean ioFailure)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `result` | `LeaderboardScoreUploaded_t` | ... |
| `ioFailure` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnScoreUploaded` events in `SteamLeaderboards`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.steamleaderboards.onscoreuploaded", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.steamleaderboards.onscoreuploaded", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.steamleaderboards.onscoreuploaded")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.steamleaderboards.onscoreuploaded", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.steamleaderboards.onscoreuploaded", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.steamleaderboards.onscoreuploaded", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
