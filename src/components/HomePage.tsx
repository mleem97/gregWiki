import React, {useEffect, useMemo, useState} from 'react';
import {motion, type Variants, useReducedMotion} from 'framer-motion';
import {en as homepageContentEn} from '../i18n/homepage/en';
import {
  FaArrowUpRightFromSquare,
  FaDiscord,
  FaDownload,
  FaGithub,
  FaLifeRing,
  FaShop,
} from 'react-icons/fa6';
import {GregCoreRandomSnippet} from './GregCoreRandomSnippet';
import GradientBlinds from './GradientBlinds';
import DotGrid from './DotGrid';

const GREG_MODMANAGER_LATEST = 'https://github.com/mleem97/GregToolsModmanager/releases/latest';
const TEAM_GREG_GIT = 'https://git.datacentermods.com/teamGreg';
const DISCORD_GUILD_ID = '1392073682133848075';
const DISCORD_WIDGET_API = `https://discord.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`;
const LOWER_BACKGROUND_VARIANT: 'shape' | 'dot' = 'dot';

const viewport = {once: true, margin: '-90px'};

type DiscordWidgetResponse = {
  id: string;
  name: string;
  instant_invite?: string;
  presence_count: number;
  channels: any[];
  members: any[];
};

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
  const [discordWidget, setDiscordWidget] = useState<DiscordWidgetResponse | null>(null);

  useEffect(() => {
    fetch(DISCORD_WIDGET_API).then(r => r.json()).then(setDiscordWidget).catch(() => {});
  }, []);

  const discordInviteLink = discordWidget?.instant_invite ?? 'https://discord.gg/greg';

  return (
      <div className="bg-slate-950 text-white font-sans min-h-screen overflow-x-hidden">
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
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

          <motion.h1
            className="relative z-10 mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl lg:text-8xl"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
          >
            <span>{t.heroBrandLine1}</span>
            <span className="bg-gradient-to-br from-teal-400 to-cyan-500 bg-clip-text text-transparent block">
              {t.heroBrandLine2Gradient}
            </span>
          </motion.h1>

          <motion.h2
            className="relative z-10 mb-4 max-w-3xl text-2xl font-bold tracking-tight md:text-4xl"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: 0.08}}
          >
            {t.heroLine1}
            <br />
            <span className="text-slate-400">{t.heroLine2}</span>
          </motion.h2>

          <motion.p
            className="relative z-10 mb-10 max-w-2xl text-base font-medium leading-relaxed text-slate-400 md:text-xl"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: 0.14}}
          >
            {t.heroSub1}
            <br />
            {t.heroSub2}
          </motion.p>

          <motion.div
            className="relative z-10 flex flex-wrap items-center justify-center gap-4"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={variants.textReveal}
            transition={{delay: 0.22}}
          >
            <a href="/01_getting-started/intro" className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20">
              {t.ctaStart}
            </a>
            <a href="https://greg-store.eu" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-10 rounded-lg border border-slate-700 transition-all">
              {t.ctaMods}
            </a>
            <a
              href={GREG_MODMANAGER_LATEST}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/50 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-lg border border-teal-500/30 hover:border-teal-500 transition-all"
            >
              <FaDownload className="text-lg" aria-hidden />
              {t.ctaModManager}
            </a>
          </motion.div>
        </section>

        <section id="features" className="bg-slate-900/50 px-4 py-24 border-y border-slate-800">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-12">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-10 md:col-span-8 hover:border-teal-500/50 transition-colors">
                <div className="text-teal-400 mb-6 text-4xl font-bold">01</div>
                <h3 className="mb-4 text-3xl font-bold">
                  {t.featureTitles[0]}
                </h3>
                <p className="max-w-md text-lg leading-relaxed text-slate-400">
                  {t.featureDescriptions[0]}
                </p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 md:col-span-4 hover:border-teal-500/50 transition-colors">
              <div className="text-teal-400 mb-6 text-3xl font-bold">02</div>
              <h3 className="mb-3 text-xl font-bold">
                {t.featureTitles[1]}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {t.featureDescriptions[1]}
              </p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 md:col-span-4 hover:border-teal-500/50 transition-colors">
              <div className="text-teal-400 mb-6 text-3xl font-bold">03</div>
              <h3 className="mb-3 text-xl font-bold">
                {t.featureTitles[2]}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {t.featureDescriptions[2]}
              </p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-10 md:col-span-8 hover:border-teal-500/50 transition-colors">
                <div className="text-teal-400 mb-6 text-4xl font-bold">04</div>
                <h3 className="mb-4 text-3xl font-bold">
                  {t.featureTitles[3]}
                </h3>
                <p className="max-w-lg text-lg leading-relaxed text-slate-400">
                  {t.featureDescriptions[3]}
                </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-24">
            <div className="mx-auto max-w-4xl text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px]" />
                <h2 className="text-4xl font-bold mb-6">{t.modManagerSectionTitle}</h2>
                <p className="text-xl text-slate-400 mb-10">{t.modManagerSectionBody}</p>
                <a href={GREG_MODMANAGER_LATEST} className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-5 px-12 rounded-xl text-xl transition-all shadow-xl shadow-teal-500/20">
                    <FaDownload /> {t.modManagerDownloadLabel}
                </a>
            </div>
        </section>

        <footer className="bg-slate-950 py-20 px-4 border-t border-slate-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-teal-400 mb-2">gregFramework</h2>
                    <p className="text-slate-500">Built for the community, by teamGreg.</p>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/mleem97/gregCore" className="text-slate-400 hover:text-white transition-colors text-3xl"><FaGithub /></a>
                    <a href="https://discord.gg/greg" className="text-slate-400 hover:text-white transition-colors text-3xl"><FaDiscord /></a>
                </div>
            </div>
        </footer>
      </div>
  );
}
