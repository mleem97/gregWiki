Title: gregMod.IPAM - Network Management
Path: /guides/official-mods/ipam/index
Type: Overview
Audience: mod developer, new user
Summary: Overview of gregMod.IPAM, a gamified network management and IP address automation layer for Data Center.
Suggested Tags: mods, ipam, networking, dhcp, vlan, teamgreg
Related Pages: /guides/official-mods/index, /api/hooks/catalog, /guides/official-mods/ipam/roadmap
Split Recommendation: Create overview + children

# gregMod.IPAM - Network Management

`gregMod.IPAM` is a comprehensive, gamified networking system and IP Address Management (IPAM) layer for **Data Center**. It enhances the technical depth of network administration while maintaining a fun and practical gameplay experience.

---

## Features

- **Subnet Automation**: Efficiently manage IP blocks (/24, /22, /16) without manual calculations.
- **VLAN Management**: Integrated VLAN editor and assignment rules for segmented networks.
- **DeepFlow Status**: Real-time network health and traffic visualization.
- **Customer Mapping**: Directly bind customer workloads to specific subnets.
- **DHCP Scopes**: Advanced scope management with precedence and exclusion rules.
- **Multi-Tenant Concepts**: Shared server models for hosting multiple customer workloads.

---

## Installation

1. Ensure **MelonLoader** (v0.6+) is installed.
2. Download and place `gregCore.dll` and `gregMod.IPAM.dll` into your `Data Center/Mods/` folder.
3. Start the game and press **F6** to open the IPAM dashboard.

## Technical Documentation

- **[Development Roadmap](./roadmap)**: Strategic plan for feature implementation.
- **[Networking Hooks](./networking-hooks)**: Technical details on game interception points.
- **[Source Code Layout](./source-layout)**: Guide for contributors exploring the C# codebase.

---

## Building from Source

To build the mod manually:

```powershell
cd gregFramework/src/gregMod.IPAM
dotnet build -c Release
```
The output DLL will be located in `bin/Release/net6.0/gregMod.IPAM.dll`.

## Credits & Community

**Authors**: teamGreg (MLeeM97 & Mochimus)  
**Code & Testing**: Joniii11, mochimus, Baker, Sharpy1o1, MachineFreak.

Special thanks to **TeamWaseku** and the **Discord Community** for their feedback and support.

---
*gregFramework — Powered by the Community!*
