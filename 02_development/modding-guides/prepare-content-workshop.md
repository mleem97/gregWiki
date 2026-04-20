---
title: Prepare your Content to be uploaded to the Workshop
sidebar_label: Prepare for Workshop
description: Packaging and metadata requirements for uploading gregFramework-compatible content to Steam Workshop.
---

This page defines a practical package format for publishing content to **Steam Workshop** while staying compatible with gregFramework runtime loading.

## Layer ownership

- **Mod Layer:** Content files, assets, package metadata, balancing values
- **Plugin Layer:** Optional adapters for richer previews and diagnostics
- **GregFramework Core SDK layer:** Registry contracts, hook dispatch, compatibility rules

## Goal

Use one package structure that:

1. Works for Steam Workshop distribution.
2. Can be consumed by the current ModManager/Workshop flow.
3. Stays forward-compatible with `greg.*` typed registries.

## Recommended package layout

```text
my-content-pack/
  manifest.json
  README.md
  icon.png
  CHANGELOG.md
  Content/
    Servers/*.json
    Switches/*.json
    Customers/*.json
    Employees/*.json
    NetworkItems/*.json
    Furniture/*.json
    Items/*.json
  Models/
    Bundles/*
    Textures/*
  Localization/
    en.json
```

Notes:

- Keep category folders stable because loader automation depends on deterministic paths.
- Use lowercase, dot-separated IDs for content objects (example: `myteam.edge-switch-24p`).
- Keep package root clean: one `manifest.json`, one optional `README.md`, one icon.

## Required `manifest.json` fields (Workshop baseline)

```json
{
  "packageId": "myteam.datacenter.contentpack",
  "displayName": "My Team Content Pack",
  "version": "1.0.0",
  "author": "My Team",
  "description": "Adds custom servers, switches and furniture.",
  "entryType": "content-pack",
  "targetGame": "Data Center",
  "targetFramework": "gregCore",
  "minFrameworkVersion": "0.1.0",
  "content": {
    "servers": ["Content/Servers"],
    "switches": ["Content/Switches"],
    "customers": ["Content/Customers"],
    "employees": ["Content/Employees"],
    "networkItems": ["Content/NetworkItems"],
    "furniture": ["Content/Furniture"],
    "items": ["Content/Items"]
  },
  "models": {
    "bundlesPath": "Models/Bundles",
    "texturesPath": "Models/Textures"
  }
}
```

## Workshop publishing checklist

1. Validate JSON schemas and cross-references.
2. Ensure all IDs are unique inside the package.
3. Ensure no absolute local paths exist in any file.
4. Verify icon and README are present.
5. Test install through current ModManager/Workshop path.
6. Verify runtime load in-game (`greg.*` hooks + registries).

## How mod page content is controlled

For Workshop, your visible metadata is driven by the Workshop item and your package files:

- Workshop listing text/images are managed in Steam.
- Runtime behavior is controlled by the packaged `manifest.json` + `Content/*` files.
- ModManager can still install/update the same package payload if it follows this structure.

## Compatibility contract

To stay compatible with current and upcoming tooling:

- Treat Workshop package format as the baseline contract.
- Avoid custom folder names for core content categories.
- Use semver in `version` and `minFrameworkVersion`.
- Keep content data independent from distribution channel.

For gregModstore-specific metadata extensions, continue with:

- [Prepare your Content to be uploaded to the gregModstore](/02_development/modding-guides/prepare-content-gregmodstore)
