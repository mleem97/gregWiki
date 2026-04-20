# Services Overview

::: info
**Target Audience**: All developers.
**Access Pattern**: Static access via `Api.[ServiceName]` in C#, or global `greg.[method_name]` in scripts.
:::

Services are functional modules that provide high-level methods to interact with game systems. While Hooks allow you to *react* to the game, Services allow you to *act* upon it.

## 📂 Core Services

### [1. Economy Service](/api/services/economy)
Manage player finances, experience, and reputation.
- `GetBalance()`, `AddXP()`, `SetReputation()`.

### [2. UI Service](/api/services/ui)
Display notifications, custom panels, and interact with the native menus.
- `ShowNotification()`, `RegisterTab()`, `ShowDialog()`.

### [3. World Service](/api/services/world)
Interact with physical objects, servers, switches, and the environment.
- `FindServerById()`, `SpawnItem()`, `GetPlayerPosition()`.

### [4. Time Service](/api/services/time)
Query and manipulate the game's day-night cycle and timescale.
- `GetTimeOfDay()`, `SetTimeScale()`, `IsPaused()`.

### [5. NPC Service](/api/services/npc)
Manage staff, assign tasks to technicians, and handle worker behavior.
- `GetAvailableWorkers()`, `AssignTask()`, `FireEmployee()`.

### [6. Persistence Service](/api/services/persistence)
Automatically save and load mod-specific data into the game's save files.
- `SaveData()`, `LoadData()`, `ResetToDefault()`.

## 🔄 Calling Services Across Languages

### C# (Native)
```csharp
double money = Api.Economy.GetBalance();
Api.UI.ShowNotification($"You have ${money}");
```

### Lua (Script)
```lua
local money = greg.get_player_money()
greg.show_notification("You have $" .. money)
```

### Python (Script)
```python
money = greg.get_player_money()
greg.show_notification(f"You have ${money}")
```

::: tip
**Thread Safety**: Services that modify the game world (e.g., spawning items) must be called from the **Unity Main Thread**. If you are calling them from a background thread (common in Rust/Go), use the framework's synchronization utilities.
:::

---
[Next: Economy Service](/api/services/economy)
