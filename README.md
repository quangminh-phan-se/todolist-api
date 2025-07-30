# 📝 TodoList API

A TodoList RESTful API built with **NestJS**, **PostgreSQL**, **TypeORM**, and **Docker**.

## ⚙️ Tech Stack

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/)
- Node.js v20.19.0

## 📦 Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for Mac/Windows)
- [Node.js v20.19.0](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/installation)
- Recommended: [TablePlus](https://tableplus.com/) for DB inspection

## 🚀 Getting Started

### 1. Clone the repository and install dependencies:

```bash
git clone git@github.com:quangminh-phan-se/todolist-api.git
```

Install dependencies

```bash
cd todolist-api
pnpm install
```

### 2. Copy environment variables:

```bash
cp .env.example .env
```

You can adjust DB credentials if needed.

### 3. Start the project with Docker

```bash
docker-compose up --build -d
```

This will:
 - Start PostgreSQL
 - Build the NestJS app
 - Run database migrations
 - Start the server on http://localhost:3001

 ## 📜 Migration Commands

```bash
# Generate a new migration
MIGRATION_NAME=YourMigrationName pnpm run migration:create

# Run migrations
migration:run

# Revert last migration
pnpm migration:revert
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).