# Custom Switches: A Deep Dive

Switches are the backbone of networking in *Data Center*. Creating custom switches allows you to add hardware with unique port counts, throughput limits, and compatibility rules.

## 1. The Switch Data Model
A switch is defined by its physical port layout and its internal bandwidth capacity.

### Core Technical Specs
| Field | Type | Description |
| :--- | :--- | :--- |
| `Id` | string | Unique internal identifier. |
| `DisplayName` | string | Name shown in-game. |
| `PortCount` | int | Number of ports available (Standard: 8, 16, 24, 48). |
| `PortType` | Enum | `Copper`, `SFP`, `SFP+`, or `QSFP`. |
| `Throughput` | float | Bandwidth per port in Mbps. |
| `PowerUsage` | int | Watts consumed. |
| `ModelOverride` | string | Path to custom 3D model. |

## 2. Port Mapping & Layout
When you define a switch with `48` ports, gregCore automatically maps these to the 3D model's interactors. If you use a custom model, you must ensure your "Port" objects in the FBX are named following the convention: `Port_01`, `Port_02`, etc.

## 3. Registration Workflow (C#)
Registration must occur during `OnLoad`.

```csharp
public override void OnLoad()
{
    var nexusSwitch = new SwitchConfig {
        Id = "greg.nexus.48p",
        DisplayName = "Nexus 48-Port Pro",
        PortCount = 48,
        PortType = PortType.SFP_Plus,
        MaxThroughput = 10000.0f, // 10 Gbps
        Price = 5000,
        ModelOverride = "mods/assets/nexus_48.obj"
    };

    Api.Network.RegisterSwitch(nexusSwitch);
}
```

## 4. Routing & Flow Evaluation
Custom switches can implement their own routing logic. When a data packet passes through a switch, the `greg.network.PacketRouted` hook fires.

### Example: Packet Inspection
```csharp
Api.Hooks.On("greg.network.PacketRouted", payload => {
    if (payload.Data["switchId"] == "greg.nexus.48p") {
        var packetSize = (float)payload.Data["size"];
        // Logic to simulate latency or packet loss
    }
});
```

## 5. Compatibility Rules
You can define which cables and SFPs are compatible with your switch.
- **SFP Support**: If `PortType` is `SFP`, players must insert an SFP module before connecting a cable.
- **Speed Negotiation**: You can hook into `greg.network.ConnectionNegotiated` to force a specific link speed.

## 6. Save Data & Persistence
gregCore persists:
- The switch's position in the rack.
- Which ports have cables connected.
- The ID of the connected device on each port.
- Power state (On/Off).

---
[Back to Content Creation](README.md)
