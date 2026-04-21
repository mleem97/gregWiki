# gregMod.LangCompatBridge – Modul-Dokumentation

## 1) Überblick
$(@{Name=gregMod.LangCompatBridge; Dir=C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge; Csproj=C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge\gregMod.LangCompatBridge.csproj; HasDocs=False; HasReadme=True}.Name) ist ein eigenständiges Modul im gregFramework-Workspace.
Diese Seite dient als technische Referenz für Build, Laufzeit und Integration.

## 2) Projekt-Metadaten
- **Projektname:** $(@{Name=gregMod.LangCompatBridge; Dir=C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge; Csproj=C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge\gregMod.LangCompatBridge.csproj; HasDocs=False; HasReadme=True}.Name)
- **Projektpfad:** $rel
- **Projektdatei:** $(Split-Path @{Name=gregMod.LangCompatBridge; Dir=C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge; Csproj=C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge\gregMod.LangCompatBridge.csproj; HasDocs=False; HasReadme=True}.Csproj -Leaf)
- **Target Framework:** $tfm
- **README vorhanden:** Ja (`README.md` vorhanden)

## 3) Build & Artefakte
### Lokaler Build
`powershell
Set-Location "C:\Users\marvi\source\repos\gregFramework\Melons\gregMod.LangCompatBridge"
dotnet build
`

### Erwartetes Artefakt
- Standardmäßig unter in/Debug/net6.0/ (oder in/Release/net6.0/).

## 4) Integration in gregCore / MelonLoader
- Das Modul wird als separater Mod/Plugin-Baustein behandelt.
- APIs aus gregCore werden über Projekt-Referenzen oder Laufzeit-DLLs genutzt.
- Deployment erfolgt je nach Mod-Typ in die passenden Game-Verzeichnisse (Mods, ggf. weitere mod-spezifische Pfade).

## 5) Wartung
- Bei API-Änderungen in gregCore Kompatibilität testen.
- README und diese Doku synchron halten.
- Breaking Changes in Changelog/Release Notes dokumentieren.

## 6) Offene Punkte (Pflege-Checkliste)
- [ ] Haupt-Features kurz dokumentiert
- [ ] Konfigurationsoptionen dokumentiert
- [ ] Abhängigkeiten/Versionen geprüft
- [ ] Installations- und Updatepfad getestet
