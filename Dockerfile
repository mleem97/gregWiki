# Build context: this repository root (gregWiki).
# Runs the Docusaurus dev server with hot reload.
FROM node:20-alpine
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=4096"
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
