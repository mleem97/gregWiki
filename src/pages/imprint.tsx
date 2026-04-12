import React from 'react';
import Layout from '@theme/Layout';

export default function ImprintPage(): JSX.Element {
  return (
    <Layout title="Imprint" description="Legal imprint information for gregFramework website.">
      <main className="bg-background min-h-screen px-4 py-16 text-on-surface">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-surface-container p-8">
          <h1 className="mb-4 font-headline text-3xl font-bold">Imprint</h1>
          <p className="mb-6 text-on-surface-variant">
            Legal provider information in accordance with German legal notice requirements.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">Service Provider</h2>
          <p className="text-on-surface-variant">
            Marvin Lee Meyer
            <br />
            Sole proprietorship
            <br />
            Am Friedrich-Ebert-Park 1a
            <br />
            31157 Sarstedt
            <br />
            Germany
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">Contact Options</h2>
          <p className="text-on-surface-variant">
            Email: info@meyermedia.eu
            <br />
            Phone: +49 1522 2169244
            <br />
            Contact form: available via this website
            <br />
            Response time: within 24 hours on business days
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">Authorized Representative</h2>
          <p className="text-on-surface-variant">Marvin Lee Meyer</p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">VAT Information</h2>
          <p className="text-on-surface-variant">
            Small business pursuant to Section 19 German VAT Act (UStG).
            <br />
            No VAT ID required.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">Competent Chamber</h2>
          <p className="text-on-surface-variant">
            IHK Hannover
            <br />
            Schiffgraben 49, 30175 Hannover, Germany
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">
            Responsible for Content (Section 18 para. 2 MStV)
          </h2>
          <p className="text-on-surface-variant">
            Marvin Lee Meyer
            <br />
            Am Friedrich-Ebert-Park 1a
            <br />
            31157 Sarstedt
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">EU Dispute Resolution</h2>
          <p className="text-on-surface-variant">
            The European Commission provides an Online Dispute Resolution (ODR) platform:
            <br />
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Our email address can be found above in this imprint.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">
            Consumer Dispute Resolution / Universal Arbitration Body
          </h2>
          <p className="text-on-surface-variant">
            We are neither willing nor obliged to participate in dispute resolution proceedings
            before a consumer arbitration board.
          </p>
        </div>
      </main>
    </Layout>
  );
}
