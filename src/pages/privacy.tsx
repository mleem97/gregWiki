import React from 'react';
import Layout from '@theme/Layout';

export default function PrivacyPage(): JSX.Element {
  return (
    <Layout title="Privacy" description="Privacy information for gregFramework website.">
      <main className="bg-background min-h-screen px-4 py-16 text-on-surface">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-surface-container p-8">
          <h1 className="mb-4 font-headline text-3xl font-bold">Privacy</h1>
          <p className="mb-6 text-on-surface-variant">
            This privacy policy explains how personal data is collected and processed.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">1. Controller</h2>
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
            <br />
            Phone: +49 1522 2169244
            <br />
            Email: info@meyermedia.eu
            <br />
            Website: meyermedia.eu
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">
            2. Collection and Storage of Personal Data
          </h2>
          <p className="text-on-surface-variant">
            2.1 When visiting the website, your browser automatically transmits information to our
            server, which is temporarily stored in log files.
          </p>
          <ul className="ml-6 mt-3 list-disc text-on-surface-variant">
            <li>IP address of the requesting device</li>
            <li>Date and time of access</li>
            <li>Name and URL of the requested file</li>
            <li>Referrer URL</li>
            <li>Browser information and, if applicable, operating system</li>
          </ul>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">3. Use of Cookies</h2>
          <p className="text-on-surface-variant">
            3.1 This website uses cookies. Cookies are small text files stored by your browser.
          </p>
          <p className="mt-3 text-on-surface-variant">3.2 We use the following types of cookies:</p>
          <ul className="ml-6 mt-3 list-disc text-on-surface-variant">
            <li>Technically necessary cookies for core website functions</li>
            <li>Preference cookies (for example, dark/light mode settings)</li>
          </ul>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">4. Contact</h2>
          <p className="text-on-surface-variant">
            4.1 If you contact us (for example via contact form or email), we store the data you
            provide to process your request and any follow-up questions.
          </p>
          <p className="mt-3 text-on-surface-variant">
            4.2 Data collected in this context is deleted once storage is no longer required, unless
            statutory retention obligations apply.
          </p>
          <p className="mt-3 text-on-surface-variant">
            4.3 If you are already a customer, your data may also be processed for contract
            performance, technical communication (for example maintenance windows, security notices,
            abuse notifications), and support handling.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">
            5. Legal Basis for Processing
          </h2>
          <ul className="ml-6 mt-3 list-disc text-on-surface-variant">
            <li>Art. 6(1)(f) GDPR: legitimate interests (website operation and security)</li>
            <li>Art. 6(1)(b) GDPR: contract performance or pre-contractual measures</li>
            <li>Art. 6(1)(a) GDPR: consent</li>
          </ul>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">6. Data Disclosure</h2>
          <p className="text-on-surface-variant">
            6.1 Personal data is not transferred to third parties for purposes other than those
            stated below.
          </p>
          <p className="mt-3 text-on-surface-variant">6.2 We disclose personal data only if:</p>
          <ul className="ml-6 mt-3 list-disc text-on-surface-variant">
            <li>You have given explicit consent (Art. 6(1)(a) GDPR)</li>
            <li>Disclosure is necessary for contract performance (Art. 6(1)(b) GDPR)</li>
            <li>There is a legal obligation to disclose data (Art. 6(1)(c) GDPR)</li>
          </ul>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">7. Hosting</h2>
          <p className="text-on-surface-variant">
            7.1 This website is hosted externally. Personal data collected on this website is stored
            on the host’s servers.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.2 Hosting is performed for contract performance (Art. 6(1)(b) GDPR) and for a secure,
            fast, and efficient provision of our online services (Art. 6(1)(f) GDPR).
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.3 As part of our services, we also provide email infrastructure and web hosting for
            customers. In this context, we process personal data either as an independent controller
            (Art. 4 no. 7 GDPR) or as a processor (Art. 4 no. 8 GDPR), depending on contractual
            arrangements.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.4 Typical categories of data in hosting/email operations include:
          </p>
          <ul className="ml-6 mt-3 list-disc text-on-surface-variant">
            <li>Master data (name, company, contact and contract details)</li>
            <li>Access/authentication data (for example username, hashed passwords, 2FA metadata)</li>
            <li>Communication data (email headers, metadata, and content depending on use)</li>
            <li>Technical operational data (IP addresses, server/security logs, timestamps)</li>
            <li>Support/ticket data (requests, attachments, processing notes)</li>
          </ul>
          <p className="mt-3 text-on-surface-variant">
            7.5 Processing purposes include provision and operation of hosting/email services, error
            analysis, abuse/attack detection, backup/recovery, contract execution, billing, and
            support.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.6 Legal bases include Art. 6(1)(b) GDPR (contract), Art. 6(1)(c) GDPR (legal
            obligations), and Art. 6(1)(f) GDPR (IT security, stability, abuse prevention). Where
            required, processing is additionally based on a data processing agreement pursuant to Art.
            28 GDPR.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.7 Recipients and sub-processors: data may be transferred to technically required service
            providers (for example data center, infrastructure, security, or email relay providers).
            Data processing agreements are concluded where required.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.8 Third-country transfers: if processing takes place outside the EU/EEA, it is only
            carried out with appropriate safeguards, in particular Standard Contractual Clauses
            pursuant to Art. 46 GDPR and additional technical/organizational safeguards.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.9 Segregation and access: access to customer systems follows the need-to-know principle,
            is logged, and is managed with role-based permissions where possible.
          </p>
          <p className="mt-3 text-on-surface-variant">
            7.10 Deletion/return: after contract termination, data is deleted or anonymized according
            to contractual terms, legal retention obligations, and agreed deletion periods; on
            request, we support export and migration.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">
            8. Your Rights as a Data Subject
          </h2>
          <ul className="ml-6 mt-3 list-disc text-on-surface-variant">
            <li>Art. 15 GDPR: right of access</li>
            <li>Art. 16 GDPR: right to rectification</li>
            <li>Art. 17 GDPR: right to erasure</li>
            <li>Art. 18 GDPR: right to restriction of processing</li>
            <li>Art. 20 GDPR: right to data portability</li>
            <li>Art. 21 GDPR: right to object</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
          </ul>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">9. Storage Period</h2>
          <p className="text-on-surface-variant">
            9.1 Personal data is stored only as long as necessary for the purposes pursued or as
            required by law.
          </p>
          <p className="mt-3 text-on-surface-variant">9.2 Log files are deleted automatically after 7 days at the latest.</p>
          <p className="mt-3 text-on-surface-variant">
            9.3 Contact data is deleted after communication has ended or after the business
            relationship ends, unless statutory retention obligations apply.
          </p>
          <p className="mt-3 text-on-surface-variant">
            9.4 For hosting and email services, additional service-specific deletion periods may
            apply (for example for backups, security logs, and ticket data), based on contract,
            legal requirements, and legitimate security interests.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">10. Security</h2>
          <p className="text-on-surface-variant">
            10.1 In accordance with Art. 32 GDPR and taking the state of the art into account, we
            implement appropriate technical and organizational measures to ensure a level of security
            appropriate to the risk.
          </p>
          <p className="mt-3 text-on-surface-variant">
            10.2 This website uses SSL/TLS encryption to protect data transmission.
          </p>
          <p className="mt-3 text-on-surface-variant">
            10.3 Measures include access controls, role-based permission concepts, encrypted data
            transmission, regular security updates, monitoring, backup strategies, and recovery
            processes.
          </p>
          <p className="mt-3 text-on-surface-variant">
            10.4 For email infrastructure and hosting, we additionally implement system hardening,
            logging, availability monitoring, and abuse detection.
          </p>

          <h2 className="mb-2 mt-6 font-headline text-xl font-bold text-on-surface">
            11. Changes to this Privacy Policy
          </h2>
          <p className="text-on-surface-variant">
            11.1 We reserve the right to adapt this privacy policy so it always complies with current
            legal requirements.
          </p>
          <p className="mt-3 text-on-surface-variant">
            11.2 The new privacy policy applies to your future visits.
          </p>
        </div>
      </main>
    </Layout>
  );
}
