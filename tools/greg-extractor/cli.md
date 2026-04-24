Title: gregExtractor CLI Reference
Path: /tools/greg-extractor/cli
Type: Reference
Audience: mod developer, framework developer
Summary: Detailed reference for gregExtractor command-line interface commands and options.
Suggested Tags: cli, commands, extractor, automation
Related Pages: /tools/greg-extractor/index, /tools/greg-extractor/ui
Split Recommendation: Keep as one page

# gregExtractor CLI Reference

`gregExtractor` provides several core commands for managing hooks and scaffolding mods.

## Commands Overview

- **`extract`**: Extract and classify IL2CPP hooks.
- **`create`**: Generate a new mod scaffold.
- **`coverage`**: Analyze hook coverage between assemblies and source code.
- **`sync`**: Update framework target files based on hook diffs.

---

## `extract`

Extracts method signatures from the game assemblies and groups them.

```powershell
gregExtractor extract
gregExtractor extract --path "C:\Path\To\Data Center\MelonLoader\Il2CppAssemblies"
```

**Output Files**:
- `game_hooks.json`: The primary database of discovered hooks.
- `unknown_hooks.json`: Methods that could not be automatically classified.

---

## `create`

Creates a ready-to-use mod project based on templates.

```powershell
gregExtractor create MyEconomyMod --type harmonyPatch --category Economy
gregExtractor create MyServerMod --type customServer --path "C:\MyMods"
```

**Supported Types**:
- `harmonyPatch`
- `customServer`
- `customUI`
- `customWorld`
- `customFurniture`
- `customNPC`

---

## `coverage`

Generates reports showing which hooks are implemented and which are missing.

```powershell
gregExtractor coverage
gregExtractor coverage --path "C:\Path\To\Assemblies" --sources ".\Hooks;.\framework" --out ".\coverage_report" --open
```

**Output Files**:
- `coverage_report.json`
- `coverage_report.md`

---

## `sync`

Synchronizes your framework source code with the latest hook definitions.

```powershell
gregExtractor sync --source ".\gregCore\src" --dry-run
gregExtractor sync --source ".\gregCore\src" --git --force
```

### Options
- `--source <DIR>`: The target directory for framework source files.
- `--dry-run`: Preview changes without modifying files.
- `--git`: Append `git diff --stat` output after synchronization.
- `--force`: Skip confirmation dialogs.

### Synchronization Workflow
1. Load existing hooks from `game_hooks.json`.
2. Perform a fresh extraction against IL2CPP assemblies.
3. Calculate the diff (Added, Changed, Removed).
4. Update framework source files (utilizing backup and marker logic).
5. Optionally update `game_hooks.json` with the new state.

---

## Usage Notes

- If **Auto-Detect** fails to find the game path, use the `--path` option explicitly.
- The `sync` command is idempotent; it uses markers to safely insert code into existing files.
