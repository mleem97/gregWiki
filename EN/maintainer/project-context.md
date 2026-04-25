Title: Project Context Snapshot
Path: /maintainer/project-context
Type: Internal / Advanced
Audience: maintainer, framework developer
Summary: Technical snapshot of the gregCore project, including implementation status, critical TODOs, and IL2CPP violations.
Suggested Tags: maintenance, context, snapshot, todo, il2cpp, status
Related Pages: /maintainer/migration-status, /maintainer/security-stability-report
Split Recommendation: Keep as one page

# gregCore — Project Context Snapshot

**Generated**: 2026-04-17

## Project Overview
- **Game**: Data Center (Unity 6000.4.2f1, IL2CPP x64)
- **MelonLoader**: v0.7.2
- **Environment**: Unity 6 stability focus.

## Implementation Status

| Module | Status | Primary Service |
| :--- | :--- | :--- |
| `gregMod.SaveSystemData` | IMPLEMENTED | `GregSaveService` |
| `gregMod.BalanceAndEconomy` | IMPLEMENTED | `GregBalanceService` |
| `gregMod.LocalisationBridge` | IMPLEMENTED | `GregLocalisationService` |
| `gregMod.NetworkTopology` | **PARTIAL** | `GregTopologyService` |
| `gregMod.PowerSimulation` | IMPLEMENTED | `GregPowerService` |
| `gregMod.UIFramework` | **PARTIAL** | `GregUiService` |
| `gregMod.Multiplayer` | IMPLEMENTED | `GregMultiplayerService` |
| `gregMod.MCP` | **MISSING** | N/A |

## Critical TODOs (High Priority Hooks)
The following hooks in `GregNetworkHooks.cs` require immediate attention and implementation:
- `BrokenServerAdded`
- `BrokenSwitchAdded`
- `BrokenServerRemoved`
- `BrokenSwitchRemoved`

## IL2CPP Violations & Technical Debt
Top high-priority violations impacting performance or stability:
- **Hot Path Performance**: Multiple `foreach Transform` loops in `GregShopPatch.cs`, `PauseMenuPatch.cs`, and `RackBuilderCore.cs`.
- **Legacy Input Usage**: Unauthorized `Input.GetKey` calls found in `WorkspaceService.cs`, `LegacyInputSilencerPatches.cs`, and `IPAM`. All input must be migrated to the **New Input System**.

## System Metrics
- **Services**: 89 detected.
- **Dependency Graph**: 1314 nodes, 10113 edges, 20 orphans.

## Uncoupled Hooks (Event Gaps)
The following hooks are subscribed to (`on`) but never fired (`fire`):
- `greg.CONTENT.Loaded`
- `greg.INPUT.KeyToggleCableAudit`
- `greg.NETWORK.BrokenSwitchAdded`
- `greg.SYSTEM.ButtonBuyWall`

## Next Implementation Priorities
1. **gregMod.NetworkTopology**: High priority as implementation has already begun.
2. **gregMod.UIFramework**: High priority; transition to UGUI is critical for stability.
3. **gregMod.MCP**: Planned next phase for Model Context Protocol support.
