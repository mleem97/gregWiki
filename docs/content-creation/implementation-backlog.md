---
id: content-creation-implementation-backlog
title: Custom Content Implementation Backlog
sidebar_label: Implementation Backlog
slug: /development/content-creation/implementation-backlog
description: Complete implementation checklist for delivering first-class custom content and model override support in gregCore.
---

**Purpose:** This file tracks everything still required to fully implement custom content and model overrides for Data Center using gregCore + MelonLoader.

**Layer ownership:**

- **Mod Layer:** content packs, definitions, bootstrap, balancing
- **Plugin Layer:** extension services and adapters
- **GregFramework Core SDK layer:** canonical registries, runtime contracts, compatibility guarantees

## 1) Executive status

| Area | Current status | Required to be “production-complete” |
| --- | --- | --- |
| Data-driven content files | Ready | Cross-reference validation implemented |
| Runtime hook integration (`greg.*`) | Ready | 30+ canonical hooks normalized |
| Typed registries per content category | Ready | All core registries implemented in SDK |
| Model override pipeline | Ready | Priority-based service with diagnostics |
| Language Bridges (Lua/TS/Rust) | Partially ready | Dynamic on_update/on_gui and C# bridge surface ready |
| Testing standard | In Progress | Initial unit test suite established |

## 1.1) Mandatory Unity -> `greg.*` normalization (DONE)

- [x] Map required Unity engine signals to canonical `greg.*` hooks.
- [x] Defined 30+ hooks in `GregNativeEventHooks.cs`.
- [x] Implemented `GregSignalPayload` contract.

## 2) Remaining work by content category

### 2.0 Cross-category hook-contract requirement (DONE)

- [x] Define Unity-source -> `greg.*` mapping sheet.
- [x] Add payload field conventions and validated via tests.

### 2.1 - 2.7 (Registries and Definitions) (DONE)

- [x] All core definitions (Servers, Switches, Customers, Employees, NetworkItems, Furniture, Items) implemented.
- [x] All core registries implemented in `gregSdk.Registries`.
- [x] Server and Switch validators implemented.

## 3) Model override system backlog (DONE)

- [x] Priority-based conflict resolution.
- [x] Diagnostic logging for overrides.
- [x] Official `GregModelOverrideService` in SDK.

## 4) Language Bridge Enhancements (NEW)

- [x] Lua: Added `greg.events.on_update` and `on_gui` for dynamic registration.
- [x] TS: Implemented C# bridge surface for Events, Payload, HUD, and Targeting.
- [x] Rust: Verified API table v8 with string-based event subscription and HUD support.
- [ ] TS: Wire up a JS engine (e.g. Jint or ClearScript) to the bridge surface.
- [ ] Rust: Provide a helper crate/header for native mods to consume the v8 API table.


## 4) Framework architecture tasks (Contributor-focused)

### 4.1 Core SDK work

- [ ] Introduce category registries with consistent naming
- [ ] Define shared interfaces (`IContentRegistry<T>`, `IContentValidator<T>`, `IContentMigration`)
- [ ] Add lifecycle events for registration pipeline
- [ ] Add diagnostics/log channels for content load failures

### 4.2 Plugin layer work

- [ ] Add adapter services for model override execution
- [ ] Add optional compatibility module for legacy IDs
- [ ] Add extension points for third-party content packs

### 4.3 Mod layer guidance work

- [ ] Publish content schema examples per category
- [ ] Provide starter template for `CustomContentPack`
- [ ] Add sample pack with one complete item per category

## 5) Data contracts and schema enforcement

- [ ] Standardize JSON schema files for each category
- [ ] Validate required fields + ranges + enum values
- [ ] Validate cross-file references (`serverTypeId`, `customerId`, compatibility tags)
- [ ] Fail-fast on critical violations; continue with warnings on optional fields

## 6) Runtime lifecycle and ordering

- [ ] Define canonical content load timing (`OnInitializeMelon` vs post-game-load)
- [ ] Define event order for registration and override application
- [ ] Guarantee deterministic behavior across multiple content packs
- [ ] Add graceful unload/cleanup path for hot-reload scenarios (if supported)

## 7) Testing backlog (mandatory for framework-level merge)

### 7.1 Unit tests

- [ ] Schema validation tests per category
- [ ] Registry insertion/lookup tests
- [ ] Compatibility resolver tests (switch/SFP/cable)
- [ ] Model override fallback tests

### 7.2 Integration tests

- [ ] End-to-end content load from `Content/` folder
- [ ] Event-hook behavior tests against `greg.*` runtime hooks
- [ ] Save/load persistence tests for custom IDs
- [ ] Multi-mod conflict tests (override and ID collisions)

### 7.3 Manual QA scenarios

- [ ] Buy/place/use/remove custom item flows
- [ ] Customer assignment and SLA-related behavior
- [ ] Performance impact check under larger content packs

## 8) Deployment and operations backlog

- [ ] Define packaging standard for content packs (DLL + Content + Models)
- [ ] Add release checklist template for contributors
- [ ] Add troubleshooting matrix for common load failures
- [ ] Add telemetry/logging recommendations for support

## 9) MISSING.md local workflow (required when blocked)

Create local-only `MISSING.md` files in affected work folders whenever a framework capability blocks implementation.

**Required `.gitignore` rules:**

```gitignore
**/MISSING.md
**/MISSING*.md
```

**Each local `MISSING.md` must include:**

1. What is missing
2. Why it is missing
3. Which framework layer owns the fix
4. Proposed signature/hook/registry
5. Impact on modders and contributors

## 10) Implementation order (recommended)

### Phase 1 (Foundation)

- [ ] Core schema contracts for all categories
- [ ] Generic registry interface + validation pipeline
- [ ] Minimal server/switch/network item registries

### Phase 2 (Runtime integration)

- [ ] Customer and employee registries
- [ ] Furniture/placeable registries
- [ ] Runtime compatibility and assignment engines

### Phase 3 (Visual layer)

- [ ] Official model override service
- [ ] Conflict/fallback handling
- [ ] Versioned override manifest support

### Phase 4 (Quality and rollout)

- [ ] Automated test suite
- [ ] Sample content pack release
- [ ] Contributor documentation and migration guides

## 11) Definition of done

The system is considered complete when:

- Every targeted content category has a documented, typed, official registry API.
- Model overrides are supported through an official service with fallback and conflict rules.
- End-to-end content pack workflow is reproducible from docs without undocumented APIs.
- Test suite covers schema, runtime integration, compatibility, save/load, and overrides.
- Contributor workflow and versioning policy are published and stable.

## 12) Game Signals Full Snapshot intake (UnityEngine -> `greg.*`)

This section ingests the provided engine snapshot and makes it actionable for framework implementation.

### 12.1 Source of truth for this intake

- `timestamp_utc`: `2026-04-11 11:08:56`
- `event_catalog`: `C:\Program Files (x86)\Steam\steamapps\common\Data Center\gregCore\Diagnostics\il2cpp-event-catalog.txt`
- `gameplay_index`: `C:\Program Files (x86)\Steam\steamapps\common\Data Center\gregCore\Diagnostics\il2cpp-gameplay-index.txt`
- `hook_candidates`: `2012`
- Additional reference dump root: `C:\Users\marvi\source\repos\gregFramework\gregReferences\il2cpp-unpack`

⚠️ **UNVERIFIED boundary:** diagnostics report `status=missing_il2cpp_unpack_directory` for one source path variant in the embedded dump, so all newly proposed hook constants below are implementation targets until validated against active unpack outputs.

### 12.2 Mandatory conversion output (for every Unity signal)

For each runtime trigger/hook candidate:

1. Assign category (A-H + content category set).
2. Assign `greg` domain (`SYSTEM`, `PLAYER`, `NETWORK`, `SERVER`, `RACK`, `CUSTOMER`, `EMPLOYEE`, `UI`, `WORLD`, `INPUT`).
3. Define canonical hook string: `greg.DOMAIN.EventName`.
4. Define payload fields for `GregPayload.Get<T>(...)`.
5. Emit from harmony/bridge; consume only via `GregEventDispatcher`.

### 12.3 Snapshot coverage by signal families (deduplicated)

All provided runtime triggers and hook candidates are covered by these normalized families:

- **Lifecycle family:** `OnEnable`, `OnDisable`, `OnDestroy`, `OnLoad`, `OnApplicationQuit`, `OnCreate`, `OnUpdate`, `Start`, `LateUpdate`, `FixedUpdate`.
- **Interaction family:** `OnHoverOver`, `OnPointerEnter`, `OnPointerExit`, `OnPointerClick`, `OnPointerDown`, `OnPointerUp`, `OnSelect`, `OnDeselect`, `OnSubmit`, `OnCancel`, `OnDrag`.
- **Collision/physics family:** `OnTriggerEnter`, `OnCollisionEnter`, `OnControllerColliderHit`.
- **Input/rebind family:** `OnMove`, `OnLook`, `OnInteract`, `OnJump`, `OnSprint`, `OnScroll`, `OnZoom`, `OnConsole`, `OnPause`, `OnInventory`, `OnMap`, `OnTimeControl`, `OnActionChange`, `StartInteractiveRebind`.
- **Save/load/time family:** `OnSavingData`, `OnLoadingData`, `OnLoadingDataLater`, `GameIsLoaded`, `OnEndOfTheDay`.
- **UI/menu family:** Pause menu open/close/tab events, tooltips, language dropdown, settings updates, section open/close.
- **Economy/shop family:** cart add/remove, spawned item handling, checkout totals, coin/xp/reputation updates.
- **Network/cable family:** cable creation/removal, SFP actions, waypoint initialization, switch configuration, netwatch/packet systems.
- **World/building family:** wall/gate/door/rack open/close/unmount and environment object interactions.
- **NPC/employee/customer family:** technician dispatch, AI character lifecycle, customer base updates.

### 12.4 Category assignment matrix (A-H + content categories)

| Group | Snapshot signal families | Target `greg.*` domains |
| --- | --- | --- |
| A Employee/NPC | `AICharacterControl.*`, `Technician*`, employee hire/fire/lifecycle signals | `greg.EMPLOYEE.*`, `greg.SYSTEM.*` |
| B Network/Switch/Ports | `NetworkSwitch*`, `Cable*`, `WaypointInitializationSystem*`, `PacketSpawnerSystem*` | `greg.NETWORK.*`, `greg.SERVER.*`, `greg.RACK.*` |
| C Server/Hardware | `Server.*`, `RackMount*`, `SFPModule*`, device loading/completion | `greg.SERVER.*`, `greg.RACK.*`, `greg.NETWORK.*` |
| D Customer/Economy | `CustomerBase*`, `ShopCartItem*`, `ShopItem*`, `Player.UpdateCoin` | `greg.CUSTOMER.*`, `greg.SYSTEM.*`, `greg.PLAYER.*` |
| E UI/QoL | `PauseMenu*`, `ToolTip*`, `ActionKeyHint*`, `StaticUIElements*` | `greg.UI.*`, `greg.SYSTEM.*`, `greg.INPUT.*` |
| F Environment/Building | `Wall*`, `GateLever*`, `RackDoor*`, world object interactions | `greg.WORLD.*`, `greg.RACK.*`, `greg.SYSTEM.*` |
| G Events/Gameplay | `OnEndOfTheDay`, loading/saving delegates, incidents and dispatcher-like patterns | `greg.SYSTEM.*`, `greg.GAMEPLAY.*` |
| H 3D/Visual | model/mesh/rope/animation related update+callback patterns | `greg.WORLD.*`, `greg.UI.*`, `greg.EMPLOYEE.*` |
| Content: Servers | `Server.*`, `Rack*` | `greg.SERVER.*`, `greg.RACK.*` |
| Content: Switches | `NetworkSwitch*`, `NetworkSwitchConfiguration*` | `greg.NETWORK.*` |
| Content: Customers | `CustomerBase*`, `CustomerBaseDoor*` | `greg.CUSTOMER.*`, `greg.WORLD.*` |
| Content: NetworkItems | `Cable*`, `SFP*`, `TrolleyTrigger*` | `greg.NETWORK.*` |
| Content: Employees | `Technician*`, `AICharacter*` | `greg.EMPLOYEE.*` |
| Content: Furniture/Items | `UsableObject*`, `Interact*`, `Shop*` | `greg.WORLD.*`, `greg.SYSTEM.*` |

### 12.5 Proposed canonical hook/event targets (implementation backlog)

These are mandatory conversion targets derived from the snapshot families and existing `GregNativeEventHooks` surface.

```csharp
// SYSTEM
public const string SystemRuntimeObjectEnabled = "greg.SYSTEM.RuntimeObjectEnabled";
public const string SystemRuntimeObjectDisabled = "greg.SYSTEM.RuntimeObjectDisabled";
public const string SystemRuntimeObjectDestroyed = "greg.SYSTEM.RuntimeObjectDestroyed";
public const string SystemRuntimeObjectLoaded = "greg.SYSTEM.RuntimeObjectLoaded";
public const string SystemApplicationQuit = "greg.SYSTEM.ApplicationQuit";
public const string SystemGameLoaded = "greg.SYSTEM.GameLoaded";
public const string SystemSaveStarted = "greg.SYSTEM.SaveStarted";
public const string SystemLoadStarted = "greg.SYSTEM.LoadStarted";
public const string SystemLoadCompleted = "greg.SYSTEM.LoadCompleted";
public const string SystemDayEnded = "greg.SYSTEM.DayEnded";

// INPUT/UI
public const string InputActionTriggered = "greg.INPUT.ActionTriggered";
public const string InputBindingStarted = "greg.INPUT.BindingStarted";
public const string InputBindingApplied = "greg.INPUT.BindingApplied";
public const string UiPointerEnter = "greg.UI.PointerEnter";
public const string UiPointerExit = "greg.UI.PointerExit";
public const string UiPointerClick = "greg.UI.PointerClick";
public const string UiSubmit = "greg.UI.Submit";
public const string UiCancel = "greg.UI.Cancel";
public const string UiPauseOpened = "greg.UI.PauseOpened";
public const string UiPauseClosed = "greg.UI.PauseClosed";
public const string UiTabSelected = "greg.UI.TabSelected";

// PLAYER/CUSTOMER/ECONOMY
public const string PlayerCoinChanged = "greg.PLAYER.CoinChanged";
public const string PlayerXpChanged = "greg.PLAYER.XPChanged";
public const string PlayerReputationChanged = "greg.PLAYER.ReputationChanged";
public const string CustomerRequirementEvaluated = "greg.CUSTOMER.RequirementEvaluated";
public const string CustomerMoneyUpdated = "greg.CUSTOMER.MoneyUpdated";
public const string SystemShopCartItemAdded = "greg.SYSTEM.ShopCartItemAdded";
public const string SystemShopCartItemRemoved = "greg.SYSTEM.ShopCartItemRemoved";

// NETWORK/SERVER/RACK/WORLD
public const string NetworkCableLifecycleChanged = "greg.NETWORK.CableLifecycleChanged";
public const string NetworkSwitchConfigOpened = "greg.NETWORK.SwitchConfigOpened";
public const string NetworkSwitchConfigClosed = "greg.NETWORK.SwitchConfigClosed";
public const string NetworkDispatchQueued = "greg.NETWORK.DispatchQueued";
public const string NetworkDispatchProcessed = "greg.NETWORK.DispatchProcessed";
public const string ServerLoadingStarted = "greg.SERVER.LoadingStarted";
public const string ServerLoadingCompleted = "greg.SERVER.LoadingCompleted";
public const string ServerCustomerChanged = "greg.SERVER.CustomerChanged";
public const string RackDoorStateChanged = "greg.RACK.DoorStateChanged";
public const string WorldInteractionHovered = "greg.WORLD.InteractionHovered";
public const string WorldTriggerEntered = "greg.WORLD.TriggerEntered";
public const string WorldCollisionEntered = "greg.WORLD.CollisionEntered";

// EMPLOYEE/GAMEPLAY
public const string EmployeeDispatchQueued = "greg.EMPLOYEE.DispatchQueued";
public const string EmployeeDispatchProcessed = "greg.EMPLOYEE.DispatchProcessed";
public const string EmployeeAnimationStateChanged = "greg.EMPLOYEE.AnimationStateChanged";
public const string GameplayIncidentTriggered = "greg.GAMEPLAY.IncidentTriggered";
```

### 12.6 Required payload contract for converted signals

Every emitted signal from the snapshot conversion must provide:

- `SourceAsm`
- `SourceType`
- `SourceMethod`
- `EntityId` (if applicable)
- `EventKind` (`lifecycle|interaction|collision|input|save|load|network|economy|ui`)
- `TimestampUtc`

Optional domain fields:

- `CustomerId`, `ServerId`, `RackId`, `SwitchId`, `CableId`, `PlayerValue`, `Reason`, `State`, `Delta`, `RawArgsJson`

### 12.7 Implementation checklist for “all signals included”

- [ ] Import diagnostics files from `gregCore/Diagnostics` into the hook-candidate processing pipeline.
- [ ] Deduplicate by `SourceType + SourceMethod` and classify into families.
- [ ] Map each family to canonical `greg.*` constants (existing or proposed).
- [ ] Register missing constants in `GregNativeEventHooks`.
- [ ] Emit via harmony/bridge and verify with integration tests.
- [ ] Publish generated catalog delta (`runtime trigger` -> `greg.*`) into wiki reference pages.
