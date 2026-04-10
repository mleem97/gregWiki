---
id: modding-language-requirement
title: Modding-Sprache (nur C#)
slug: /reference/modding-language-requirement
description: Verpflichtende Sprache für Mods, MelonLoader-Plugins und Extensions — ausschließlich C#.
---

# Modding-Sprache (nur C#)

## Vorgabe

**Die gesamte Logik von Mods, MelonLoader-Plugins und Framework-Extensions muss in C# implementiert sein.**

Das gilt für alles, was als **`gregMod.*`**, **`gregExt.*`** oder **`FFM.Plugin.*`** / **`FMF.*`** über MelonLoader / IL2CPP geladen wird: Gameplay, Harmony-Patches, UI, Netzwerk-Hooks und Datenverarbeitung liegen in **C#** (üblicherweise **.NET** passend zur MelonLoader-Version).

## Begründung

- **MelonLoader** lädt verwaltete **.NET**-Assemblies; Harmony und Interop sind auf C# ausgelegt.
- Eine Sprache vereinfacht Review, Debugging und CI für Contributor.

## Was hiervon *nicht* betroffen ist

- Der **Framework-Kern** (`gregCore`) kann weiterhin **Nicht-C#**-Bestandteile enthalten (z. B. **Rust**-FFI unter `gregCore/bridges/gregSta.RustBridge/`, Build-Skripte, Tools). Das ersetzt **nicht** Mod-/Plugin-/Extension-Logik außerhalb von C#.
- **Dokumentation**, **Konfiguration** (JSON/YAML) und **Assets** zählen hier nicht als „Logik“.
- **gregStore**, **gregWiki** und andere Nicht-In-Game-Stacks dürfen andere Sprachen nutzen.

## Siehe auch

- [Framework](/wiki/mods/framework)
- [FMF Hook-Naming](/wiki/reference/fmf-hook-naming)
