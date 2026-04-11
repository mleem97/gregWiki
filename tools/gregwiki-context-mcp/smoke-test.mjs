import { spawn } from 'node:child_process';
import path from 'node:path';

const serverPath = path.resolve(process.cwd(), 'server.js');

function frame(message) {
  const json = JSON.stringify(message);
  return `Content-Length: ${Buffer.byteLength(json, 'utf8')}\r\n\r\n${json}`;
}

function parseFrames(buffer) {
  const messages = [];
  let remaining = buffer;

  while (true) {
    const headerEnd = remaining.indexOf('\r\n\r\n');
    if (headerEnd < 0) {
      return { messages, remaining };
    }

    const header = remaining.slice(0, headerEnd);
    const contentLengthLine = header
      .split('\r\n')
      .find((line) => line.toLowerCase().startsWith('content-length:'));

    if (!contentLengthLine) {
      remaining = remaining.slice(headerEnd + 4);
      continue;
    }

    const length = Number(contentLengthLine.split(':')[1].trim());
    const start = headerEnd + 4;
    const end = start + length;
    if (remaining.length < end) {
      return { messages, remaining };
    }

    const json = remaining.slice(start, end);
    remaining = remaining.slice(end);
    messages.push(JSON.parse(json));
  }
}

async function run() {
  const child = spawn(process.execPath, [serverPath], {
    cwd: path.resolve(process.cwd(), '..', '..'),
    stdio: ['pipe', 'pipe', 'pipe']
  });

  let stdoutBuffer = '';
  const received = [];

  child.stdout.on('data', (chunk) => {
    stdoutBuffer += chunk.toString('utf8');
    const parsed = parseFrames(stdoutBuffer);
    stdoutBuffer = parsed.remaining;
    received.push(...parsed.messages);
  });

  child.stdin.write(frame({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05' } }));
  child.stdin.write(frame({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} }));

  await new Promise((resolve) => setTimeout(resolve, 300));

  const initResponse = received.find((message) => message.id === 1);
  const toolsResponse = received.find((message) => message.id === 2);

  if (!initResponse?.result?.serverInfo?.name) {
    throw new Error('Missing initialize response');
  }

  if (!Array.isArray(toolsResponse?.result?.tools) || toolsResponse.result.tools.length < 3) {
    throw new Error('Missing tools/list response');
  }

  child.kill();
  console.log('Smoke test passed: initialize + tools/list responses received.');
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
