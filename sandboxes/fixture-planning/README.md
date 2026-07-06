# Fixture Planning Sandbox

This sandbox is a lightweight proof-of-concept render for the approved Total Sports Platform Domain Model.

It uses static seed data only. It does not connect to Spawtz, create a database, authenticate users, generate production fixtures or replace the existing DIBV fixture tool.

## Purpose

The sandbox helps reviewers confirm that the Version 2 model can represent:

- DIBV doubleheader fixture planning.
- CVIBV single round-robin fixture planning.
- TEIS mixed-sport fixture planning.
- Venue-specific rules through configuration rather than hard-coded special cases.
- External system mappings without contaminating internal business objects.
- Staff review before final approval.

## How to View

Open `index.html` in a browser.

No build step is required.

## Source Documents

This sandbox is based on:

- `architecture/DOMAIN_MODEL.md`
- `LEGACY_PLATFORM_ASSIMILATION.md`
- `architecture/slices/FIXTURE_PLANNING_SLICE.md`

## Sandbox Boundary

Included:

- Venue
- Sport Profile
- Competition
- Week
- Team Entries
- Courts
- Time Slots
- Fixture Rules
- Configuration Rules
- Fixture Plan
- Matches
- Court Allocations
- House Team usage
- Bye usage
- External System mapping warnings
- Staff review status

Excluded:

- Database schema
- Live Spawtz connection
- Production fixture generation
- Authentication
- Payments
- Polished UI
