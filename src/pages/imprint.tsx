import React from 'react';
import Layout from '@theme/Layout';

export default function ImprintPage(): JSX.Element {
  return (
    <Layout title="Imprint" description="Legal imprint information for gregFramework website.">
      <main className="bg-background min-h-screen px-4 py-16 text-on-surface">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-surface-container p-8">
          <h1 className="mb-4 font-headline text-3xl font-bold">Imprint</h1>
          <p className="mb-3 text-on-surface-variant">
            This website is a community-run documentation and catalog project for gregFramework.
          </p>
          <p className="mb-3 text-on-surface-variant">
            Responsible party: Meyer Media
          </p>
          <p className="text-on-surface-variant">
            Contact and support: use the Discord community or the GitHub repositories linked in the
            site footer.
          </p>
        </div>
      </main>
    </Layout>
  );
}
