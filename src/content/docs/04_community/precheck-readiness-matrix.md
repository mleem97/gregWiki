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

## B — Community Requests (B-01..B-84)

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
| B-55 | MacroLeft store and player PC upgrades | ❌ MISSING | shop extension concept only | `GregPlayerHardwareRegistry`, player-hardware hooks, terminal perf scaling | overlap with server-builder scope | SDK + UI |
| B-56 | Future client preview dashboard | ⚠️ PARTIAL IN CORE | contract preview concept exists | terminal dashboard composition + unified preview schema | low | SDK + UI |
| B-57 | Staff app leveling and task rules | ❌ MISSING | employee registry baseline only | leveling, certifications, auto-rule dispatch contracts | overlap with bulk dispatch | SDK + UI |
| B-58 | All colors for all cable types | ⚠️ PARTIAL IN CORE | color registry planning + drum labels planning | cable color validation patch + mapping override contract | color/mod composition risk | SDK + Harmony |
| B-59 | Cart physics straps + pickup collision grace | ❌ MISSING | inventory extension planning only | trolley straps upgrade + temporary collision-layer policy | physics side effects | SDK + Harmony |
| B-60 | Cable disconnect/reconnect without full redraw | 🎮 GAME-LEVEL | developer-planned feature | docs and compatibility preparation only | engine behavior ownership | Docs + 🎮 |
| B-61 | Colored cable hook mounts | ❌ MISSING | world color service missing | hook color variants + placement variant registry | none | SDK + Asset |
| B-62a | WinSCP-style SFTP interface | 🎮 GAME-LEVEL | terminal extension concept | gameplay-level file simulation systems | scope beyond framework-only | SDK + 🎮 |
| B-62b | Dedicated hosting active panel | ⚠️ PARTIAL IN CORE | floorplan/network baselines partial | support tickets, customer service dashboard model | ties to colo contract model | SDK + UI |
| B-62c | DNS config + security/sinkhole | 🎮 GAME-LEVEL | IP/network baselines partial | DNS gameplay layer + routing semantics | game mechanic depth | SDK + 🎮 |
| B-62d | Anomaly management | 🎮 GAME-LEVEL | none | game-mode content layer | out-of-scope for core baseline | Docs + 🎮 |
| B-62e | Facility security and sensors | ❌ MISSING | placement/power planning only | sensor registry + trigger hooks + policy integration | overlaps environment control | SDK + Asset |
| B-62f | Network heatmaps + optical load logic | ⚠️ PARTIAL IN CORE | throughput hooks planned | visual load overlay service + ticket automation | render/perf overhead | SDK + UI |
| B-62g | Dynamic economy risk margins | ⚠️ PARTIAL IN CORE | electricity billing planned | risk-tier policy engine + multiplier hook | economy balancing | SDK |
| B-63 | LACP interface bonding | ⚠️ PARTIAL IN CORE | switch stack service planned | explicit LACP bond contract + hook surface | protocol orchestration | SDK |
| B-64 | Uplink ports and MLAG | ❌ MISSING | compatibility baseline partial | uplink registry + MLAG model + hooks | none | SDK |
| B-65 | Customer churn and unlock-gated contracts | ❌ MISSING | customer requirement baseline partial | contract expiry/churn lifecycle + IP forwarding | ties to colo and dynamic hosting | SDK |
| B-66 | Fiber patch panel | ⚠️ PARTIAL IN GAME | dev roadmap indicates fiber track | framework compatibility + fiber registry prep | final behavior owned by game roadmap | SDK + 🎮 |
| B-67 | Pick up whole SFP box | 🎮 GAME-LEVEL | partially present in game | framework inventory compatibility only | spawn behavior controlled by game | SDK + 🎮 |
| B-68 | VLAN/trunk/load balancing/dual-port | ⚠️ PARTIAL IN CORE | VLAN/LACP planned, network compatibility exists | switch oversubscription + failover policy + power-cable semantics | broad cross-service dependency | SDK + 🎮 |
| B-69 | Difficulty and feature toggles | ⚠️ PARTIAL IN GAME | game-mode planning baseline | global feature-toggle contract across services | toggle consistency risk | SDK + 🎮 |
| B-70 | Multiplayer | 🎮 GAME-LEVEL | post-release interest only | multiplayer runtime/session and sync model | fundamental architecture scope | SDK + 🎮 |
| B-71 | Stuck button/respawn | ❌ MISSING | no dedicated player rescue hook | settings action + teleport safety contract | low | SDK + Harmony |
| B-72 | XP/shop rebalance + upgrade tree | ⚠️ PARTIAL IN CORE | research/shop extension planning | reputation economy model + slot spacing fixes | economy progression coupling | SDK + Harmony |
| B-73 | SAN/NAS/FC/InfiniBand storage infra | ❌ MISSING | server/network baselines partial | storage tiers, FC/IB compatibility, storage controller components | deep hardware scope | SDK + Asset |
| B-74 | OS clipboard paste integration | ❌ MISSING | no clipboard hook yet | system clipboard bridge + input patch | low | Harmony + UI |
| B-75 | Scrap/dumpster workflow | ✅ ALREADY IN GAME | in-game delete flow exists | docs and edge cleanup guidance only | 0.0m cable edge case | Docs only |
| B-76 | Tycoon environment stages | 🎮 GAME-LEVEL | wall/placement partials only | stage progression and asset swaps | heavy asset/dev dependency | SDK + 🎮 |
| B-77 | Environment control (temp/humidity/cooling/CCTV) | ⚠️ PARTIAL IN GAME | UPS/power plans + sensor planning | `GregTemperatureService`, cooling loops, overheat hooks | physics and thermal simulation complexity | SDK + 🎮 |
| B-78 | In-game source-of-truth spreadsheet | ❌ MISSING | floorplan/network baselines partial | export and spreadsheet terminal surface | none | SDK + UI |
| B-79 | Asset tags and inventory log | ❌ MISSING | persistence planning only | asset tag registry + audit lifecycle hooks | none | SDK |
| B-80 | Soundtrack and adaptive music | ⚠️ PARTIAL IN CORE | audio foundation planned via B-54 | mood-state music manager + content pack governance | licensing/content availability | SDK + Asset |
| B-81 | Mass deletion cables/servers | ⚠️ PARTIAL IN CORE | batch cleanup and world interaction planned | multi-select deletion contract + safety prompts | accidental deletion risk | SDK + UI |
| B-82 | Motion blur/camera smoothness startup bug | 🎮 GAME-LEVEL | known demo behavior from developer note | troubleshooting documentation and workaround only | startup settings ownership | Docs + 🎮 |
| B-83 | XP progression/unlock rebalance | ⚠️ PARTIAL IN CORE | shop/electricity planning baseline | XP multiplier and unlock-order contracts | economy progression coupling | SDK + Harmony |
| B-84 | Wall removal recurring expense / lease model | ❌ MISSING | `greg.SYSTEM.ButtonBuyWall` baseline only | `GregWallLifecycleBillingService`, optional XP cost policy, removal upkeep ledger, UI transparency in balance sheet | economy and progression balancing | SDK + UI |

## C/E/H — Custom Content & Asset Tracks (C-01..C-40)

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
| C-28 | MacroLeft store UI tab | ❌ MISSING | terminal extension baseline missing | dedicated store tab and player-hardware UX | none | UI + SDK |
| C-29 | Staff certification items | ❌ MISSING | employee baseline partial | certification registry + item integration | none | Asset + SDK |
| C-30 | Keycard reader | ❌ MISSING | sensor systems missing | security sensor placement + trigger policies | none | Asset + SDK |
| C-31 | Biometric scanner | ❌ MISSING | sensor systems missing | security sensor placement + trigger policies | none | Asset + SDK |
| C-32 | Water/smoke sensors | ❌ MISSING | sensor systems missing | env control + security sensor triggers | none | Asset + SDK |
| C-33 | CCTV camera | ❌ MISSING | placement baseline partial | CCTV entity lifecycle and event hooks | none | Asset + SDK |
| C-34 | Cooling system (CRAC) | ⚠️ PARTIAL IN GAME | power management planning exists | temperature loop and cooling effectiveness model | game thermal model dependency | Asset + SDK + 🎮 |
| C-35 | Storage array 4U | ❌ MISSING | server tier planning partial | storage array service + network/storage integration | none | Asset + SDK |
| C-36 | Fibre channel switch | ❌ MISSING | network compatibility partial | FC protocol and compatibility contracts | none | Asset + SDK |
| C-37 | Cart straps upgrade item | ❌ MISSING | container registry missing | trolley strap physics policy | none | Asset + SDK |
| C-38 | Colored cable hook set | ❌ MISSING | world color service missing | cable hook color registry + placement variants | none | Asset + SDK |
| C-39 | MLAG stack cable | ❌ MISSING | switch stack planning partial | MLAG cable semantics and limits | none | Asset + SDK |
| C-40 | Asset tag label | ❌ MISSING | tracking baseline missing | asset tag rendering + persistence/log lifecycle | none | Asset + SDK |

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
- Feature Requests: `B-01..B-84`
- Assets/Models: `C-01..C-40`

All entries are visible as WIP planning items and are mapped to concrete status categories.

## Part Coverage (A–J)

| Part | Current Coverage in this Matrix | Status |
| --- | --- | --- |
| A | Community mods mapped (`A-01..A-11`) | ✅ Covered |
| B | Feature requests mapped (`B-01..B-84`) | ✅ Covered |
| C | Assets mapped (`C-01..C-40`) | ✅ Covered |
| D | Integrated via expanded `B-20+` and roadmap tracks | ✅ Covered |
| E | Integrated via asset tracks (`C-11+`) and custom-content pages | ✅ Covered |
| F | Integrated via performance/accessibility/dispatch entries (`B-43..B-54`) | ✅ Covered |
| G | Integrated via audio track (`B-54`) and sound docs | ✅ Covered |
| H | Integrated via Batch 3 entries (`B-55..B-83`, `C-28..C-40`) | ✅ Covered |
| I | No canonical request block provided yet | ⏳ Pending Input |
| J | No canonical request block provided yet | ⏳ Pending Input |

If you provide `Teil I` and `Teil J` in the same format, they will be added to this matrix immediately using the same pre-check workflow.
