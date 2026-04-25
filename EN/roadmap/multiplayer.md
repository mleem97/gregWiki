Title: Multiplayer Roadmap & Design
Path: /roadmap/multiplayer
Type: Internal / Advanced
Audience: framework developer, advanced contributor, maintainer
Summary: Strategic roadmap and technical design document for adding co-op multiplayer to Data Center via gregCore.
Suggested Tags: roadmap, multiplayer, design, architecture, steam-p2p, rust
Related Pages: /roadmap/index, /getting-started/architecture
Split Recommendation: Keep as one page

# Multiplayer Roadmap & Design Document

**Status: PHASE 1 — IN PROGRESS**

This document tracks the strategic and technical plan for implementing co-op multiplayer in *Data Center* using the **gregCore** framework.

---

## Design Decisions

| Decision | Choice | Rationale |
| :--- | :--- | :--- |
| **Multiplayer Type** | Co-op Shared World | Players share a single data center and build together. |
| **Architecture** | Host-Client (Listen) | Host is the source of truth. No dedicated server required. |
| **Transport Layer** | Steam P2P Sockets | Native NAT traversal and encryption via Steamworks.NET. |
| **Sync Strategy** | Action + State Sync | Discrete actions (reliable) + periodic state (unreliable). |
| **Remote Models** | Technician Prefabs | Reuses existing NPC models as temporary player avatars. |

---

## Target Architecture

The implementation uses a **Hybrid Model**:
- **Rust (`dc_multiplayer`)**: Handles complex protocol logic, Lobby management, and binary serialization (serde).
- **C# (`MultiplayerBridge.cs`)**: Acts as a thin relay, intercepting game actions via Harmony and spawning remote player visuals.

### Implementation Phases

### Phase 1: "Ghost Friend" (MVP) 👻
**Goal**: Establish end-to-end P2P connectivity and sync player positions.
- [x] Scaffolding and Binary Protocol.
- [x] Steam Identity and P2P Integration.
- [x] Basic Remote Player Rendering.
- [ ] Runtime Testing and Lobby UI.

### Phase 2: "Spectator+" 👁️
**Goal**: Sync the world state from host to client in real-time.
- [ ] State Snapshot System (Money, Time, XP).
- [ ] World-Object Delta Sync (Servers, Cables).
- [ ] Remote Object Spawning logic.

### Phase 3: "Real Co-op" 🤝
**Goal**: Allow clients to interact with the world with host validation.
- [ ] Action Request/Response Protocol.
- [ ] Host-side Action Validation.
- [ ] Interaction Blocking (Object locking).

---

## Technical Details

### Action Sync
Actions are reliable and ordered messages sent when a player performs a discrete task (e.g., placing a rack or pulling a cable). The host validates the action, executes it locally, and broadcasts the result.

### State Sync
Continuous data is pushed periodically (20Hz for positions, 1Hz for economy) and interpolated on the client side to ensure smooth movement and consistent values.

---

## Risk Assessment
- **Steam Interface Drift**: Version strings for `steam_api64.dll` must be verified at runtime.
- **IL2CPP Spawning**: Spawning objects on the client side requires careful handling of internal game UIDs to prevent desyncs.
- **Save Integrity**: Multiplayer state must remain strictly separate from vanilla save files to prevent data corruption.
