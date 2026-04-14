---
title: Sound Environment Guide (WIP)
sidebar_label: Sound Environment Guide (WIP)
description: Audio environment architecture, registry design, performance constraints, and licensing requirements.
---

:::caution WIP
Do not ship third-party audio assets without explicit license clearance.
:::

## Proposed Core Audio Stack

- `GregAudioService`
- `GregSoundRegistry`
- `GregSpatialAudioService`
- `GregAudioLodService`
- `GregReverbZoneService`
- `GregDynamicSoundService`

## Planned Hooks

- `greg.AUDIO.SoundRegistered`
- `greg.AUDIO.SoundPlayed`
- `greg.AUDIO.SoundGroupMixed`
- `greg.AUDIO.ReverbZoneEntered`
- `greg.SERVER.AudioLoadChanged`
- `greg.SERVER.AudioEolDegraded`

## Performance Guardrails

- Limit active audio sources (default target: 32).
- Use distance-based LOD and grouped ambience sources.
- Allow full opt-out and per-sound-type toggles.

## Licensing and Credits

Before any release using community recordings:

- Clarify explicit usage license with source owner.
- Keep external audio under local-only workflow until approved.
- Add attribution and license section in `README_AUDIO_CREDITS.md`.
