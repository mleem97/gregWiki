---
title: Prepare your Content to be uploaded to the gregModstore
sidebar_label: Prepare for gregModstore
description: Packaging and extended metadata requirements for gregModstore, aligned with Steam Workshop baseline.
---

This page defines the **gregModstore package contract**.

The core package should remain Workshop-compatible, but gregModstore can use additional metadata for richer discovery, dependency handling, and automated validation.

## Layer ownership

- **Mod Layer:** Package payload, content JSON, assets, localized descriptions
- **Plugin Layer:** Store adapters, validation reports, richer preview support
- **GregFramework Core SDK layer:** Runtime compatibility checks and registry consumption

## Compatibility strategy

Use a two-layer metadata model:

1. **Workshop baseline metadata** (portable everywhere).
2. **gregModstore extension metadata** (optional, non-breaking).

If extension metadata is missing, package must still be installable as a normal Workshop-compatible content pack.

## Package layout (recommended)

```text
my-content-pack/
  manifest.json
  modstore.meta.json
  README.md
  icon.png
  screenshots/
  Content/
  Models/
  Localization/
```

## `manifest.json` (portable baseline)

Keep the same baseline schema as Workshop packaging:

- identity (`packageId`, `displayName`, `version`, `author`)
- compatibility (`targetFramework`, `minFrameworkVersion`)
- payload paths (`content`, `models`)

## `modstore.meta.json` (gregModstore extension)

```json
{
  "storeVersion": 1,
  "packageId": "myteam.datacenter.contentpack",
  "channels": ["stable"],
  "tags": ["servers", "switches", "visuals"],
  "dependencies": [
    {
      "packageId": "gregframework.core",
      "versionRange": ">=0.1.0"
    }
  ],
  "conflicts": ["otherteam.legacy-switch-pack"],
  "capabilities": [
    "content.servers",
    "content.switches",
    "models.overrides"
  ],
  "entrypoints": {
    "modManager": {
      "installHint": "Use automatic dependency resolution"
    }
  },
  "presentation": {
    "shortDescription": "Adds high-density network equipment.",
    "longDescriptionFile": "README.md",
    "thumbnail": "icon.png",
    "screenshots": [
      "screenshots/01.png",
      "screenshots/02.png"
    ]
  }
}
```

## What gregModstore adds beyond Workshop

- Dependency graph and version ranges
- Conflict declarations
- Capability-based filtering (for players and developers)
- Release channel awareness (`stable`, `beta`, `nightly`)
- Richer searchable metadata and presentation controls

## How page/content data is controlled

The mod page and install behavior can be controlled by package metadata:

- **Workshop mode:** Steam listing + portable `manifest.json`
- **gregModstore mode:** portable `manifest.json` + `modstore.meta.json`
- **ModManager mode:** same package can be installed via ModManager or Workshop flow

This ensures one build artifact can serve all distribution paths with minimal duplication.

## Validation checklist (gregModstore)

1. Baseline `manifest.json` is valid and complete.
2. `modstore.meta.json` references same `packageId` and compatible version.
3. Dependencies/conflicts are resolvable and do not deadlock installs.
4. Capability tags match actual package payload.
5. Package installs and loads via ModManager and direct Workshop-compatible path.

## Recommended publication flow

1. Build package once.
2. Validate baseline + modstore extension metadata.
3. Publish to gregModstore.
4. Optionally mirror the same payload to Steam Workshop.

For baseline-only packaging details, see:

- [Prepare your Content to be uploaded to the Workshop](/wiki/development/modding-guides/prepare-content-workshop)
