---
id: reference-data-files
title: Binary reference exports
sidebar_label: Reference data (.gz)
description: Large hook exports used by tooling (gzip archives under docs/reference).
---

# Binary reference exports

This section describes **large reference exports** used by hook analysis and build-time tooling. When present, they live next to this documentation tree under `docs/reference/` (as `.gz` files).

## Files (when committed)

- `assembly-hooks.txt.gz`
- `modder-hooks.ffm.txt.gz`

## Decompress locally

```bash
gzip -dk assembly-hooks.txt.gz
gzip -dk modder-hooks.ffm.txt.gz
```

```powershell
$inputPath = ".\\assembly-hooks.txt.gz"
$outputPath = ".\\assembly-hooks.txt"
$in = [System.IO.File]::OpenRead($inputPath)
$out = [System.IO.File]::Create($outputPath)
$gzip = New-Object System.IO.Compression.GzipStream($in, [System.IO.Compression.CompressionMode]::Decompress)
$gzip.CopyTo($out)
$gzip.Dispose(); $out.Dispose(); $in.Dispose()
```

## JSON hook registry (gregFramework)

The **gregFramework** repo also ships a **structured** hook list for IL2CPP Harmony patches:

- **Path:** `greg_hooks.json` at repo root (and a build-staged copy under `gregCore/framework/gregFramework/`).
- **Purpose:** canonical `greg.<DOMAIN>.<Action>` ids, `patchTarget`, `payloadSchema`, and optional `legacy` aliases for `GregCompatBridge`.
- **Docs:** [greg hooks registry (IL2CPP)](/wiki/reference/greg-hooks-registry).

This file is **generated** from Il2CppInterop sources; it is not one of the gzip archives above.

## Pipeline usage

- Prefer reading `.gz` directly from scripts when possible.
- Avoid committing extracted `.txt` blobs unless required for CI.
