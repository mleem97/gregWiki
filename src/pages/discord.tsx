import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const DISCORD_INVITE = 'https://discord.gg/greg';

export default function DiscordPage(): JSX.Element {
  return (
    <Layout title="Discord" description="Join the gregFramework Discord community.">
      <main className="bg-background min-h-screen px-4 py-16 text-on-surface">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-surface-container p-8">
          <h1 className="mb-4 font-headline text-3xl font-bold">Discord</h1>
          <p className="mb-6 text-on-surface-variant">
            Join the community Discord for player support, modding help, release updates, and
            contributor discussions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={DISCORD_INVITE}
              className="button button--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Discord Invite
            </a>
            <Link to="/players" className="button button--secondary">
              Player Help
            </Link>
            <Link to="/mods" className="button button--secondary">
              Mods Catalog
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
