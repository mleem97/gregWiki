import fs from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const hooksRoot = path.join(repoRoot, 'docs', '02_development', 'hooks-library');

const sourceFiles = [
  'customer-hooks.md',
  'employee-hooks.md',
  'gameplay-hooks.md',
  'network-hooks.md',
  'player-hooks.md',
  'rack-hooks.md',
  'server-hooks.md',
  'system-hooks.md',
  'ui-hooks.md',
].map((fileName) => path.join(hooksRoot, fileName));

function normalizeSlug(input) {
  return input
    .toLowerCase()
    .replace(/`/g, '')
    .replace(/[^a-z0-9.\-]+/g, '-')
    .replace(/\.+/g, '.')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/\./g, '-');
}

function parseFrontmatter(block) {
  const lines = block.split(/\r?\n/);
  const data = {};
  for (const line of lines) {
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value.replace(/^"|"$/g, '');
  }
  return data;
}

function toCodeLanguage(domain) {
  return domain.toUpperCase();
}

function buildLanguageSections(hookName) {
  const domain = hookName.split('.')[1] ?? 'SYSTEM';
  const domainUpper = toCodeLanguage(domain);

  return `
## Usage in Rust

If your Rust bridge exposes the event bus, subscribe to the exact hook name:

~~~rust
use greg_framework::events::EventBus;

fn register_hooks(bus: &mut EventBus) {
    bus.on("${hookName}", |payload| {
        if let Some(method) = payload.get("method") {
            println!("[${domainUpper}] method={}", method);
        }
    });
}
~~~

> If your current Rust runtime only exposes numeric EventIds, map those IDs to canonical \`greg.*\` names in your bridge layer before dispatching to mod code.

## Usage in Lua

Use the Lua bridge and register against the same canonical hook string:

~~~lua
greg.on("${hookName}", function(payload)
  local method = payload and payload.method or "unknown"
  greg.log("[${domainUpper}] method=" .. tostring(method))
end)
~~~

For Harmony-level interception use:

~~~lua
greg.hook.after("${hookName}", function(ctx)
  greg.log("after hook: " .. tostring(ctx.method_name))
end)
~~~

## Usage in TypeScript

In a TS/JS bridge, subscribe via your event client using the same hook key:

~~~ts
import { gregBus } from './gregBus';

gregBus.on("${hookName}", (payload) => {
  const method = payload?.method ?? 'unknown';
  console.log("[${domainUpper}] method=" + method);
});
~~~

When using RPC/WebSocket transport, keep \`${hookName}\` as the canonical routing key end-to-end.
`;
}

function parseSections(content) {
  const markerRegex = /^##\s+([A-Z]+-[^\r\n]+)$/gm;
  const markers = [];
  let match;
  while ((match = markerRegex.exec(content)) !== null) {
    markers.push({ label: match[1], index: match.index });
  }

  const sections = [];
  for (let index = 0; index < markers.length; index += 1) {
    const start = markers[index].index;
    const end = index + 1 < markers.length ? markers[index + 1].index : content.length;
    sections.push(content.slice(start, end).trim());
  }

  return sections;
}

function extractDoc(sectionText) {
  const frontmatterMatch = sectionText.match(/---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) {
    return null;
  }

  const frontmatterRaw = frontmatterMatch[1];
  const data = parseFrontmatter(frontmatterRaw);
  const hookName = data.title;
  const description = data.description ?? 'gregCore Hook';

  const titleHeadingRegex = /^#\s+`[^`]+`\s*\r?\n/m;
  const contentStart = sectionText.search(titleHeadingRegex);
  const body = contentStart >= 0 ? sectionText.slice(contentStart).trim() : sectionText.slice(frontmatterMatch.index + frontmatterMatch[0].length).trim();

  return {
    hookName,
    description,
    body,
  };
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeCategoryFile(domainDir, domainName) {
  const filePath = path.join(domainDir, '_category_.json');
  if (fs.existsSync(filePath)) {
    return;
  }

  const category = {
    label: `${domainName.toUpperCase()} hooks`,
    position: 1,
    collapsible: true,
    collapsed: true,
  };

  fs.writeFileSync(filePath, `${JSON.stringify(category, null, 2)}\n`, 'utf8');
}

function run() {
  let generated = 0;

  for (const sourceFile of sourceFiles) {
    if (!fs.existsSync(sourceFile)) {
      continue;
    }

    const source = fs.readFileSync(sourceFile, 'utf8');
    const sections = parseSections(source);

    for (const section of sections) {
      const parsed = extractDoc(section);
      if (!parsed || !parsed.hookName) {
        continue;
      }

      const domain = (parsed.hookName.split('.')[1] ?? 'system').toLowerCase();
      const domainDir = path.join(hooksRoot, domain);
      ensureDir(domainDir);
      writeCategoryFile(domainDir, domain);

      const fileSlug = normalizeSlug(parsed.hookName);
      const targetFile = path.join(domainDir, `${fileSlug}.md`);

      const hasRust = /##\s+Usage in Rust/i.test(parsed.body);
      const hasLua = /##\s+Usage in Lua/i.test(parsed.body);
      const hasTs = /##\s+Usage in TypeScript/i.test(parsed.body);
      const languageAppendix = hasRust && hasLua && hasTs ? '' : buildLanguageSections(parsed.hookName);

      const doc = `---\ntitle: ${parsed.hookName}\nsidebar_label: ${parsed.hookName}\ndescription: \"${parsed.description.replace(/\"/g, '\\\"')}\"\n---\n\n${parsed.body}${languageAppendix}\n`;

      fs.writeFileSync(targetFile, doc, 'utf8');
      generated += 1;
    }

    fs.unlinkSync(sourceFile);
  }

  console.log(`Generated ${generated} per-hook files.`);
}

run();
