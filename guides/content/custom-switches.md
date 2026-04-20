---
title: Building Custom Switches
description: Learn how to implement new network hardware and IPAM logic
path: /guides/content/custom-switches
---

# 🔌 Building Custom Switches

Custom switches in *Data Center* allow you to introduce new networking technologies, higher port densities, and advanced traffic management features. Unlike a standard server, a Switch also manages **Port Logic** and **Cable Links**.

---

## 1. The Core Concept

A Switch is defined by its **Port Map**. Each port has a specific speed (e.g., 1Gbps, 10Gbps, 100Gbps) and a status (connected, link-up, traffic-activity).

### The Physical-Logical Split
- **Physical**: The number of SFP/RJ45 slots on the 3D model.
- **Logical**: The `SwitchInstance` class that manages the IP assignment and packet routing.

## 2. Registering a Custom Switch

To add a switch to the market, you use the `GregAPI.Hardware.RegisterCustomSwitch()` method.

```csharp
var switchDef = new gregCore.Models.CustomSwitchDef {
    InternalId = "gregtech.quantum_switch_48",
    DisplayName = "GregTech PetaBit 48-Port Switch",
    Cost = 45000.0f,
    PortCount = 48,
    MaxThroughput = 1000000, // 1 Tbps
    PowerDrawWatts = 150,
    PrefabPath = "gregtech/assets/switch_48.bundle"
};

GregAPI.Hardware.RegisterCustomSwitch(switchDef);
```

---

## 3. Managing Port Connections

Connectivity is managed through **Hooks**. Every time the player connects or disconnects a cable, gregCore fires a network event.

### 🔗 Link Established
Fires when the physical cable is inserted and the protocols match (e.g., SFP+ to SFP+).

#Tabset
#Tab: C#
```csharp
GregAPI.Events.Subscribe("greg.network.LinkEstablished", (payload) => {
    string switchId = payload.GetString("TargetId");
    int portIndex = payload.GetInt("PortIndex");
    
    if (switchId == "gregtech.quantum_switch_48") {
        GregLogger.Info($"High-speed link active on port {portIndex}!");
    }
});
```
#Tab: Lua
```lua
greg.on("greg.network.LinkEstablished", function(payload)
    if payload.TargetId == "gregtech.quantum_switch_48" then
        greg.log_info("Port " .. payload.PortIndex .. " is now UP")
    end
end)
```
#EndTabset

### 📉 Traffic Drop Event
You can simulate network failure or congestion by listening to traffic hooks.

```lua
greg.on("greg.network.TrafficDropped", function(payload)
    if payload.Reason == "Overload" then
        greg.show_notification("Packet loss on " .. payload.TargetId)
    end
end)
```

---

## 4. IPAM Integration (IP Address Management)

If your mod includes a custom IPAM system (like the `RackPlanner` or `IPAM` modules), you need to interact with the IP registry.

```csharp
// Assign a static IP to a specific port
GregAPI.Network.AssignIP(switchUid, portIndex, "10.0.5.12");

// Release an IP
GregAPI.Network.ReleaseIP(switchUid, portIndex);
```

---

## 5. Visual Feedback (LEDs)

Most custom switches need animated LEDs. You can control the emission colors of your prefab's materials directly through the hardware service.

```csharp
// Set port LED to "Activity" blink
GregAPI.Hardware.SetLEDState(switchUid, portIndex, LEDState.BlinkingGreen);

// Set port LED to "Error"
GregAPI.Hardware.SetLEDState(switchUid, portIndex, LEDState.SolidRed);
```

---

## Common Mistakes ⚠️

- **Port Misalignment**: Ensure the logical `PortIndex` in your code matches the physical transform index on your Unity Prefab. If the player plugs a cable into Port 1, but the code thinks it's Port 12, your IPAM logic will fail.
- **Throughput Caps**: If you set `MaxThroughput` too low, connected servers will report "Network Bottleneck" and performance will drop.
- **Power Budget**: High-density switches draw significant power. Ensure your Data Center's PDU can handle the load.

---

## 📖 Related Links
*   [**Building Custom Servers**](/guides/content/custom-servers)
*   [**Network Logic API**](/api/services/network)
*   [**All Network Hooks**](/api/hooks/network)
