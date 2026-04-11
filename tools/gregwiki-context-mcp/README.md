# gregWiki Context MCP

This MCP server provides repository context tools for LLM clients, scoped to the current workspace.

## Tools

- `repo_context.tree` — list tree entries from a path
- `repo_context.read_file` — read file content by line range
- `repo_context.search_text` — plain-text search across files

## Start server

```powershell
cd tools/gregwiki-context-mcp
npm run start
```

## Smoke test

```powershell
cd tools/gregwiki-context-mcp
npm run smoke
```

## MCP client configuration example

```json
{
  "mcpServers": {
    "gregwiki-context": {
      "command": "node",
      "args": [
        "c:/Users/marvi/source/repos/gregFramework/gregWiki/tools/gregwiki-context-mcp/server.js"
      ],
      "cwd": "c:/Users/marvi/source/repos/gregFramework/gregWiki"
    }
  }
}
```

## Notes

- Paths are workspace-scoped and cannot escape the root.
- Large files and ignored directories (`.git`, `node_modules`, `build`, `.docusaurus`) are skipped for performance.
