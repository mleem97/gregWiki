import React from 'react';
import Layout from '@theme/Layout';

export default function TermsPage(): JSX.Element {
  return (
    <Layout title="Terms" description="Terms of use for gregFramework website.">
      <main className="bg-background min-h-screen px-4 py-16 text-on-surface">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-surface-container p-8">
          <h1 className="mb-4 font-headline text-3xl font-bold">Terms</h1>
          <p className="mb-3 text-on-surface-variant">
            The content on this website is provided for community information and documentation
            purposes.
          </p>
          <p className="mb-3 text-on-surface-variant">
            Modding tools and mods are provided by contributors and used at your own risk.
          </p>
          <p className="text-on-surface-variant">
            External services and downloads linked from this site are subject to their own terms of
            service.
          </p>
        </div>
      </main>
    </Layout>
  );
}
