#!/bin/sh
set -e
if [ ! -f /app/package.json ]; then
  echo "docker-entrypoint: ERROR: /app/package.json not found." >&2
  echo "  Build context must be the gregWiki repo root (the folder that contains package.json)." >&2
  echo "  Example:  cd path/to/gregWiki && docker build -t gregwiki ." >&2
  echo "  Not:      docker build -f gregWiki/Dockerfile ..   (wrong context)" >&2
  echo "  Compose:  run from gregWiki so build.context is '.' — see docker-compose.yml." >&2
  echo "  If you use a volume on /app, it must map to that repo root, not an empty dir." >&2
  exit 1
fi
exec "$@"
