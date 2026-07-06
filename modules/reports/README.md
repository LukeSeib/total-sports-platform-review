# Reports Module

Represents V1 analytics, fixture health, team counts, court utilisation, availability/payment warnings and trend snapshots.

## Original V1 Locations

- `models.py`: `WebsiteEvent`, `Availability`, `Team`, `Match`, `ActivityLog`
- `templates/website_analytics.html`
- `fixture_engine.py`: layout scoring and court utilisation concepts
- `sandboxes/operations-dashboard/`

## Destination Module

Reports

## Why It Belongs Here

These features turn operating activity into indicators, trends and warning summaries for owners and managers.

## Migration Type

Static prototype representation.

## Parked for Later

Real analytics pipeline, historical trend store, report exports and scheduled reporting.
