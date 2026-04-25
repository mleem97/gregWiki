# Furniture Placement System

The building system in **gregCore** follows the 'Relief' philosophy: helping the player to build efficiently without tedious manual pixel-hunting.

## Grid Specification
- **Base Grid:** 1.0m (Standard Floor Tile)
- **Sub-Grid Snapping:** 0.5m (1sq = 4sq logic)
- **Rotation Snapping:** 90° increments (configurable)

## Features
- **Surface Alignment:** Automatic detection of Wall vs. Floor via Normal analysis.
- **Ghost Preview:** Real-time semi-transparent Teal ghost shows the snapped position before placement.
- **Persistence:** Objects placed via the FurniturePlacer are automatically recorded in the GregSaveEngine.

## Developer API

To start the placement mode for a specific prefab:

`csharp
var prefab = MyAssetBundle.LoadAsset<GameObject>("MyCoolRack");
greg.Furniture.FurniturePlacer.Instance.StartPlacement(prefab);
`

## Internal Logic (Technical)
The system uses a persistent FurniturePlacer MonoBehaviour injected into the IL2CPP domain. 
- **Snapping Formula:** Mathf.Round(worldPos / 0.5f) * 0.5f
- **Safety:** Ghost objects have their Colliders stripped to prevent self-collision during Raycasting.
