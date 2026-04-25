Title: Maintainer Overview
Path: /maintainer/index
Type: Overview
Audience: maintainer, framework developer
Summary: Internal hub for gregFramework maintainers, covering contribution rules, architecture, security, and project status.
Suggested Tags: maintainer, management, workflow, internal, architecture
Related Pages: /maintainer/contributing, /maintainer/migration-status
Split Recommendation: Create overview + children

# 🛡️ Maintainer Section

This section is dedicated to the core contributors and maintainers of the **gregFramework**. It provides the standards and guidelines required to maintain the stability and integrity of the ecosystem.

---

## 🗝️ Core Responsibilities
1.  **Maintain Binary Compatibility**: Avoid breaking changes in public `GregAPI` signatures.
2.  **Hook Accuracy**: Ensure all 300+ intercepts point to the correct IL2CPP methods after game updates.
3.  **Language Parity**: New framework features must be exposed to all language bridges (Lua, JS, Rust).

## 📋 Standards & Guidelines
- **[Contribution Guidelines](./contributing)**: Mandatory checklists and build proof requirements.
- **[Code Standards](./phase-2-code-standards)**: Architectural rules for Phase 2 and beyond.
- **[Review Checklist](./review-checklist)**: What to look for during Pull Request reviews.

## 🏗️ Architecture & Planning
- **[Project Context Snapshot](./project-context)**: Current implementation status and technical debt.
- **[Migration Status](./migration-status)**: Tracking the transition to Unity 6 and UGUI.
- **[Web Platform Architecture](./web-platform/architecture-plan)**: Blueprint for the mod store and backend services.

## 🛡️ Security & Audits
- **[Security & Stability Report](./security-stability-report)**: Deep-dive audit of the C#/Rust bridge.
- **[DevSecOps Scan Report](./security-scan-report)**: Automated pipeline results.
- **[Unity 6 Stability](./unity6-stability)**: Resolving IL2CPP and stripping issues.

## 📖 Key Workflows
- **[Adding New Hooks](./adding-hooks)**: Using the metadata scanner to extend the API.
- **[Sync Status](./gregcore-doc-sync-status)**: Tracking documentation consistency against source code.

---
::: warning
**Direct Modification**: Never modify internal metadata files (like `greg_hooks.json`) manually. Always use the provided tools to ensure system integrity.
:::
