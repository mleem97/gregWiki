---
title: Mod Security Policy (WIP)
sidebar_label: Mod Security Policy (WIP)
description: Security requirements for community mods, plugin submissions, and binary assets.
---

:::caution WIP
Policy draft. Enforce in CI once signing and verification pipelines are finalized.
:::

## Submission Requirements

- Public source repository required for review.
- Versioned release artifact with checksum.
- Dependency manifest must list all bundled DLLs/native binaries.
- No hidden network telemetry or credential collection logic.

## Verification Pipeline

1. Static scanning (rules + signatures).
2. Dependency provenance check.
3. Runtime behavior check in isolated test profile.
4. Manual reviewer approval.

## Signing and Trust

- Target state: signed release manifests and signed binary bundles.
- Unsigned binaries are marked **untrusted** in compatibility docs.
- Native bridge binaries require elevated scrutiny and explicit source mapping.

## Security Classification

- `Trusted`: source + reproducible build + passed scanning.
- `Review Required`: source available, incomplete provenance.
- `Blocked`: confirmed malicious behavior or unverifiable binary provenance.

## Incident Handling

- Immediate delisting from recommended compatibility pages.
- Public advisory in release notes.
- Hash blacklist update for known malicious binaries.
