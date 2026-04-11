import React, {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {motion, type Variants, useReducedMotion} from 'framer-motion';
import {en as homepageContentEn} from '../i18n/homepage/en';
import gregImage from '../image.png';
import {
  FaArrowUpRightFromSquare,
  FaDiscord,
  FaDownload,
  FaGithub,
  FaLifeRing,
  FaShop,
} from 'react-icons/fa6';
import {GregCoreRandomSnippet} from '../components/GregCoreRandomSnippet';
import GradientBlinds from '../components/GradientBlinds';
import ShapeGrid from '../components/ShapeGrid';
import DotGrid from '../components/DotGrid';

/** Always resolves to the newest GitHub release (redirect). */
const GREG_MODMANAGER_LATEST =
  'https://github.com/mleem97/GregToolsModmanager/releases/latest';
const TEAM_GREG_GIT = 'https://git.datacentermods.com/teamGreg';
const DISCORD_GUILD_ID = '1392073682133848075';
const DISCORD_WIDGET_API = `https://discord.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`;
const LOWER_BACKGROUND_VARIANT: 'shape' | 'dot' = 'dot';

const viewport = {once: true, margin: '-90px'};

type DiscordWidgetChannel = {
  id: string;
  name: string;
  position: number;
};

type DiscordWidgetMember = {
  id: string;
  username: string;
  status: string;
  avatar_url?: string;
};

type DiscordWidgetResponse = {
  id: string;
  name: string;
  instant_invite?: string;
  presence_count: number;
  channels: DiscordWidgetChannel[];
  members: DiscordWidgetMember[];
};

/** Inline `greg_hooks.json` in copy when the string contains that token. */
function formatBulletWithOptionalCode(text: string): React.ReactNode {
  if (!text.includes('greg_hooks.json')) {
    return text;
  }
  const parts = text.split('greg_hooks.json');
  let keyCursor = 0;
  return (
    <>
      {parts.map((part) => {
        const key = `${part}-${keyCursor}`;
        keyCursor += part.length + 1;
        return (
          <React.Fragment key={key}>
            {part}
            {keyCursor <= text.length ? (
            <code className="text-xs">greg_hooks.json</code>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

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
  const t = homepageContentEn;
  const reducedMotion = useReducedMotion();
  const variants = useMemo(() => buildVariants(Boolean(reducedMotion)), [reducedMotion]);
  const showDataCenterModsComingSoon = useMemo(() => {
    if (globalThis.window === undefined) {
      return false;
    }
    const hostname = globalThis.window.location.hostname.toLowerCase();
    return (
      hostname === 'datacentermods.com' ||
      hostname === 'www.datacentermods.com' ||
      hostname.endsWith('.datacentermods.com')
    );
  }, []);
  const [discordWidget, setDiscordWidget] = useState<DiscordWidgetResponse | null>(null);
  const [discordWidgetError, setDiscordWidgetError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function loadDiscordWidget() {
      try {
        setDiscordWidgetError(null);
        const response = await fetch(DISCORD_WIDGET_API, {signal: abortController.signal});
        if (!response.ok) {
          throw new Error(`Discord widget request failed with ${response.status}`);
        }
        const payload = (await response.json()) as DiscordWidgetResponse;
        setDiscordWidget(payload);
      } catch (error) {
        if ((error as Error).name === 'AbortError') {
          return;
        }
        setDiscordWidgetError('Discord widget is currently unavailable.');
      }
    }

    loadDiscordWidget();

    return () => {
      abortController.abort();
    };
  }, []);

  const discordInviteLink = discordWidget?.instant_invite ?? 'https://discord.gg/greg';
  const discordVisibleMembers = discordWidget?.members.slice(0, 6) ?? [];
  const discordVisibleChannels = discordWidget?.channels.slice(0, 3) ?? [];

  return (
    <Layout
      title="Home"
      description="gregFramework: player help at /players, mod catalog, and mod-author wiki at /wiki for Data Center."
    >
      <main className="bg-background text-on-surface font-sans min-h-screen editorial-bleed bg-hero-gradient">
        <section className="hero-motion-wrap relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
          <div className="absolute inset-0 z-0 opacity-60" aria-hidden>
            <GradientBlinds
              className="h-full w-full"
              gradientColors={['#001715', '#001e1c', '#002422', '#08c1a6', '#1cede1', '#64d0ff']}
              angle={-16}
              blindCount={20}
              blindMinWidth={52}
              noise={0.12}
              mirrorGradient
              spotlightRadius={0.42}
              spotlightSoftness={1.2}
              spotlightOpacity={0.72}
              distortAmount={0.15}
              mouseDampening={0.2}
              shineDirection="left"
              mixBlendMode="lighten"
            />
          </div>
          <div className="hero-particles" aria-hidden="true" />
          <div className="hero-orb hero-orb-pink" aria-hidden="true" />
          <div className="hero-orb hero-orb-green" aria-hidden="true" />

          <motion.h1
            className="homepage-logo-title relative z-10 mb-6 text-5xl font-black leading-none tracking-tighter text-on-surface md:text-7xl lg:text-8xl"
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
            className="relative z-10 mb-4 max-w-3xl font-headline text-2xl font-bold tracking-tight text-on-surface md:text-4xl"
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
            className="relative z-10 mb-10 max-w-2xl text-base font-medium leading-relaxed text-on-surface-variant md:text-xl"
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
            className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: reducedMotion ? 0 : 0.22}}
          >
            <Link to="/players" className="btn-primary hero-glow rounded-lg px-8 py-4 text-lg md:px-10">
              {t.ctaStart}
            </Link>
            <Link to="/mods" className="btn-outline rounded-lg px-8 py-4 text-lg md:px-10">
              {t.ctaMods}
            </Link>
            <a
              href={GREG_MODMANAGER_LATEST}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg border-primary/35 px-8 py-4 text-lg text-on-surface hover:border-primary md:px-10"
            >
              <FaDownload className="text-lg" aria-hidden />
              {t.ctaModManager}
            </a>
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
              className="app-card app-card-motion app-card-glow rounded-2xl p-8 md:col-span-4"
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
              className="app-card app-card-motion app-card-glow rounded-2xl p-8 md:col-span-4"
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
              className="app-card app-card-motion app-card-glow flex flex-col justify-between rounded-2xl p-10 md:col-span-8"
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
          id="greg-modmanager"
          className="px-4 py-20"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container p-10 text-center md:p-14">
            <div
              className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-secondary/10 blur-[90px]"
              aria-hidden
            />
            <div className="relative z-10">
              <span className="material-symbols-outlined mb-4 text-5xl text-primary" aria-hidden>
                download_for_offline
              </span>
              <h2 className="mb-4 font-headline text-3xl font-bold text-on-surface md:text-4xl">
                {t.modManagerSectionTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
                {t.modManagerSectionBody}
              </p>
              <a
                href={GREG_MODMANAGER_LATEST}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hero-glow mb-4 inline-flex items-center gap-2 rounded-lg px-10 py-4 text-lg"
              >
                <FaDownload className="text-xl" aria-hidden />
                {t.modManagerDownloadLabel}
              </a>
              <p className="text-sm text-on-surface-variant/90">{t.modManagerLatestHint}</p>
              <p className="mt-2 text-sm text-on-surface-variant/90">
                Attribution: Greg Mod Manager includes code originating from{' '}
                <a
                  href="https://github.com/ASavageSwan/-DataCenter-ModLoader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ASavageSwan / DataCenter-ModLoader
                </a>
                {'.'}
              </p>
            </div>
          </div>
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
                {t.codeSectionBullets.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-primary">
                      check_circle
                    </span>
                    <span>{formatBulletWithOptionalCode(line)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <GregCoreRandomSnippet
              caption={t.codeSnippetCaption}
              loadingLabel={t.codeSnippetLoading}
            />
          </div>
        </motion.section>

        <div className="shapegrid-surface">
          <div className="shapegrid-surface-canvas" aria-hidden>
            {LOWER_BACKGROUND_VARIANT === 'dot' ? (
              <DotGrid
                className="h-full w-full"
                dotSize={8}
                gap={22}
                baseColor="#0f514c"
                activeColor="#61f4d8"
                proximity={160}
                shockStrength={4}
                returnDuration={1.25}
              />
            ) : (
              <ShapeGrid className="h-full w-full" cellSize={66} strokeWidth={1} drift={0.2} />
            )}
          </div>
          <div className="shapegrid-surface-vignette" aria-hidden />

          <motion.section
            id="docs"
            className="relative z-10 px-4 py-20"
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
            className="section-surface-alt relative z-10 px-4 py-20"
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
            className="relative z-10 px-4 py-20"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.section}
          >
          <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <motion.div
                id="discord-cta"
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface-container to-surface-container-high p-8 text-center md:p-10"
                variants={variants.card}
              >
                <div
                  className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]"
                  aria-hidden
                />
                <div className="relative z-10">
                  <h2 className="mb-6 font-headline text-3xl font-bold text-on-surface md:text-4xl">
                    {t.ctaDiscordTitle}
                  </h2>
                  <p className="mb-10 text-lg text-on-surface-variant">{t.ctaDiscordLead}</p>
                  <Link
                    to={discordInviteLink}
                    className="btn-primary hero-glow inline-flex items-center gap-2 rounded-lg px-10 py-4 text-lg"
                  >
                    <FaDiscord className="text-xl" />
                    {t.ctaDiscordButton}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                id="discord-widget"
                className="app-card app-card-glow rounded-2xl p-6"
                variants={variants.card}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-headline text-xl font-bold text-on-surface">
                    {discordWidget?.name ?? 'GregFramework Discord'}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-xs font-semibold text-on-surface-variant">
                    <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
                    {discordWidget?.presence_count ?? 0} online
                  </span>
                </div>

                {discordWidgetError ? (
                  <p className="text-sm text-on-surface-variant">{discordWidgetError}</p>
                ) : null}

                {!discordWidget && !discordWidgetError ? (
                  <p className="text-sm text-on-surface-variant">Loading Discord widget…</p>
                ) : null}

                {discordVisibleChannels.length > 0 ? (
                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                      Active channels
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {discordVisibleChannels.map((channel) => (
                        <span
                          key={channel.id}
                          className="rounded-full bg-surface-container px-2.5 py-1 text-xs text-on-surface-variant"
                        >
                          #{channel.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {discordVisibleMembers.length > 0 ? (
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                      Online now
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {discordVisibleMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-2 rounded-lg bg-surface-container px-2.5 py-2"
                        >
                          {member.avatar_url ? (
                            <img
                              src={member.avatar_url}
                              alt={member.username}
                              className="h-8 w-8 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-primary/20" aria-hidden />
                          )}
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold text-on-surface">
                              {member.username}
                            </div>
                            <div className="text-xs text-on-surface-variant">{member.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </div>

            <motion.div
              id="greg-story"
              className="app-card app-card-glow flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-8"
              variants={variants.card}
            >
              <div>
                <h2 className="mb-4 font-headline text-2xl font-bold text-on-surface md:text-3xl">
                  {t.gregTitle}
                </h2>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-tertiary">
                  {t.communityTitle}
                </p>
                <p className="mb-4 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {t.communityText}
                </p>
                <p className="mb-4 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {t.gregText1}
                </p>
                <p className="mb-4 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                  {t.gregText2}
                </p>
                <p className="font-headline text-lg font-bold italic text-secondary">{t.gregQuote}</p>
              </div>
              <motion.div
                className="shrink-0"
                whileHover={reducedMotion ? undefined : {rotate: 1.2, y: -3}}
              >
                <div className="h-40 w-32 overflow-hidden rounded-xl md:h-56 md:w-48">
                  <img src={gregImage} alt="Greg" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div id="community" className="lg:col-span-2" variants={variants.card}>
              {showDataCenterModsComingSoon ? (
                <motion.div
                  className="mb-6 rounded-xl bg-surface-container-high p-4"
                  variants={variants.card}
                >
                  <div className="text-sm font-semibold uppercase tracking-wide text-tertiary">
                    {t.comingSoon}
                  </div>
                  <div className="mt-1 text-base font-medium text-on-surface">{t.comingSoonText}</div>
                </motion.div>
              ) : null}

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
                  <Link to={TEAM_GREG_GIT} className="btn-social">
                    <FaGithub /> teamGreg Git
                  </Link>
                  <Link
                    to="https://discord.gg/greg"
                    className="btn-social border-transparent bg-[#5865F2] text-white hover:bg-[#4752C4]"
                  >
                    <FaDiscord /> {t.joinLabel}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
          </motion.section>
        </div>

        <motion.section
          id="support"
          className="section-surface-alt px-4 py-16"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={variants.section}
        >
          <div className="mx-auto flex w-full max-w-[96rem] flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{t.supportTitle}</h3>
              <p className="text-on-surface-variant">{t.supportText}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={reducedMotion ? undefined : {y: -2, scale: 1.01}}>
                <Link
                  to="/wiki/developers"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3"
                >
                  <FaLifeRing /> {t.supportCta}
                </Link>
              </motion.div>
              <motion.div whileHover={reducedMotion ? undefined : {y: -2, scale: 1.01}}>
                <Link
                  to="https://github.com/mleem97/gregCore"
                  className="btn-social inline-flex items-center gap-2 rounded-xl px-5 py-3"
                >
                  <FaGithub /> {t.repositoryLabel}
                </Link>
              </motion.div>
              <motion.div whileHover={reducedMotion ? undefined : {y: -2, scale: 1.01}}>
                <Link
                  to={TEAM_GREG_GIT}
                  className="btn-social inline-flex items-center gap-2 rounded-xl px-5 py-3"
                >
                  <FaGithub /> teamGreg Git
                </Link>
              </motion.div>
              <motion.div whileHover={reducedMotion ? undefined : {y: -2, scale: 1.01}}>
                <Link
                  to="https://discord.gg/greg"
                  className="btn-social inline-flex items-center gap-2 rounded-xl px-5 py-3"
                >
                  <FaDiscord /> {t.joinLabel}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
