$files = Get-ChildItem "C:\Users\marvi\source\repos\gregFramework\gregWiki\docs\02_development\hooks-library\*.md"

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content $file.FullName -Raw -Encoding utf8
    
    # 1. Headers and Titles
    $content = $content -replace "## Kurzbeschreibung", "## Description"
    $content = $content -replace "## Patch-Ziele \(Il2Cpp\)", "## Patch Targets (Il2Cpp)"
    $content = $content -replace "Dieser Hook-Name kann auf \*\*(\d+)\*\* Harmony-Ziel\(e\) abgebildet sein:", "This hook name can be mapped to **$1** Harmony target(s):"
    $content = $content -replace "## Payload-Schema \(aus Registry\)", "## Payload Schema (from Registry)"
    $content = $content -replace "## So verwendest du den Hook", "## How to use this hook"
    $content = $content -replace "## Siehe auch", "## See also"
    
    # 2. Table Headers and Strategy Descriptions
    $content = $content -replace "\| Patch-Ziel \| Strategie \| Beschreibung \|", "| Patch Target | Strategy | Description |"
    $content = $content -replace "\*\*Strategie:\*\* Postfix — Im Katalog steht \*\*Postfix\*\* → verwende typischerweise `HookBinder.OnAfter\(\.\.\.\)`\.", "**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`."
    $content = $content -replace "\| Feld \| Typ / Hinweis \|", "| Field | Type / Note |"
    
    # 3. Instruction Content
    $content = $content -replace "### 1. Harmony-Pipeline: `HookBinder` \(Hauptweg für `greg_hooks.json`\)", "### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)"
    $content = $content -replace "Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem \*\*exakten\*\* String `([^`]+)`:", "The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `$1`:"
    $content = $content -replace "// Bei Postfix-Strategie \(üblich\):", "// For Postfix strategy (common):"
    
    $content = $content -replace "Voraussetzungen:", "Prerequisites:"
    $content = $content -replace "- Ein Hook-\*\*Katalog\*\* / Alias-Datei wurde geladen \(z. B. `HookBinder.LoadAliases\(pfad\)` oder `Hooker.InstallFromCatalog\(\.\.\.\)`\), sodass die Il2Cpp-Signatur auf den kanonischen String `([^`]+)` gemappt ist.", "- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `$1`."
    $content = $content -replace "- Namespace `FrikaMF.Hooks`, Typ `HookContext` \(u. a. `Arguments`, `Instance`, `ReturnValue`\)\.", "- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.)."

    $content = $content -replace "### 2. Objekt-Bus: `GregEventDispatcher` \(Rust / FFI / manuelle Emits\)", "### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)"
    $content = $content -replace "Manche Namen der Form `greg.<Domäne>.<Aktion>` werden \*\*zusätzlich\*\* vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert \(numerische `EventIds` → String\). Wenn dein Hook \*\*nur\*\* in `greg_hooks.json` als Il2Cpp-Patch steht, ist \*\*`HookBinder` \*\* der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:", "Some names of the form `greg.<Domain>.<Action>` are **additionally** fired by the core via `GregHookIntegration` / `GregEventDispatcher.Emit` (numeric `EventIds` → string). If your hook is **only** in `greg_hooks.json` as an Il2Cpp patch, **\`HookBinder\`** is the correct entry point; use `GregEventDispatcher` if you are explicitly listening to the payload bus:"
    
    $content = $content -replace "// je nach Payload-Typ; Hilfen: GregPayload.Get<T>\(payload, `"feld`", fallback\)", "// depending on the payload type; helpers: GregPayload.Get<T>(payload, `"field`", fallback)"
    $content = $content -replace "Abmelden: `GregEventDispatcher.Off\(`"([^`]+)`", handler\)` \(dieselbe Delegaten-Referenz wie bei `On`\)\.", "Unregister: `GregEventDispatcher.Off(`"$1`", handler)` (same delegate reference as for `On`)."
    
    # 4. Footer Links
    $content = $content -replace "- \[Übersicht aller greg-Hooks\]\(\.\./\.\./_internal/README.md\)", "- [Overview of all greg hooks](../../_internal/README.md)"
    $content = $content -replace "Quelle: `gregCore/gregFramework/greg_hooks.json`","Source: `gregCore/gregFramework/greg_hooks.json`"

    Set-Content $file.FullName $content -Encoding utf8
}

Write-Host "Translation complete."
