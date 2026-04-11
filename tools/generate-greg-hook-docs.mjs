/**
 * Generates one markdown page per unique greg.* hook from gregCore/gregFramework/greg_hooks.json
 */
import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GREG_HOOKS_JSON = process.env.GREG_HOOKS_JSON
  ?? "C:/Users/marvi/source/repos/gregFramework/gregCore/gregFramework/greg_hooks.json";
const OUT_DIR = join(__dirname, "..", "docs", "hooks", "greg");

function esc(s) {
  return String(s ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function payloadSchemaMd(schema) {
  if (!schema || typeof schema !== "object") return "_Keine Angabe._";
  const rows = Object.entries(schema).map(([k, v]) => {
    const cell = typeof v === "object" ? JSON.stringify(v) : String(v);
    return `| \`${esc(k)}\` | \`${esc(cell)}\` |`;
  });
  if (rows.length === 0) return "_Leeres Schema._";
  return ["| Feld | Typ / Hinweis |", "|------|----------------|", ...rows].join("\n");
}

function strategyHint(strategy) {
  const s = (strategy ?? "Postfix").toLowerCase();
  if (s === "prefix") {
    return "Im Katalog steht **Prefix** → verwende typischerweise `HookBinder.OnBefore(...)`.";
  }
  return "Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.";
}

function hookSlug(name) {
  return name.replace(/^greg\./, "").replace(/\./g, "-");
}

function buildPage(name, entries) {
  const descriptions = [...new Set(entries.map((e) => e.description).filter(Boolean))];
  const strategies = [...new Set(entries.map((e) => e.strategy || "Postfix"))];
  const payloadSchemas = entries.map((e) => e.payloadSchema).filter(Boolean);
  const primaryStrategy = strategies.length === 1 ? strategies[0] : "Postfix (gemischt, siehe Tabelle)";

  const targetsTable = [
    "| Patch-Ziel | Strategie | Beschreibung |",
    "|------------|-----------|--------------|",
    ...entries.map(
      (e) =>
        `| \`${esc(e.patchTarget)}\` | ${esc(e.strategy || "Postfix")} | ${esc(e.description)} |`,
    ),
  ].join("\n");

  const descBlock =
    descriptions.length === 0
      ? "_Keine Beschreibung in greg_hooks.json._"
      : descriptions.map((d) => `- ${d}`).join("\n");

  const schemaBlock =
    payloadSchemas.length === 0
      ? "_Kein payloadSchema in den Einträgen._"
      : payloadSchemaMd(payloadSchemas[0]);

  const mixed = primaryStrategy.toLowerCase().includes("gemischt");
  const useBefore =
    primaryStrategy.toLowerCase().includes("prefix") && !mixed;

  const codeSample = useBefore
    ? `HookBinder.OnBefore("${name}", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments
});`
    : `HookBinder.OnAfter("${name}", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});`;

  const comment = useBefore ? "Bei Prefix-Strategie:" : "Bei Postfix-Strategie (üblich):";

  return [
    "---",
    `title: ${name}`,
    `description: gregCore Hook — ${esc(descriptions[0] || name)}`,
    "---",
    "",
    `# \`${name}\``,
    "",
    "## Kurzbeschreibung",
    "",
    descBlock,
    "",
    "## Patch-Ziele (Il2Cpp)",
    "",
    `Dieser Hook-Name kann auf **${entries.length}** Harmony-Ziel(e) abgebildet sein:`,
    "",
    targetsTable,
    "",
    `**Strategie:** ${esc(primaryStrategy)} — ${strategyHint(strategies[0])}`,
    "",
    "## Payload-Schema (aus Registry)",
    "",
    schemaBlock,
    "",
    "## So verwendest du den Hook",
    "",
    "### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)",
    "",
    "Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. "
      + `Du registrierst Handler mit dem **exakten** String \`${name}\`:`,
    "",
    "```csharp",
    "using FrikaMF.Hooks;",
    "",
    `// ${comment}`,
    codeSample,
    "```",
    "",
    "Voraussetzungen:",
    "",
    "- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), "
      + `sodass die Il2Cpp-Signatur auf den kanonischen String \`${name}\` gemappt ist.`,
    "- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).",
    "",
    "### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)",
    "",
    "Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert "
      + "(numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** "
      + "der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:",
    "",
    "```csharp",
    "using gregFramework.Core;",
    "",
    `GregEventDispatcher.On("${name}", payload =>`,
    "{",
    "    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, \"feld\", fallback)",
    "});",
    "```",
    "",
    `Abmelden: \`GregEventDispatcher.Off("${name}", handler)\` (dieselbe Delegaten-Referenz wie bei \`On\`).`,
    "",
    "## Siehe auch",
    "",
    "- [Übersicht aller greg-Hooks](./../README.md)",
    "- Quelle: `gregCore/gregFramework/greg_hooks.json`",
    "",
  ].join("\n");
}

const raw = readFileSync(GREG_HOOKS_JSON, "utf8");
const doc = JSON.parse(raw);
const byName = new Map();
for (const h of doc.hooks) {
  const n = h.name;
  if (!n) continue;
  if (!byName.has(n)) byName.set(n, []);
  byName.get(n).push(h);
}

mkdirSync(OUT_DIR, { recursive: true });

const sortedNames = [...byName.keys()].sort((a, b) => a.localeCompare(b));
const indexRows = sortedNames.map((name) => {
  const file = `${hookSlug(name)}.md`;
  const first = byName.get(name)[0];
  return `| [\`${name}\`](./greg/${file}) | ${esc(first.description)} |`;
});

const indexMd = [
  "---",
  "title: gregCore Hooks — Übersicht",
  "description: Eine Seite pro greg.* Hook aus greg_hooks.json mit Verwendung von HookBinder und GregEventDispatcher.",
  "---",
  "",
  "# gregCore Hooks — Übersicht",
  "",
  "Diese Seiten beschreiben jeden **eindeutigen** Hook-Namen aus `gregCore/gregFramework/greg_hooks.json`. "
    + "Mehrere Il2Cpp-Methoden können denselben Namen tragen; die Detailseite listet alle Ziele.",
  "",
  "## Allgemeine Verwendung",
  "",
  "| API | Namespace | Einsatz |",
  "|-----|-----------|---------|",
  "| `HookBinder.OnBefore` / `OnAfter` | `FrikaMF.Hooks` | Il2Cpp-Harmony-Kette: `HookContext` mit Argumenten und Rückgabe |",
  "| `GregEventDispatcher.On` / `Once` / `Off` | `gregFramework.Core` | Payload-Bus (u. a. FFI-gemappte Events) |",
  "",
  "Katalog laden: `HookBinder.LoadAliases(...)` bzw. `Hooker.InstallFromCatalog(...)` — siehe gregWiki / gregCore-Quellcode.",
  "",
  `## Alle Hooks (${sortedNames.length})`,
  "",
  "| Hook | Kurzbeschreibung (aus JSON) |",
  "|------|----------------------------|",
  ...indexRows,
  "",
].join("\n");

writeFileSync(join(dirname(OUT_DIR), "README.md"), indexMd, "utf8");

for (const name of sortedNames) {
  const slug = hookSlug(name);
  writeFileSync(join(OUT_DIR, `${slug}.md`), buildPage(name, byName.get(name)), "utf8");
}

console.log(`Wrote ${sortedNames.length} hook pages + README under docs/hooks/`);
