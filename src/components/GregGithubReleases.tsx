import React, {useEffect, useMemo, useState} from 'react';

type GithubRepo = {
  name: string;
  html_url: string;
};

type GithubRelease = {
  id: number;
  name: string | null;
  tag_name: string;
  html_url: string;
  published_at: string;
  draft: boolean;
  prerelease: boolean;
  body: string | null;
};

type RepoRelease = {
  repoName: string;
  repoUrl: string;
  releaseName: string;
  tagName: string;
  releaseUrl: string;
  publishedAt: string;
  prerelease: boolean;
  bodyPreview: string;
};

type Props = {
  owner: string;
  repoPrefix?: string;
};

function toBodyPreview(body: string | null, maxLength = 140): string {
  if (!body) {
    return 'No release notes provided.';
  }

  const normalized = body.replace(/\r\n/g, '\n').replace(/[#>*`\-_]/g, '').trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trimEnd()}…`;
}

function formatUtcDate(dateIso: string): string {
  return new Date(dateIso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function GregGithubReleases({owner, repoPrefix = 'greg'}: Props): JSX.Element {
  const [releases, setReleases] = useState<RepoRelease[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchGregReleases(): Promise<void> {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const reposResponse = await fetch(
          `https://api.github.com/users/${encodeURIComponent(owner)}/repos?type=owner&per_page=100&sort=updated`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          },
        );

        if (!reposResponse.ok) {
          throw new Error(`GitHub repos request failed (${reposResponse.status}).`);
        }

        const repos = (await reposResponse.json()) as GithubRepo[];
        const matchingRepos = repos.filter((repo) =>
          repo.name.toLowerCase().startsWith(repoPrefix.toLowerCase()),
        );

        const releaseBatches = await Promise.all(
          matchingRepos.map(async (repo) => {
            const releasesResponse = await fetch(
              `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo.name)}/releases?per_page=100`,
              {
                headers: {
                  Accept: 'application/vnd.github+json',
                },
              },
            );

            if (!releasesResponse.ok) {
              return [] as RepoRelease[];
            }

            const repoReleases = (await releasesResponse.json()) as GithubRelease[];
            return repoReleases
              .filter((release) => !release.draft)
              .map((release) => ({
                repoName: repo.name,
                repoUrl: repo.html_url,
                releaseName: release.name?.trim() || release.tag_name,
                tagName: release.tag_name,
                releaseUrl: release.html_url,
                publishedAt: release.published_at,
                prerelease: release.prerelease,
                bodyPreview: toBodyPreview(release.body),
              }));
          }),
        );

        const flattened = releaseBatches
          .flat()
          .sort(
            (left, right) =>
              new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
          );

        if (!isCancelled) {
          setReleases(flattened);
        }
      } catch (error) {
        if (!isCancelled) {
          setErrorMessage(error instanceof Error ? error.message : 'Failed to load releases.');
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    void fetchGregReleases();

    return () => {
      isCancelled = true;
    };
  }, [owner, repoPrefix]);

  const heading = useMemo(
    () => `Latest GitHub releases (${owner}/${repoPrefix}*)`,
    [owner, repoPrefix],
  );

  if (isLoading) {
    return (
      <div className="mod-release-card rounded-xl border border-outline-variant/15 p-5">
        <p className="text-sm text-on-surface-variant">Loading releases from GitHub…</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="mod-release-card rounded-xl border border-outline-variant/15 p-5">
        <p className="mb-2 font-semibold text-on-surface">Could not load GitHub releases.</p>
        <p className="text-sm text-on-surface-variant">{errorMessage}</p>
      </div>
    );
  }

  if (releases.length === 0) {
    return (
      <div className="mod-release-card rounded-xl border border-outline-variant/15 p-5">
        <p className="mb-2 font-semibold text-on-surface">No releases found.</p>
        <p className="text-sm text-on-surface-variant">
          Repositories matching <code>{repoPrefix}*</code> currently have no published releases.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">{heading}</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {releases.map((release) => (
          <article key={`${release.repoName}-${release.releaseUrl}`} className="mod-release-card rounded-xl p-5">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <a href={release.repoUrl} className="mod-release-badge" target="_blank" rel="noopener noreferrer">
                {release.repoName}
              </a>
              {release.prerelease ? <span className="mod-release-badge">Prerelease</span> : null}
            </div>
            <h3 className="mb-1 text-base font-bold text-on-surface">{release.releaseName}</h3>
            <p className="mb-3 text-xs text-on-surface-variant">
              {release.tagName} · Published {formatUtcDate(release.publishedAt)}
            </p>
            <p className="mb-4 text-sm text-on-surface-variant">{release.bodyPreview}</p>
            <a href={release.releaseUrl} className="mod-release-btn-primary inline-block" target="_blank" rel="noopener noreferrer">
              Open release
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
