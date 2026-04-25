Title: Web Platform Database Schema
Path: /maintainer/web-platform/prisma-schema
Type: Reference
Audience: maintainer, framework developer
Summary: Technical reference for the gregModstore database schema using Prisma ORM.
Suggested Tags: web, database, prisma, postgresql, users, mods, security
Related Pages: /maintainer/web-platform/architecture-plan
Split Recommendation: Keep as one page

# Web Platform Database Schema

This document provides a technical reference for the **Prisma** schema used by the `gregModstore` web platform.

---

## Data Source Configuration
- **Provider**: PostgreSQL
- **URL**: Managed via `DATABASE_URL` environment variable.

## Schema Overview

### Core User & Authentication
The platform integrates with **Better Auth** / **NextAuth** for user management.
- `User`: Primary user record with Discord integration.
- `Account`: OAuth provider links.
- `Session`: Active user sessions.

### Permissions & Discord Sync
Role-based access control (RBAC) is synchronized with the Discord server.
- `DiscordRoleMapping`: Maps Discord roles to granular platform permissions (`CAN_UPLOAD`, `CAN_MODERATE`, etc.).
- `UserApiKey`: API credentials for automated mod deployment.

### Mods & Assets
- `Mod`: The root entity for a mod, including metadata and relations to versions and team members.
- `ModVersion`: Tracks individual releases, file hashes, and scan statuses.
- `ModCategory`: Enum defining content types (MOD, MODEL, TEXTURE, etc.).

### Security & Scanning
- `GregScanReport`: Detailed results from the automated security pipeline (`gregScan`), including ClamAV and heuristic findings.
- `ThreatLevel`: Enum defining the safety of a version (CLEAN, SUSPICIOUS, MALICIOUS).

---

## Prisma Schema Definition

```prisma
// gregModstore - Prisma Schema (schema.prisma)
// Database: PostgreSQL

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// --- CORE USER & AUTH ---

model User {
  id            String    @id @default(cuid())
  discordId     String    @unique
  username      String
  email         String?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Better Auth / NextAuth integration
  accounts      Account[]
  sessions      Session[]

  // Platform Relations
  roles         UserRoleMapping[]
  apiKeys       UserApiKey[]
  mods          Mod[]             @relation("CreatorMods")
  teams         ModTeamMember[]
  reviews       Review[]
  comments      Comment[]
  favorites     Favorite[]
  bounties      Bounty[]          @relation("Issuer")
  submissions   BountySubmission[]
  auditLogs     AuditLog[]        @relation("AdminAction")
}

// [truncated for brevity in overview, see full schema source for details]
```
