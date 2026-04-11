import React from 'react';
import Layout from '@theme/Layout';

export default function PrivacyPage(): JSX.Element {
  return (
    <Layout title="Privacy" description="Privacy information for gregFramework website.">
      <main className="bg-background min-h-screen px-4 py-16 text-on-surface">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-surface-container p-8">
          <h1 className="mb-4 font-headline text-3xl font-bold">Privacy</h1>
          <p className="mb-3 text-on-surface-variant">
            This site is a static documentation and catalog website. We do not operate account-based
            tracking features on-site.
          </p>
          <p className="mb-3 text-on-surface-variant">
            Third-party platforms linked from this site (for example Discord, Steam, and GitHub)
            apply their own privacy policies.
          </p>
          <p className="text-on-surface-variant">
            If you need clarification about content or links on this website, use the community
            contact channels listed in the footer.
          </p>
        </div>
      </main>
    </Layout>
  );
}
