$files = Get-ChildItem -Path 02_development/hooks-library/*.md

foreach ($file in $files) {
    Write-Host "Processing $($file.FullName)..."
    $content = Get-Content $file.FullName -Raw

    $content = $content -replace '## Kurzbeschreibung', '## Short description'
    $content = $content -replace '## Patch-Ziele \(Il2Cpp\)', '## Patch targets (Il2Cpp)'
    $content = $content -replace 'Dieser Hook-Name kann auf (\d+) Harmony-Ziel\(e\) abgebildet sein:', 'This hook name can be mapped to $1 Harmony target(s):'
    $content = $content -replace 'Strategie', 'Strategy'
    $content = $content -replace 'Beschreibung', 'Description'
    $content = $content -replace '\*\*Strategie:\*\* Postfix — Im Katalog steht \*\*Postfix\*\* → verwende typischerweise (`HookBinder.OnAfter\([^)]*\)`)', '**Strategy:** Postfix — The catalog specifies **Postfix** → typically use $1'
    $content = $content -replace '## Payload-Schema \(aus Registry\)', '## Payload schema (from registry)'
    $content = $content -replace '\| Feld \| Typ / Hinweis \|', '| Field | Type / Note |'
    $content = $content -replace '## So verwendest du den Hook', '## How to use the hook'
    $content = $content -replace '### 1. Harmony-Pipeline: `HookBinder` \(Hauptweg für `greg_hooks.json`\)', '### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)'
    $content = $content -replace 'Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem \*\*exakten\*\* String', 'The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string'
    $content = $content -replace '// Bei Postfix-Strategie \(üblich\):', '// With postfix strategy (common):'
    $content = $content -replace 'Voraussetzungen:', 'Prerequisites:'
    $content = $content -replace '- Ein Hook-\*\*Katalog\*\* / Alias-Datei wurde geladen \(z. B. `HookBinder.LoadAliases\(pfad\)` oder `Hooker.InstallFromCatalog\(\.\.\.\)`\), sodass die Il2Cpp-Signatur auf den kanonischen String (`greg\.[^`]*`) gemappt ist.', '- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so that the Il2Cpp signature is mapped to the canonical string $1.'
    $content = $content -replace '- Namespace `FrikaMF.Hooks`, Typ `HookContext` \(u. a. `Arguments`, `Instance`, `ReturnValue` \)\.', '- Namespace `FrikaMF.Hooks`, type `HookContext` (e.g., `Arguments`, `Instance`, `ReturnValue`).'
    $content = $content -replace '### 2. Objekt-Bus: `GregEventDispatcher` \(Rust / FFI / manuelle Emits\)', '### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)'
    $content = $content -replace 'Manche Namen der Form `greg.<Domäne>.<Aktion>` werden \*\*zusätzlich\*\* vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert \(numerische `EventIds` → String\). Wenn dein Hook \*\*nur\*\* in `greg_hooks.json` als Il2Cpp-Patch steht, ist \*\*`HookBinder`\*\* der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:', 'Some names of the form `greg.<Domain>.<Action>` are **additionally** fired by the core via `GregHookIntegration` / `GregEventDispatcher.Emit` (numerical `EventIds` → string). If your hook is only listed in `greg_hooks.json` as an Il2Cpp patch, **`HookBinder`** is the correct entry point; use `GregEventDispatcher` if you explicitly listen to the payload bus:'
    $content = $content -replace '// je nach Payload-Typ; Hilfen: GregPayload.Get<T>\(payload, "feld", fallback\)', '// depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)'
    $content = $content -replace 'Abmelden: (`GregEventDispatcher.Off\([^)]*\)`) \(dieselbe Delegaten-Referenz wie bei `On` \)\.', 'Unsubscribe: $1 (the same delegate reference as used in `On`).'
    $content = $content -replace '## Siehe auch', '## See also'
    $content = $content -replace '- \[Übersicht aller greg-Hooks\]\(\.\./\.\./_internal/README.md\)', '- [Overview of all greg hooks](../../_internal/README.md)'
    $content = $content -replace 'Quelle:', 'Source:'

    # Fix some remaining German if any (like domain names in descriptions)
    $content = $content -replace '<Domäne>', '<Domain>'
    $content = $content -replace '<Aktion>', '<Action>'

    Set-Content $file.FullName $content -NoNewline
}
