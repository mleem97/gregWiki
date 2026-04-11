---
title: "Phase 5: Economy & Data"
sidebar_label: Phase 5 (WIP)
description: Dokumentation für geplante Economy und Data-Bridges.
---

:::caution WIP
This document contains placeholders (TODOs) and is currently under development.
:::

# Phase 5: Economy & Data (WIP)

In dieser Phase konzentrieren wir uns auf den Zugriff auf die persistenten Daten des Spiels.

## Geplante Systeme

### 1. SaveSystem Bridge
Ermöglicht Mods das Lesen und Schreiben von Daten in den globalen Spielstand.
- **TODO**: Implementierung von `GregSaveService`.
- **Target**: `Il2Cpp.SaveSystem`.

### 2. Finanzen & BalanceSheet
Direkter Zugriff auf die Wirtschaftssimulation.
- **TODO**: API für Einnahmen/Ausgaben-Statistiken.
- **Target**: `Il2Cpp.BalanceSheet`.

### 3. Localisation Service
Nutzen des internen Übersetzungssystems.
- **TODO**: Methode `GregLocalisation.GetTerm(string key)`.
- **Target**: `Il2Cpp.Localisation`.
