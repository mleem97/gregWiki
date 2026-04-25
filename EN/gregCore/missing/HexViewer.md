# Framework Requirements: HexViewer Module

Dieses Dokument listet fehlende Funktionen im `gregCore` Framework auf, die für eine saubere Implementierung des HexViewers notwendig sind.

---

## 1. Sub-Element Raytracing (High Priority)
* **Problem:** Das Framework gibt aktuell nur das Haupt-Entity (z.B. ServerRack) zurück.
* **Benötigte Funktion:** Eine Methode `gregCore.getDetailedFocus()`, die bei zusammengesetzten Objekten die spezifische Sub-Komponente (z.B. SFP-Slot 3 in Switch B) zurückgibt, ohne die logische Einheit des Gesamtobjekts zu verlieren.

## 2. Dynamic Config Listener (Medium Priority)
* **Problem:** Änderungen im F8-Menü (Mod-Configuration) werden aktuell erst nach einem Spiel-Neustart oder World-Reload übernommen.
* **Benötigte Funktion:** Ein Event-Bus oder Observer-Pattern (`gregCore.Config.onChanged`), damit der HexViewer die Sichtbarkeit von Elementen (z.B. DevMode) sofort im laufenden Betrieb umschalten kann.

## 3. Hex-Color Serializer (Low Priority)
* **Problem:** Die Umwandlung von internen Material-Werten in den String `#XXXXXX` erfolgt aktuell redundant in der HexViewer-Klasse.
* **Benötigte Funktion:** Ein Utility-Helper in `gregCore.Utils.Color`, der Material-IDs oder RGB-Vektoren direkt in standardisierte Hex-Strings für das UI konvertiert.

---
*Zuletzt generiert durch: HexViewer-Implementation-Task*