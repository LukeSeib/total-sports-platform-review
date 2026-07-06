# Staff Module

Represents V1 staff access, venue-scoped permissions, admin authority, activity logs and review actions.

## Original V1 Locations

- `models.py`: `Staff`, `staff_venue_access`, `ActivityLog`
- `app.py`: login/logout, staff routes, activity route, decision actions in fixtures/leads/FAQs
- `templates/staff.html`, `templates/activity.html`

## Destination Module

Staff

## Why It Belongs Here

These features define who can use the platform, which venues they can access and which operational decisions they can make.

## Migration Type

Static prototype representation.

## Parked for Later

Production authentication, role matrix, audit hardening and approval queues.
