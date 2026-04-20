---
title: Advanced Persistence and Save Protection
description: Deep dive into how gregCore protects your data across game versions
path: /advanced/persistence
---

# 💾 Advanced Persistence and Save Protection

Persistence is one of the most complex challenges in IL2CPP modding. Since you cannot easily add new serialized fields to the game's native classes, gregCore provides a robust, side-car persistence system that synchronizes perfectly with the game's own save lifecycle.

---

## 1. How Persistence Works

gregCore uses a **JSON-based side-car** approach. 
1.  Every object in the game has a `GameUID` (Unique Identifier).
2.  gregCore listens for the game's save event (`greg.system.SaveTriggered`).
3.  All mod data registered via `GregAPI.Persistence` is serialized into a separate `.json` file in the `MelonLoader/UserData/gregCore/` folder.
4.  The file is indexed by the **Save Slot Name**, ensuring that switching save games correctly switches your mod data.

---

## 2. Using the Persistence Service

### Simple Key-Value Storage
Good for global mod settings or player-wide progress.
```csharp
GregAPI.Persistence.SetGlobal("has_completed_tutorial", true);
```

### UID-Linked Data
Essential for hardware-specific data (e.g., custom IP on a server).
```csharp
GregAPI.Persistence.ForObject(serverUid).Set("overclock_level", 5);
```

---

## 3. Custom Class Serialization

gregCore uses **Newtonsoft.Json** under the hood. You can save entire class instances directly.

```csharp
public class ServerMetrics {
    public float UptimeHours;
    public List<string> ErrorLogs;
}

var stats = new ServerMetrics { ... };
GregAPI.Persistence.ForObject(serverUid).Set("metrics", stats);
```

> ⚠️ **Caution**: Avoid saving Unity-specific types like `GameObject` or `Transform` directly. Instead, save their `Position` (Vector3) and `Rotation` (Quaternion) as they are easily serializable.

---

## 4. Conflict Resolution and Data Integrity

When multiple mods try to save to the same `GameUID`, gregCore uses a **Namespacing** system.

```csharp
// Internally gregCore stores this as:
// "Mod_1": { "key": "val" },
// "Mod_2": { "key": "val" }
```

### Desync Protection
If a mod crashes during the save process, gregCore uses a **Rollback Buffer**. It writes to a `.tmp` file first and only replaces the master save file if the serialization succeeds. This prevents a single buggy mod from corrupting the entire player save.

---

## 5. Persistence Hooks

You can react to the save lifecycle to prepare your data.

#Tabset
#Tab: C#
```csharp
GregAPI.Events.Subscribe("greg.system.SaveTriggered", (payload) => {
    // Collect data before serialization
    PrepareDataForSaving();
});
```
#Tab: Lua
```lua
greg.on("greg.system.SaveTriggered", function(payload)
    greg.persistence.save("session_end_time", os.date())
end)
```
#EndTabset

---

## 🛡️ Best Practices

1.  **Lazy Loading**: Don't load all data at once. Use `Persistence.Load()` only when the object is actually instantiated or interacted with.
2.  **Versioning**: Include a `Version` field in your saved classes. This allows you to migrate old save data when your mod updates.
3.  **Sanitize**: Always validate data loaded from persistence. A user might manually edit the JSON file, leading to nulls or out-of-range values.

---

## 📖 Related Links
*   [**Hook Engine Logic**](/advanced/hook-engine)
*   [**Conflict Resolution Service**](/api/services/conflict)
*   [**API Models Reference**](/api/payloads/models)
