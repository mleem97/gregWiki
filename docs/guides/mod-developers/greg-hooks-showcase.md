---
title: Greg hooks showcase (sample mod)
sidebar_label: Greg hooks showcase
description: How to subscribe to greg.* hooks via GregShowcaseMod and gregFramework.Core APIs.
---

# Greg hooks showcase

The repository includes **GregShowcaseMod** (`mods/GregShowcaseMod/` in **gregFramework**): a minimal MelonLoader mod that logs one representative event per **GregDomain**, using only public APIs:

- `GregEventDispatcher.On` / `UnregisterAll`
- `GregHookName.Create(GregDomain.*, "Action")`
- `GregPayload.Get` / `GregPayload.Dump` for anonymous payloads

## Canonical hook strings

Runtime hook names look like `greg.<DOMAIN>.<Action>`, e.g. `greg.PLAYER.MoneyChanged`. Build the string with `GregHookName.Create` — do not concatenate raw strings in mods.

## Registry file

`greg_hooks.json` (shipped beside `FrikaModdingFramework.dll`) is generated from `MergedCode.md` by:

```bash
pwsh gregCore/scripts/Generate-GregHooksFromMergedCode.ps1
```

Options are passed through to `parse_merged_code.py` (e.g. `--no-hot-loops` to omit `Update`/`FixedUpdate` from the catalog). The dump is large; regeneration can take several minutes.

## Sample subscriptions

See `mods/GregShowcaseMod/Handlers/*.cs` — each file registers one hook for its domain (except **POWER**, where `GregPowerHooks` is still empty until Il2Cpp types are classified).

## Configuration

Copy `mods/GregShowcaseMod/modconfig.example.json` to `{Game}/Mods/GregShowcaseMod/modconfig.json` to toggle per-domain logging.

## See also

- [Mod developers (hub)](./overview)
- [System architecture principles](/wiki/meta/system-architecture-principles)
- [Framework](/wiki/mods/framework) — runtime overview
