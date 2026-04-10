/**
 * Legacy GitHub Wiki → docs/ mirror. Removed: content now lives only under docs/ (curated).
 * Keep this script as a no-op so old CI or docs do not reference a missing file.
 */
console.log(
  '[wiki:sync] Skipped: the bulk wiki-import under docs/legacy/wiki-import/ was retired.\n' +
    'Author and edit Markdown under docs/ in gregWiki; use git history for old mirror text.',
);
process.exit(0);
