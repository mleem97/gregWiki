---
title: Review Checklist
---

# gregFramework Engineering Review Checklist

Use this checklist in PR reviews for `WebApps/modstore`.

## Architecture
- [ ] Server Components used by default
- [ ] `use client` is narrowly scoped and justified
- [ ] Route structure follows App Router conventions
- [ ] Route-local code is colocated (`_components`, `_actions`, `_schemas`, `_lib`)

## Security
- [ ] External input validated at runtime
- [ ] Auth checks happen in server execution path
- [ ] Authorization + ownership checks are enforced
- [ ] Mutation paths are not protected by middleware only
- [ ] Secrets remain server-only
- [ ] High-risk actions are logged/audited

## Data and Caching
- [ ] Data access is centralized in repo/service boundaries
- [ ] Queries avoid overfetching and support pagination where needed
- [ ] Caching is explicit and documented
- [ ] Invalidation strategy is defined for cached entities

## Quality
- [ ] Strict typing preserved (`any` avoided/justified)
- [ ] No duplicated permission or validation logic
- [ ] Error and loading states are implemented
- [ ] File names and function names follow policy

## Product Integrity
- [ ] Design tokens and shared UI primitives are respected
- [ ] Solution is consistent with `phase-2-code-standards.md`
- [ ] Solution is consistent with `phase-3-repository-policy.md`
