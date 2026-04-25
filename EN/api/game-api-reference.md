Title: Game API Reference (Il2Cpp)
Path: /api/game-api-reference
Type: Reference
Audience: mod developer, framework developer
Summary: Low-level reference for the Data Center game internal classes and members, accessed via Il2Cpp FFI.
Suggested Tags: api, reference, il2cpp, ffi, internals, unity
Related Pages: /api/index, /getting-started/architecture
Split Recommendation: Create overview + children

# Game API Reference (Il2Cpp)

This page provides a technical reference for the internal game classes of *Data Center*. These types live in the `Il2Cpp` namespace within `Assembly-CSharp.dll` and are typically accessed via the **gregCore** FFI bridge or direct Harmony patching.

---

## Singletons & Global Access

All major managers follow the singleton pattern and are accessible via static `instance` fields.

| Class | Static Field | Description |
| :--- | :--- | :--- |
| `MainGameManager` | `MainGameManager.instance` | Central game state, customer management, and scene references. |
| `PlayerManager` | `PlayerManager.instance` | Player movement, interaction, and inventory state. |
| `BalanceSheet` | `BalanceSheet.instance` | Financial tracking, revenue, and penalties. |
| `TechnicianManager` | `TechnicianManager.instance` | Management of the technician NPC pool and dispatch queue. |
| `TimeController` | `TimeController.instance` | Game time, day/night cycle, and time multipliers. |
| `StaticUIElements` | `StaticUIElements.instance` | HUD controller, notifications, and tooltips. |

---

## 1. BalanceSheet
Manages financial records, monthly snapshots, and technician salaries.

### Key Methods
- `CustomerRecord GetOrCreateRecord(CustomerItem item)`: Retrieves or initializes a record for a specific customer.
- `void RegisterSalary(int monthlySalary)`: Adds a technician's salary to the monthly expenses.
- `MonthlySnapshot GetLatestSnapshot()`: Returns the most recent historical financial data.
- `void FillInBalanceSheet()`: Triggers a UI refresh of the balance sheet.

---

## 2. MainGameManager
The primary controller for game flow and global data.

### Key Fields
- `difficulty`: The current game difficulty level.
- `isGamePaused`: Boolean flag indicating pause state.
- `customerItems`: An array of all possible customer definitions.
- `serverPrefabs`: Registry of all server 3D models and base logic.

### Key Methods
- `string GetFreeSubnet(float appRequirements)`: Finds an available IP subnet matching the requirements.
- `void ShowCustomerCardsCanvas(CustomerBaseDoor door)`: Opens the UI for selecting a new customer.
- `void SetAutoSaveEnabled(bool enabled)`: Toggles the automatic saving system.

---

## 3. NetworkMap
A graph-based representation of the data center's network topology.

### Data Structures
- `devices`: Dictionary mapping device names to their logical representations.
- `servers`: Dictionary of all active server instances.
- `switches`: Dictionary of all active network switches.
- `lacpGroups`: Registry of Link Aggregation Groups.

### Key Methods
- `void Connect(string from, string to)`: Establishes a logical connection between two endpoints.
- `List<List<string>> FindAllRoutes(string start, string end)`: Calculates all valid network paths between two devices.
- `bool IsIpAddressDuplicate(string ip, Server exclude)`: Validation check for IP conflicts.

---

## 4. Server & NetworkSwitch
Core hardware classes representing physical devices in the game world.

### Lifecycle Methods
- `void PowerButton(bool force)`: Toggles the power state of the device.
- `void ServerInsertedInRack(ServerSaveData data)`: Called when the device is mounted.
- `void RepairDevice()`: Resets the "broken" state and clears errors.
- `void UpdateServerScreenUI()`: Refreshes the information displayed on the device's physical screen.

---

## 5. StaticUIElements (HUD)
Controls the persistent player interface and on-screen messaging.

### Key Methods
- `void SetNotification(int locUID, Sprite icon, string text)`: Displays a notification banner.
- `void AddMeesageInField(string message)`: Appends a line to the bottom-left message log.
- `void CalculateRates(out float money, out float xp, out float expenses)`: Calculates real-time financial and experience rates.
- `int InstantiateErrorWarningSign(bool isError, Vector3 pos)`: Spawns a floating warning/error icon in world space.

---

## 💾 SaveSystem
Static utility for managing persistent game data.

- `void SaveGame(string name)`: Commits current state to disk.
- `SaveData LoadGame(string name)`: Deserializes a save file.
- `void AutoSave()`: Triggers the standard auto-save routine.
- `string saveDirPath`: The physical path to the game's save folder.
