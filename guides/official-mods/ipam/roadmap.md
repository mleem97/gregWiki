Title: IPAM Development Roadmap
Path: /guides/official-mods/ipam/roadmap
Type: Concept
Audience: mod developer, framework developer
Summary: The strategic implementation roadmap for the IPAM and networking operations layer.
Suggested Tags: roadmap, ipam, networking, development, planning
Related Pages: /guides/official-mods/ipam/index, /roadmap/index
Split Recommendation: Keep as one page

# IPAM Development Roadmap

This document outlines the scope and vision for the **gregMod.IPAM** system, focusing on gamified network operations.

---

## Feature Tracks (Epics)

### Epic A — IP Assignment UX
- Mouse-wheel octet adjustment in IP inputs.
- Smart paste and `Assign Next Free` functionality.
- Collision prevention and subnet validation.

### Epic B — DHCP Scope Management
- Configurable global and switch-level scopes.
- Range reservations and exclusions.
- Scope exhaustion warnings.

### Epic C — VLAN & Management Plane
- Port-based VLAN assignment on switches.
- Out-of-band management network concepts.
- Specialized configuration apps for management PCs.

### Epic D — Patch-Port Labeling
- Port-level labeling for patch panels.
- Bulk naming templates and visual label persistence.

### Epic E — Shared Server Model
- Support for `Dedicated` vs `Shared` server modes.
- Capacity and quota models for multi-tenant workloads.

### Epic F — Advanced Networking
- Device and path redundancy (LACP, vPC/MLAG behavior).

---

## Release Phases

### R1 — Foundation & UX (Ready)
- Core IP assignment improvements and allocator logic.
- Initial global/switch DHCP scopes.

### R2 — VLAN-Aware Addressing (WIP)
- Full VLAN scope implementation.
- Management network baseline.
- Patch-port labels.

### R3 — Shared Infrastructure (Planned)
- Multi-tenant mapping and routing stability.
- Capacity-based scoring and rewards.

---

## Technical Architecture Milestones
1. **Configuration Model**: Unified domain model for VLANs, scopes, and tenancy.
2. **Validation Layer**: Real-time checking for subnet overlaps and duplicate leases.
3. **Persistence Layer**: Versioned save/load logic for all network entities.
4. **Simulation Sync**: Connecting game networking states to IPAM logic.
