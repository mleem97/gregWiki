Title: gregExtractor Known Issues
Path: /tools/greg-extractor/known-issues
Type: Troubleshooting
Audience: mod developer, framework developer
Summary: Common issues, error codes, and troubleshooting steps for gregExtractor.
Suggested Tags: troubleshooting, errors, setup, help
Related Pages: /tools/greg-extractor/index
Split Recommendation: Keep as one page

# Known Issues & Troubleshooting

## NU1900 Warning during Restore/Build

**Symptom**:
Warning `NU1900` (Failed to retrieve package security data) appears during `dotnet restore`.

**Resolution**:
This warning is currently **non-blocking** for local development. It typically indicates temporary network issues with the NuGet feed. You can safely ignore it if the build succeeds:

```powershell
dotnet restore
dotnet build gregExtractor.csproj
```

---

## Auto-Detect fails to find IL2CPP path

**Symptom**:
The tool cannot locate `Assembly-CSharp.dll` automatically.

**Resolution**:
1. Ensure you have started the game at least once with **MelonLoader** installed.
2. Verify the existence of the `MelonLoader/Il2CppAssemblies` directory in your game folder.
3. Manually specify the path using the `--path` option in the CLI or the **Browse** button in the GUI Settings.

---

## Empty or unexpected hook groups

**Symptom**:
Extraction completes, but hooks are misclassified or all listed as "Uncategorized".

**Resolution**:
1. Verify that `hook_groups.json` in the tool's root directory is valid JSON.
2. Re-run the extraction after a game update, as method signatures may have changed.
3. Check `unknown_hooks.json` for methods that require manual classification in `hook_groups.json`.

---

## Sync command reports "No Changes"

**Symptom**:
The `sync` command executes but does not modify framework source files.

**Resolution**:
1. Ensure your `game_hooks.json` file is up-to-date by running `extract` first.
2. Verify that the `--source` path points correctly to your `gregCore/src` directory.
3. Check if the auto-detected IL2CPP path is valid and accessible.
