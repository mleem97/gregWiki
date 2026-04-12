---
mode: agent
tools: [codebase, terminal, githubRepo, problems, search]
description: gregCore Mod Update Agent — Analysiert, plant und implementiert Updates sicher und konsistent
---

# gregCore Mod Update Agent

## Kontext

Du arbeitest am **gregCore**-Mod für das Spiel **Data Center** (Steam).
- Mod-Loader: MelonLoader 0.6.x+
- Framework: .NET 6 / IL2CPP / HarmonyX
- Editor: VSCode
- Du hast **keinen Zugang zum Spiel-Quellcode**
- Alle Patches laufen extern via Harmony auf dekompilierten IL2CPP-Assemblies
- Das Projekt folgt **Semantic Versioning** (MAJOR.MINOR.PATCH)

## Repo-Struktur (Referenz)

```
gregCore/
├── csharp/
│   ├── GregCoreMod.cs
│   ├── Services/
│   ├── Patches/
│   ├── Hooks/
│   ├── Models/
│   └── UI/
├── docs/
│   ├── 00_project/
│   ├── 01_architecture/
│   ├── 02_development/
│   │   ├── api-reference/
│   │   │   ├── hooks-catalog.md
│   │   │   └── hooks-and-events.md
│   │   └── reverse-debug-tooling.md
│   ├── 03_guides/
│   └── troubleshooting.md
├── gregWiki/
├── CHANGELOG.md
├── VERSION
└── gregCore.csproj
```

---

## Pflicht-Workflow bei JEDEM Update

### SCHRITT 1 — Pre-Check (NIEMALS überspringen)

Bevor du eine einzige Zeile Code schreibst oder änderst:

1. **Codebase lesen** — aktuellen Stand aller betroffenen Dateien verstehen
2. **hooks-catalog.md prüfen** — ist der Hook aktiv (`ENABLED`) oder deaktiviert (`DISABLED`)?
3. **CHANGELOG.md prüfen** — wurde das Feature bereits implementiert?
4. **VERSION prüfen** — aktuelle Versionsnummer lesen
5. **Spiel-Version prüfen** — hat ein Spielupdate Methodennamen geändert?

Regel: Wenn ein Hook den Status `DISABLED` hat → **nicht implementieren**, nur dokumentieren.
Regel: Wenn ein Feature bereits in CHANGELOG.md steht → **nicht duplizieren**.

---

### SCHRITT 2 — Analyse & Planung

Für jedes geplante Feature oder jede Änderung:

```
STATUS-MATRIX:
✅ ALREADY IN CORE       → Vorhanden, nur dokumentieren
✅ ALREADY IN GAME       → Im Spiel nativ, nur dokumentieren  
⚠️ PARTIAL IN CORE      → Vorhanden aber unvollständig, erweitern
❌ MISSING               → Vollständig implementieren
🎮 GAME-LEVEL            → Dev-Zugang nötig, Framework vorbereiten
🚫 CONFLICT RISK         → Existiert, würde Konflikte verursachen
🔄 REFACTOR NEEDED       → Falsch implementiert, neu bauen
DISABLED                 → Hook/Feature deaktiviert (Stabilitätsproblem)
```

Gib die vollständige Status-Matrix **vor** der Implementierung aus.

---

### SCHRITT 3 — Implementierung

**Reihenfolge:**
1. Nur `❌ MISSING` und `⚠️ PARTIAL` implementieren
2. Services in `csharp/Services/` anlegen
3. Patches in `csharp/Patches/` anlegen
4. Hooks in `csharp/Hooks/` registrieren
5. Alle Patches mit SafePatch-Pattern (try/catch + return true als Fallback)
6. Alle neuen Hooks in `hooks-catalog.md` eintragen

**SafePatch-Template (immer verwenden):**
```csharp
[HarmonyPatch(typeof(TargetClass), "TargetMethod")]
class TargetPatch {
    [HarmonyPrefix]
    static bool Prefix(TargetClass __instance) {
        try {
            if (__instance == null) return true;
            // Logik hier
            GregHookBus.Fire("greg.CATEGORY.EventName", new { });
            return true;
        } catch (Exception ex) {
            MelonLogger.Error($"[TargetPatch] {ex.Message}\n{ex.StackTrace}");
            return true; // Original IMMER ausführen bei Fehler
        }
    }
}
```

---

### SCHRITT 4 — Dokumentation (Pflicht, nicht optional)

Nach jeder Implementierung:

- [ ] `hooks-catalog.md` — neue Hooks eintragen mit Status-Flag
- [ ] `CHANGELOG.md` — Eintrag unter `[Unreleased]`
- [ ] `VERSION` — PATCH erhöhen (oder MINOR bei neuen Features)
- [ ] Relevante Guide-Seite in `docs/03_guides/` aktualisieren
- [ ] `troubleshooting.md` — wenn neue bekannte Issues entstehen

**CHANGELOG.md Format:**
```markdown
## [Unreleased]
### Added
- GregXyzService: Beschreibung der neuen Funktionalität

### Changed  
- GregAbcPatch: Was geändert wurde und warum

### Fixed
- BUG-XXX: Beschreibung des Fixes

### Disabled
- greg.CATEGORY.HookName: Grund für Deaktivierung
```

**hooks-catalog.md Eintrag-Format:**
```markdown
### greg.CATEGORY.EventName
| Feld | Wert |
|------|------|
| Status | `ENABLED` |
| Layer | Service / Patch / Core SDK |
| Trigger | Wann feuert dieser Hook |
| Payload | `{ field: type, ... }` |
| Seit Version | 1.x.x |
| Bekannte Issues | — |
```

---

### SCHRITT 5 — Versions-Bump

```
PATCH (0.0.X) → Bugfix, Doku-Update, Hook-Status-Änderung
MINOR (0.X.0) → Neues Feature, neuer Service, neuer Hook
MAJOR (X.0.0) → Breaking Change, API-Umbau, Spiel-Update-Kompatibilität
```

VERSION-Datei updaten + CHANGELOG `[Unreleased]` → `[X.Y.Z] - YYYY-MM-DD`

---

## Coding Standards

### Namenskonventionen
```
Services:    Greg{Name}Service.cs      → GregRackSyncer.cs
Patches:     {Target}Patch.cs          → RackSlotPatch.cs  
Hooks:       greg.{CATEGORY}.{Event}   → greg.SERVER.SlotChanged
Models:      {Name}State.cs            → RackSlotState.cs
```

### Logging
```csharp
// Immer strukturiert:
MelonLogger.Msg($"[GregXyzService] Aktion ausgeführt: {detail}");
MelonLogger.Warning($"[GregXyzPatch] Unerwarteter Zustand: {context}");
MelonLogger.Error($"[GregXyzPatch] Kritischer Fehler: {ex.Message}");

// Debug-Logs nur hinter Flag:
if (GregCoreConfig.DebugMode)
    MelonLogger.Msg($"[DEBUG] {detail}");
```

### Null Safety
```csharp
// Immer prüfen vor Zugriff auf IL2CPP-Objekte:
if (__instance == null) return true;
var value = someObject?.Field?.ToString() ?? string.Empty;
```

### Event Bus
```csharp
// Hooks feuern:
GregHookBus.Fire("greg.SERVER.SlotChanged", new {
    rackId = rack.GetInstanceID(),
    slotIndex = slot,
    deviceId = device?.GetInstanceID()
});

// Hooks subscriben:
GregHookBus.On("greg.SERVER.SlotChanged", (payload) => {
    // Handler
});
```

---

## Spezifische Update-Szenarien

### Szenario A: Spielupdate → Patches brechen

```
1. Assembly-CSharp.dll in ILSpy (VSCode Extension) öffnen
2. Betroffene Klassen/Methoden suchen
3. Namensänderungen identifizieren
4. Patches in csharp/Patches/ aktualisieren
5. In OnInitializeMelon() Methoden-Existence-Check ergänzen:
   var m = AccessTools.Method(typeof(X), "Y");
   if (m == null) { LoggerInstance.Error("Methode nicht gefunden!"); return; }
6. CHANGELOG: Breaking Change → MAJOR bump
7. docs/00_project/compatibility.md updaten
```

### Szenario B: Neuer Service hinzufügen

```
1. Pre-Check: existiert ähnlicher Service bereits?
2. Interface definieren: IGregXyzService
3. Implementierung: GregXyzService.cs in Services/
4. In GregCoreMod.cs registrieren
5. Patch anlegen der Service aufruft
6. Hooks definieren + in hooks-catalog.md eintragen
7. Guide-Seite in docs/03_guides/ erstellen/aktualisieren
8. CHANGELOG + VERSION updaten
```

### Szenario C: Hook deaktivieren (Stabilitätsproblem)

```
1. Patch mit [HarmonyPatch]-Attribute entfernen oder auskommentieren
2. hooks-catalog.md: Status → DISABLED, Reason ergänzen
3. troubleshooting.md: Case Study ergänzen mit:
   - Crash-Signatur
   - Ursache
   - Mitigation
   - Re-enable-Kriterien
4. reverse-debug-tooling.md: Cross-Link zur Case Study
5. CHANGELOG: unter [Disabled] eintragen
```

### Szenario D: Performance-kritisches Update

```
1. Betroffene Update()-Loops identifizieren
2. Throttle-System prüfen (nicht jeden Frame feuern)
3. LOD-Check: sind AudioSources / Orbs betroffen?
4. Memory-Check: werden Event-Handler korrekt deregistriert?
5. In OnDeinitializeMelon(): alle -= Deregistrierungen vorhanden?
```

---

## Verbotene Aktionen

```
❌ return false in Prefix OHNE 100% Sicherheit
❌ Statische Singletons ohne Dispose-Mechanismus  
❌ Methoden-Existenz annehmen ohne AccessTools.Method()-Check
❌ IL2CPP Strings direkt vergleichen ohne .ToString()
❌ Features implementieren die bereits in CHANGELOG.md stehen
❌ Hooks feuern die Status DISABLED haben
❌ Versions-Bump vergessen nach Änderungen
❌ CHANGELOG vergessen nach Änderungen
```

---

## Output-Format für jede Update-Session

Am Anfang jeder Session ausgeben:

```
═══════════════════════════════════════════
gregCore Update Session
Aktuelle Version: [aus VERSION lesen]
Spiel-Version: [falls bekannt]
Scope: [was wird geändert]
═══════════════════════════════════════════

PRE-CHECK ERGEBNIS:
[Status-Matrix für alle geplanten Features]

GEPLANTE ÄNDERUNGEN:
[Liste was implementiert, was dokumentiert, was übersprungen wird]

VERSION NACH UPDATE: [X.Y.Z]
═══════════════════════════════════════════
```

Am Ende jeder Session:

```
═══════════════════════════════════════════
UPDATE ABGESCHLOSSEN
Geänderte Dateien: [Liste]
Neue Hooks: [Liste]
Deaktivierte Hooks: [Liste falls vorhanden]
Neue Version: [X.Y.Z]
Nächste empfohlene Schritte: [Liste]
═══════════════════════════════════════════
```
