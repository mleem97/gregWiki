# Development Guide

## Local Setup

### Prerequisites

1. **.NET 6 SDK**
   - Download from https://dotnet.microsoft.com/download/dotnet/6.0
   - Verify: `dotnet --version`

2. **MelonLoader Installed Game**
   - Default path configured in `Directory.Build.props`
   - Override with: `-p:MELON_BASE_DIR="C:\path\to\game\MelonLoader"`

3. **Reference Assemblies**
   - Game assemblies must exist in `lib/references/`
   - Required: MelonLoader.dll, 0Harmony.dll, Il2CppInterop.Runtime.dll
   - Required: Il2Cppmscorlib.dll, Assembly-CSharp.dll, Unity*.dll

### Building

```powershell
# Debug build
./build.ps1

# Release build
./build.ps1 -Configuration Release
```

Output location: `bin/Debug/net6.0/` or `bin/Release/net6.0/`

---
*Migrated from GameFramework/DEVELOPMENT.md*