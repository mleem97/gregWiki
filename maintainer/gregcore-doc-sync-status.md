# gregCore → gregWiki Sync-Status

## Ziel
Diese Seite hält fest, welche `gregCore`-relevanten Dokumente in `gregWiki` übernommen wurden und welche nur eingeschränkt übernommen werden konnten.

## Direkt synchronisierte Seiten (code-konsistent)
- `getting-started/framework-dependencies.md`
  - Paketversionen an `gregCore.csproj` angepasst (`Jint 4.8.0`, `pythonnet 3.0.5`)
  - Built-in-Policy und integrierte Kompatibilität ergänzt
- `getting-started/gregCore-getting-started.md`
  - Architekturhinweis zur integrierten `DataCenterModLoader`-Schicht ergänzt
  - Veraltete/verwaiste Next-Step-Links bereinigt
- `getting-started/architecture.md`
  - Bridge-Layer auf integrierte Kompatibilität aktualisiert
  - Migrationstatus für entfernte externe Legacy-Bäume ergänzt

## Quellenbasis
- `gregCore/README.md`
- `gregCore/docs/framework-dependencies.md`
- `gregCore/docs/getting-started.md`
- Validierung gegen `gregCore/src/Core/GregCoreMod.cs` und `gregCore/src/Compatibility/DataCenterModLoader/*`

## Nicht 1:1 übernommen
- Stark historisierte oder potenziell veraltete Analyse-/Roadmap-Dokumente (z. B. ältere Reports)
- Bereiche, die in `gregWiki` bereits als eigene Referenzstruktur gepflegt sind (API/Guides), wurden nicht blind überschrieben

## Pflege-Regel
Bei Änderungen an `gregCore`-Architektur, Dependency-Modell oder Startup-Lifecycle müssen die drei oben genannten `getting-started`-Seiten im gleichen PR mit aktualisiert werden.
