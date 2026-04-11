import os
import re

directory = r'C:\Users\marvi\source\repos\gregFramework\gregWiki\docs\02_development\hooks-library'
files = [f for f in os.listdir(directory) if f.endswith('.md')]

replacements = [
    (r'## Kurzbeschreibung', '## Description'),
    (r'## Patch-Ziele \(Il2Cpp\)', '## Patch Targets (Il2Cpp)'),
    (r'Dieser Hook-Name kann auf \*\*(\d+)\*\* Harmony-Ziel\(e\) abgebildet sein:', r'This hook name can be mapped to **\1** Harmony target(s):'),
    (r'## Payload-Schema \(aus Registry\)', '## Payload Schema (from Registry)'),
    (r'## So verwendest du den Hook', '## How to use this hook'),
    (r'## Siehe auch', '## See also'),
    (r'\| Patch-Ziel \| Strategie \| Beschreibung \|', '| Patch Target | Strategy | Description |'),
    (r'\*\*Strategie:\*\* Postfix [^ ]+ Im Katalog steht \*\*Postfix\*\* [^ ]+ verwende typischerweise `HookBinder\.OnAfter\(\.\.\.\)`\.', '**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.'),
    (r'\| Feld \| Typ / Hinweis \|', '| Field | Type / Note |'),
    (r'### 1\. Harmony-Pipeline: `HookBinder` \(Hauptweg für `greg_hooks\.json`\)', '### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)'),
    (r'Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder\.DispatchBefore` / `HookBinder\.DispatchAfter` auf\. Du registrierst Handler mit dem \*\*exakten\*\* String `([^`]+)`:', r'The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `\1`:'),
    (r'Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder\.DispatchBefore` / `DispatchAfter` auf\. Du registrierst Handler mit dem \*\*exakten\*\* String `([^`]+)`:', r'The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `\1`:'),
    (r'// Bei Postfix-Strategie \(üblich\):', '// For Postfix strategy (common):'),
    (r'Voraussetzungen:', 'Prerequisites:'),
    (r'- Ein Hook-\*\*Katalog\*\* / Alias-Datei wurde geladen \(z\. B\. `HookBinder\.LoadAliases\(pfad\)` oder `Hooker\.InstallFromCatalog\(\.\.\.\)`\), sodass die Il2Cpp-Signatur auf den kanonischen String `([^`]+)` gemappt ist\.', r'- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `\1`.'),
    (r'- Namespace `FrikaMF\.Hooks`, Typ `HookContext` \(u\. a\. `Arguments`, `Instance`, `ReturnValue`\)\.', '- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).'),
    (r'### 2\. Objekt-Bus: `GregEventDispatcher` \(Rust / FFI / manuelle Emits\)', '### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)'),
    (r'Manche Namen der Form `greg\.<Domäne>\.<Aktion>` werden \*\*zusätzlich\*\* vom Kern über `GregHookIntegration` / `GregEventDispatcher\.Emit` gefeuert \(numerische `EventIds` [^ ]+ String\)\. Wenn dein Hook \*\*nur\*\* in `greg_hooks\.json` als Il2Cpp-Patch steht, ist \*\*`HookBinder` \*\* der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:', 'Some names of the form `greg.<Domain>.<Action>` are **additionally** fired by the core via `GregHookIntegration` / `GregEventDispatcher.Emit` (numeric `EventIds` → string). If your hook is **only** in `greg_hooks.json` as an Il2Cpp patch, **`HookBinder`** is the correct entry point; use `GregEventDispatcher` if you are explicitly listening to the payload bus:'),
    (r'// je nach Payload-Typ; Hilfen: GregPayload\.Get<T>\(payload, "feld", fallback\)', '// depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)'),
    (r'Abmelden: `GregEventDispatcher\.Off\("([^"]+)", handler\)` \(dieselbe Delegaten-Referenz wie bei `On`\)\.', r'Unregister: `GregEventDispatcher.Off("\1", handler)` (same delegate reference as for `On`).'),
    (r'- \[Übersicht aller greg-Hooks\]\(\.\./\.\./_internal/README\.md\)', '- [Overview of all greg hooks](../../_internal/README.md)'),
    (r'Quelle: `gregCore/gregFramework/greg_hooks\.json`','Source: `gregCore/gregFramework/greg_hooks.json`'),
]

for filename in files:
    path = os.path.join(directory, filename)
    print(f"Processing {filename}...")
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for pattern, replacement in replacements:
        content = re.sub(pattern, replacement, content)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done.")
