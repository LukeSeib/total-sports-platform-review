const sourceScenarios = {
  dibv: {
    name: "Darwin Indoor Beach Volleyball",
    shortName: "DIBV",
    days: {
      monday: {
        label: "Monday night",
        week: "Week 15 - Monday 22 June 2026",
        staffStatus: "Draft - fixture staff review required",
        competitions: [
          { name: "Monday Mixed 6-A-Side", division: "B Grade", sport: "Beach Volleyball", format: "Doubleheader" },
          { name: "Monday Open 3-A-Side", division: "A Grade", sport: "Beach Volleyball", format: "Doubleheader" }
        ],
        courts: ["1 - W Ink", "2 - MBL Electrical", "3 - Copytime", "4 - Defend Fire", "Court 7"],
        timeSlots: ["18:15", "18:45", "19:15", "19:45", "20:15", "20:45"],
        rules: [
          { type: "Fixture Rule", text: "Doubleheader teams must receive exactly two matches." },
          { type: "Fixture Rule", text: "Doubleheader break must be back-to-back or one game break." },
          { type: "Configuration Rule", text: "Court 7 is the pairs court and is configured separately." },
          { type: "External Mapping", text: "Court, league and division names must match Spawtz export labels." }
        ],
        teams: [
          team("spike", "Spike Wazowski", "Monday Mixed 6-A-Side", "B Grade", "active", true, false, "18:15", "20:45", ["notorious"], 0),
          team("notorious", "Notorious DIG", "Monday Mixed 6-A-Side", "B Grade", "active", true, false, "18:15", "21:15", ["spike"], 0),
          team("crumbled", "Crumbled Schmittys", "Monday Mixed 6-A-Side", "B Grade", "active", true, false, "18:15", "21:15", [], 0),
          team("body", "6 Body Problem", "Monday Mixed 6-A-Side", "B Grade", "active", true, false, "18:15", "21:15", [], 1),
          team("terra", "Terra Volley", "Monday Open 3-A-Side", "A Grade", "active", true, false, "18:45", "20:15", [], 0),
          team("digs", "Three little digs", "Monday Open 3-A-Side", "A Grade", "active", true, false, "18:15", "21:15", [], 0)
        ],
        matches: [
          match("d1", "18:15", "1 - W Ink", "Monday Mixed 6-A-Side", "B Grade", "spike", "notorious"),
          match("d2", "18:45", "1 - W Ink", "Monday Mixed 6-A-Side", "B Grade", "crumbled", "spike"),
          match("d3", "19:15", "1 - W Ink", "Monday Mixed 6-A-Side", "B Grade", "body", "crumbled"),
          match("d4", "19:45", "1 - W Ink", "Monday Mixed 6-A-Side", "B Grade", "notorious", "body"),
          match("d5", "18:45", "2 - MBL Electrical", "Monday Open 3-A-Side", "A Grade", "terra", "digs")
        ],
        seedWarnings: [
          warning("mapping", "Court 5 external name is not present in this dummy venue mapping.", "external"),
          warning("layout", "A Grade has a time preference that needs staff review before export.", "rule")
        ]
      },
      tuesday: {
        label: "Tuesday night",
        week: "Week 15 - Tuesday 23 June 2026",
        staffStatus: "Draft - layout review required",
        competitions: [
          { name: "Tuesday Mixed 6-A-Side", division: "A Grade", sport: "Beach Volleyball", format: "Doubleheader" },
          { name: "Tuesday Open Pairs", division: "A Grade", sport: "Beach Volleyball", format: "Doubleheader" }
        ],
        courts: ["1 - W Ink", "2 - MBL Electrical", "3 - Copytime", "Court 7"],
        timeSlots: ["18:15", "18:45", "19:15", "19:45", "20:15"],
        rules: [
          { type: "Fixture Rule", text: "Prefer 18:15 to 20:45 before using edge slots." },
          { type: "Configuration Rule", text: "Pairs competition is configured for Court 7." }
        ],
        teams: [
          team("pass", "Pass & Hitties", "Tuesday Mixed 6-A-Side", "A Grade", "active", true, false, "18:15", "20:45", [], 0),
          team("finish", "Finish Powerball", "Tuesday Mixed 6-A-Side", "A Grade", "active", true, false, "18:15", "20:45", [], 0),
          team("sand", "Quick sand", "Tuesday Open Pairs", "A Grade", "active", true, false, "18:15", "21:15", [], 0),
          team("sorry", "Sorry Not Sorry", "Tuesday Open Pairs", "A Grade", "active", true, false, "18:15", "21:15", [], 0)
        ],
        matches: [
          match("dt1", "18:15", "1 - W Ink", "Tuesday Mixed 6-A-Side", "A Grade", "pass", "finish"),
          match("dt2", "18:45", "Court 7", "Tuesday Open Pairs", "A Grade", "sand", "sorry")
        ],
        seedWarnings: [warning("review", "Pairs court usage should be confirmed before publishing.", "rule")]
      }
    }
  },
  cvibv: {
    name: "Canning Vale Indoor Beach Volleyball",
    shortName: "CVIBV",
    days: {
      wednesday: {
        label: "Wednesday night",
        week: "Week 12 - Wednesday 08 June 2026",
        staffStatus: "Draft - house team review required",
        competitions: [
          { name: "Wednesday Mixed 6-A-Side", division: "Div B", sport: "Indoor Beach Volleyball", format: "Single round-robin" },
          { name: "Wednesday Ladies 6-A-Side", division: "Div A", sport: "Indoor Beach Volleyball", format: "Single round-robin" }
        ],
        courts: ["Crt 1 - Veracity", "Crt 2 - Veracity", "Court 3", "Court 4", "Court 5", "Court 6"],
        timeSlots: ["18:00", "18:45", "19:30", "20:15", "21:00"],
        rules: [
          { type: "Fixture Rule", text: "Default format is single round-robin." },
          { type: "Configuration Rule", text: "Mixed Nuts* is configured as the house team where needed." },
          { type: "External Mapping", text: "Division labels use Div A, Div B and Div C mapping." }
        ],
        teams: [
          team("slapperz", "Slapperz", "Wednesday Mixed 6-A-Side", "Div B", "active", true, false, "18:00", "21:00", [], 0),
          team("ducks", "Setting Ducks", "Wednesday Mixed 6-A-Side", "Div B", "active", true, false, "18:00", "21:00", [], 0),
          team("hitmiss", "Hit & Miss", "Wednesday Mixed 6-A-Side", "Div B", "active", true, false, "18:00", "21:00", ["pistols"], 0),
          team("pistols", "Sets Pistols", "Wednesday Mixed 6-A-Side", "Div B", "active", true, false, "18:45", "21:00", ["hitmiss"], 0),
          team("cracks", "Sandy Cracks", "Wednesday Mixed 6-A-Side", "Div B", "active", true, false, "18:00", "21:00", [], 0),
          team("nuts", "Mixed Nuts*", "House Team", "Configured", "house", true, false, "18:00", "21:00", [], 0)
        ],
        matches: [
          match("c1", "18:00", "Crt 1 - Veracity", "Wednesday Mixed 6-A-Side", "Div B", "slapperz", "ducks"),
          match("c2", "18:45", "Crt 1 - Veracity", "Wednesday Mixed 6-A-Side", "Div B", "hitmiss", "pistols"),
          match("c3", "19:30", "Crt 1 - Veracity", "Wednesday Mixed 6-A-Side", "Div B", "cracks", "nuts", "House Team"),
          match("c4", "18:00", "Crt 2 - Veracity", "Wednesday Ladies 6-A-Side", "Div A", "pass", "finish", "Example placeholder")
        ],
        seedWarnings: [
          warning("house", "House team usage requires staff confirmation before export.", "rule"),
          warning("mapping", "Mixed Nuts* must exist in the target external competition if exported.", "external")
        ]
      },
      thursday: {
        label: "Thursday night",
        week: "Week 12 - Thursday 09 June 2026",
        staffStatus: "Draft - junior league included",
        competitions: [
          { name: "Thursday Open 4-A-Side", division: "Div A", sport: "Indoor Beach Volleyball", format: "Single round-robin" },
          { name: "Thursday Junior League", division: "Junior", sport: "Indoor Beach Volleyball", format: "Program league" }
        ],
        courts: ["Crt 1 - Veracity", "Crt 2 - Veracity", "Court 3", "Court 4", "Court 5", "Court 6"],
        timeSlots: ["18:00", "18:45", "19:30", "20:15"],
        rules: [
          { type: "Fixture Rule", text: "Junior league is visible as a competition/program context." },
          { type: "Configuration Rule", text: "Six courts and 45 minute match slots are configured." }
        ],
        teams: [
          team("blockers", "Blockers", "Thursday Open 4-A-Side", "Div A", "active", true, false, "18:00", "21:00", [], 0),
          team("diggers", "Diggers", "Thursday Open 4-A-Side", "Div A", "active", true, false, "18:00", "21:00", [], 1),
          team("juniors", "Junior Volley Group", "Thursday Junior League", "Junior", "active", true, false, "18:00", "19:30", [], 0)
        ],
        matches: [
          match("ct1", "18:00", "Crt 1 - Veracity", "Thursday Open 4-A-Side", "Div A", "blockers", "diggers"),
          match("ct2", "18:00", "Court 4", "Thursday Junior League", "Junior", "juniors", "Program Session", "Program")
        ],
        seedWarnings: [warning("forfeit", "Diggers forfeited last week. Confirm they are playing before publishing.", "rule")]
      }
    }
  },
  teis: {
    name: "Top End Indoor Sports",
    shortName: "TEIS",
    days: {
      thursday: {
        label: "Thursday night",
        week: "Week 18 - Thursday 16 July 2026",
        staffStatus: "Draft - mixed sport capacity review",
        competitions: [
          { name: "Thursday 6 Pack Cricket", division: "Social League", sport: "Cricket", format: "Single fixture" },
          { name: "Thursday Mixed Soccer", division: "Social Soccer", sport: "Soccer", format: "Single fixture" }
        ],
        courts: ["Court 1", "Court 2", "Court 3"],
        timeSlots: ["18:00 cricket", "19:20 cricket", "20:40 cricket", "18:00 soccer", "18:40 soccer"],
        rules: [
          { type: "Fixture Rule", text: "Cricket duration is 80 minutes." },
          { type: "Fixture Rule", text: "Soccer duration is 40 minutes." },
          { type: "Configuration Rule", text: "Thursday template: cricket Courts 1 and 3, soccer Court 2, cricket overflow on Court 2." },
          { type: "Fixture Rule", text: "Capacity overflow creates byes and bye counts should be balanced." }
        ],
        teams: [
          team("beer", "Here for Beer", "Thursday 6 Pack Cricket", "Social League", "active", true, false, "18:00", "20:40", [], 0),
          team("jakes", "Jakes steel and cricket", "Thursday 6 Pack Cricket", "Social League", "active", true, false, "18:00", "20:40", [], 0),
          team("offies", "Offies & Frothies", "Thursday 6 Pack Cricket", "Social League", "active", true, false, "18:00", "20:40", [], 0),
          team("sidequest", "Side quest nerds", "Thursday 6 Pack Cricket", "Social League", "active", true, false, "18:00", "20:40", [], 1),
          team("duty", "Ball of Duty", "Thursday Mixed Soccer", "Social Soccer", "active", true, false, "18:00", "20:40", [], 0),
          team("toad", "Toadettes", "Thursday Mixed Soccer", "Social Soccer", "active", true, false, "18:00", "20:40", [], 0)
        ],
        matches: [
          match("t1", "18:00 cricket", "Court 1", "Thursday 6 Pack Cricket", "Social League", "beer", "jakes"),
          match("t2", "19:20 cricket", "Court 1", "Thursday 6 Pack Cricket", "Social League", "offies", "jakes"),
          match("t3", "18:00 soccer", "Court 2", "Thursday Mixed Soccer", "Social Soccer", "duty", "toad"),
          match("t4", "20:40 cricket", "Bye", "Thursday 6 Pack Cricket", "Social League", "sidequest", "BYE", "Bye")
        ],
        seedWarnings: [
          warning("bye", "Side quest nerds has a bye. Check previous bye count before approval.", "rule"),
          warning("mapping", "TEIS division names vary by competition and must be exact.", "external")
        ]
      },
      monday: {
        label: "Monday night",
        week: "Week 18 - Monday 13 July 2026",
        staffStatus: "Draft - netball review",
        competitions: [
          { name: "Monday Mixed Netball", division: "Social League", sport: "Netball", format: "Single fixture" }
        ],
        courts: ["Court 1", "Court 2", "Court 3"],
        timeSlots: ["18:00", "18:45", "19:30", "20:15"],
        rules: [
          { type: "Fixture Rule", text: "Netball duration is 45 minutes." },
          { type: "Configuration Rule", text: "Monday is all netball across available courts." }
        ],
        teams: [
          team("blow", "Blow ins", "Monday Mixed Netball", "Social League", "active", true, false, "18:45", "20:15", [], 0),
          team("couch", "Off the couch", "Monday Mixed Netball", "Social League", "active", true, false, "18:45", "20:15", [], 0),
          team("butter", "Butter Fingers", "Monday Mixed Netball", "Social League", "active", true, false, "18:00", "20:15", [], 0),
          team("hoopy", "Hoopy Hour", "Monday Mixed Netball", "Social League", "active", true, false, "18:00", "20:15", [], 0)
        ],
        matches: [
          match("tm1", "18:45", "Court 1", "Monday Mixed Netball", "Social League", "blow", "couch"),
          match("tm2", "18:00", "Court 2", "Monday Mixed Netball", "Social League", "butter", "hoopy")
        ],
        seedWarnings: [warning("time", "Off the couch cannot play at 18:00, so the later allocation is shown for review.", "rule")]
      }
    }
  }
};

function team(id, name, competition, division, status, available, paymentBlocked, earliest, latest, clashes, recentForfeits) {
  return { id, name, competition, division, status, available, paymentBlocked, earliest, latest, clashes, recentForfeits };
}

function match(id, time, court, competition, division, homeId, awayId, special = "") {
  return { id, time, court, competition, division, homeId, awayId, special, reviewed: false };
}

function warning(id, text, type) {
  return { id, text, type, accepted: false };
}

let state = {};
const venueSelect = document.querySelector("#venueSelect");
const daySelect = document.querySelector("#daySelect");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function setup() {
  Object.entries(sourceScenarios).forEach(([key, venue]) => {
    venueSelect.add(new Option(`${venue.name} (${venue.shortName})`, key));
  });
  venueSelect.value = "dibv";
  loadDays();
  document.querySelector("#resetButton").addEventListener("click", loadScenario);
  document.querySelector("#addClashButton").addEventListener("click", addClash);
  venueSelect.addEventListener("change", () => {
    loadDays();
    loadScenario();
  });
  daySelect.addEventListener("change", loadScenario);
  loadScenario();
}

function loadDays() {
  const venue = sourceScenarios[venueSelect.value];
  daySelect.innerHTML = "";
  Object.entries(venue.days).forEach(([key, day]) => {
    daySelect.add(new Option(day.label, key));
  });
}

function loadScenario() {
  const venue = sourceScenarios[venueSelect.value];
  state = clone(venue.days[daySelect.value]);
  state.venueName = venue.name;
  state.shortName = venue.shortName;
  render();
}

function teamName(id) {
  const found = state.teams.find((teamEntry) => teamEntry.id === id);
  return found ? found.name : id;
}

function calculatedWarnings() {
  const warnings = clone(state.seedWarnings);
  state.teams.forEach((teamEntry) => {
    if (teamEntry.status === "inactive") return;
    if (!teamEntry.available) {
      warnings.push(warning(`unavailable-${teamEntry.id}`, `${teamEntry.name} is unavailable and should not be fixtured.`, "team"));
    }
    if (teamEntry.paymentBlocked) {
      warnings.push(warning(`payment-${teamEntry.id}`, `${teamEntry.name} is payment-blocked. Staff must resolve or accept before publishing.`, "team"));
    }
    if (teamEntry.recentForfeits > 0) {
      warnings.push(warning(`forfeit-${teamEntry.id}`, `${teamEntry.name} forfeited recently. Confirm they are playing.`, "team"));
    }
    if (teamEntry.earliest !== "18:15" && teamEntry.earliest !== "18:00") {
      warnings.push(warning(`time-${teamEntry.id}`, `${teamEntry.name} has a time preference from ${teamEntry.earliest} to ${teamEntry.latest}.`, "team"));
    }
  });
  state.matches.forEach((plannedMatch) => {
    if (!plannedMatch.reviewed) {
      warnings.push(warning(`review-${plannedMatch.id}`, `${teamName(plannedMatch.homeId)} v ${teamName(plannedMatch.awayId)} still needs manual fixture review.`, "review"));
    }
  });
  return warnings.map((item) => {
    const acceptedSeed = state.seedWarnings.find((seed) => seed.id === item.id);
    return acceptedSeed ? { ...item, accepted: acceptedSeed.accepted } : item;
  });
}

function canPublish(warnings) {
  return warnings.every((item) => item.accepted || item.type === "review" === false) && state.matches.every((plannedMatch) => plannedMatch.reviewed);
}

function render() {
  const warnings = calculatedWarnings();
  const activeTeams = state.teams.filter((teamEntry) => teamEntry.status !== "inactive" && teamEntry.status !== "house").length;
  const reviewed = state.matches.filter((plannedMatch) => plannedMatch.reviewed).length;
  const unresolved = warnings.filter((item) => !item.accepted).length;
  const allMatchesReviewed = state.matches.every((plannedMatch) => plannedMatch.reviewed);
  const publishReady = unresolved === 0 && allMatchesReviewed;

  document.querySelector("#workspaceTitle").textContent = `${state.venueName} - ${state.label}`;
  document.querySelector("#staffStatus").textContent = state.staffStatus;
  document.querySelector("#fixturePlanStatus").textContent = `${state.matches.length} planned matches`;
  document.querySelector("#readinessTitle").textContent = publishReady ? "Ready for staff approval" : "Review required";
  document.querySelector("#readinessSummary").textContent = publishReady
    ? "All visible warnings have been accepted or resolved. Staff can decide whether to publish."
    : "The workspace is surfacing items that still need human judgement before publishing.";
  document.querySelector("#activeCount").textContent = activeTeams;
  document.querySelector("#warningCount").textContent = unresolved;
  document.querySelector("#reviewedCount").textContent = `${reviewed}/${state.matches.length}`;
  const badge = document.querySelector("#publishBadge");
  badge.textContent = publishReady ? "Can publish after approval" : "Cannot publish yet";
  badge.className = `publish-badge ${publishReady ? "ready" : "blocked"}`;

  renderCompetitions();
  renderRules();
  renderTeams();
  renderClashControls();
  renderMatches();
  renderWarnings(warnings);
}

function renderCompetitions() {
  document.querySelector("#competitionCards").innerHTML = state.competitions.map((competition) => `
    <div class="mini-card">
      <h3>${competition.name}</h3>
      <p>${competition.division} - ${competition.sport}</p>
      <p><span class="tag">${competition.format}</span></p>
    </div>
  `).join("") + `
    <div class="mini-card">
      <h3>Courts</h3>
      <p>${state.courts.join(", ")}</p>
    </div>
    <div class="mini-card">
      <h3>Time Slots</h3>
      <p>${state.timeSlots.join(", ")}</p>
    </div>
  `;
}

function renderRules() {
  document.querySelector("#ruleList").innerHTML = state.rules.map((rule) => `
    <div class="stack-item">
      <span class="tag">${rule.type}</span>
      <p>${rule.text}</p>
    </div>
  `).join("");
}

function renderTeams() {
  document.querySelector("#teamRows").innerHTML = state.teams.map((teamEntry) => {
    const statusTag = teamEntry.paymentBlocked
      ? '<span class="tag danger">Payment blocked</span>'
      : teamEntry.status === "inactive"
        ? '<span class="tag warn">Inactive</span>'
        : teamEntry.status === "house"
          ? '<span class="tag">House team</span>'
          : '<span class="tag ok">Active</span>';
    return `
      <tr>
        <td>
          <strong>${teamEntry.name}</strong>
          <span class="subtext">${teamEntry.recentForfeits ? `${teamEntry.recentForfeits} recent forfeit` : "No recent forfeit"}</span>
        </td>
        <td>${teamEntry.competition}<span class="subtext">${teamEntry.division}</span></td>
        <td>${statusTag}</td>
        <td><button class="small-button" type="button" data-action="toggle-available" data-team="${teamEntry.id}">${teamEntry.available ? "Available" : "Unavailable"}</button></td>
        <td><button class="small-button" type="button" data-action="toggle-payment" data-team="${teamEntry.id}">${teamEntry.paymentBlocked ? "Blocked" : "Clear"}</button></td>
        <td>
          <select data-action="earliest" data-team="${teamEntry.id}">${timeOptions(teamEntry.earliest)}</select>
          <select data-action="latest" data-team="${teamEntry.id}">${timeOptions(teamEntry.latest)}</select>
        </td>
        <td>${teamEntry.clashes.map(teamName).join(", ") || "None"}</td>
      </tr>
    `;
  }).join("");

  document.querySelectorAll("[data-action='toggle-available']").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = state.teams.find((teamEntry) => teamEntry.id === button.dataset.team);
      entry.available = !entry.available;
      render();
    });
  });
  document.querySelectorAll("[data-action='toggle-payment']").forEach((button) => {
    button.addEventListener("click", () => {
      const entry = state.teams.find((teamEntry) => teamEntry.id === button.dataset.team);
      entry.paymentBlocked = !entry.paymentBlocked;
      render();
    });
  });
  document.querySelectorAll("[data-action='earliest'], [data-action='latest']").forEach((select) => {
    select.addEventListener("change", () => {
      const entry = state.teams.find((teamEntry) => teamEntry.id === select.dataset.team);
      entry[select.dataset.action] = select.value;
      render();
    });
  });
}

function timeOptions(selected) {
  const slots = ["18:00", "18:15", "18:45", "19:15", "19:30", "20:15", "20:40", "20:45", "21:00", "21:15"];
  return slots.map((slot) => `<option value="${slot}" ${slot === selected ? "selected" : ""}>${slot}</option>`).join("");
}

function renderClashControls() {
  const realTeams = state.teams.filter((teamEntry) => teamEntry.status !== "house");
  const options = realTeams.map((teamEntry) => `<option value="${teamEntry.id}">${teamEntry.name}</option>`).join("");
  document.querySelector("#clashTeamA").innerHTML = options;
  document.querySelector("#clashTeamB").innerHTML = options;
  document.querySelector("#clashList").innerHTML = realTeams
    .filter((teamEntry) => teamEntry.clashes.length)
    .map((teamEntry) => `
      <div class="stack-item">
        <strong>${teamEntry.name}</strong>
        <p>${teamEntry.clashes.map((id) => `${teamName(id)} <button class="small-button" type="button" data-action="remove-clash" data-a="${teamEntry.id}" data-b="${id}">Remove</button>`).join(" ")}</p>
      </div>
    `).join("") || '<div class="stack-item"><p>No clash requests recorded.</p></div>';

  document.querySelectorAll("[data-action='remove-clash']").forEach((button) => {
    button.addEventListener("click", () => removeClash(button.dataset.a, button.dataset.b));
  });
}

function addClash() {
  const a = document.querySelector("#clashTeamA").value;
  const b = document.querySelector("#clashTeamB").value;
  if (!a || !b || a === b) return;
  const teamA = state.teams.find((teamEntry) => teamEntry.id === a);
  const teamB = state.teams.find((teamEntry) => teamEntry.id === b);
  if (!teamA.clashes.includes(b)) teamA.clashes.push(b);
  if (!teamB.clashes.includes(a)) teamB.clashes.push(a);
  render();
}

function removeClash(a, b) {
  const teamA = state.teams.find((teamEntry) => teamEntry.id === a);
  const teamB = state.teams.find((teamEntry) => teamEntry.id === b);
  teamA.clashes = teamA.clashes.filter((id) => id !== b);
  teamB.clashes = teamB.clashes.filter((id) => id !== a);
  render();
}

function renderMatches() {
  document.querySelector("#matchRows").innerHTML = state.matches.map((plannedMatch) => `
    <tr>
      <td><strong>${plannedMatch.time}</strong></td>
      <td>${plannedMatch.court}</td>
      <td>${plannedMatch.competition}<span class="subtext">${plannedMatch.division}</span></td>
      <td><strong>${teamName(plannedMatch.homeId)} v ${teamName(plannedMatch.awayId)}</strong></td>
      <td>${plannedMatch.special || "Normal match"}</td>
      <td><button class="small-button" type="button" data-action="review-match" data-match="${plannedMatch.id}">${plannedMatch.reviewed ? "Reviewed" : "Mark reviewed"}</button></td>
    </tr>
  `).join("");

  document.querySelectorAll("[data-action='review-match']").forEach((button) => {
    button.addEventListener("click", () => {
      const plannedMatch = state.matches.find((matchItem) => matchItem.id === button.dataset.match);
      plannedMatch.reviewed = !plannedMatch.reviewed;
      render();
    });
  });
}

function renderWarnings(warnings) {
  document.querySelector("#warningList").innerHTML = warnings.length
    ? warnings.map((item) => `
      <div class="stack-item ${item.accepted ? "accepted" : ""}">
        <span class="tag ${item.type === "external" ? "warn" : item.type === "team" ? "danger" : ""}">${item.type}</span>
        <p>${item.text}</p>
        <button class="small-button" type="button" data-action="accept-warning" data-warning="${item.id}">${item.accepted ? "Accepted" : "Accept warning"}</button>
      </div>
    `).join("")
    : '<div class="stack-item"><p>No warnings. Staff can complete final approval.</p></div>';

  document.querySelectorAll("[data-action='accept-warning']").forEach((button) => {
    button.addEventListener("click", () => {
      const seed = state.seedWarnings.find((item) => item.id === button.dataset.warning);
      if (seed) {
        seed.accepted = !seed.accepted;
      } else {
        const generatedId = button.dataset.warning;
        if (!state.acceptedGeneratedWarnings) state.acceptedGeneratedWarnings = {};
        state.acceptedGeneratedWarnings[generatedId] = !state.acceptedGeneratedWarnings[generatedId];
      }
      render();
    });
  });
}

const originalCalculatedWarnings = calculatedWarnings;
calculatedWarnings = function withAcceptedGeneratedWarnings() {
  const warnings = originalCalculatedWarnings();
  const acceptedGenerated = state.acceptedGeneratedWarnings || {};
  return warnings.map((item) => acceptedGenerated[item.id] ? { ...item, accepted: true } : item);
};

setup();


