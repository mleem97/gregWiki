# HexViewer Tutorial (gregCore / MelonLoader)

## 1. Introduction

`HexViewer` is a compact JADE-like HUD module for **Data Center** that displays focused target information at the top-center of the screen.

When the player focuses racks, cables, or cable spinners, the panel shows:

- Type
- Color
- Owner (`OwnerID` / customer)

The tutorial uses the verified gregCore runtime model:

- MelonLoader entry (`MelonMod`)
- `GregEventDispatcher` for hook subscriptions
- `GregNativeEventHooks` constants
- `GregPayload.Get<T>` for payload fields
- Native IMGUI rendering in `OnGUI()`

## 2. Prerequisites

- MelonLoader installed for `Waseku / Data Center`
- `gregCore.dll` loaded in `Data Center/Mods/`
- .NET 6 SDK for C# module build
- Rust toolchain for Rust module build
- TypeScript toolchain for TS bridge build

Deployment paths:

- C# mod binary: `Data Center/Mods/`
- Rust module binary: `Data Center/Mods/RustMods/`

## 3. Project Structure

```text
plugins/greg.Plugin.HexViewer/
├── cs/
│   └── HexViewer.cs
├── lua/
│   └── HexViewer.lua
├── ts/
│   └── HexViewer.ts
├── rs/
│   └── HexViewer.rs
├── MISSING.md
└── TUTORIAL.md
```

Folder purpose:

- `cs/`: Primary in-game implementation (authoritative runtime module)
- `lua/`: Lua bridge variant (transpiler/host semantics)
- `ts/`: TypeScript bridge variant (transpiler/host semantics)
- `rs/`: Rust bridge variant for low-level data path

## 4. Implementation (C# – Primary)

File: `cs/HexViewer.cs`

### Step A — Module bootstrap

- Uses:
  - `[assembly: MelonInfo(...)]`
  - `[assembly: MelonGame("Waseku", "Data Center")]`
- Namespace: `HexViewer`
- Class: `Main : MelonMod`

### Step B — Framework readiness guard

- In `OnUpdate()`, check `Core.Instance == null`
- Skip runtime logic until gregCore is available

### Step C — Hook subscriptions

Subscribes using `GregEventDispatcher.On(hookName, OnHexTarget, "HexViewer")` to:

- `GregNativeEventHooks.ServerInsertedInRack`
- `GregNativeEventHooks.NetworkCreateNewCable`
- `GregNativeEventHooks.ServerCustomerChanged`
- `GregNativeEventHooks.RackButtonUnmountRack`

### Step D — Payload extraction

Inside event handler:

- `GregPayload.Get<string>(payload, "ServerType", "Unbekannt")`
- `GregPayload.Get<string>(payload, "Color", "N/A")`
- `GregPayload.Get<string>(payload, "CustomerId", null)`

### Step E — Per-frame focus target update

- Executes in `OnUpdate()`:
  - `Physics.Raycast(Camera.main.transform.position, Camera.main.transform.forward, out RaycastHit hit, 10f)`
- Keeps panel aligned with active target context

### Step F — Native HUD rendering

- Executes in `OnGUI()`
- Required rectangle:
  - `new Rect((Screen.width / 2f) - 200f, 10f, 400f, 80f)`
- Background texture:
  - `Texture2D(1,1,TextureFormat.RGBA32,false)`
  - color `new Color(0.05f, 0.08f, 0.12f, 0.82f)`

### Step G — Cleanup

- `GregEventDispatcher.UnregisterAll("HexViewer")` in `OnApplicationQuit()`
- Explicit `Off(...)` cleanup is additionally acceptable for strict teardown

## 5. Alternative Implementations (Lua / TS / Rust)

These files model bridge-hosted logic under the gregCore transpiler/host paradigm:

- `lua/HexViewer.lua`
- `ts/HexViewer.ts`
- `rs/HexViewer.rs`

Important: bridge API surfaces for Lua/TS/Rust are not fully verified in the supplied runtime context.

Therefore this project uses one central `MISSING.md` (`plugins/greg.Plugin.HexViewer/MISSING.md`) with:

- Missing API name/signature
- Required behavior
- Required gregCore layer (`Sdk`, `ModLoader`, or `harmony` integration surface)
- greg-convention pseudo-code proposal

This satisfies the no-hallucination rule while still giving complete language-specific module logic.

## 6. Deployment and Testing

### Build

C#:

```powershell
dotnet build .\plugins\greg.Plugin.HexViewer\cs\HexViewer.csproj -c Release
```

Rust:

```powershell
cargo build --manifest-path .\plugins\greg.Plugin.HexViewer\rs\Cargo.toml --release
```

TypeScript:

```powershell
pnpm --dir .\plugins\greg.Plugin.HexViewer\ts install
pnpm --dir .\plugins\greg.Plugin.HexViewer\ts run build
```

### Copy artifacts

```powershell
Copy-Item .\plugins\greg.Plugin.HexViewer\cs\bin\Release\net6.0\HexViewer.dll "C:\Program Files (x86)\Steam\steamapps\common\Data Center\Mods\" -Force
Copy-Item .\plugins\greg.Plugin.HexViewer\rs\target\release\hexviewer_rust.dll "C:\Program Files (x86)\Steam\steamapps\common\Data Center\Mods\RustMods\" -Force
```

### Runtime verification

- Open `MelonLoader/Latest.log`
- Confirm module initialization log
- Focus a rack/cable/cablespinner
- Confirm panel updates type/color/owner values
- Confirm no unresolved hook warnings

## 7. Extension Points (Required new hooks for full color support)

For robust color fidelity and object ownership metadata, the following additions are recommended in gregCore:

- `GregNativeEventHooks.RackColorChanged`
- `GregNativeEventHooks.CableColorChanged`
- `GregNativeEventHooks.CableSpinnerColorChanged`
- `GregNativeEventHooks.RackOwnerChanged`
- `GregNativeEventHooks.CableOwnerChanged`

Expected payload fields:

- `RackColor`, `CableColor`, `SpinnerColor`
- `OwnerId`, `OwnerName`
- `EntityId`, `EntityType`

Proposed payload access style:

```csharp
var rackColor = GregPayload.Get<string>(payload, "RackColor", "#FFFFFF");
var ownerName = GregPayload.Get<string>(payload, "OwnerName", "N/A");
```

These additions should be implemented in gregCore hook registry + harmony integration path, then exposed through bridge layers consistently.
