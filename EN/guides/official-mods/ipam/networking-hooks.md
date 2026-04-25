Title: IPAM Networking Hooks
Path: /guides/official-mods/ipam/networking-hooks
Type: Reference
Audience: framework developer, advanced contributor
Summary: Technical details on the networking hooks and reverse-engineered interception points used by gregMod.IPAM.
Suggested Tags: networking, hooks, reverse-engineering, assembly-csharp, harmony
Related Pages: /api/hooks/catalog, /guides/official-mods/ipam/index
Split Recommendation: Keep as one page

# IPAM Networking Hooks

This reference covers the specific game method interceptions and reverse-engineered findings used by the **gregMod.IPAM** suite.

---

## Interception Points

### 1. Application Performance
**Target**: `Il2Cpp.CustomerBase::AddAppPerformance(int, float)`  
**Status**: Patched by `DHCPManager.FlowPausePatch`.

This method is the primary choke point for traffic flow. The IPAM mod uses this to "pause" application performance ticks when network requirements (like IP assignment or VLAN configuration) are not met.

### 2. Network Configuration
**Target**: `Il2Cpp.NetworkSwitch` (via Il2Cpp stubs)

The mod interacts with the game's internal switch logic to manage IP assignments and link states. Note that model and SKU strings are not hard-compiled; the mod treats devices dynamically as switches based on their runtime components.

---

## Input & Conflict Management

### Hotkeys
- **IPAM Overlay**: Toggled via **F1** (modernized from legacy input).
- **Player Input**: Game input is selectively suppressed while the device CLI or IPAM overlays are active to prevent character movement or inventory conflicts.

### Compatibility
- The mod links against `Assembly-CSharp.dll` provided by MelonLoader's interop layer.
- **Fail-safe**: If the game introduces overloads for `AddAppPerformance`, the patch strategy shifts from `AccessTools.Method` to `DeclaredMethod` with explicit parameter signatures to avoid ambiguity.

---

## Future Intercepts
- **Physical Topology**: Exploring `switch port <-> server` mappings from game types to enable tighter VLAN binding and automatic DHCP scope selection.
