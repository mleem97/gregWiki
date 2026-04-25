---
title: Data Persistence & Savegames
description: Learn how to save your mod's data safely and reliably
path: /advanced/persistence
---

# 💾 Data Persistence & Savegames

One of the biggest challenges in modding *Data Center* is ensuring your mod's data (like custom server stats or customer happiness) persists across game restarts. gregCore solves this with the **Persistence Service**, which hooks into the game's native Save/Load lifecycle.

## 🏗️ The Persistence Model

gregCore uses a **Key-Value Store** model backed by **LiteDB** for speed and reliability. Your data is stored in separate files inside `UserData/gregCore/Data/`, but its loading is triggered exactly when the game loads a standard savegame.

## 🚀 How to Save Data (C#)

### 1. Define your Data Structure
Use simple POCOs (Plain Old CLR Objects). Use `[Serializable]` or JsonProperty attributes if needed.

```csharp
public class MyModData {
    public int TimesUsed { get; set; }
    public List<string> DiscoveredSecrets { get; set; } = new();
}
```

### 2. Saving the Data
Use `GregAPI.Persist.Save()`. This stores the object and schedules a disk write.

```csharp
var data = new MyModData { TimesUsed = 5 };
GregAPI.Persist.Save("my.mod.id", "settings", data);
```

### 3. Loading the Data
Load your data during `OnInitializeMelon` or react to the `GameLoaded` hook.

```csharp
var data = GregAPI.Persist.Load<MyModData>("my.mod.id", "settings");
if (data == null) {
    data = new MyModData(); // Fallback to defaults
}
```

## 📜 Supported Languages (Lua Example)

In Lua, persistence is even easier because gregCore handles the table serialization for you.

```lua
-- Save a table
local stats = { kills = 10, deaths = 2 }
greg.persist.save("pvp_mod", "stats", stats)

-- Load a table
local myStats = greg.persist.load("pvp_mod", "stats")
print("Total Kills: " .. (myStats.kills or 0))
```

## 🔄 The Save/Load Lifecycle

gregCore automatically triggers synchronization at these points:

| Event | gregCore Action | Hook Triggered |
| :--- | :--- | :--- |
| **Vanilla Save** | gregCore flushes all cached mod data to LiteDB. | `greg.SYSTEM.GameSaved` |
| **Vanilla Load** | gregCore invalidates caches and reloads from disk. | `greg.SYSTEM.GameLoaded` |
| **AutoSave** | gregCore performs a background sync. | `greg.SYSTEM.GameAutoSaved` |

## ⚠️ Important Best Practices

1.  **Unique Keys**: Always prefix your keys with your Mod ID (e.g., `teamgreg.economy.state`) to avoid collisions with other mods.
2.  **Avoid Heavy Objects**: Don't save Unity `GameObject` or `Transform` references directly. Save IDs or position vectors instead.
3.  **Schema Versioning**: If you change your data structure in a mod update, add a `Version` field to your data object to handle migrations safely.

---

::: tip
**Debugging**: You can use the **LiteDB Explorer** tool to open the `.db` files in `UserData/gregCore/Data/` to manually inspect your mod's saved state.
:::
