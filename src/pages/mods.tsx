import React, {useMemo} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {moduleCatalog} from '../data/moduleCatalog';
import {modsPageEn as m} from '../i18n/modsPage';

export default function ModsCatalogPage(): JSX.Element {
  const normalizeCatalogLink = (path: string): string => {
    if (path.startsWith('/wiki/')) {
      return '/mods';
    }

    return path;
  };

  const grouped = useMemo(() => {
    const plugins = moduleCatalog.filter((entry) => entry.type === 'plugin');
    const mods = moduleCatalog.filter((entry) => entry.type === 'mod');
    return {plugins, mods};
  }, []);

  return (
    <Layout title={m.title} description={m.description}>
      <main className="bg-background min-h-screen text-on-surface">
        <div className="border-b border-outline-variant/10 bg-surface-container-low/80 py-10 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-high px-3 py-1">
              <span className="material-symbols-outlined text-sm text-primary">extension</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dim">
                gregFramework
              </span>
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-on-surface md:text-5xl">
              {m.title}
            </h1>
            <p className="mt-3 max-w-2xl text-on-surface-variant">{m.description}</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl font-bold text-on-surface">
              <span className="material-symbols-outlined text-tertiary">widgets</span>
              {m.pluginsHeading}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {grouped.plugins.map((entry) => (
                <article
                  key={entry.id}
                  className="app-card app-card-motion app-card-glow rounded-xl p-5"
                >
                  <h3 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    {entry.name}
                  </h3>
                  <p className="mb-4 text-sm text-on-surface-variant">{entry.description}</p>
                  <p className="mb-1 text-xs text-on-surface-variant">Version: {entry.version}</p>
                  <p className="mb-1 text-xs text-on-surface-variant">
                    {m.repoFolder}:{' '}
                    <span className="font-mono text-on-surface">
                      {entry.repoFolder ?? m.legacyNoSplitRepo}
                    </span>
                  </p>
                  <p className="mb-4 text-xs text-on-surface-variant">
                    Languages: {entry.languages.join(', ')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to={normalizeCatalogLink(entry.wikiPath)} className="button button--secondary button--sm">
                      {m.wiki}
                    </Link>
                    <Link to={normalizeCatalogLink(entry.releasePath)} className="button button--secondary button--sm">
                      {m.release}
                    </Link>
                    {entry.releaseReady ? (
                      <a href={entry.downloadPath} className="button button--primary button--sm">
                        {m.download}
                      </a>
                    ) : (
                      <span className="button button--secondary button--sm cursor-not-allowed opacity-80">
                        {m.notReleased}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 font-headline text-2xl font-bold text-on-surface">
              <span className="material-symbols-outlined text-secondary">sports_esports</span>
              {m.modsHeading}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {grouped.mods.map((entry) => (
                <article
                  key={entry.id}
                  className="app-card app-card-motion app-card-glow rounded-xl p-5"
                >
                  <h3 className="mb-2 font-headline text-lg font-bold text-on-surface">
                    {entry.name}
                  </h3>
                  <p className="mb-4 text-sm text-on-surface-variant">{entry.description}</p>
                  <p className="mb-1 text-xs text-on-surface-variant">Version: {entry.version}</p>
                  <p className="mb-1 text-xs text-on-surface-variant">
                    {m.repoFolder}:{' '}
                    <span className="font-mono text-on-surface">
                      {entry.repoFolder ?? m.legacyNoSplitRepo}
                    </span>
                  </p>
                  <p className="mb-4 text-xs text-on-surface-variant">
                    Dependencies: {entry.dependencies.join(', ')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link to={normalizeCatalogLink(entry.wikiPath)} className="button button--secondary button--sm">
                      {m.wiki}
                    </Link>
                    <Link to={normalizeCatalogLink(entry.releasePath)} className="button button--secondary button--sm">
                      {m.release}
                    </Link>
                    {entry.releaseReady ? (
                      <a href={entry.downloadPath} className="button button--primary button--sm">
                        {m.download}
                      </a>
                    ) : (
                      <span className="button button--secondary button--sm cursor-not-allowed opacity-80">
                        {m.notReleased}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
