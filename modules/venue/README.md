# Venue Module

Represents V1 venue setup, court names, sport profiles, time slots, external mappings and venue-specific configuration.

## Original V1 Locations

- `models.py`: `Venue`, `CourtName`, `SportProfile`
- `app.py`: venue selection, court sync, sports profile routes, venue timeline helpers
- `scraper.py`: external venue and court mapping support
- Public CVIBV templates: venue public settings

## Destination Module

Venue

## Why It Belongs Here

These features define how a centre operates before competition work can happen. Court counts, court names, sport durations, time slots and external IDs are venue-level knowledge.

## Migration Type

Static prototype representation.

## Parked for Later

Live configuration forms, validation, audit approval and external system sync.
