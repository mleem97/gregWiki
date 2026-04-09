# Sponsorship Automation

This document describes the standard automation flow for GregFramework sponsorship tiers.

## Goal

Keep sponsor tier data synchronized and use it as a source of truth for:

- Discord role sync
- private/VIP channel access
- website and wiki placements
- Mod Store footer sponsor block
- in-repo sponsor pages and credits

## Repository Workflow

Each repository contains `.github/workflows/sponsor-tier-sync.yml`.

The workflow:

1. runs hourly (and on manual trigger),
2. queries active GitHub Sponsors,
3. exports normalized data to `sponsors/sponsors.json`,
4. commits changes automatically when sponsor data changes.

## Required Secret

Add this repository secret:

- `SPONSORS_READ_TOKEN`: GitHub PAT with access to read sponsor relationships.

Without this secret, the workflow still completes but exports an empty snapshot.

## Tier Mapping

Use this mapping in downstream systems:

- `$1` -> `coffee_supporter`
- `$5` -> `bronze_backer`
- `$15` -> `silver_tester`
- `$25` -> `gold_developer`
- `$50+` -> `ecosystem_architect`

## VIP Operational Rules

For `$50+` sponsors:

- assign top sponsor placement (Wiki front page + Mod Store footer)
- create/maintain private 1-on-1 Discord lounge
- offer featured mod spotlight

## Example Consumer Script (Discord/Wiki Sync)

Use `sponsors/sponsors.json` as input and run a separate scheduled job (bot or CI worker) that:

1. maps each sponsor to a tier role,
2. grants/revokes Discord roles,
3. maintains VIP private channels,
4. updates website/wiki data endpoints.

## First Verified VIP

Current VIP sponsor:

- [@tobiasreichel](https://github.com/tobiasreichel) – `ecosystem_architect` (`$50/month`)
