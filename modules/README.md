# Version 1 Feature Migration Map

This review area places existing Version 1 functionality from the DIBV Fixturing Work app and the Canning Vale public website into the approved Version 2 module areas.

This is not a production migration. It is a static review surface that preserves operational knowledge without exposing private data, credentials, live integrations or internal architecture documents.

## Approved Module Areas

- Venue
- Competition
- Marketing
- Operations
- Staff
- Reports

## Migration Register

| V1 feature | Original V1 location | Destination module | Reason it belongs there | Migration type | Parked for later |
| --- | --- | --- | --- | --- | --- |
| Venue selection | app.py `/venue/select`, templates/base.html | Venue | Venue context controls all operational data and settings. | Static prototype | Live tenant/session handling |
| Venue records | models.py `Venue` | Venue | Stores centre identity, Spawtz location, court count, default mode, time slots and house team. | Static prototype | Real configuration editor |
| Court names and external court mappings | models.py `CourtName`, app.py sync/export helpers | Venue | Court names must match external systems and sponsor names. | Static prototype | Live Spawtz sync |
| Sport profiles | models.py `SportProfile`, templates/sports.html | Venue | Match duration and time slots differ by sport and venue. | Static prototype | Full rules editor |
| Venue-specific rules | fixture_engine.py, app.py venue helpers | Venue | DIBV, CVIBV and TEIS use different court counts, timing and fixture modes. | Static prototype | Rules engine |
| Public venue settings | templates/public_cvibv*.html | Venue | Public-facing centre settings affect website copy, contacts and calls to action. | Static prototype | CMS-backed settings |
| League and season sync | scraper.py, app.py scraper routes | Competition | Competitions, grades and divisions originate from league setup. | Static prototype | Live external connector |
| Team entries | models.py `Team`, templates/teams.html | Competition | Teams enter competitions, carry preferences and active status. | Static prototype | Player/team roster import |
| Availability | models.py `Availability`, templates/availability.html | Competition | Staff need week-by-week availability, payment block and forfeit handling. | Static prototype | Live editable workflow |
| Clash requests | models.py `ClashRequest`, team edit routes | Competition | Prevents player/team clashes where possible. | Static prototype | Player-level clash logic |
| Fixture generation | fixture_engine.py, app.py `/fixtures/generate` | Competition | Core operational planning for matches, courts and times. | Static prototype | Production generator |
| Fixture review and manual edits | templates/fixtures.html, fixture edit/swap/delete routes | Competition | Staff remain final decision makers and need override control. | Static prototype | Improved drag/drop editor |
| Court allocation logic | fixture_engine.py | Competition | Balances courts, groups grades and avoids broken layouts. | Static prototype | Optimised layout engine |
| Byes and house teams | fixture_engine.py, models.py `Match.is_house_game` | Competition | Handles odd team counts and venue-specific house team rules. | Static prototype | Venue-configurable bye policy |
| Finals formats | app.py finals helpers | Competition | Different centres use different finals models. | Static prototype | Finals builder |
| Fixture export concepts | app.py export helpers, template XLS | Competition | Staff upload fixtures into external systems. | Static prototype | Real export service |
| Results and ladders | scraper.py, scoring.py, public leaderboard routes | Competition | Competition results support ladders and public standings. | Static prototype | Reliable external result ingestion |
| CVIBV public website pages | templates/public_cvibv*.html | Marketing | Website pages attract, inform and convert players. | Static prototype | CMS publishing |
| Enquiry capture | models.py `WebsiteEnquiry`, app.py `/cvibv/enquire` | Marketing | Captures team, player, booking and program leads. | Static prototype | Email delivery and spam controls |
| Lead funnel | models.py `Lead`, templates/leads.html | Marketing | Turns enquiries into follow-up and conversion work. | Static prototype | CRM workflow automation |
| FAQs | models.py `WebsiteFAQ`, templates/website_faqs.html | Marketing | Staff-controlled answers reduce repetitive questions. | Static prototype | Public CMS permissions |
| Sponsors and partners | public website assets/templates | Marketing | Supports sponsor recognition and local partnership value. | Static prototype | Sponsor package tracking |
| Bookings pathways | templates/public_cvibv_bookings.html | Marketing | Converts parties, private bookings and court hire interest. | Static prototype | Booking calendar integration |
| Junior/program promotion | templates/public_cvibv_juniors.html and assets | Marketing | Promotes junior programs and registration pathways. | Static prototype | Program lifecycle management |
| Operations dashboard | templates/dashboard.html, sandbox dashboard | Operations | Daily command centre surfaces what needs attention. | Static prototype | Live operational event feed |
| Shift summaries | architecture slice reference only | Operations | Intended first V2 vertical slice for routing shift information. | Represented as future card | Full shift summary workflow |
| Incidents | operations prototype concept | Operations | Incident handling is a proven operational need for centres. | Represented as future card | Incident records |
| Maintenance and stock concepts | dashboard/prototype alerts | Operations | Venue issues and stock alerts belong in daily operations. | Represented as future card | Inventory and maintenance workflows |
| Staff accounts | models.py `Staff`, templates/staff.html | Staff | Admin users need controlled access. | Static prototype | Production auth |
| Venue-scoped access | models.py `staff_venue_access`, staff routes | Staff | Staff may access all or only selected venues. | Static prototype | Role policy enforcement |
| Roles and permissions | models.py `Staff.is_admin`, `all_venues` | Staff | Supports global admin and venue manager separation. | Static prototype | Detailed role matrix |
| Activity logs | models.py `ActivityLog`, templates/activity.html | Staff | Records who did what and when. | Static prototype | Immutable audit trail |
| Staff review actions | fixtures, leads, FAQs and dashboard workflows | Staff | Managers make decisions; system prepares. | Static prototype | Approval queues |
| Website analytics | models.py `WebsiteEvent`, templates/website_analytics.html | Reports | Tracks clicks and navigation to improve conversion. | Static prototype | Privacy-safe analytics pipeline |
| Fixture health indicators | fixtures/template warning concepts | Reports | Highlights risks before publication. | Static prototype | Scored health dashboard |
| Team counts | scraper/team sync and dashboard concepts | Reports | Helps monitor demand and competition health. | Static prototype | Trend reporting |
| Court utilisation | fixture engine layout metrics | Reports | Ensures courts and umpires are balanced. | Static prototype | Utilisation analytics |
| Forfeit/payment/availability warnings | availability, teams and dashboard concepts | Reports | Converts operational exceptions into review items. | Static prototype | Alert subscriptions |
| Trend snapshots | operations dashboard prototype | Reports | Gives owners and managers quick business insight. | Static prototype | Historical trend store |

## Features That Did Not Fit

No significant Version 1 feature was left without a module home. External system connection details remain represented only as non-live mapping concepts because live credentials and external data are intentionally excluded from this public review repo.
