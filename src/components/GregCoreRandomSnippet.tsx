import React, {useMemo} from 'react';
import {GREG_CORE_SNIPPETS} from '../data/gregCoreSnippets';

type Props = {
  caption: string;
  loadingLabel: string;
};

/**
 * Picks one snippet per client mount.
 */
export function GregCoreRandomSnippet({caption}: Props): JSX.Element {
  const snippet = useMemo(
    () => GREG_CORE_SNIPPETS[Math.floor(Math.random() * GREG_CORE_SNIPPETS.length)],
    [],
  );

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-1 shadow-2xl">
      <div className="rounded-lg bg-slate-950 p-6 font-mono text-sm text-white">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">{caption}</div>
            <div className="mt-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">{snippet.title}</span>
              <span className="mx-1.5 text-slate-700">·</span>
              <code className="text-[11px] text-cyan-400">{snippet.sourcePath}</code>
            </div>
          </div>
          <div className="flex gap-2" aria-hidden>
            <div className="h-3 w-3 rounded-full bg-red-500/50" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
            <div className="h-3 w-3 rounded-full bg-green-500/50" />
          </div>
        </div>
        <pre className="max-h-[min(420px,55vh)] overflow-auto whitespace-pre pr-1 leading-relaxed text-slate-300">
          {snippet.code.trimEnd()}
        </pre>
      </div>
    </div>
  );
}
