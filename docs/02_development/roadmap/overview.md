---
title: 📋 Roadmap to 100% Coverage
sidebar_label: Overview
description: Strategischer Plan zur vollständigen Abdeckung aller Spielsysteme.
---

# 📋 Roadmap to 100% Coverage

Dieses Dokument zeigt den aktuellen Fortschritt des `gregCore` SDKs im Vergleich zu den internen Systemen des Spiels (IL2CPP).

| Phase | Bereich | Status | Ziel |
| :--- | :--- | :--- | :--- |
| **Phase 1-4** | Kern-Systeme | ✅ READY | EventBus, Registries, JADE Style, Engine-Bridges. |
| **Phase 5** | Economy & Data | 🚧 WIP | SaveSystem, Finanzen, Lokalisierung. |
| **Phase 6** | Deep Hardware & UI | 📅 GEPLANT | SFP-Details, Patch-Panels, Audio, Erweiterte UI. |
| **Phase 7** | Simulation | 📅 GEPLANT | HR-System, Steam-Integration, Objectives. |
| **Phase 8** | Unity API Integration | 🔄 LAUFEND | Abgleich mit Unity Scripting API, Bridge-Implementierung für Standard-Module. |

:::info 🔄 Laufende Updates
Diese Roadmap ist ein **lebendes Dokument**. Da *Data Center* durch die Spieleentwickler kontinuierlich mit neuen Features und Systemen erweitert wird, passen wir diese Liste laufend an. Unser Ziel ist es, mit der Entwicklung des Spiels Schritt zu halten und neue Funktionen zeitnah im `gregCore` SDK zur Verfügung zu stellen.
:::

## Aktueller Coverage-Grad
Wir haben aktuell ca. **65%** der für Modder relevanten IL2CPP-Klassen durch typsichere Bridges abstrahiert.

:::info
Wenn Sie ein spezifisches System benötigen, das noch nicht gelistet ist, öffnen Sie bitte ein Issue im [gregCore Repository](https://github.com/mleem97/gregCore).
:::
