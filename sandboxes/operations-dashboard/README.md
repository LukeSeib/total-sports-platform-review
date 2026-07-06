# Operations Dashboard Prototype

This sandbox is an interactive, static prototype for the Total Sports Platform venue command centre.

It answers one daily operating question:

What needs attention right now?

It uses dummy data only. It does not connect to Spawtz, use real customer data, build payments, create production authentication or modify the approved Domain Model.

## How to View

Open `index.html` in a browser.

No build step is required.

## What It Tests

The prototype lets a reviewer:

- Switch between DIBV, CVIBV and TEIS.
- Switch operational day/night.
- See Right Now metrics for competitions, teams, courts, fixture readiness, staff coverage, incidents, venue issues and alerts.
- Review trend comparisons using dummy data.
- Approve decisions requiring human confirmation.
- Accept or dismiss warnings.
- Flag alerts or decisions for follow-up.
- Use quick pathway placeholders for future modules.
- Watch dashboard readiness update as decisions are resolved.

## Source Documents

This prototype is based on:

- `architecture/DOMAIN_MODEL.md`
- `LEGACY_PLATFORM_ASSIMILATION.md`
- `sandboxes/competition-workspace/`
- `architecture/slices/FIXTURE_PLANNING_SLICE.md`

## Prototype Boundary

Included:

- Static dummy venue scenarios.
- Four dashboard zones: Right Now, Trends, Decisions Waiting and Quick Pathways.
- Human decision workflow.
- Operational readiness status.
- Venue-specific alerts.

Excluded:

- Live integrations.
- Production fixture generation.
- Database schema.
- Backend services.
- Authentication.
- Payments.
- Polished product UI.
