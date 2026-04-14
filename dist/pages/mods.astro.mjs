import { c as createComponent, d as renderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_gdVP-I2a.mjs';
import 'piccolore';
/* empty css                                 */
import { FaDownload, FaGithub, FaDiscord } from 'react-icons/fa6';
export { renderers } from '../renderers.mjs';

const moduleCatalog = [
  {
    id: "ffm-plugin-asset-exporter",
    name: "FFM.Plugin.AssetExporter",
    repoFolder: "gregExt.AssetExporter",
    type: "plugin",
    description: "Export-focused asset tooling for Data Center workflows.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "gregFramework"],
    wikiPath: "/wiki/plugins/ffm-plugin-asset-exporter",
    releasePath: "/wiki/releases/plugins/ffm-plugin-asset-exporter-release",
    downloadPath: "/plugin/FFM.Plugin.AssetExporter.dll",
    releaseReady: false
  },
  {
    id: "ffm-plugin-multiplayer",
    name: "FFM.Plugin.Multiplayer",
    repoFolder: "gregExt.Multiplayer",
    type: "plugin",
    description: "Multiplayer-oriented plugin surface for gregFramework ecosystems.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "gregFramework"],
    wikiPath: "/wiki/plugins/ffm-plugin-multiplayer",
    releasePath: "/wiki/releases/plugins/ffm-plugin-multiplayer-release",
    downloadPath: "/plugin/FFM.Plugin.Multiplayer.dll",
    releaseReady: false
  },
  {
    id: "ffm-plugin-player-models",
    name: "FFM.Plugin.PlayerModels",
    repoFolder: "gregExt.PlayerModels",
    type: "plugin",
    description: "Player model extension plugin for runtime and presentation logic.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "gregFramework"],
    wikiPath: "/wiki/plugins/ffm-plugin-player-models",
    releasePath: "/wiki/releases/plugins/ffm-plugin-player-models-release",
    downloadPath: "/plugin/FFM.Plugin.PlayerModels.dll",
    releaseReady: false
  },
  {
    id: "ffm-plugin-sysadmin",
    name: "FFM.Plugin.Sysadmin",
    type: "plugin",
    description: "Sysadmin utility plugin for diagnostics and operations.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "gregFramework"],
    wikiPath: "/wiki/plugins/ffm-plugin-sysadmin",
    releasePath: "/wiki/releases/plugins/ffm-plugin-sysadmin-release",
    downloadPath: "/plugin/FFM.Plugin.Sysadmin.dll",
    releaseReady: false
  },
  {
    id: "ffm-plugin-web-ui-bridge",
    name: "FFM.Plugin.WebUIBridge",
    repoFolder: "gregExt.WebUIBridge",
    type: "plugin",
    description: "Bridge plugin between game runtime data and web UI overlays.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "gregFramework"],
    wikiPath: "/wiki/plugins/ffm-plugin-web-ui-bridge",
    releasePath: "/wiki/releases/plugins/ffm-plugin-web-ui-bridge-release",
    downloadPath: "/plugin/FFM.Plugin.WebUIBridge.dll",
    releaseReady: false
  },
  {
    id: "fmf-modpathredirector",
    name: "FMF.ModPathRedirector",
    repoFolder: "gregMod.PathRedirector",
    type: "plugin",
    description: "MelonLoader plugin: waits for each subscribed Workshop item (Steam + StreamingAssets/Mods/workshop_*) before MelonMods load.",
    version: "1.5.0",
    author: "DataCenterExporter / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "Steam client"],
    wikiPath: "/wiki/tools/workshop-uploader",
    releasePath: "/wiki/releases/plugins/fmf-modpathredirector-release",
    downloadPath: "/plugin/FMF.ModPathRedirector.dll",
    releaseReady: true
  },
  {
    id: "fmf-console-input-guard",
    name: "FMF.ConsoleInputGuard",
    repoFolder: "gregMod.ConsoleInputGuard",
    type: "mod",
    description: "Console interaction guardrails for safer gameplay input handling.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "Harmony"],
    wikiPath: "/wiki/mods/fmf-console-input-guard",
    releasePath: "/wiki/releases/mods/fmf-console-input-guard-release",
    downloadPath: "/mod/FMF.ConsoleInputGuard.dll",
    releaseReady: false
  },
  {
    id: "fmf-gregify-employees",
    name: "FMF.GregifyEmployees",
    repoFolder: "gregMod.GregifyEmployees",
    type: "mod",
    description: "Gameplay mod for employee theming and behavior customization.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "Harmony"],
    wikiPath: "/wiki/mods/fmf-gregify-employees",
    releasePath: "/wiki/releases/mods/fmf-gregify-employees-release",
    downloadPath: "/mod/FMF.GregifyEmployees.dll",
    releaseReady: false
  },
  {
    id: "fmf-hex-label-mod",
    name: "FMF.HexLabelMod",
    repoFolder: "gregModHexLabelMod",
    type: "mod",
    description: "In-world hex color labels for cable spinners and racks.",
    version: "00.01.0009",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "Harmony"],
    wikiPath: "/wiki/mods/fmf-hex-label-mod",
    releasePath: "/wiki/releases/mods/fmf-hex-label-mod-release",
    downloadPath: "/mod/FMF.HexLabelMod.dll",
    releaseReady: true
  },
  {
    id: "fmf-lang-compat-bridge",
    name: "FMF.LangCompatBridge",
    repoFolder: "gregMod.LangCompatBridge",
    type: "mod",
    description: "Localization compatibility bridge for mixed mod stacks.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader"],
    wikiPath: "/wiki/mods/fmf-lang-compat-bridge",
    releasePath: "/wiki/releases/mods/fmf-lang-compat-bridge-release",
    downloadPath: "/mod/FMF.JoniMLCompatMod.dll",
    releaseReady: false
  },
  {
    id: "fmf-ui-replacement-mod",
    name: "FMF.UIReplacementMod",
    repoFolder: null,
    type: "mod",
    description: "Replaces and modernizes selected in-game UI layers.",
    version: "NotReleasedYet",
    author: "mleem97 / gregFramework Community",
    languages: ["C#"],
    dependencies: ["MelonLoader", "Harmony"],
    wikiPath: "/wiki/mods/fmf-ui-replacement-mod",
    releasePath: "/wiki/releases/mods/fmf-ui-replacement-mod-release",
    downloadPath: "/mod/FMF.UIReplacementMod.dll",
    releaseReady: false
  }
];

const $$Mods = createComponent(($$result, $$props, $$slots) => {
  const plugins = moduleCatalog.filter((m) => m.type === "plugin");
  const mods = moduleCatalog.filter((m) => m.type === "mod");
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>gregWiki - Modules & Plugins</title>${renderHead()}</head> <body class="bg-slate-950 text-white font-sans min-h-screen"> <nav class="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50"> <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"> <a href="/" class="text-xl font-black tracking-tighter text-teal-400">gregWiki</a> <div class="flex gap-6 text-sm font-medium"> <a href="/01_getting-started/intro" class="hover:text-teal-400 transition-colors">Docs</a> <a href="/mods" class="text-teal-400">Modules</a> <a href="https://github.com/mleem97/gregCore" class="hover:text-teal-400 transition-colors">GitHub</a> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 py-16"> <header class="mb-16"> <h1 class="text-5xl font-black mb-4 tracking-tight">Modules & Plugins</h1> <p class="text-xl text-slate-400 max-w-3xl">Official extensions for the gregFramework ecosystem. Built for performance and compatibility.</p> </header> <section class="mb-20"> <div class="flex items-center gap-4 mb-10"> <h2 class="text-3xl font-bold">Framework Plugins</h2> <div class="h-px bg-slate-800 flex-1"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${plugins.map((item) => renderTemplate`<div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/50 transition-all group flex flex-col justify-between"> <div> <div class="flex justify-between items-start mb-4"> <span class="bg-teal-500/10 text-teal-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-teal-500/20">Plugin</span> <span class="text-slate-500 text-xs font-mono">${item.version}</span> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">${item.name}</h3> <p class="text-slate-400 text-sm mb-6 line-clamp-3">${item.description}</p> </div> <div class="flex gap-3"> <a${addAttribute(item.releasePath, "href")} target="_blank" class="flex-1 bg-slate-800 hover:bg-slate-700 text-center py-2 rounded-lg text-sm font-bold transition-colors">Details</a> <a${addAttribute(item.downloadPath, "href")} class="bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 rounded-lg transition-colors flex items-center justify-center"> ${renderComponent($$result, "FaDownload", FaDownload, {})} </a> </div> </div>`)} </div> </section> <section> <div class="flex items-center gap-4 mb-10"> <h2 class="text-3xl font-bold">Gameplay Modules</h2> <div class="h-px bg-slate-800 flex-1"></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${mods.map((item) => renderTemplate`<div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"> <div> <div class="flex justify-between items-start mb-4"> <span class="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-cyan-500/20">Mod</span> <span class="text-slate-500 text-xs font-mono">${item.version}</span> </div> <h3 class="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">${item.name}</h3> <p class="text-slate-400 text-sm mb-6 line-clamp-3">${item.description}</p> </div> <div class="flex gap-3"> <a${addAttribute(item.releasePath, "href")} target="_blank" class="flex-1 bg-slate-800 hover:bg-slate-700 text-center py-2 rounded-lg text-sm font-bold transition-colors">Details</a> <a${addAttribute(item.downloadPath, "href")} class="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg transition-colors flex items-center justify-center"> ${renderComponent($$result, "FaDownload", FaDownload, {})} </a> </div> </div>`)} </div> </section> </main> <footer class="bg-slate-950 py-20 px-4 border-t border-slate-900"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10"> <div> <h2 class="text-2xl font-bold text-teal-400 mb-2">gregFramework</h2> <p class="text-slate-500">Built for the community, by teamGreg.</p> </div> <div class="flex gap-6 text-3xl"> <a href="https://github.com/mleem97/gregCore" class="text-slate-400 hover:text-white transition-colors">${renderComponent($$result, "FaGithub", FaGithub, {})}</a> <a href="https://discord.gg/greg" class="text-slate-400 hover:text-white transition-colors">${renderComponent($$result, "FaDiscord", FaDiscord, {})}</a> </div> </div> </footer> </body></html>`;
}, "C:/Users/marvi/source/repos/gregFramework/gregWiki/src/pages/mods.astro", void 0);

const $$file = "C:/Users/marvi/source/repos/gregFramework/gregWiki/src/pages/mods.astro";
const $$url = "/mods";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Mods,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
