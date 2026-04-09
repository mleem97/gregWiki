import React, {useMemo} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {motion, type Variants, useReducedMotion} from 'framer-motion';
import {getHomepageContent} from '../i18n/homepage';
import gregImage from '../image.png';
import {FaArrowUpRightFromSquare, FaDiscord, FaGithub, FaLifeRing, FaShop} from 'react-icons/fa6';

const viewport = {once: true, margin: '-90px'};

function buildVariants(reducedMotion: boolean) {
  const section: Variants = reducedMotion
    ? {hidden: {opacity: 0}, show: {opacity: 1}}
    : {
        hidden: {opacity: 0, y: 26},
        show: {
          opacity: 1,
          y: 0,
          transition: {duration: 0.65, ease: [0.16, 1, 0.3, 1]},
        },
      };

  const grid: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.09,
        delayChildren: reducedMotion ? 0 : 0.06,
      },
    },
  };

  const card: Variants = reducedMotion
    ? {hidden: {opacity: 0}, show: {opacity: 1}}
    : {
        hidden: {opacity: 0, y: 18, scale: 0.98},
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {duration: 0.45, ease: [0.16, 1, 0.3, 1]},
        },
      };

  const textReveal: Variants = reducedMotion
    ? {hidden: {opacity: 0}, show: {opacity: 1}}
    : {
        hidden: {opacity: 0, y: 18},
        show: {
          opacity: 1,
          y: 0,
          transition: {duration: 0.5, ease: [0.16, 1, 0.3, 1]},
        },
      };

  return {section, grid, card, textReveal};
}

export default function HomePage(): JSX.Element {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  const t = getHomepageContent(currentLocale);
  const reducedMotion = useReducedMotion();
  const variants = useMemo(() => buildVariants(Boolean(reducedMotion)), [reducedMotion]);

  return (
    <Layout
      title="Home"
      description="Community documentation for gregFramework — Data Center modding, plugins, and hooks."
    >
      <main className="bg-background text-on-surface font-sans min-h-screen editorial-bleed bg-hero-gradient">
        <section className="hero-motion-wrap relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
          <div className="hero-particles" aria-hidden="true" />
          <div className="hero-orb hero-orb-pink" aria-hidden="true" />
          <div className="hero-orb hero-orb-green" aria-hidden="true" />

          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-high px-4 py-1.5"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" aria-hidden />
            <span className="text-xs font-bold uppercase tracking-widest text-primary-dim">
              {t.heroBadge}
            </span>
          </motion.div>

          <motion.h1
            className="homepage-logo-title mb-6 text-5xl font-black leading-none tracking-tighter text-on-surface md:text-7xl lg:text-8xl"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
          >
            <span className="text-on-surface">{t.heroBrandLine1}</span>
            <span className="bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
              {t.heroBrandLine2Gradient}
            </span>
          </motion.h1>

          <motion.h2
            className="mb-4 max-w-3xl font-headline text-2xl font-bold tracking-tight text-on-surface md:text-4xl"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: reducedMotion ? 0 : 0.08}}
          >
            {t.heroLine1}
            <br />
            <span className="text-on-surface-variant">{t.heroLine2}</span>
          </motion.h2>

          <motion.p
            className="mb-10 max-w-2xl text-base font-medium leading-relaxed text-on-surface-variant md:text-xl"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: reducedMotion ? 0 : 0.14}}
          >
            {t.heroSub1}
            <br />
            {t.heroSub2}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: reducedMotion ? 0 : 0.22}}
          >
            <Link
              to="/wiki/mods/framework"
              className="btn-primary hero-glow rounded-lg px-10 py-4 text-lg"
            >
              {t.ctaStart}
            </Link>
            <Link to="/mods" className="btn-outline rounded-lg px-10 py-4 text-lg">
              {t.ctaMods}
            </Link>
          </motion.div>
        </section>

        <motion.section
          id="features"
          className="section-surface-alt px-4 py-24"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <motion.div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-12"
            variants={variants.grid}
          >
            <motion.article
              className="app-card app-card-motion app-card-glow glass-card relative overflow-hidden rounded-2xl p-10 md:col-span-8"
              variants={variants.card}
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -4,
                      transition: {type: 'spring', stiffness: 280, damping: 18},
                    }
              }
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-6 text-4xl text-primary">layers</span>
                <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">
                  {t.featureTitles[0]}
                </h3>
                <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                  {t.featureDescriptions[0]}
                </p>
              </div>
            </motion.article>
            <motion.article
              className="app-card app-card-motion app-card-glow rounded-2xl border border-outline-variant/10 p-8 md:col-span-4"
              variants={variants.card}
            >
              <span className="material-symbols-outlined mb-6 text-3xl text-tertiary">cable</span>
              <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
                {t.featureTitles[1]}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {t.featureDescriptions[1]}
              </p>
            </motion.article>
            <motion.article
              className="app-card app-card-motion app-card-glow rounded-2xl border border-outline-variant/10 p-8 md:col-span-4"
              variants={variants.card}
            >
              <span className="material-symbols-outlined mb-6 text-3xl text-secondary">
                menu_book
              </span>
              <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
                {t.featureTitles[2]}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {t.featureDescriptions[2]}
              </p>
            </motion.article>
            <motion.article
              className="app-card app-card-motion app-card-glow flex flex-col justify-between rounded-2xl border border-outline-variant/10 p-10 md:col-span-8"
              variants={variants.card}
            >
              <div>
                <span className="material-symbols-outlined mb-6 text-4xl text-primary">groups</span>
                <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">
                  {t.featureTitles[3]}
                </h3>
                <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
                  {t.featureDescriptions[3]}
                </p>
              </div>
            </motion.article>
          </motion.div>
        </motion.section>

        <motion.section
          id="code"
          className="section-surface-alt px-4 py-24"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-2 md:grid-cols-2">
            <div>
              <h2 className="mb-6 font-headline text-4xl font-bold text-on-surface">
                {t.codeSectionTitle}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                {t.codeSectionLead}
              </p>
              <ul className="space-y-4 text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-primary">
                    check_circle
                  </span>
                  <span>MelonLoader + Harmony patches with typed hook names</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-primary">
                    check_circle
                  </span>
                  <span>FFM plugins and FMF mods documented beside release metadata</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-primary">
                    check_circle
                  </span>
                  <span>Split repos: gregCore, gregMods, gregExtensions, gregWiki</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container-highest p-1 shadow-2xl">
              <div className="rounded-lg bg-surface-container-lowest p-6 font-mono text-sm">
                <div className="mb-4 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-error-dim" />
                  <div className="h-3 w-3 rounded-full bg-tertiary" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <pre className="leading-relaxed text-on-surface/90">
                  <span className="text-error-dim">using</span> MelonLoader;
                  {'\n\n'}
                  <span className="text-tertiary">public</span>{' '}
                  <span className="text-tertiary">sealed</span>{' '}
                  <span className="text-tertiary">class</span>{' '}
                  <span className="text-primary">MyMod</span> : MelonMod
                  {' {\n'}
                  {'  '}
                  <span className="text-tertiary">public</span>{' '}
                  <span className="text-tertiary">override</span>{' '}
                  <span className="text-tertiary">void</span>{' '}
                  <span className="text-primary-dim">OnInitializeMelon</span>
                  {'() {\n'}
                  {'    '}
                  <span className="text-on-surface-variant">
                    // gregFramework — attach hooks, log, ship.
                  </span>
                  {'\n  }\n}'}
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="docs"
          className="px-4 py-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto max-w-6xl text-center">
            <motion.h2
              className="mb-10 font-headline text-3xl font-bold text-on-surface"
              variants={variants.textReveal}
            >
              {t.knowledgeSectionTitle}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              variants={variants.grid}
            >
              {t.knowledgeLinks.map((doc) => (
                <motion.div key={doc.link} variants={variants.card}>
                  <Link
                    to={doc.link}
                    className="app-card app-card-motion app-card-glow group block rounded-lg p-5 text-left text-on-surface"
                  >
                    <div className="mb-2 font-headline text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
                      {doc.title}
                    </div>
                    <div className="text-sm text-on-surface-variant">{doc.description}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="ecosystem"
          className="section-surface-alt px-4 py-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto max-w-5xl text-center">
            <motion.h2
              className="mb-10 font-headline text-3xl font-bold text-on-surface"
              variants={variants.textReveal}
            >
              {t.workflowSectionTitle}
            </motion.h2>
            <motion.div className="grid grid-cols-1 gap-4 md:grid-cols-2" variants={variants.grid}>
              {t.workflowLinks.map((doc) => (
                <motion.div key={doc.link} variants={variants.card}>
                  <Link
                    to={doc.link}
                    className="app-card app-card-motion app-card-glow group block rounded-lg p-5 text-left text-on-surface"
                  >
                    <div className="mb-2 font-headline text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
                      {doc.title}
                    </div>
                    <div className="text-sm text-on-surface-variant">{doc.description}</div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="discord-cta"
          className="px-4 py-24"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-surface-container to-surface-container-high p-12 text-center md:p-16">
            <div
              className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
              aria-hidden
            />
            <div className="relative z-10">
              <h2 className="mb-6 font-headline text-3xl font-bold text-on-surface md:text-4xl">
                {t.ctaDiscordTitle}
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-on-surface-variant">
                {t.ctaDiscordLead}
              </p>
              <Link
                to="https://discord.gg/greg"
                className="btn-primary hero-glow inline-flex items-center gap-2 rounded-lg px-10 py-4 text-lg"
              >
                <FaDiscord className="text-xl" />
                {t.ctaDiscordButton}
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="greg-story"
          className="px-4 py-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="app-card app-card-glow flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-8"
              variants={variants.card}
            >
              <div>
                <h2 className="mb-4 font-headline text-2xl font-bold text-on-surface md:text-3xl">
                  {t.gregTitle}
                </h2>
                <p className="mb-4 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {t.gregText1}
                </p>
                <p className="mb-4 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {t.gregText2}
                </p>
                <p className="font-headline text-lg font-bold italic text-secondary">
                  {t.gregQuote}
                </p>
              </div>
              <motion.div
                className="shrink-0"
                whileHover={reducedMotion ? undefined : {rotate: 1.2, y: -3}}
              >
                <div className="h-40 w-32 overflow-hidden rounded-xl border-2 border-primary/25 md:h-56 md:w-48">
                  <img src={gregImage} alt="Greg" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="community"
          className="px-4 py-16"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="mb-6 rounded-xl border border-outline-variant/15 bg-surface-container-high p-4"
              variants={variants.card}
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-tertiary">
                {t.comingSoon}
              </div>
              <div className="mt-1 text-base font-medium text-on-surface">{t.comingSoonText}</div>
            </motion.div>

            <motion.div
              className="app-card app-card-glow flex flex-col gap-6 rounded-xl p-6 md:flex-row md:items-center md:justify-between"
              variants={variants.card}
            >
              <div>
                <h3 className="font-headline text-2xl font-bold text-on-surface">
                  {t.communityTitle}
                </h3>
                <p className="mt-2 text-on-surface-variant">{t.communityText}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="https://frikadellental.de" className="btn-social">
                  <FaArrowUpRightFromSquare /> frikadellental.de
                </Link>
                <Link to="/mods" className="btn-social">
                  <FaShop /> {t.availableModsLabel}
                </Link>
                <Link to="https://github.com/mleem97/gregFramework" className="btn-social">
                  <FaGithub /> {t.repositoryLabel}
                </Link>
                <Link
                  to="https://discord.gg/greg"
                  className="btn-social border-transparent bg-[#5865F2] text-white hover:bg-[#4752C4]"
                >
                  <FaDiscord /> {t.joinLabel}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="support"
          className="section-surface-alt px-4 py-16"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{t.supportTitle}</h3>
              <p className="text-on-surface-variant">{t.supportText}</p>
            </div>
            <motion.div whileHover={reducedMotion ? undefined : {y: -2, scale: 1.01}}>
              <Link
                to="https://github.com/mleem97/gregFramework/issues"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3"
              >
                <FaLifeRing /> {t.supportCta}
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
