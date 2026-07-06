const scenarios = {
  dibv: {
    title: "DIBV doubleheader night",
    venue: "Darwin Indoor Beach Volleyball",
    week: "Week 15 - Monday 22 June 2026",
    staffReviewStatus: "Draft - staff review required before export",
    summary: "Two-match team entries, one-game-break rule, court balance and exact Spawtz mappings are all visible for review.",
    sportProfiles: ["Beach Volleyball - 30 minute profile"],
    competitions: [
      "Monday Mixed 6-A-Side - B Grade",
      "Monday Open 3-A-Side - A Grade",
      "Monday Men's Pairs - A Grade"
    ],
    teamEntries: [
      "Spike Wazowski",
      "Notorious DIG",
      "Crumbled Schmittys",
      "6 Body Problem",
      "Terra Volley",
      "Three little digs",
      "Los Chingones.",
      "Princesses"
    ],
    courts: [
      "Court 1 -> Spawtz: 1 - W Ink",
      "Court 2 -> Spawtz: 2 - MBL Electrical",
      "Court 3 -> Spawtz: 3 - Copytime",
      "Court 4 -> Spawtz: 4 - Defend Fire",
      "Court 7 -> pairs only"
    ],
    timeSlots: ["18:15", "18:45", "19:15", "19:45", "20:15"],
    fixtureRules: [
      "Doubleheader teams receive exactly two matches.",
      "Teams must play back-to-back or with one game break.",
      "Use 17:45 and 21:15 only when required by capacity.",
      "Top grades should be grouped tightly where practical.",
      "Court 7 is configured for pairs competitions."
    ],
    configurationRules: [
      "Court names are mapped per venue and may include sponsor names.",
      "Pairs court behaviour is venue configuration, not fixture code.",
      "External division names must remain exact for Spawtz export."
    ],
    externalWarnings: [
      "Review required: Court 5 external mapping is intentionally absent in this seed to prove warning display.",
      "Export adapter must use Spawtz division labels, not internal grade shorthand."
    ],
    houseTeamUsage: "Not used in this sample.",
    byeUsage: "Not used. All listed team entries are scheduled.",
    matches: [
      {
        time: "18:15",
        court: "Court 1",
        competition: "Monday Mixed 6-A-Side",
        division: "B Grade",
        home: "Spike Wazowski",
        away: "Notorious DIG",
        allocation: "First match in B Grade vertical block",
        status: "Rule pass"
      },
      {
        time: "18:45",
        court: "Court 1",
        competition: "Monday Mixed 6-A-Side",
        division: "B Grade",
        home: "Crumbled Schmittys",
        away: "Spike Wazowski",
        allocation: "Spike Wazowski second match, back-to-back",
        status: "Rule pass"
      },
      {
        time: "19:15",
        court: "Court 1",
        competition: "Monday Mixed 6-A-Side",
        division: "B Grade",
        home: "6 Body Problem",
        away: "Crumbled Schmittys",
        allocation: "Crumbled Schmittys second match, back-to-back",
        status: "Rule pass"
      },
      {
        time: "19:45",
        court: "Court 1",
        competition: "Monday Mixed 6-A-Side",
        division: "B Grade",
        home: "Notorious DIG",
        away: "6 Body Problem",
        allocation: "Notorious DIG one-game break, 6 Body Problem back-to-back",
        status: "Rule pass"
      },
      {
        time: "18:15",
        court: "Court 2",
        competition: "Monday Open 3-A-Side",
        division: "A Grade",
        home: "Terra Volley",
        away: "Three little digs",
        allocation: "Top grade kept adjacent to Court 1 block",
        status: "Rule pass"
      },
      {
        time: "18:45",
        court: "Court 2",
        competition: "Monday Open 3-A-Side",
        division: "A Grade",
        home: "Los Chingones.",
        away: "Princesses",
        allocation: "A Grade grouped vertically",
        status: "Rule pass"
      }
    ],
    validation: [
      "DIBV doubleheader match count is visible per team entry.",
      "Break rule can be reviewed from consecutive time slots.",
      "Court 7 special behaviour is configuration.",
      "External mapping warnings do not change internal court objects."
    ]
  },
  cvibv: {
    title: "CVIBV single round-robin night",
    venue: "Canning Vale Indoor Beach Volleyball",
    week: "Week 12 - Wednesday 08 June 2026",
    staffReviewStatus: "Draft - staff review required before publish",
    summary: "Single match entries, six courts, house-team handling and public-safe fixture language are represented.",
    sportProfiles: ["Indoor Beach Volleyball - 45 minute profile"],
    competitions: [
      "Wednesday Mixed 6-A-Side - Div B",
      "Wednesday Ladies 6-A-Side - Div A"
    ],
    teamEntries: [
      "Slapperz",
      "Setting Ducks",
      "Hit & Miss",
      "Sets Pistols",
      "Sandy Cracks",
      "Mixed Nuts* (house team role)"
    ],
    courts: [
      "Court 1 -> Spawtz: Crt 1 - Veracity",
      "Court 2 -> Spawtz: Crt 2 - Veracity",
      "Court 3",
      "Court 4",
      "Court 5",
      "Court 6"
    ],
    timeSlots: ["18:00", "18:45", "19:30", "20:15", "21:00"],
    fixtureRules: [
      "Default format is single round-robin.",
      "Team entries normally receive one match for the week.",
      "Odd team counts may use configured house team.",
      "House team is excluded from normal matchup and ladder logic unless configured.",
      "Public output must not expose staff-only language."
    ],
    configurationRules: [
      "House team display name is Mixed Nuts* for this venue.",
      "CVIBV uses six courts and 45 minute match slots.",
      "Competition and division labels must match Spawtz exactly."
    ],
    externalWarnings: [
      "Review required: house-team mapping must exist in the target Spawtz league or the export path must handle it.",
      "No internal CVIBV abbreviation should appear on public fixture output."
    ],
    houseTeamUsage: "Mixed Nuts* used once because the Div B seed has an odd normal team count.",
    byeUsage: "No bye. House team resolves the odd team count.",
    matches: [
      {
        time: "18:00",
        court: "Court 1",
        competition: "Wednesday Mixed 6-A-Side",
        division: "Div B",
        home: "Slapperz",
        away: "Setting Ducks",
        allocation: "Normal single round-robin match",
        status: "Rule pass"
      },
      {
        time: "18:45",
        court: "Court 1",
        competition: "Wednesday Mixed 6-A-Side",
        division: "Div B",
        home: "Hit & Miss",
        away: "Sets Pistols",
        allocation: "Same division kept vertical on Court 1",
        status: "Rule pass"
      },
      {
        time: "19:30",
        court: "Court 1",
        competition: "Wednesday Mixed 6-A-Side",
        division: "Div B",
        home: "Sandy Cracks",
        away: "Mixed Nuts*",
        allocation: "House-team match, not a normal competitor relationship",
        status: "Review"
      },
      {
        time: "18:00",
        court: "Court 2",
        competition: "Wednesday Ladies 6-A-Side",
        division: "Div A",
        home: "Pass & Hitties",
        away: "Finish Powerball",
        allocation: "Top division grouped adjacent to Court 1",
        status: "Rule pass"
      }
    ],
    validation: [
      "CVIBV can render single match participation.",
      "House Team is explicit and reviewable.",
      "Six-court venue setup comes from configuration.",
      "Public/staff language separation is visible as a rule."
    ]
  },
  teis: {
    title: "TEIS mixed-sport night",
    venue: "Top End Indoor Sports",
    week: "Week 18 - Thursday 16 July 2026",
    staffReviewStatus: "Draft - staff review required before upload",
    summary: "Multiple sport profiles, sport-specific durations, three-court limits and capacity byes are visible in one plan.",
    sportProfiles: [
      "Netball - 45 minute profile",
      "Cricket - 80 minute profile",
      "Soccer - 40 minute profile"
    ],
    competitions: [
      "Thursday 6 Pack Cricket - Social League",
      "Thursday Mixed Soccer - Social Soccer"
    ],
    teamEntries: [
      "Here for Beer",
      "Jakes steel and cricket",
      "Offies & Frothies",
      "Side quest nerds",
      "Ball of Duty",
      "Toadettes"
    ],
    courts: [
      "Court 1 -> cricket preferred",
      "Court 2 -> soccer primary, cricket overflow",
      "Court 3 -> cricket preferred"
    ],
    timeSlots: ["18:00 cricket", "19:20 cricket", "20:40 cricket", "18:00 soccer", "18:40 soccer", "19:20 soccer"],
    fixtureRules: [
      "TEIS has three courts.",
      "Sport profiles define different match durations.",
      "No match should be scheduled after the configured latest acceptable finish.",
      "Capacity overflow creates byes.",
      "Bye counts should be balanced over the season."
    ],
    configurationRules: [
      "Thursday template: cricket Courts 1 and 3, soccer Court 2, cricket overflow on Court 2 only as configured.",
      "Cricket duration is 80 minutes; soccer duration is 40 minutes.",
      "Division names differ by competition and must not be assumed."
    ],
    externalWarnings: [
      "Review required: Spawtz division labels vary by competition, such as Social League and Social Soccer.",
      "Court template warnings should be shown before staff approval, not hidden in generation."
    ],
    houseTeamUsage: "Not used. TEIS uses byes rather than house-team matches in this sample.",
    byeUsage: "Side quest nerds receives a bye due capacity. Bye history should be reviewed before approval.",
    matches: [
      {
        time: "18:00",
        court: "Court 1",
        competition: "Thursday 6 Pack Cricket",
        division: "Social League",
        home: "Here for Beer",
        away: "Jakes steel and cricket",
        allocation: "Cricket on preferred court",
        status: "Rule pass"
      },
      {
        time: "19:20",
        court: "Court 1",
        competition: "Thursday 6 Pack Cricket",
        division: "Social League",
        home: "Offies & Frothies",
        away: "Jakes steel and cricket",
        allocation: "Cricket continues on Court 1",
        status: "Rule pass"
      },
      {
        time: "18:00",
        court: "Court 2",
        competition: "Thursday Mixed Soccer",
        division: "Social Soccer",
        home: "Ball of Duty",
        away: "Toadettes",
        allocation: "Soccer on configured primary court",
        status: "Rule pass"
      },
      {
        time: "20:40",
        court: "Court 3",
        competition: "Thursday 6 Pack Cricket",
        division: "Social League",
        home: "Side quest nerds",
        away: "BYE",
        allocation: "Capacity bye shown for staff review",
        status: "Review"
      }
    ],
    validation: [
      "TEIS can render multiple sport profiles in one fixture plan.",
      "Sport durations are not buried in match names.",
      "Three-court capacity and byes are explicit.",
      "External division mapping is per competition, not global."
    ]
  }
};

const root = document.querySelector("#scenario-root");
const tabs = document.querySelectorAll(".tab");

function list(items) {
  return `<ul class="object-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function rules(items) {
  return `<ul class="rule-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function warnings(items) {
  return `<ul class="warning-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderScenario(key) {
  const scenario = scenarios[key];
  const matchRows = scenario.matches.map((match) => {
    const isReview = match.status === "Review";
    return `
      <tr>
        <td><strong>${match.time}</strong></td>
        <td>${match.court}</td>
        <td>
          <strong>${match.competition}</strong>
          <span class="team-note">${match.division}</span>
        </td>
        <td>
          <strong>${match.home} v ${match.away}</strong>
          <span class="team-note">${match.allocation}</span>
        </td>
        <td><span class="rule-status ${isReview ? "warn" : ""}">${match.status}</span></td>
      </tr>
    `;
  }).join("");

  root.innerHTML = `
    <article>
      <section class="scenario-header">
        <div>
          <p class="eyebrow">Fixture Plan</p>
          <h2>${scenario.title}</h2>
          <p>${scenario.summary}</p>
          <div class="pill-row">
            <span class="pill">${scenario.venue}</span>
            <span class="pill">${scenario.week}</span>
            <span class="pill ok">Static seed data</span>
          </div>
        </div>
        <aside class="review-status">
          <span class="status-label">Staff review status</span>
          <strong>${scenario.staffReviewStatus}</strong>
          <span>Managers remain the final decision makers.</span>
        </aside>
      </section>

      <section class="summary-grid" aria-label="Scenario summary">
        <div class="summary-item">
          <span>Sport Profiles</span>
          <strong>${scenario.sportProfiles.length}</strong>
        </div>
        <div class="summary-item">
          <span>Competitions</span>
          <strong>${scenario.competitions.length}</strong>
        </div>
        <div class="summary-item">
          <span>Team Entries</span>
          <strong>${scenario.teamEntries.length}</strong>
        </div>
        <div class="summary-item">
          <span>Matches Rendered</span>
          <strong>${scenario.matches.length}</strong>
        </div>
      </section>

      <section class="detail-grid">
        <div class="card">
          <span class="card-label">Venue</span>
          <h3>${scenario.venue}</h3>
          <p>${scenario.week}</p>
        </div>
        <div class="card">
          <span class="card-label">Sport Profile</span>
          <h3>Configured timing</h3>
          ${list(scenario.sportProfiles)}
        </div>
        <div class="card">
          <span class="card-label">Competition</span>
          <h3>Included competitions</h3>
          ${list(scenario.competitions)}
        </div>
        <div class="card">
          <span class="card-label">Team Entry</span>
          <h3>Participants</h3>
          ${list(scenario.teamEntries)}
        </div>
        <div class="card">
          <span class="card-label">Courts</span>
          <h3>Court objects and mappings</h3>
          ${list(scenario.courts)}
        </div>
        <div class="card">
          <span class="card-label">Time Slots</span>
          <h3>Playable positions</h3>
          ${list(scenario.timeSlots)}
        </div>
        <div class="card">
          <span class="card-label">Fixture Rules</span>
          <h3>Planning constraints</h3>
          ${rules(scenario.fixtureRules)}
        </div>
        <div class="card">
          <span class="card-label">Configuration Rules</span>
          <h3>Venue-specific settings</h3>
          ${rules(scenario.configurationRules)}
        </div>
        <div class="card">
          <span class="card-label">External System</span>
          <h3>Mapping warnings</h3>
          ${warnings(scenario.externalWarnings)}
        </div>
      </section>

      <section class="fixture-section">
        <div class="section-heading">
          <h2>Fixture Plan Render</h2>
          <span>${scenario.staffReviewStatus}</span>
        </div>
        <table class="fixture-table">
          <thead>
            <tr>
              <th>Time Slot</th>
              <th>Court Allocation</th>
              <th>Competition</th>
              <th>Match</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>${matchRows}</tbody>
        </table>
      </section>

      <section class="detail-grid" aria-label="Special usage">
        <div class="card">
          <span class="card-label">House Team Usage</span>
          <h3>Configured participant role</h3>
          <p>${scenario.houseTeamUsage}</p>
        </div>
        <div class="card">
          <span class="card-label">Bye Usage</span>
          <h3>Competition outcome</h3>
          <p>${scenario.byeUsage}</p>
        </div>
        <div class="card">
          <span class="card-label">External Mapping Boundary</span>
          <h3>Internal model stays clean</h3>
          <p>External names are shown as mappings and warnings, not as replacements for internal business objects.</p>
        </div>
      </section>

      <section class="validation-section">
        <h2>What This Proves</h2>
        <ul class="validation-list">
          ${scenario.validation.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </article>
  `;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderScenario(tab.dataset.scenario);
  });
});

renderScenario("dibv");

