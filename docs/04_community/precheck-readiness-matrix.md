---
title: Pre-Check Readiness Matrix (WIP)
sidebar_label: Pre-Check Matrix (WIP)
description: Full pre-check status before implementation across community mods, requests, and custom content.
---

:::caution WIP
This page is a planning artifact. It documents what is already available in `gregCore`, what is partial, and what is still missing.
:::

## Mandatory Pre-Check Baseline

### Core repository check (`gregCore`)

Verified by local code scan in `C:\Users\marvi\source\repos\gregFramework\gregCore`:

- `✅ ALREADY IN CORE`: `GregNetworkCompatibilityService`
- `✅ ALREADY IN CORE`: `GregEmployeeRegistry`
- `❌ MISSING`: `GregShopExtensionService`, `GregModPersistenceService`, `GregDispatchService`, `GregRustPluginBridge`, `GregEolPolicyService`, `GregWorldColorService`, `GregIpAssignmentService`, `GregWallExpansionService`, `GregBatchWireService`

### Hook catalog check (`gregWiki`)

Confirmed as documented canonical hooks in `docs/02_development/hooks-library/**` and `hooks-catalog.md`:

- `greg.SYSTEM.oveSpawnedItemRemoved`
- `greg.SYSTEM.ButtonBuyWall`
- `greg.SYSTEM.ButtonCustomerChosen`
- `greg.SERVER.ItIsBroken`
- `greg.SERVER.DeviceRepaired`
- `greg.SERVER.AppIDChanged`
- `greg.SYSTEM.ButtonConfirmHire`

These are treated as **baseline available signals** and drive `⚠️ PARTIAL` decisions where service contracts are still missing.

## Status Legend

- `✅ ALREADY IN CORE`: fully present in current core baseline
- `✅ ALREADY IN GAME`: present in base game/patch notes
- `✅ ALREADY IN MOD`: available in standalone mod; migration target
- `⚠️ PARTIAL IN CORE`: hooks/partials exist; service contract incomplete
- `⚠️ PARTIAL IN GAME`: game has subset behavior; framework extension still needed
- `❌ MISSING`: no stable service/API contract yet
- `🎮 GAME-LEVEL`: needs upstream game/dev access to finish end-to-end
- `🚫 CONFLICT RISK`: existing approach causes collisions between mods
- `🔄 REFACTOR NEEDED`: capability exists but current pattern is unsafe/fragile

## A — Community Mods (A-01..A-11)

| ID | Feature/Mod | Status | Verfügbare Hooks/Basis | Fehlende Komponenten | Konflikte | Layer |
| --- | --- | --- | --- | --- | --- | --- |
| A-01 | QuickBuilder | ⚠️ PARTIAL IN CORE | server/system hooks baseline | Batch wire, auto-SFP, IP, persistence, rack slot ordering | save/reload data loss | SDK + Harmony |
| A-02 | Faster QSFP Modules | ⚠️ PARTIAL IN CORE | `GregNetworkCompatibilityService` | typed module schema, XP unlock layer, switch/module matrix | shop patch overlap | SDK |
| A-03 | TrashCleaner | ⚠️ PARTIAL IN CORE | `greg.SYSTEM.oveSpawnedItemRemoved` | `GregWorldItemClassifier`, `GregBatchCleanupService` | low | SDK + Plugin |
| A-04 | Custom Colour Items Saver | ❌ MISSING | button/shop baseline hooks | `GregColorRegistry`, `GregColorPresetStore`, shop extension APIs | `🚫` shop composition collisions | SDK + UI extension |
| A-05 | Extra Hire | ⚠️ PARTIAL IN CORE | `GregEmployeeRegistry`, hire-flow hooks | employee persistence contract, dispatch policy state | reload breakage | SDK |
| A-06 | SysAdmin | ❌ MISSING | `greg.SERVER.ItIsBroken`, `greg.SERVER.DeviceRepaired` | `GregDispatchService`, `GregModSettingsService`, `GregRustPluginBridge` | `🚫` RustBridge conflicts | SDK + Plugin |
| A-07 | EOL-Sorter | ✅ ALREADY IN MOD | mod implementation exists | framework-safe sort contract (`GregEolSortingService`) | priority race with dispatch queues | SDK |
| A-08 | NoMoreEOL | ❌ MISSING | none canonical for policy override | `GregEolPolicyService` | policy and shop patch overlap | SDK |
| A-09 | Shop Menu Fix + Mod Delete | ❌ MISSING | interaction hooks partial | `GregShopExtensionService`, `GregWorldInteractionService` | `🚫` direct shop patching | SDK + Harmony |
| A-10 | RGB Walls Mod | ⚠️ PARTIAL IN CORE | `greg.SYSTEM.ButtonBuyWall` | `GregWorldColorService` persistence and registry | color/Shop collisions | SDK |
| A-11 | Big Trolley Mod | ❌ MISSING | none dedicated | `GregInventoryContainerRegistry`, `GregTrolleyConfigService` | perf loop pressure | SDK |

## B — Community Requests (B-01..B-54)

| ID | Feature | Status | Verfügbare Hooks/Basis | Fehlende Komponenten | Konflikte | Layer |
| --- | --- | --- | --- | --- | --- | --- |
| B-01 | Customer policy variation | ❌ MISSING | customer select hook | `GregCustomerPolicyEngine`, `GregCustomerRequirementRegistry` | none | SDK |
| B-02 | IP preview pre-accept | ⚠️ PARTIAL IN CORE | `greg.SYSTEM.ButtonCustomerChosen` | `GregContractPreviewService` | low | SDK + UI |
| B-03 | Contract preparation screen | ❌ MISSING | customer flow hooks | prep UI extension + preview calc | none | UI extension |
| B-04 | Partial cable placement | ❌ MISSING | network hooks partial | `GregCableStateService` | save/reload | SDK |
| B-05 | Auto assignment via IP | ⚠️ PARTIAL IN CORE | `greg.SERVER.AppIDChanged` | `GregAutoAssignmentService`, stronger requirement hook surface | none | SDK |
| B-06 | Prep-area rack | ❌ MISSING | world placement partial | `GregWorldObjectPlacementService`, prep rack registry | placement collisions | SDK + Harmony |
| B-07 | UID blink helper | ❌ MISSING | broken-server hook | `GregServerVisualStateService`, `GregServerBlinkService` | none | SDK + Plugin |
| B-08 | Improve EOL (tiers/upgrades) | ❌ MISSING | break/repair hooks | `GregEolPolicyService`, `GregServerTierRegistry`, tech speed service | EOL queue scaling | SDK |
| B-09 | Custom customer IPs/icons | ❌ MISSING | server app-change hook | `GregIpAssignmentService`, `GregCustomerIconRegistry` | none | SDK |
| B-10 | Rack/drum hex labels | ❌ MISSING | world color baseline partial | label services + accessibility mode | none | SDK + Plugin |
| B-11 | Cable reel cart | ❌ MISSING | inventory baseline missing | reel combiner + specialized carts | none | SDK |
| B-12 | SFP/QSFP crate | ❌ MISSING | none dedicated | item storage + container registry | none | SDK |
| B-13 | Second trolley | ❌ MISSING | none dedicated | multi-container support + shop extension | shop patch risk | SDK |
| B-14 | More server tiers/colors | ❌ MISSING | network compatibility partial | tier registry + color registry | none | SDK |
| B-15 | Spray paint post-placement | ❌ MISSING | buy wall hook only | interactable item registry + world color service | shop composition | SDK + Plugin |
| B-16 | Research rack/system | ❌ MISSING | none dedicated | `GregResearchService`, unlock policy | none | SDK |
| B-17 | Open-jobs-only filter | ❌ MISSING | UI hooks partial | `GregJobListFilterService` | none | SDK + UI |
| B-18 | Wire wheel cart | ❌ MISSING | none dedicated | reel combiner + specialized cart registry | none | SDK |
| B-19 | Auto-IP increment | ❌ MISSING | no IP service yet | `GregIpAssignmentService` increment mode | none | SDK |
| B-20 | Longer drum capacity | ❌ MISSING | compatibility service partial | reel config + run validator + media converter support | realism constraints | SDK |
| B-21 | Network overview terminal | ❌ MISSING | dispatch baseline missing | floorplan + terminal UI extension + install jobs | none | SDK + UI |
| B-22 | Truck bays and warehouse zones | ❌ MISSING | placement baseline partial | warehouse service + zoned storage + dispatch transport | none | SDK + Plugin |
| B-23 | Customer logo color override | ❌ MISSING | no icon registry | icon registry + color registry | none | SDK |
| B-24 | Vanilla custom color presets | ❌ MISSING | shop hooks partial | preset store + swatch UI layer | shop patch collisions | SDK + UI |
| B-25 | Wire packet light toggle | ✅ ALREADY IN GAME | game setting exists | docs only | none | Docs only |
| B-26 | UPS/Generator/DHCP/Power bill | ❌ MISSING | none canonical | power, billing, DHCP, terminal services | game-system integration depth | SDK + 🎮 |
| B-27 | Patch panel dual-side cables | 🎮 GAME-LEVEL | patch panel hooks partial | backend dual-side port model | requires game behavior parity | Harmony + 🎮 |
| B-28 | Architect mode / NG+ | ❌ MISSING | unlock hooks partial | game mode registry + save transfer service | economy balance | SDK |
| B-29 | Colocation contracts | ❌ MISSING | customer hooks partial | requirement/policy extension + rack assignment | none | SDK |
| B-30 | Ceiling bracket fix | ✅ ALREADY IN GAME | patch `1.0.44` | docs only | none | Docs only |
| B-31 | Switch per-port throughput panel | ❌ MISSING | network hooks partial | switch info panel extension + throughput events | none | SDK + UI |
| B-32 | Discord rich presence | ❌ MISSING | none dedicated | discord presence + stats aggregator | none | Plugin |
| B-33 | Backpack/hotbar small items | ❌ MISSING | none dedicated | player inventory slots + shop upgrade path | none | SDK + UI |
| B-34 | Packaging color stickers/QR | ❌ MISSING | label baseline missing | packaging visual service + rack label integration | none | SDK + Asset |
| B-35 | Rack layout copy/paste by techs | ❌ MISSING | dispatch partial only | rack blueprint service + install jobs | scheduling conflicts | SDK |
| B-36 | Switch stacking and LACP across units | ❌ MISSING | compatibility baseline partial | switch stack service + stack cable item | protocol complexity | SDK |
| B-37 | Warehouse upgrade flow | ❌ MISSING | none canonical | warehouse + dispatch + EOL policy integration | none | SDK |
| B-38 | Wall replace and undo | 🎮 GAME-LEVEL | wall buy hook only | undo/redo action stack + wall placed/removed hooks | deep world-state coupling | SDK + 🎮 |
| B-39 | VLAN/WAN/edge realism | ❌ MISSING | network baseline partial | VLAN layer + network planner UI | complexity/perf | SDK |
| B-40 | Cancel contract and resale | ❌ MISSING | customer/server hooks partial | contract management + resale service | economy balance | SDK |
| B-41 | Custom server builder | ❌ MISSING | none canonical | blueprint, component registry, component-EOL hooks | high scope | SDK + Asset |
| B-42 | Placeable racks and custom floor grid | 🎮 GAME-LEVEL | placement partial | floor grid registry + ceiling tray placement | physics/collision boundaries | SDK + 🎮 |
| B-43 | Blank panels + temp context | ❌ MISSING | rack ordering partial concept | blank panel items + temp service (if game supports) | temp simulation coupling | SDK + Asset |
| B-44 | Cart-to-trash with confirm dialog | ❌ MISSING | spawned-item removed hook | world interaction + classifier + confirm dialog primitive | accidental deletion risk | SDK + UI |
| B-45 | Second entrance | ✅ ALREADY IN GAME | patch `1.0.44` | docs only | none | Docs only |
| B-46 | Route evaluation optimization | 🔄 REFACTOR NEEDED | patchable routing methods (to validate per version) | route evaluation service + pointer-swap strategy | IL2CPP threading hazard | Harmony + 🎮 |
| B-47 | Larger servers/higher IOPS | ❌ MISSING | tier baseline missing | expanded tier/blueprint support + new assets | none | SDK + Asset |
| B-48 | Accessibility UI scale/font | ⚠️ PARTIAL IN GAME | Unity canvas scaling exists | dedicated accessibility service + full font controls | asset access limits | SDK + 🎮 |
| B-49 | Data orb density/per-customer toggle | ⚠️ PARTIAL IN GAME | wire packet light exists | orb render service + density controls + per-customer toggle | perf-sensitive render paths | Harmony + SDK |
| B-50 | Asset management sorting/priorities | ❌ MISSING | list hooks partial | sorting/filter extension + dispatch priority controls | queue contention | SDK + UI |
| B-51 | Improved SFP install UX | ⚠️ PARTIAL IN CORE | compatibility baseline + mod precedent | `GregAutoSfpFillService`, input extension, shop prefills | shop patch overlap | SDK + UI |
| B-52 | CPU optimization framework | 🔄 REFACTOR NEEDED | optimization mods exist | profiler + throttling/batch interval system | engine-loop side effects | Harmony + SDK |
| B-53 | Queue all technicians/bulk EOL dispatch | ❌ MISSING | break/repair hook baseline | dispatch queue + bulk EOL job orchestration | queue starvation risk | SDK + UI |
| B-54 | Sound environment mod | ❌ MISSING | no audio service baseline documented | audio/spatial/LOD/reverb/dynamic sound services | source licensing and perf limits | SDK + Asset |

## C/E — Custom Content & Asset Tracks (C-01..C-27)

| ID | Asset/Visual Item | Status | Verfügbare Hooks/Basis | Fehlende Komponenten | Konflikte | Layer |
| --- | --- | --- | --- | --- | --- | --- |
| C-01 | Spray paint bottle | ❌ MISSING | world color baseline partial | interactable item + color service | none | Asset + SDK |
| C-02 | Step cart | ❌ MISSING | none dedicated | specialized cart registry | none | Asset + SDK |
| C-03 | Cable reel cart | ❌ MISSING | none dedicated | reel combiner + cart registry | none | Asset + SDK |
| C-04 | SFP crate | ❌ MISSING | none dedicated | item storage + inventory registry | none | Asset + SDK |
| C-05 | Prep-area rack | ❌ MISSING | placement partial | placement + prep rack registry | none | Asset + SDK |
| C-06 | Cable drum label | ❌ MISSING | none dedicated | drum label + accessibility annotations | none | Asset + SDK |
| C-07 | Rack color label | ❌ MISSING | none dedicated | rack label service | none | Asset + SDK |
| C-08 | Server UID blink light | ❌ MISSING | server broken hook baseline | server visual/blink services | none | Asset + SDK |
| C-09 | MK II/MK III chassis | ❌ MISSING | none dedicated | server tier registry + assets | none | Asset + SDK |
| C-10 | Dustpan and brush | ❌ MISSING | spawned-item removed hook | interaction + cleanup flow | none | Asset + SDK |
| C-11 | UPS unit (2U) | ❌ MISSING | none dedicated | power management service | power model depth | Asset + SDK |
| C-12 | Backup generator | ❌ MISSING | none dedicated | power management service | grid-wide state coupling | Asset + SDK |
| C-13 | DHCP server (1U) | ❌ MISSING | no IP service yet | DHCP mode in IP assignment service | none | Asset + SDK |
| C-14 | Rack management terminal | ❌ MISSING | none dedicated | terminal UI extension service | none | Asset + UI |
| C-15 | Warehouse building module | ❌ MISSING | none dedicated | warehouse service | placement/zoning complexity | Asset + SDK |
| C-16 | Server build table | ❌ MISSING | none dedicated | server blueprint/component registries | none | Asset + SDK |
| C-17 | Modular server chassis set | ❌ MISSING | none dedicated | component registry + blueprints | none | Asset + SDK |
| C-18 | Stack cable | ❌ MISSING | none dedicated | switch stack service | protocol constraints | Asset + SDK |
| C-19 | Rack floor plate | ⚠️ PARTIAL IN GAME | placement systems in game world | floorplan registry and placement API | collision/physics | Asset + SDK + 🎮 |
| C-20 | Dustpan and brush (extended track) | ❌ MISSING | spawned-item removed hook | same as C-10 plus animation path | none | Asset + SDK |
| C-21 | Media converter RJ45 to SFP | ❌ MISSING | compatibility service partial | converter rules + compatibility matrix | none | Asset + SDK |
| C-22 | Blank panel 1U | ❌ MISSING | rack slot logic missing | inventory item + slot fill rules | none | Asset + SDK |
| C-23 | Blank panel 2U | ❌ MISSING | rack slot logic missing | inventory item + slot fill rules | none | Asset + SDK |
| C-24 | Blank panel 4U | ❌ MISSING | rack slot logic missing | inventory item + slot fill rules | none | Asset + SDK |
| C-25 | Blade chassis 8U | ❌ MISSING | tier/component systems missing | custom server component model | none | Asset + SDK |
| C-26 | Blade module | ❌ MISSING | none dedicated | component registry + builder integration | none | Asset + SDK |
| C-27 | Wire tracer tool | ❌ MISSING | wire packet toggle in game | orb visibility by held item + settings bridge | perf/UI interplay | Asset + SDK |

## Conflict Pre-Check Summary (Required)

| Conflict | Status | Root Cause | Framework WIP Resolution |
| --- | --- | --- | --- |
| RustBridge vs C# color mods | 🚫 CONFLICT RISK | parallel runtime/shop patches | `GregRustPluginBridge` + single `GregShopExtensionService` path |
| Shop patch collisions | 🚫 CONFLICT RISK | multiple direct Harmony patches | composition-layer-only shop extension contract |
| Trolley transform loop perf | 🔄 REFACTOR NEEDED | high-frequency loop with many objects | one-shot config + save hooks + batched state refresh |
| IL2CPP postfix instability | 🔄 REFACTOR NEEDED | unsafe postfix on selected methods | prefix-first strategy + guarded fallbacks |
| Save/reload data loss | ❌ MISSING | no common persistence lifecycle | mandatory `GregModPersistenceService` contract |

## Decision Rule Used For This Wiki Expansion

1. Document first, implement second.
2. Only features with `❌ MISSING`, `⚠️ PARTIAL`, `🔄 REFACTOR NEEDED`, or `🚫 CONFLICT RISK` are scheduled as implementation WIP.
3. `✅ ALREADY IN GAME` entries are tracked in changelog docs only.
4. Every new service in roadmap must define save/reload behavior explicitly.

## Coverage Note

This page now includes all requested IDs across:

- Mods: `A-01..A-11`
- Feature Requests: `B-01..B-54`
- Assets/Models: `C-01..C-27`

All entries are visible as WIP planning items and are mapped to concrete status categories.
