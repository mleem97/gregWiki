/**
 * One-off helper: strip legacy -en suffixes from markdown links after i18n normalize.
 * Run from gregWiki root: node scripts/fix-wiki-import-en-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  for (const ent of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (ent.name.endsWith('.md')) {
      let s = fs.readFileSync(p, 'utf8');
      const orig = s;
      s = s.replace(/Troubleshooting\/Troubleshooting-en/g, 'Troubleshooting/overview');
      s = s.replace(/\.\.\/Troubleshooting\/Troubleshooting-en/g, '../Troubleshooting/overview');
      s = s.replace(/\(Troubleshooting-en\)/g, '(overview)');
      s = s.replace(/([a-zA-Z0-9/_.-])-en\)/g, '$1)');
      if (s !== orig) {
        fs.writeFileSync(p, s);
        console.log('updated', p);
      }
    }
  }
}

const roots = [path.resolve(import.meta.dirname, '../docs/legacy/wiki-import')];
for (const r of roots) {
  if (fs.existsSync(r)) walk(r);
}
