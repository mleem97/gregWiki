---
title: WallRack Hooks Catalog
description: Complete reference for all WallRack-related Native Event Hooks.
category: Hooks Library
---

# WallRack Hooks Catalog

## `greg.WORLD.WallRegistered`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired immediately after a new wall is purchased and the WallGrid is instantiated. |
| Payload    | `wallId`: string, `worldPos`: string, `wallNormal`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | `WallBuyFlowIntegration.cs` |

## `greg.WORLD.WallRemoved`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired when a wall is destroyed/sold by the player. |
| Payload    | `wallId`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | *Missing/Pending Hook Binder* |

## `greg.WORLD.WallPlaced`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired when a wall is physically instantiated in the scene. |
| Payload    | `wallId`: string, `worldPos`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | *Missing/Pending Hook Binder* |

## `greg.WORLD.WallDeviceMounted`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired when any device is mounted onto a WallSlot. |
| Payload    | `wallId`: string, `slotCoord`: string, `deviceId`: string, `deviceType`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | `GregWallGrid.cs` |

## `greg.WORLD.WallDeviceUnmounted`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired when a device is removed from a WallSlot. |
| Payload    | `wallId`: string, `slotCoord`: string, `deviceId`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | `GregWallGrid.cs` |

## `greg.WORLD.WallDeviceSwapped`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired when a customer device is swapped via the context menu. |
| Payload    | `wallId`: string, `slotCoord`: string, `deviceId`: string, `customerId`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | `GregWallPlacementController.cs` |

## `greg.WORLD.WallDeviceLabelSet`
| Field      | Value                |
|------------|----------------------|
| Status     | ENABLED              |
| Layer      | greg.WallRack        |
| Trigger    | Fired when the label of a mounted device is changed. |
| Payload    | `deviceId`: string, `newLabel`: string |
| Since      | gregCore v0.1.0      |
| Hook-Source | *Pending UI Implementation* |
