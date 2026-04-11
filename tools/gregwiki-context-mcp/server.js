#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const workspaceRoot = path.resolve(process.cwd());
const ignoredDirectories = new Set(['.git', 'node_modules', 'build', '.docusaurus']);
const maxFileSizeBytes = 1024 * 1024;

function writeJsonRpc(message) {
  const json = JSON.stringify(message);
  const payload = `Content-Length: ${Buffer.byteLength(json, 'utf8')}\r\n\r\n${json}`;
  process.stdout.write(payload);
}

function writeResult(id, result) {
  writeJsonRpc({ jsonrpc: '2.0', id, result });
}

function writeError(id, code, message, data) {
  writeJsonRpc({ jsonrpc: '2.0', id, error: { code, message, data } });
}

function normalizeRelativePath(relativePath = '.') {
  const resolved = path.resolve(workspaceRoot, relativePath);
  if (!resolved.startsWith(workspaceRoot)) {
    throw new Error(`Path escapes workspace: ${relativePath}`);
  }
  return resolved;
}

function listTree(relativePath = '.', depth = 2, maxEntries = 300) {
  const start = normalizeRelativePath(relativePath);
  const entries = [];

  function walk(currentPath, currentDepth) {
    if (entries.length >= maxEntries) {
      return;
    }

    const children = fs.readdirSync(currentPath, { withFileTypes: true })
      .filter((entry) => !ignoredDirectories.has(entry.name))
      .sort((left, right) => left.name.localeCompare(right.name));

    for (const child of children) {
      if (entries.length >= maxEntries) {
        break;
      }

      const full = path.join(currentPath, child.name);
      const rel = path.relative(workspaceRoot, full).replace(/\\/g, '/');
      entries.push({ path: rel, type: child.isDirectory() ? 'dir' : 'file' });

      if (child.isDirectory() && currentDepth < depth) {
        walk(full, currentDepth + 1);
      }
    }
  }

  walk(start, 0);

  return {
    root: path.relative(workspaceRoot, start).replace(/\\/g, '/') || '.',
    entries,
    truncated: entries.length >= maxEntries,
  };
}

function readFileRange(relativePath, startLine = 1, endLine = 200) {
  if (!relativePath) {
    throw new Error('path is required');
  }

  const target = normalizeRelativePath(relativePath);
  const stat = fs.statSync(target);
  if (!stat.isFile()) {
    throw new Error(`Not a file: ${relativePath}`);
  }

  if (stat.size > maxFileSizeBytes) {
    throw new Error(`File too large (> ${maxFileSizeBytes} bytes): ${relativePath}`);
  }

  const content = fs.readFileSync(target, 'utf8');
  const lines = content.split(/\r?\n/);
  const safeStart = Math.max(1, startLine);
  const safeEnd = Math.min(lines.length, Math.max(safeStart, endLine));
  const selected = lines.slice(safeStart - 1, safeEnd).join('\n');

  return {
    path: relativePath,
    totalLines: lines.length,
    startLine: safeStart,
    endLine: safeEnd,
    content: selected,
  };
}

function searchText(query, relativePath = '.', maxResults = 50) {
  if (!query || !query.trim()) {
    throw new Error('query is required');
  }

  const start = normalizeRelativePath(relativePath);
  const queryLower = query.toLowerCase();
  const results = [];

  function walk(currentPath) {
    if (results.length >= maxResults) {
      return;
    }

    const children = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const child of children) {
      if (results.length >= maxResults) {
        break;
      }

      if (ignoredDirectories.has(child.name)) {
        continue;
      }

      const full = path.join(currentPath, child.name);
      if (child.isDirectory()) {
        walk(full);
        continue;
      }

      const stat = fs.statSync(full);
      if (stat.size > maxFileSizeBytes) {
        continue;
      }

      let text;
      try {
        text = fs.readFileSync(full, 'utf8');
      } catch {
        continue;
      }

      const lines = text.split(/\r?\n/);
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        if (results.length >= maxResults) {
          break;
        }

        const line = lines[lineIndex];
        if (line.toLowerCase().includes(queryLower)) {
          results.push({
            path: path.relative(workspaceRoot, full).replace(/\\/g, '/'),
            line: lineIndex + 1,
            preview: line.trim(),
          });
        }
      }
    }
  }

  walk(start);

  return {
    query,
    root: path.relative(workspaceRoot, start).replace(/\\/g, '/') || '.',
    results,
    truncated: results.length >= maxResults,
  };
}

const toolDefinitions = [
  {
    name: 'repo_context.tree',
    description: 'List repository tree entries from a path with bounded depth.',
    inputSchema: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Relative path from workspace root', default: '.' },
        depth: { type: 'number', description: 'Directory depth to recurse', default: 2 },
        maxEntries: { type: 'number', description: 'Maximum number of returned entries', default: 300 }
      }
    }
  },
  {
    name: 'repo_context.read_file',
    description: 'Read a file section by line range.',
    inputSchema: {
      type: 'object',
      required: ['path'],
      properties: {
        path: { type: 'string', description: 'Relative file path from workspace root' },
        startLine: { type: 'number', description: '1-based inclusive start line', default: 1 },
        endLine: { type: 'number', description: '1-based inclusive end line', default: 200 }
      }
    }
  },
  {
    name: 'repo_context.search_text',
    description: 'Search for plain text across repository files.',
    inputSchema: {
      type: 'object',
      required: ['query'],
      properties: {
        query: { type: 'string', description: 'Case-insensitive plain-text query' },
        path: { type: 'string', description: 'Relative directory path to scope search', default: '.' },
        maxResults: { type: 'number', description: 'Maximum number of matches', default: 50 }
      }
    }
  }
];

function handleToolCall(name, args) {
  switch (name) {
    case 'repo_context.tree': {
      const data = listTree(args.path ?? '.', args.depth ?? 2, args.maxEntries ?? 300);
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
    }
    case 'repo_context.read_file': {
      const data = readFileRange(args.path, args.startLine ?? 1, args.endLine ?? 200);
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
    }
    case 'repo_context.search_text': {
      const data = searchText(args.query, args.path ?? '.', args.maxResults ?? 50);
      return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

function onRequest(request) {
  const { id, method, params = {} } = request;

  try {
    if (method === 'initialize') {
      writeResult(id, {
        protocolVersion: params.protocolVersion ?? '2024-11-05',
        serverInfo: {
          name: 'gregwiki-context-mcp',
          version: '0.1.0'
        },
        capabilities: {
          tools: {}
        }
      });
      return;
    }

    if (method === 'tools/list') {
      writeResult(id, { tools: toolDefinitions });
      return;
    }

    if (method === 'tools/call') {
      const name = params.name;
      const args = params.arguments ?? {};
      const result = handleToolCall(name, args);
      writeResult(id, result);
      return;
    }

    if (method === 'notifications/initialized') {
      return;
    }

    writeError(id ?? null, -32601, `Method not found: ${method}`);
  } catch (error) {
    writeError(id ?? null, -32000, error.message);
  }
}

let inputBuffer = Buffer.alloc(0);

function consumeMessages() {
  while (true) {
    const headerEnd = inputBuffer.indexOf('\r\n\r\n');
    if (headerEnd < 0) {
      return;
    }

    const headerText = inputBuffer.slice(0, headerEnd).toString('utf8');
    const contentLengthLine = headerText
      .split('\r\n')
      .find((line) => line.toLowerCase().startsWith('content-length:'));

    if (!contentLengthLine) {
      inputBuffer = inputBuffer.slice(headerEnd + 4);
      continue;
    }

    const length = Number(contentLengthLine.split(':')[1].trim());
    const messageStart = headerEnd + 4;
    const messageEnd = messageStart + length;

    if (inputBuffer.length < messageEnd) {
      return;
    }

    const json = inputBuffer.slice(messageStart, messageEnd).toString('utf8');
    inputBuffer = inputBuffer.slice(messageEnd);

    let payload;
    try {
      payload = JSON.parse(json);
    } catch {
      continue;
    }

    onRequest(payload);
  }
}

process.stdin.on('data', (chunk) => {
  inputBuffer = Buffer.concat([inputBuffer, chunk]);
  consumeMessages();
});

process.stdin.resume();
