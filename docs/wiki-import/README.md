# Greg Wiki (Docusaurus)

This folder is configured as a Docusaurus site using the existing Markdown wiki files.

## Local run

```bash
npm install
npm run start
```

## Production build

```bash
npm run build
npm run serve
```

## Coolify deployment notes

- Build command: `npm install ; npm run build`
- Start command: `npm run serve -- --host 0.0.0.0 --port $PORT`
- Port: `3000` (or use Coolify `$PORT`)

If you use Docker deployment mode in Coolify, this repo includes a `Dockerfile`.

## Multi-repo wiki import

This workspace can import GitHub wiki pages for every repository of one or more owners.

- Config file: `wiki-import.config.json`
- Import script: `scripts/import-wikis.mjs`

### Configure owners

Edit `wiki-import.config.json`:

```json
{
	"owners": [
		{
			"name": "mleem97",
			"destination": "Repos/mleem97"
		}
	],
	"includeArchived": false,
	"perPage": 100
}
```

### Run import

```bash
npm run import:wikis:dry
npm run import:wikis
```

Imported docs are placed under owner/repo folders such as `Repos/mleem97/<repo>/` and automatically appear in the Docusaurus sidebar.
