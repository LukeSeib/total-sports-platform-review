# Competition Module

Represents V1 competition setup, teams, availability, clash requests, fixture generation, fixture review, byes, finals, exports, results and ladders.

## Original V1 Locations

- `models.py`: `Season`, `Competition`, `Team`, `ClashRequest`, `Round`, `Availability`, `Match`, `MatchupHistory`, `TeamTimeHistory`, `PublishedFixture`
- `fixture_engine.py`: matchups, doubleheaders, single round-robin, court allocation, time fairness and layout scoring
- `app.py`: fixtures, exports, finals, teams, availability, rounds, matchups and time matrix routes
- `scraper.py`: league, team, fixture and standings scraping
- `scoring.py`: Canning Vale ladder scoring

## Destination Module

Competition

## Why It Belongs Here

These features govern competitions from setup through fixture planning, publication, results and ladders.

## Migration Type

Static prototype representation.

## Parked for Later

Production schedule generation, external system connector, live exports, player-level logic, full results ingestion and ladder calculation.
