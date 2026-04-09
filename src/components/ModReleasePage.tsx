import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

type ReleaseKind = 'mod' | 'plugin';

type ModReleasePageProps = {
  title: string;
  kind: ReleaseKind;
  dllName: string;
  description: string;
  version?: string;
  author?: string;
  category?: string;
  dependencies?: string[];
  codeLanguages?: string[];
  releaseReady?: boolean;
  banner?: string;
  releaseNotesPath?: string;
  installation?: React.ReactNode;
};

function toTitleCase(value: ReleaseKind): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function normalizeReleaseNotesPath(releaseNotesPath?: string): string | undefined {
  if (!releaseNotesPath) return undefined;
  if (releaseNotesPath.startsWith('/mods/')) {
    return `/wiki${releaseNotesPath}`;
  }
  if (releaseNotesPath.startsWith('/wiki/')) {
    return releaseNotesPath;
  }
  return releaseNotesPath;
}

export default function ModReleasePage({
  title,
  kind,
  dllName,
  description,
  version = 'NotReleasedYet',
  author = 'gregFramework Community',
  category = 'Mod',
  dependencies = [],
  codeLanguages = ['C#'],
  releaseReady = false,
  banner,
  releaseNotesPath,
  installation,
}: ModReleasePageProps): JSX.Element {
  const downloadPath = `/${kind}/${dllName}`;
  const downloadUrl =
    typeof window !== 'undefined'
      ? new URL(downloadPath, window.location.origin).toString()
      : downloadPath;
  const docPath = normalizeReleaseNotesPath(releaseNotesPath);

  return (
    <div className="mod-release-root bg-background text-on-surface min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <header className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/30 bg-primary-container/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
              {releaseReady ? (
                <Translate id="modRelease.badgeStable">Stable release</Translate>
              ) : (
                <Translate id="modRelease.badgePreview">Preview / in development</Translate>
              )}
            </span>
            <span className="font-mono text-xs text-on-surface-variant">{dllName}</span>
          </div>
          <h1 className="mb-4 font-headline text-4xl font-bold leading-tight tracking-tighter text-on-surface md:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-on-surface-variant">
            {banner ?? (
              <Translate id="modRelease.heroDefaultBanner">
                Official release download and module details
              </Translate>
            )}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <article className="space-y-12 lg:col-span-8">
            <section>
              <h2 className="mb-6 flex items-center gap-2 font-headline text-2xl font-bold text-secondary">
                <span className="material-symbols-outlined text-primary">description</span>
                <Translate id="modRelease.descriptionTitle">Description</Translate>
              </h2>
              <div className="prose prose-invert max-w-none space-y-4 text-on-surface-variant">
                <p>{description}</p>
              </div>
            </section>

            <section className="rounded-xl bg-surface-container-low p-8 outline outline-1 outline-outline-variant/10">
              <h2 className="mb-6 flex items-center gap-2 font-headline text-2xl font-bold text-secondary">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <Translate id="modRelease.installationTitle">Installation</Translate>
              </h2>
              {installation ?? (
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-headline text-sm font-bold text-primary">
                      01
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">
                        <Translate id="modRelease.installStepOne">
                          Download the release DLL.
                        </Translate>
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        <Translate id="modRelease.installStepOneHint">
                          Use the GitHub release asset or the route below.
                        </Translate>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-headline text-sm font-bold text-primary">
                      02
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">
                        <Translate id="modRelease.installStepTwoTitle">
                          Copy into the game folder
                        </Translate>
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        <Translate id="modRelease.installStepTwo">
                          Copy it to your Data Center `Mods/` folder.
                        </Translate>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-headline text-sm font-bold text-primary">
                      03
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">
                        <Translate id="modRelease.installStepThreeTitle">Launch</Translate>
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        <Translate id="modRelease.installStepThree">
                          Start the game with MelonLoader.
                        </Translate>
                      </p>
                    </div>
                  </li>
                </ol>
              )}
            </section>

            <section>
              <h2 className="mb-6 flex items-center gap-2 font-headline text-2xl font-bold text-secondary">
                <span className="material-symbols-outlined text-primary">code</span>
                <Translate id="modRelease.dllRouteTitle">Direct DLL route</Translate>
              </h2>
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 to-tertiary/20 opacity-30 blur transition group-hover:opacity-50" />
                <div className="relative overflow-x-auto rounded-xl bg-surface-container-highest p-6 font-mono text-sm text-on-surface">
                  <code>{downloadPath}</code>
                </div>
              </div>
            </section>
          </article>

          <aside className="space-y-6 lg:col-span-4" aria-label="Download sidebar">
            <div className="space-y-3">
              {releaseReady ? (
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-primary-container py-4 font-headline font-bold text-on-primary shadow-[0_0_32px_-4px_rgba(0,191,165,0.35)] transition hover:scale-[1.02] active:scale-[0.98]"
                  href={downloadUrl}
                >
                  <span className="material-symbols-outlined">download</span>
                  <Translate id="modRelease.downloadButton">Download DLL</Translate>
                </a>
              ) : (
                <button
                  className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-surface-container py-4 font-headline font-bold text-on-surface-variant opacity-80 outline outline-1 outline-outline-variant/25"
                  disabled
                  type="button"
                >
                  <span className="material-symbols-outlined">lock</span>
                  <Translate id="modRelease.notReleasedYet">Not released yet</Translate>
                </button>
              )}
              {docPath ? (
                <Link
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-outline-variant/40 bg-surface-container py-4 font-headline font-bold text-on-surface transition hover:border-outline-variant hover:bg-surface-container-high"
                  to={docPath}
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                  <Translate id="modRelease.releaseNotesButton">Open module docs</Translate>
                </Link>
              ) : null}
            </div>

            <div className="rounded-xl bg-surface-container p-6 outline outline-1 outline-outline-variant/20">
              <h3 className="mb-6 font-headline text-sm font-bold uppercase tracking-widest text-primary">
                <Translate id="modRelease.sidebarMetaTitle">Reference metadata</Translate>
              </h3>
              <dl className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-outline-variant/10 py-2">
                  <dt className="text-xs font-medium text-on-surface-variant">
                    <Translate id="modRelease.metaVersion">Version</Translate>
                  </dt>
                  <dd className="rounded bg-surface-variant px-2 py-0.5 font-mono text-xs text-primary">
                    {version}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/10 py-2">
                  <dt className="text-xs font-medium text-on-surface-variant">
                    <Translate id="modRelease.metaAuthor">Author</Translate>
                  </dt>
                  <dd className="text-on-surface">{author}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/10 py-2">
                  <dt className="text-xs font-medium text-on-surface-variant">
                    <Translate id="modRelease.metaCategory">Category</Translate>
                  </dt>
                  <dd className="text-on-surface">
                    {category} · {toTitleCase(kind)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant/10 py-2">
                  <dt className="text-xs font-medium text-on-surface-variant">
                    <Translate id="modRelease.metaDependencies">Dependencies</Translate>
                  </dt>
                  <dd className="text-right text-on-surface">
                    {dependencies.length ? dependencies.join(', ') : '—'}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-2">
                  <dt className="text-xs font-medium text-on-surface-variant">
                    <Translate id="modRelease.metaCodeLanguage">Languages</Translate>
                  </dt>
                  <dd className="text-on-surface">{codeLanguages.join(', ')}</dd>
                </div>
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-on-surface-variant">
                <Translate id="modRelease.sidebarHint">
                  The download route redirects to the latest GitHub release asset when published.
                </Translate>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
