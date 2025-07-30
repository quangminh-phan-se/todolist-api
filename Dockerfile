# Dockerfile
FROM node:20.19.0

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "start:dev"]
