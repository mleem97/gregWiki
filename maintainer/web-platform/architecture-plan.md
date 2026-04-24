Title: Web Platform Architecture Plan
Path: /maintainer/web-platform/architecture-plan
Type: Internal / Advanced
Audience: maintainer, framework developer, advanced contributor
Summary: Production architecture and implementation plan for the gregModstore web platform, including monorepo structure and technology stack.
Suggested Tags: web, architecture, nextjs, prisma, monorepo, scanner
Related Pages: /maintainer/migration-status
Split Recommendation: Keep as one page

# gregModstore: Production Architecture & Implementation Plan

## 1. Monorepo Architecture
We utilize a workspace-based monorepo (pnpm or turborepo) to maintain clean boundaries and share types across the ecosystem.

### Applications
- **`apps/web`**: Next.js 16.2 (App Router) — Main portal, dashboard, and store interface.
- **`apps/bot`**: Discord.js service for role synchronization and notifications.
- **`apps/scanner`**: `gregScan` Microservice (isolated Node.js/Docker) for malware and integrity analysis.
- **`apps/client-api`**: Backend for the desktop client and `greg://` protocol handling.

### Shared Packages
- **`packages/db`**: Prisma schema and database client.
- **`packages/auth`**: Authentication configuration (Better Auth with Discord Provider).
- **`packages/ui`**: Tailwind CSS v4 component library.
- **`packages/shared`**: Zod schemas, shared types, and system constants.
- **`packages/storage`**: S3/R2 abstraction layer for asset storage.

---

## 2. Technology Stack
- **Framework**: Next.js 16.2 (React 19 RC compatible)
- **Styling**: Tailwind CSS v4 (using the Oxide engine)
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: Better Auth (optimized for Discord SSO)
- **Security**: ClamAV integration for `gregScan`, Zod validation, and signed download URLs
- **Infrastructure**: Redis for job queues (BullMQ), Docker for service orchestration

---

## 3. Database Schema (Prisma)
The schema is designed for high auditability and complex relationships between mods, versions, and security scans.

```prisma
model User {
  id            String    @id @default(cuid())
  discordId     String    @unique
  username      String
  email         String?
  avatar        String?
  roleMapping   UserRole[]
  mods          Mod[]
  apiKeys       ApiKey[]
  // ... authentication fields
}

model Mod {
  id            String    @id @default(cuid())
  slug          String    @unique
  name          String
  description   String
  category      Category
  creatorId     String
  creator       User      @relation(fields: [creatorId], references: [id])
  versions      Version[]
  safetyStatus  SafetyStatus @default(PENDING)
  // ... analytics & metadata
}

model Version {
  id            String    @id @default(cuid())
  modId         String
  versionString String
  changelog     String?
  fileHash      String    // SHA-256
  storageKey    String
  scanReport    GregScanReport?
  // ...
}
```

---

## 4. gregScan Pipeline
1. **Upload**: Client uploads the artifact to the Quarantine S3 bucket via a Signed URL.
2. **Queue**: BullMQ triggers the `scanner` worker.
3. **Analyze**: The worker extracts the ZIP, runs ClamAV, and checks for suspicious DLL imports.
4. **Report**: A `GregScanReport` is generated. If marked **PASSED**, the file is moved to the Production S3 bucket.
5. **Notify**: The Discord Bot pings the creator and announces the mod in the designated channel.

---

## 5. Next Steps (Phase 1)
- [ ] Implement core UI components using Tailwind v4.
- [ ] Establish Discord Role -> Permission mapping logic.
- [ ] Finalize the Desktop Client Manifest API (`greg-manifest.json`).
