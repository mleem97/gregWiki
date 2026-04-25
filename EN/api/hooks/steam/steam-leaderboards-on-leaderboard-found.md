---
title: SteamLeaderboards.OnLeaderboardFound
description: Hook event for SteamLeaderboards.OnLeaderboardFound
path: /api/hooks/steam/steam-leaderboards-on-leaderboard-found
---

# SteamLeaderboards.OnLeaderboardFound

> **Hook ID:** `greg.steam.steamleaderboards.onleaderboardfound`
> **Category:** Steam
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SteamLeaderboards.OnLeaderboardFound()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLeaderboardFound(LeaderboardFindResult_t result, Boolean ioFailure)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `result` | `LeaderboardFindResult_t` | ... |
| `ioFailure` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnLeaderboardFound` events in `SteamLeaderboards`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.steam.steamleaderboards.onleaderboardfound", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.steam.steamleaderboards.onleaderboardfound", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.steam.steamleaderboards.onleaderboardfound")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.steam.steamleaderboards.onleaderboardfound", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.steam.steamleaderboards.onleaderboardfound", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.steam.steamleaderboards.onleaderboardfound", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
