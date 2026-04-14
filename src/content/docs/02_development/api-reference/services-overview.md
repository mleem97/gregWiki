---
title: SDK Services Overview
description: A complete index of the 40+ services available in the gregSdk for mod development.
---

The **gregSdk** provides a robust set of services to interact with Data Center's core systems, from networking and UI to game logic and employee AI.

## Core Services

### 💾 Persistence & State
- **GregPersistenceService**: Handles saving and loading mod-specific data.
- **GregSaveService**: Hooks into the main game save system.
- **GregMetadataService**: Manages metadata for game objects and entities.

### 🌐 Networking & IPAM
- **GregIpService**: The primary service for IP address management (IPAM).
- **GregIPAllocationService**: Handles automated IP assignment for server racks.
- **GregPacketService**: Provides low-level traffic and packet simulation data.
- **GregVlanService**: Manages virtual network segmentation and tagging.
- **GregTopologyService**: Visualizes and manages network connections.

### 🎨 User Interface (UI)
- **GregUiService**: The standard for creating integrated UI panels using the **LuminescentArchitect** design system.
- **GregHudService**: Manages overlays and HUD elements.
- **GregUiReplacementService**: Allows mods to swap vanilla game menus with custom implementations.
- **GregNotificationService**: Standardized toast and popup notifications.

## Game World Interaction

### 🏢 Infrastructure
- **GregRackService**: Service for rack state, cooling, and power management.
- **GregServerInteractionService**: Handles player interaction with server hardware.
- **GregPowerService**: Manages electricity distribution and usage tracking.
- **GregRackInteractionService**: Hooks for physical interaction with racks.

### 🤖 Automation & AI
- **GregTechnicianService**: API for interacting with the technician worker AI.
- **GregTaskQueueService**: Allows mods to queue tasks for worker AIs.
- **GregEmployeeAIBridge**: Bridge for extending default worker behaviors.

## System Utilities

### 🔧 Framework & Patches
- **GregHarmonyService**: Managed patching service for safe method hooking.
- **GregCompatBridgeService**: Ensures compatibility between different framework versions.
- **GregEventBus**: Global pub/sub system for inter-mod communication.
- **GregModRegistry**: The central directory of loaded mods and their capabilities.

### 🌍 Translation & Global
- **GregLocalisationService**: Integrated translation system for multi-language mods.
- **GregTimeService**: Access to game-time, simulation-speed, and historical events.

---

## Usage Patterns

Most services are available via static accessors for ease of use in small mods, but the framework recommends using dependency injection or service discovery for larger plugins.

```csharp
// Example: Sending a notification using GregNotificationService
GregNotificationService.Notify("System Update", "IPAM module has been synchronized.", NotificationType.Info);
```

For a full list of methods and properties, see the individual service pages in the sidebar.
