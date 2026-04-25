# Release Process

## Versioning Policy

- Format: `Major.Minor.Patch-suffix`
- Example: `1.0.0-pre`, `1.0.1`, `2.0.0`

### Version Progression

- **Major**: Breaking changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes

### Suffixes

- `-pre`: Pre-release
- `-beta`: Beta release
- No suffix: Stable release

## Release Steps

1. **Update Version**
   - Bump in `gregCore.csproj`
   - Update `VERSION` file

2. **Build and Test**
   ```powershell
   ./build.ps1 -Configuration Release
   dotnet test
   ```

3. **Update Changelog**
   - Add entry to `CHANGELOG.md`
   - Document changes

4. **Create Release**
   - Tag: `v{version}`
   - Create GitHub release
   - Upload artifacts

## Changelog Expectations

Update `CHANGELOG.md` for every release with:
- Date
- Version
- Changes (added/fixed/changed/removed)
- Breaking changes noted

## Release Artifacts

Expected outputs:
- `bin/Release/net6.0/gregCore.dll` - Main mod DLL
- Source archive (optional)
- NuGet package (future)

## Deployment

Release DLL goes to game `Mods/` folder:
```
<Data Center>/Mods/gregCore.dll
```

---
*Migrated from GameFramework/RELEASING.md*