import React, {useMemo} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {GREG_CORE_SNIPPETS} from '../data/gregCoreSnippets';

type Props = {
  caption: string;
  loadingLabel: string;
};

/**
 * Picks one snippet per client mount (stable for that visit; no SSR/CSR mismatch).
 */
function GregCoreRandomSnippetInner({caption}: Props): JSX.Element {
  const snippet = useMemo(
    () => GREG_CORE_SNIPPETS[Math.floor(Math.random() * GREG_CORE_SNIPPETS.length)],
    [],
  );

  return (
    <div className="rounded-xl border border-outline-variant/20 bg-surface-container-highest p-1 shadow-2xl">
      <div className="rounded-lg bg-surface-container-lowest p-6 font-mono text-sm">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/15 pb-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-primary">{caption}</div>
            <div className="mt-1 text-xs text-on-surface-variant">
              <span className="font-semibold text-on-surface">{snippet.title}</span>
              <span className="mx-1.5 text-outline-variant">·</span>
              <code className="text-[11px] text-tertiary">{snippet.sourcePath}</code>
            </div>
          </div>
          <div className="flex gap-2" aria-hidden>
            <div className="h-3 w-3 rounded-full bg-error-dim" />
            <div className="h-3 w-3 rounded-full bg-tertiary" />
            <div className="h-3 w-3 rounded-full bg-primary" />
          </div>
        </div>
        <pre className="max-h-[min(420px,55vh)] overflow-auto whitespace-pre pr-1 leading-relaxed text-on-surface/90">
          {snippet.code.trimEnd()}
        </pre>
      </div>
    </div>
  );
}

export function GregCoreRandomSnippet(props: Props): JSX.Element {
  return (
    <BrowserOnly
      fallback={
        <div
          className="rounded-xl border border-outline-variant/20 bg-surface-container-highest p-1 shadow-2xl"
          aria-busy
        >
          <div className="flex min-h-[280px] items-center justify-center rounded-lg bg-surface-container-lowest p-6">
            <span className="text-sm text-on-surface-variant">{props.loadingLabel}</span>
          </div>
        </div>
      }>
      {() => <GregCoreRandomSnippetInner {...props} />}
    </BrowserOnly>
  );
}
