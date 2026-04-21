---
title: Core Services
description: High-level APIs for game systems
path: /api/services
---

# 🛠️ Core Services

Services are the primary way to interact with game systems. They provide a stable, high-level alternative to calling IL2CPP methods directly.

## Available Modules

### 💰 [Economy Module](/api/services/economy)
- Get/Set player balance.
- Manage XP and Reputation.
- Listen for currency changes.

### 🌐 [Network Module](/api/services/network)
- Manage switches and port mappings.
- Monitor network throughput and latency.
- Handle VLAN configurations.

### 👤 [Player Module](/api/services/player)
- Get player position and rotation.
- Teleport the player.
- Manage inventory and equipped items.

### 🕰️ [Time Module](/api/services/time)
- Get current ingame time and day.
- Control time scale and pausing.
- Subscribe to day/month end events.

### 🖥️ [Hardware Module](/api/services/hardware)
- Access all installed servers and racks.
- Monitor power consumption.
- Trigger repair actions.

---

::: next
Explore the [Hooks Catalog](/api/hooks) to see how these services are triggered.
:::
