import { f as createAstro, c as createComponent, e as addAttribute, d as renderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_gdVP-I2a.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useMemo, useState } from 'react';
import { useReducedMotion, motion } from 'framer-motion';
import { FaDownload, FaGithub, FaDiscord } from 'react-icons/fa6';
import { Renderer, Program, Triangle, Mesh } from 'ogl';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const sharedKnowledgeLinksEn = [
  {
    title: "For players",
    description: "MelonLoader, Greg Mod Manager, Workshop, troubleshooting — separate from the author wiki.",
    link: "/players"
  },
  {
    title: "Mod author wiki",
    description: "Getting started, hooks, plugins, mods, and reference (this is /wiki).",
    link: "/wiki"
  },
  {
    title: "Release channels",
    description: "Where builds ship: Steam Workshop and GitHub Releases.",
    link: "/wiki/developers"
  },
  {
    title: "Mod catalog",
    description: "Modules with docs, versions, and download links.",
    link: "/mods"
  }
];
const sharedWorkflowLinksEn = [
  {
    title: "Getting started",
    description: "Workspace layout, build gregCore, hooks and registries.",
    link: "/wiki/getting-started/quickstart"
  },
  {
    title: "Documentation hub",
    description: "Full index: framework, plugins, mods, releases, roadmap.",
    link: "/wiki/developers"
  },
  {
    title: "Mod developer guide",
    description: "MelonLoader setup, gregCore hooks, and workflow.",
    link: "/wiki/developers"
  },
  {
    title: "Contributor workflow",
    description: "How this docs site and the repos are maintained.",
    link: "/wiki/contributors/docusaurus-workflow"
  }
];
const homepageShellEn = {
  heroBadge: "MODDING FOR DATA CENTER",
  heroBrandLine1: "greg",
  heroBrandLine2Gradient: "Framework",
  knowledgeSectionTitle: "Start here",
  workflowSectionTitle: "For authors and contributors",
  codeSectionTitle: "How mods connect to the game",
  codeSectionLead: "Mods use MelonLoader and Harmony. gregCore turns game methods into stable greg.* events your code can subscribe to — see the mod author wiki and Documentation hub.",
  codeSnippetCaption: "Random practical usage from gregCore",
  codeSnippetLoading: "Loading code sample…",
  codeSectionBullets: [
    "gregCore patches the game and emits typed greg.* hook names (see greg_hooks.json).",
    "The wiki and catalog list each mod with releases and dependencies.",
    "Source is split across repos (for example gregCore, gregMods, gregExtensions, gregWiki)."
  ],
  ctaDiscordTitle: "Questions?",
  ctaDiscordLead: "Need help with installs, compatibility, or setup? Ask the community and get practical answers.",
  ctaDiscordButton: "Open Discord",
  knowledgeLinks: sharedKnowledgeLinksEn,
  workflowLinks: sharedWorkflowLinksEn
};

const en = {
  ...homepageShellEn,
  heroLine1: "Modding for Data Center.",
  heroLine2: "Just make it work.",
  heroSub1: "Install, manage, and play your mods without the usual headache.",
  heroSub2: "No magic. Just tools that work.",
  ctaStart: "For players",
  ctaMods: "See what's in the Catalog",
  ctaModManager: "Currently Windows Only",
  modManagerSectionTitle: '🎮 For Players (The "Greg" Approach)',
  modManagerSectionBody: "The Mod Manager is basically your toolbox. Use it to browse the Workshop, handle installs, and check missing dependencies. It is the easiest way to get started without digging through folders.",
  modManagerDownloadLabel: "Currently Windows Only",
  featureTitles: ["Help when it breaks", "A cleaner Menu", "⚙️ Why use a Framework?", "Compatibility"],
  featureDescriptions: [
    "If something goes wrong, the Player Help page gives straightforward fixes so you can get back into the game.",
    "With gregCore running, the main menu is reorganized so mods, settings, and multiplayer each have their own space.",
    "You do not need to care about the internals. The framework sits in the background and helps mods talk to the game more safely.",
    "Catalog checks help reduce guesswork about whether a mod is current and likely to work."
  ]};

const MAX_COLORS = 8;
const hexToRGB = (hex) => {
  const c = hex.replace("#", "").padEnd(6, "0");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
};
const prepStops = (stops) => {
  const base = (stops && stops.length ? stops : ["#61f4d8", "#08c1a6"]).slice(0, MAX_COLORS);
  if (base.length === 1) {
    base.push(base[0]);
  }
  while (base.length < MAX_COLORS) {
    base.push(base[base.length - 1]);
  }
  const arr = [];
  for (let index = 0; index < MAX_COLORS; index += 1) {
    arr.push(hexToRGB(base[index]));
  }
  const count = Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2));
  return { arr, count };
};
function GradientBlinds({
  className,
  dpr,
  paused = false,
  gradientColors,
  angle = 0,
  noise = 0.25,
  blindCount = 16,
  blindMinWidth = 60,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  distortAmount = 0,
  shineDirection = "left",
  mixBlendMode = "lighten"
}) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const programRef = useRef(null);
  const meshRef = useRef(null);
  const geometryRef = useRef(null);
  const rendererRef = useRef(null);
  const mouseTargetRef = useRef([0, 0]);
  const lastTimeRef = useRef(0);
  const firstResizeRef = useRef(true);
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") {
      return void 0;
    }
    const renderer = new Renderer({
      dpr: dpr ?? (window.devicePixelRatio || 1),
      alpha: true,
      antialias: true
    });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);
    const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
    const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform float uAngle;
uniform float uNoise;
uniform float uBlindCount;
uniform float uSpotlightRadius;
uniform float uSpotlightSoftness;
uniform float uSpotlightOpacity;
uniform float uMirror;
uniform float uDistort;
uniform float uShineFlip;
uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

varying vec2 vUv;

float rand(vec2 co){
  return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rotate2D(vec2 p, float a){
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

vec3 getGradientColor(float t){
  float tt = clamp(t, 0.0, 1.0);
  int count = uColorCount;
  if (count < 2) count = 2;
  float scaled = tt * float(count - 1);
  float seg = floor(scaled);
  float f = fract(scaled);

  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7;
  if (count > 6) return uColor6;
  if (count > 5) return uColor5;
  if (count > 4) return uColor4;
  if (count > 3) return uColor3;
  if (count > 2) return uColor2;
  return uColor1;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv0 = fragCoord.xy / iResolution.xy;

  float aspect = iResolution.x / iResolution.y;
  vec2 p = uv0 * 2.0 - 1.0;
  p.x *= aspect;
  vec2 pr = rotate2D(p, uAngle);
  pr.x /= aspect;
  vec2 uv = pr * 0.5 + 0.5;

  vec2 uvMod = uv;
  if (uDistort > 0.0) {
    float a = uvMod.y * 6.0;
    float b = uvMod.x * 6.0;
    float w = 0.01 * uDistort;
    uvMod.x += sin(a) * w;
    uvMod.y += cos(b) * w;
  }

  float t = uvMod.x;
  if (uMirror > 0.5) {
    t = 1.0 - abs(1.0 - 2.0 * fract(t));
  }

  vec3 base = getGradientColor(t);

  vec2 offset = vec2(iMouse.x / iResolution.x, iMouse.y / iResolution.y);
  float d = length(uv0 - offset);
  float r = max(uSpotlightRadius, 1e-4);
  float dn = d / r;
  float spot = (1.0 - 2.0 * pow(dn, uSpotlightSoftness)) * uSpotlightOpacity;
  vec3 cir = vec3(spot);
  float stripe = fract(uvMod.x * max(uBlindCount, 1.0));

  if (uShineFlip > 0.5) {
    stripe = 1.0 - stripe;
  }

  vec3 ran = vec3(stripe);
  vec3 col = cir + base - ran;
  col += (rand(gl_FragCoord.xy + iTime) - 0.5) * uNoise;

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`;
    const { arr: colorArr, count: colorCount } = prepStops(gradientColors);
    const uniforms = {
      iResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1] },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uAngle: { value: angle * Math.PI / 180 },
      uNoise: { value: noise },
      uBlindCount: { value: Math.max(1, blindCount) },
      uSpotlightRadius: { value: spotlightRadius },
      uSpotlightSoftness: { value: spotlightSoftness },
      uSpotlightOpacity: { value: spotlightOpacity },
      uMirror: { value: mirrorGradient ? 1 : 0 },
      uDistort: { value: distortAmount },
      uShineFlip: { value: shineDirection === "right" ? 1 : 0 },
      uColor0: { value: colorArr[0] },
      uColor1: { value: colorArr[1] },
      uColor2: { value: colorArr[2] },
      uColor3: { value: colorArr[3] },
      uColor4: { value: colorArr[4] },
      uColor5: { value: colorArr[5] },
      uColor6: { value: colorArr[6] },
      uColor7: { value: colorArr[7] },
      uColorCount: { value: colorCount }
    };
    const program = new Program(gl, { vertex, fragment, uniforms });
    programRef.current = program;
    const geometry = new Triangle(gl);
    geometryRef.current = geometry;
    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;
    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];
      if (blindMinWidth > 0) {
        const maxByMinWidth = Math.max(1, Math.floor(rect.width / blindMinWidth));
        const effective = blindCount ? Math.min(blindCount, maxByMinWidth) : maxByMinWidth;
        uniforms.uBlindCount.value = Math.max(1, effective);
      } else {
        uniforms.uBlindCount.value = Math.max(1, blindCount);
      }
      if (firstResizeRef.current) {
        firstResizeRef.current = false;
        const cx = gl.drawingBufferWidth / 2;
        const cy = gl.drawingBufferHeight / 2;
        uniforms.iMouse.value = [cx, cy];
        mouseTargetRef.current = [cx, cy];
      }
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const canvasDpr = renderer.dpr || 1;
      const x = (event.clientX - rect.left) * canvasDpr;
      const y = (rect.height - (event.clientY - rect.top)) * canvasDpr;
      mouseTargetRef.current = [x, y];
      if (mouseDampening <= 0) {
        uniforms.iMouse.value = [x, y];
      }
    };
    canvas.addEventListener("pointermove", onPointerMove);
    const loop = (timeMs) => {
      rafRef.current = requestAnimationFrame(loop);
      uniforms.iTime.value = timeMs * 1e-3;
      if (mouseDampening > 0) {
        if (!lastTimeRef.current) {
          lastTimeRef.current = timeMs;
        }
        const dt = (timeMs - lastTimeRef.current) / 1e3;
        lastTimeRef.current = timeMs;
        const tau = Math.max(1e-4, mouseDampening);
        let factor = 1 - Math.exp(-dt / tau);
        if (factor > 1) {
          factor = 1;
        }
        const target = mouseTargetRef.current;
        const current = uniforms.iMouse.value;
        current[0] += (target[0] - current[0]) * factor;
        current[1] += (target[1] - current[1]) * factor;
      } else {
        lastTimeRef.current = timeMs;
      }
      if (!paused && programRef.current && meshRef.current) {
        try {
          renderer.render({ scene: meshRef.current });
        } catch {
          return;
        }
      }
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      canvas.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
      const callIfFn = (obj, key) => {
        if (obj && typeof obj[key] === "function") {
          obj[key].call(obj);
        }
      };
      callIfFn(programRef.current, "remove");
      callIfFn(geometryRef.current, "remove");
      callIfFn(meshRef.current, "remove");
      callIfFn(rendererRef.current, "destroy");
      programRef.current = null;
      geometryRef.current = null;
      meshRef.current = null;
      rendererRef.current = null;
    };
  }, [
    dpr,
    paused,
    gradientColors,
    angle,
    noise,
    blindCount,
    blindMinWidth,
    mouseDampening,
    mirrorGradient,
    spotlightRadius,
    spotlightSoftness,
    spotlightOpacity,
    distortAmount,
    shineDirection
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: `h-full w-full overflow-hidden ${className ?? ""}`,
      style: {
        ...mixBlendMode && {
          mixBlendMode
        }
      }
    }
  );
}

gsap.registerPlugin(InertiaPlugin);

const GREG_MODMANAGER_LATEST = "https://github.com/mleem97/GregToolsModmanager/releases/latest";
const DISCORD_GUILD_ID = "1392073682133848075";
const DISCORD_WIDGET_API = `https://discord.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`;
const viewport = { once: true, margin: "-90px" };
function buildVariants(reducedMotion) {
  const section = reducedMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
    }
  };
  const grid = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.09,
        delayChildren: reducedMotion ? 0 : 0.06
      }
    }
  };
  const card = reducedMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };
  const textReveal = reducedMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };
  return { section, grid, card, textReveal };
}
function HomePage() {
  const t = en;
  const reducedMotion = useReducedMotion();
  const variants = useMemo(() => buildVariants(Boolean(reducedMotion)), [reducedMotion]);
  const [discordWidget, setDiscordWidget] = useState(null);
  useEffect(() => {
    fetch(DISCORD_WIDGET_API).then((r) => r.json()).then(setDiscordWidget).catch(() => {
    });
  }, []);
  discordWidget?.instant_invite ?? "https://discord.gg/greg";
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-950 text-white font-sans min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0 opacity-60", "aria-hidden": true, children: /* @__PURE__ */ jsx(
        GradientBlinds,
        {
          className: "h-full w-full",
          gradientColors: ["#001715", "#001e1c", "#002422", "#08c1a6", "#1cede1", "#64d0ff"],
          angle: -16,
          blindCount: 20,
          blindMinWidth: 52,
          noise: 0.12,
          mirrorGradient: true,
          spotlightRadius: 0.42,
          spotlightSoftness: 1.2,
          spotlightOpacity: 0.72,
          distortAmount: 0.15,
          mouseDampening: 0.2,
          shineDirection: "left",
          mixBlendMode: "lighten"
        }
      ) }),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          className: "relative z-10 mb-6 text-5xl font-black leading-none tracking-tighter md:text-7xl lg:text-8xl",
          initial: "hidden",
          whileInView: "show",
          viewport,
          variants: variants.textReveal,
          children: [
            /* @__PURE__ */ jsx("span", { children: t.heroBrandLine1 }),
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-br from-teal-400 to-cyan-500 bg-clip-text text-transparent block", children: t.heroBrandLine2Gradient })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          className: "relative z-10 mb-4 max-w-3xl text-2xl font-bold tracking-tight md:text-4xl",
          initial: "hidden",
          whileInView: "show",
          viewport,
          variants: variants.textReveal,
          transition: { delay: 0.08 },
          children: [
            t.heroLine1,
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: t.heroLine2 })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.p,
        {
          className: "relative z-10 mb-10 max-w-2xl text-base font-medium leading-relaxed text-slate-400 md:text-xl",
          initial: "hidden",
          whileInView: "show",
          viewport,
          variants: variants.textReveal,
          transition: { delay: 0.14 },
          children: [
            t.heroSub1,
            /* @__PURE__ */ jsx("br", {}),
            t.heroSub2
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative z-10 flex flex-wrap items-center justify-center gap-4",
          initial: "hidden",
          whileInView: "show",
          viewport,
          variants: variants.textReveal,
          transition: { delay: 0.22 },
          children: [
            /* @__PURE__ */ jsx("a", { href: "/01_getting-started/intro", className: "bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-teal-500/20", children: t.ctaStart }),
            /* @__PURE__ */ jsx("a", { href: "https://greg-store.eu", className: "bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-10 rounded-lg border border-slate-700 transition-all", children: t.ctaMods }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: GREG_MODMANAGER_LATEST,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 bg-slate-900/50 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-lg border border-teal-500/30 hover:border-teal-500 transition-all",
                children: [
                  /* @__PURE__ */ jsx(FaDownload, { className: "text-lg", "aria-hidden": true }),
                  t.ctaModManager
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "bg-slate-900/50 px-4 py-24 border-y border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/40 border border-slate-700 rounded-2xl p-10 md:col-span-8 hover:border-teal-500/50 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "text-teal-400 mb-6 text-4xl font-bold", children: "01" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-3xl font-bold", children: t.featureTitles[0] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-lg leading-relaxed text-slate-400", children: t.featureDescriptions[0] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/40 border border-slate-700 rounded-2xl p-8 md:col-span-4 hover:border-teal-500/50 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "text-teal-400 mb-6 text-3xl font-bold", children: "02" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold", children: t.featureTitles[1] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400", children: t.featureDescriptions[1] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/40 border border-slate-700 rounded-2xl p-8 md:col-span-4 hover:border-teal-500/50 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "text-teal-400 mb-6 text-3xl font-bold", children: "03" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold", children: t.featureTitles[2] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-slate-400", children: t.featureDescriptions[2] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/40 border border-slate-700 rounded-2xl p-10 md:col-span-8 hover:border-teal-500/50 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "text-teal-400 mb-6 text-4xl font-bold", children: "04" }),
        /* @__PURE__ */ jsx("h3", { className: "mb-4 text-3xl font-bold", children: t.featureTitles[3] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-lg text-lg leading-relaxed text-slate-400", children: t.featureDescriptions[3] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "px-4 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-12 rounded-3xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: t.modManagerSectionTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-400 mb-10", children: t.modManagerSectionBody }),
      /* @__PURE__ */ jsxs("a", { href: GREG_MODMANAGER_LATEST, className: "inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-5 px-12 rounded-xl text-xl transition-all shadow-xl shadow-teal-500/20", children: [
        /* @__PURE__ */ jsx(FaDownload, {}),
        " ",
        t.modManagerDownloadLabel
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-slate-950 py-20 px-4 border-t border-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-teal-400 mb-2", children: "gregFramework" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500", children: "Built for the community, by teamGreg." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "https://github.com/mleem97/gregCore", className: "text-slate-400 hover:text-white transition-colors text-3xl", children: /* @__PURE__ */ jsx(FaGithub, {}) }),
        /* @__PURE__ */ jsx("a", { href: "https://discord.gg/greg", className: "text-slate-400 hover:text-white transition-colors text-3xl", children: /* @__PURE__ */ jsx(FaDiscord, {}) })
      ] })
    ] }) })
  ] });
}

const $$Astro = createAstro("https://wiki.gregframework.eu");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>gregWiki - Home</title>${renderHead()}</head> <body> ${renderComponent($$result, "HomePage", HomePage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/marvi/source/repos/gregFramework/gregWiki/src/components/HomePage", "client:component-export": "default" })} </body></html>`;
}, "C:/Users/marvi/source/repos/gregFramework/gregWiki/src/pages/index.astro", void 0);

const $$file = "C:/Users/marvi/source/repos/gregFramework/gregWiki/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
