import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const GREG_MODMANAGER_LATEST =
  'https://github.com/mleem97/GregToolsModmanager/releases/latest';

const STEAM_STORE = 'https://store.steampowered.com/app/4170200/';
const STEAM_WORKSHOP = 'https://steamcommunity.com/workshop/browse/?appid=4170200';

export default function PlayersPage(): JSX.Element {
  return (
    <Layout
      title="For players"
      description="Install and use Data Center mods: MelonLoader, Greg Mod Manager, Workshop, and troubleshooting."
    >
      <main className="bg-background text-on-surface mx-auto max-w-3xl px-4 py-16 font-sans">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          Not for mod authors
        </p>
        <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight">
          Playing with mods
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">
          This page is for <strong>players</strong> who install and run mods. Technical documentation
          for writing mods is in the{' '}
          <Link to="/wiki" className="text-primary underline-offset-2 hover:underline">
            mod author wiki
          </Link>{' '}
          (<code className="text-sm">/wiki</code>).
        </p>

        <section id="requirements" className="mb-12 scroll-mt-20">
          <h2 className="mb-3 font-headline text-2xl font-bold">What you need</h2>
          <ul className="list-inside list-disc space-y-2 text-on-surface-variant">
            <li>
              <a href={STEAM_STORE} className="text-primary hover:underline">
                Data Center
              </a>{' '}
              on Steam (AppID 4170200)
            </li>
            <li>Steam running and logged in for Workshop items</li>
            <li>
              <strong>MelonLoader</strong> (IL2CPP) — required for almost all mods; install once per game
            </li>
          </ul>
        </section>

        <section id="melonloader" className="mb-12 scroll-mt-20">
          <h2 className="mb-3 font-headline text-2xl font-bold">MelonLoader</h2>
          <ol className="list-inside list-decimal space-y-2 text-on-surface-variant">
            <li>Download the latest MelonLoader installer from the official MelonLoader GitHub.</li>
            <li>Run it, select <strong>Data Center</strong>, choose the <strong>IL2CPP</strong> profile.</li>
            <li>Start the game once and exit so interop assemblies are generated.</li>
            <li>If something fails, check <code className="text-sm">MelonLoader/Latest.log</code> in the game folder.</li>
          </ol>
          <p className="mt-4 text-sm text-on-surface-variant">
            <strong>Greg Mod Manager</strong> includes a Health tab that checks MelonLoader and related
            folders — useful if a mod does not load.
          </p>
        </section>

        <section id="mod-manager" className="mb-12 scroll-mt-20">
          <h2 className="mb-3 font-headline text-2xl font-bold">Greg Mod Manager</h2>
          <p className="mb-4 leading-relaxed text-on-surface-variant">
            Desktop app (release builds may still ship as <code className="text-sm">WorkshopUploader.exe</code>)
            for browsing the in-app mod store, subscribing via Steam, and checking dependency health.
          </p>
          <a
            href={GREG_MODMANAGER_LATEST}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block rounded-lg px-6 py-3 font-semibold"
          >
            Download latest release
          </a>
          <p className="mt-3 text-sm text-on-surface-variant">
            Uses GitHub’s <code className="text-sm">/releases/latest</code> redirect so the link always
            points at the newest build.
          </p>
        </section>

        <section id="workshop" className="mb-12 scroll-mt-20">
          <h2 className="mb-3 font-headline text-2xl font-bold">Steam Workshop</h2>
          <p className="mb-4 leading-relaxed text-on-surface-variant">
            Most public mods are published on the{' '}
            <a href={STEAM_WORKSHOP} className="text-primary hover:underline">
              Steam Workshop
            </a>
            {'. Subscribe in Steam or via Greg Mod Manager; Steam keeps items updated.'}
          </p>
        </section>

        <section id="releases" className="mb-12 scroll-mt-20">
          <h2 className="mb-3 font-headline text-2xl font-bold">Steam vs GitHub</h2>
          <p className="leading-relaxed text-on-surface-variant">
            <strong>Workshop</strong> is the usual place for stable, discoverable releases.{' '}
            <strong>GitHub Releases</strong> are often used for betas or direct DLL downloads. Mod
            authors document where each build is published on the{' '}
            <Link to="/mods" className="text-primary hover:underline">
              mod catalog
            </Link>{' '}
            and in the author wiki.
          </p>
        </section>

        <section id="catalog" className="mb-12 scroll-mt-20">
          <h2 className="mb-3 font-headline text-2xl font-bold">Mod catalog</h2>
          <p className="mb-4 leading-relaxed text-on-surface-variant">
            Browse modules with short descriptions and links to docs and downloads.
          </p>
          <Link to="/mods" className="btn-outline inline-block rounded-lg px-6 py-3 font-semibold">
            Open mod catalog
          </Link>
        </section>

        <section id="help" className="mb-12 scroll-mt-20 rounded-xl border border-outline-variant/20 bg-surface-container-high p-6">
          <h2 className="mb-3 font-headline text-2xl font-bold">Help</h2>
          <p className="mb-4 text-on-surface-variant">
            For install issues, crashes, or compatibility questions, ask on Discord. For bugs in a
            specific mod, use the link on its catalog or Workshop page.
          </p>
          <Link
            to="https://discord.gg/greg"
            className="btn-primary inline-flex rounded-lg px-6 py-3 font-semibold"
          >
            Discord
          </Link>
        </section>

        <section className="border-t border-outline-variant/20 pt-10">
          <h2 className="mb-3 font-headline text-xl font-bold">Writing mods?</h2>
          <p className="mb-4 text-on-surface-variant">
            Use the wiki under <Link to="/wiki">/wiki</Link>: start with{' '}
            <Link to="/wiki/getting-started" className="text-primary hover:underline">
              Getting started
            </Link>{' '}
            and the{' '}
            <Link to="/wiki/developers" className="text-primary hover:underline">
              documentation hub
            </Link>
            .
          </p>
        </section>
      </main>
    </Layout>
  );
}
