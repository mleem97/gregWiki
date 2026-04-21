---
title: greg.WallRack Save Schema
description: Save engine integration and LiteDB schema.
category: Database
---

# greg.WallRack Save Schema

## LiteDB Collections
`greg.WallRack` introduces a dedicated collection in `gregSave_*.greg.db` called `wallrack_state`.

### wallrack_state
Stores the complete state of all walls and mounted devices.

```json
{
  "_id": "ObjectId",
  "sessionId": "string",
  "savedAt": "DateTime",
  "walls": [
    {
      "wallId": "string",
      "worldPosX": "float",
      "worldPosY": "float",
      "worldPosZ": "float",
      "wallNormalX": "float",
      "wallNormalY": "float",
      "wallNormalZ": "float",
      "columns": "int",
      "rows": "int",
      "mountedDevices": [
        {
          "deviceId": "string",
          "slotCoordX": "int",
          "slotCoordY": "int",
          "deviceType": "string",
          "customerId": "string",
          "deviceLabel": "string",
          "isCustomerOwned": "bool",
          "mountedAt": "DateTime"
        }
      ]
    }
  ]
}
```

## Save/Load Lifecycle
*   **Save**: `GregSaveEngine.SaveAll()` calls `WallSaveIntegration.SaveWallRackState()`, which iterates over `GregWallRegistry` and serializes all grids and devices into the database.
*   **Load**: `GregSaveEngine.LoadAll()` calls `WallSaveIntegration.LoadWallRackState()`.
*   **Rebinding**: After deserialization, the `vanillaRef` (the actual Unity `GameObject` or `Il2CppObjectBase`) needs to be re-attached. This is handled by Harmony patches on `NetworkSwitchConfiguration` or `CustomerBase` matching the physical `worldPos` or `deviceId`.

## Vanilla Guard Behavior
If the loaded save file does not contain a `greg_meta` document indicating a `gregCore` save (`isVanillaSave == true`):
1. `GregFeatureGuard.IsEnabled("WallRack")` returns `false`.
2. The `wallrack_state` collection is completely ignored.
3. No `GregWallGrid` instances are generated.
4. UI interactions (like the Swap menu) are suppressed.
