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
| Data-driven content files | Partially ready | Stable schemas + cross-reference validation |
| Runtime hook integration (`greg.*`) | Ready for mod-side workarounds | Formal content lifecycle hooks |
| Typed registries per content category | Missing | Core SDK interfaces + implementations |
| Model override pipeline | Missing official service | Versioned override registry + fallback executor |
| Shop/placement/native injection | Missing official path | Supported registration points into game systems |
| Testing standard | Partial/manual | Automated schema/runtime/compat tests |

## 2) Remaining work by content category

### 2.1 Custom Servers

- [ ] Define stable server schema contract (required + optional fields)
- [ ] Add Core SDK server registry interface
- [ ] Implement server registration lifecycle (load/validate/register/finalize)
- [ ] Add spawn/shop availability integration
- [ ] Add compatibility mapping to customers and server types
- [ ] Add migration/alias support for old IDs

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregContentRegistry.RegisterServerType(ServerDefinition definition);
GregContentRegistry.GetServerType(string serverTypeId);
```

### 2.2 Custom Switches

- [ ] Define switch schema (ports, throughput, supported SFP profiles, power, price)
- [ ] Add switch registry and query interface
- [ ] Integrate with network connect/disconnect hooks
- [ ] Validate switch–SFP–cable compatibility at runtime
- [ ] Integrate with buy/placement flows

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregContentRegistry.RegisterSwitchType(SwitchDefinition definition);
GregNetworkCompatibilityService.ValidateSwitchProfile(string switchId, string sfpId, string cableId);
```

### 2.3 Custom Customers

- [ ] Define customer schema (segment, requirements, budget, ownership rules)
- [ ] Add customer registry interface
- [ ] Add assignment policy evaluator
- [ ] Integrate with contract/customer-selection lifecycle
- [ ] Add save/load compatibility for customer-bound custom assets

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregContentRegistry.RegisterCustomer(CustomerDefinition definition);
GregCustomerPolicyEngine.Evaluate(CustomerDefinition customer, RuntimeContext context);
```

### 2.4 Custom Network Items (SFP + Cables)

- [ ] Define SFP schema (speed, tags, compatibility, price)
- [ ] Define cable schema (type, throughput, latency, color, durability)
- [ ] Add network item registry interfaces
- [ ] Add compatibility matrix resolver
- [ ] Add event hooks for insertion/removal mismatch handling

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregContentRegistry.RegisterSfpModule(SfpDefinition definition);
GregContentRegistry.RegisterCableType(CableDefinition definition);
```

### 2.5 Custom Server Types

- [ ] Define server type schema (tier, unlock requirements, classification)
- [ ] Add server-type registry
- [ ] Enforce server/server-type relation validation
- [ ] Integrate with progression and balancing rules

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregContentRegistry.RegisterServerCategory(ServerTypeDefinition definition);
```

### 2.6 Custom Employees

- [ ] Define employee schema (skills, costs, availability, specialization)
- [ ] Add employee-class registry
- [ ] Integrate hiring/firing workflow hooks
- [ ] Add optional model binding strategy for employee visuals

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregContentRegistry.RegisterEmployeeClass(EmployeeDefinition definition);
```

### 2.7 Custom Furniture / Usable Objects / Items

- [ ] Define placeable/usable item schema
- [ ] Add interaction effect model (data-driven)
- [ ] Add placement registry + validation rules
- [ ] Integrate with shop and place/remove lifecycle
- [ ] Add category taxonomy for future mod compatibility

**Placeholder signatures (not yet official):**

```csharp
// Placeholder only
GregPlacementRegistry.RegisterPlaceable(FurnitureDefinition definition);
GregContentRegistry.RegisterItem(ItemDefinition definition);
```

## 3) Model override system backlog

### 3.1 Required capabilities

- [ ] Define override manifest schema (`targetContentId`, `replacement`, `fallback`, `version`)
- [ ] Add official override registry in Plugin/Core layer
- [ ] Add deterministic load order (base assets -> overrides -> post-validate)
- [ ] Add strict fallback behavior for missing/invalid model paths
- [ ] Add conflict resolution strategy for multiple mods overriding same content

### 3.2 Versioning and compatibility

- [ ] Add `schemaVersion` + parser migration layer
- [ ] Maintain backward compatibility mapping for older override manifests
- [ ] Emit structured warnings on deprecated fields

### 3.3 Placeholder signatures

```csharp
// Placeholder only
GregModelOverrideService.ReplaceModel(string contentId, string modelPath, string fallbackPath);
GregModelOverrideService.ApplyManifest(ModelOverrideManifest manifest);
```

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
