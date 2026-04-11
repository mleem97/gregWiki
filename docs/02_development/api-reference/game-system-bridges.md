---
title: Game System Bridges (IL2CPP)
sidebar_label: Game System Bridges
description: typsichere C# Bridges für interne IL2CPP Spielsysteme (GameManager, Shop, Technicians etc.).
---

# Game System Bridges (IL2CPP)

Seit `v1.0.0-pre.5` bietet `gregCore` typsichere Abstraktionen für die wichtigsten internen Spielsysteme. Diese ermöglichen es, komplexe Spiellogik zu steuern, ohne direkt mit IL2CPP-Objekten hantieren zu müssen.

## Verfügbare Services (gregSdk.Services)

### 1. GregGameManagerService
Steuerung des globalen Spielzustands und der UI-Layer.
- `CloseAnyCanvas(bool isCustomerChoice)`: Schließt alle offenen Menüs.
- `SetAutoSaveEnabled(bool)`: Aktiviert/Deaktiviert das Speichersystem.
- `ShuffleAvailableCustomers()`: Erneuert die Liste der verfügbaren Kundenaufträge.

### 2. GregPlayerManagerService
Interaktion mit dem Spieler-Avatar und dem Cursor.
- `ConfineCursorForUI()`: Sperrt den Cursor für Menü-Interaktionen.
- `StopPlayerMovement()`: Hält den Spieler sofort an.

### 3. GregShopService
Vollständige Kontrolle über das Einkaufsmenü und physische Pakete.
- `OpenColorPicker()`: Öffnet das Farbwahl-Menü für Hardware.
- `DestroyAllSpawnedItems()`: Entfernt alle noch nicht ausgepackten Shop-Items vom Boden.
- `FreeUpSpawnPoint(int)`: Gibt einen Lieferpunkt für neue Lieferungen frei.

### 4. GregSwitchConfigService
Direkter Zugriff auf das Switch-Konfigurationsmenü (OS).
- `OpenConfig(NetworkSwitch)`: Öffnet das Terminal für einen spezifischen Switch.
- `CreateLACP()`: Erstellt eine Link-Aggregation-Gruppe.

### 5. GregCustomerBaseService
Manipulation von Kundenanforderungen und Netzwerk-Routen.
- `UpdateCustomerServerCountAndSpeed(string name, int count, float speed)`: Setzt neue Zielwerte für einen Kunden.
- `AddAppPerformance(string name, int appId, float perf)`: Injiziert künstliche Performance-Daten.

### 6. GregTechnicianService
Management von NPC-Mitarbeitern.
- `SendTechnician(NetworkSwitch, Server)`: Schickt einen Techniker zu einem Ziel.
- `GetQueuedJobCount()`: Liefert die Anzahl der ausstehenden Reparaturen.

### 7. GregTimeService
Abfragen und Steuerung der In-Game Uhrzeit.
- `GetCurrentTimeInHours()`: Liefert die aktuelle Zeit (0-24h).
- `GetCurrentDay()`: Liefert den aktuellen Spieltag.

### 8. GregServerInteractionService
Direkte Manipulation von Server-Hardware.
- `PressPowerButton(string serverName)`: Schaltet einen Server ein oder aus.
- `RepairDevice(string serverName)`: Setzt den Hardware-Zustand sofort auf 100%.

### 9. GregRackInteractionService
Interaktion mit Rack-Strukturen.
- `IsPositionAvailable(string rackName, int index, int size)`: Prüft, ob ein HE-Slot frei ist.
- `ButtonUnmountRack(string rackName)`: Triggert das Abbauen des gesamten Racks.

## Best Practices
Alle Services nutzen intern `UnityEngine.Object.FindObjectOfType`. Rufen Sie diese Methoden daher **nicht** in jeder `Update()`-Schleife auf, sondern nur bei Bedarf (z.B. Event-getrieben), um die Performance zu schonen.
