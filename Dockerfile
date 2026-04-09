# Build context MUST be this repository root (directory containing package.json).
# Correct:   docker build -t gregwiki .
# Wrong:     docker build -f gregWiki/Dockerfile ..   → COPY fails or image has no package.json
# Dev server with hot reload. For production static files use: npm run build + any static host.
FROM node:20-alpine
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=4096"
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY . .
EXPOSE 3000
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
