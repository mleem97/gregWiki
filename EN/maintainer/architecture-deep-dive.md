# Architecture Deep Dive

## High-Level Structure

This section describes the internal structure of the `gregFramework` repository.

```
GameFramework/
├── src/                    # Mod source modules
│   ├── greg.*/             # Individual mod folders
│   └── Compatibility/       # Game compatibility layer
├── framework/            # Shared hook definitions
│   └── harmony/           # Harmony patch classes
├── lib/                  # Reference assemblies
│   ├── references/       # MelonLoader/game refs
│   └── MoonSharp/        # Bundled MoonSharp lib
├── tests/               # Test projects
├── build/               # Build scripts
└── docs/                # Documentation
```

## Project Responsibilities

### gregCore.csproj

- Main mod assembly targeting net6.0
- References MelonLoader, Harmony, Il2CppInterop
- Contains all src/ mod code
- Excludes tests/, plugins/, mods/

### tests/gregCore.Tests.csproj

- Unit and integration tests
- Uses xUnit or similar

### framework/harmony/

- Shared Harmony patch definitions
- Used by src/ mods for dependency injection pattern
- Central hook catalog

## Build Relationships

```
Solution
└── gregCore (main)
    └── gregCore.Tests (test dependency)
```

## Source of Truth

- **Game references**: `lib/references/` - do not modify
- **Hook definitions**: `framework/harmony/` - shared patches
- **Mod implementations**: `src/` - independent mod code

## Safe Extension Points

1. **Add new mod**: Create `src/greg.NewMod/` folder
2. **Add hooks**: Extend `framework/harmony/`
3. **Add tests**: Extend `tests/`
4. **Add build scripts**: Extend `build/`

## What Not to Modify

- Reference assemblies in `lib/references/`
- Core `.csproj` build settings (unless needed)
- Existing hook signatures (breaking change)

---
*Migrated from GameFramework/ARCHITECTURE.md*