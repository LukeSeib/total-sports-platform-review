# Competition Workspace Prototype

This sandbox is an interactive, static prototype for testing day-to-day competition management work against the approved Total Sports Platform Domain Model.

It uses dummy data only. It does not connect to live Spawtz, use real customer data, build payments, create production authentication or replace the current DIBV fixture tool.

## How to View

Open `index.html` in a browser.

No build step is required.

## What It Tests

The prototype lets a reviewer:

- Select a venue: DIBV, CVIBV or TEIS.
- Select an operational day/night.
- View competitions, team entries, courts, time slots, fixture rules and configuration rules.
- Toggle team availability.
- Mark teams as payment-blocked.
- Add or remove clash requests.
- Change team time preferences.
- Mark matches as manually reviewed.
- Accept fixture warnings.
- Watch fixture readiness and publish status update.

## Source Documents

This prototype is based on:

- `architecture/DOMAIN_MODEL.md`
- `LEGACY_PLATFORM_ASSIMILATION.md`
- `architecture/slices/FIXTURE_PLANNING_SLICE.md`
- `sandboxes/fixture-planning/`

## Prototype Boundary

Included:

- Static dummy venue scenarios.
- Interactive staff review workflow.
- Venue-specific configuration display.
- Fixture plan review state.
- House-team and bye visibility.
- External mapping warnings.

Excluded:

- Fixture generation algorithms.
- Live Spawtz data.
- Database schema.
- Backend services.
- Production authentication.
- Payments.
- Polished product UI.
