---
id: content-creation-deployment
title: Deployment, Build, and Testing
sidebar_label: Deployment
slug: /development/content-creation/deployment
description: Build, package, copy, and validate custom content packs for Data Center using gregCore + MelonLoader.
---

**Layer ownership:** deployment is mainly **Mod Layer**, with diagnostics from **Core SDK layer**.

## Build process

```powershell
dotnet build .\CustomContentPack\Scripts\CustomContentPack.csproj -c Release
```

## Package layout

After build, expected artifacts:

```text
CustomContentPack/
├── CustomContentPack.dll
├── Content/
├── Models/
└── README.md
```

## Copy to game

```powershell
$game = "C:\Program Files (x86)\Steam\steamapps\common\Data Center"
New-Item -ItemType Directory -Force -Path "$game\Mods\CustomContentPack" | Out-Null
Copy-Item ".\CustomContentPack\bin\Release\net6.0\CustomContentPack.dll" "$game\Mods\" -Force
Copy-Item ".\CustomContentPack\Content" "$game\Mods\CustomContentPack\Content" -Recurse -Force
Copy-Item ".\CustomContentPack\Models" "$game\Mods\CustomContentPack\Models" -Recurse -Force
```

## Runtime test checklist

1. Start game and inspect `MelonLoader/Latest.log`.
2. Confirm content loader reports discovered definitions by category.
3. Trigger known gameplay flows (shop, placement, network linking, customer assignment).
4. Confirm no crash if model file is missing (fallback path required).

## Typical failure patterns

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Content ignored | Invalid JSON schema | Validate mandatory fields and IDs |
| Content loads but not purchasable | Missing registry integration | Add FrameworkExtension or local workaround hooks |
| Visual missing | Wrong model path | Verify relative paths and fallback mapping |
| Runtime error on load | Null payload assumptions | Add guard clauses in hook handlers |

## Missing capability handling

When deployment fails due to missing framework-level API, document locally in `Docs/MISSING.md` and keep `.gitignore` rules active:

```gitignore
**/MISSING.md
**/MISSING*.md
```

Next: [Combined tutorial](/wiki/development/content-creation/combined-tutorial).
