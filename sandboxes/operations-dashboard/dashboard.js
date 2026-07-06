const sourceDashboards = {
  dibv: {
    name: "Darwin Indoor Beach Volleyball",
    shortName: "DIBV",
    nights: {
      monday: dashboardNight({
        label: "Monday night",
        competitions: ["Monday Mixed 6-A-Side", "Monday Open 3-A-Side", "Monday Men's Pairs"],
        teamCount: 42,
        courtsInUse: "7 of 7",
        fixtureReadiness: "Needs review",
        staffCoverage: "5 of 6 umpires confirmed",
        openIncidents: 1,
        stockIssues: ["Low sports drink", "Court 4 fan noisy"],
        alerts: [
          alert("fixture-warning", "Fixture warning", "Open 3-A-Side has one clash request still unresolved.", "Competition Management"),
          alert("umpire-gap", "Staff coverage", "One late umpire slot is not confirmed.", "Workforce Management"),
          alert("incident-open", "Open incident", "Behaviour note from last Wednesday requires manager review.", "Venue Operations")
        ],
        trends: [
          trend("Tonight vs same night last week", "Team numbers", "+4 teams", "up"),
          trend("Last 7 days vs previous 7 days", "Forfeits", "-2 forfeits", "up"),
          trend("Court utilisation", "Inside courts", "91 percent", "up"),
          trend("Estimated activity value", "Competition night", "$3,190", "up")
        ],
        decisions: [
          decision("approve-fixtures", "Approve fixture plan", "Waiting", "High", "Competition Management", "Review clash warning and approve fixture plan.", "System recommends approving after clash review."),
          decision("coverage", "Confirm umpire coverage", "Waiting", "High", "Workforce Management", "Confirm late umpire or move one staff member.", "System recommends assigning spare senior umpire."),
          decision("incident", "Review incident", "Waiting", "Medium", "Venue Operations", "Manager to review note before tonight starts.", "System prepared summary only."),
          decision("publish", "Publish fixtures", "Blocked", "High", "Customer Experience", "Publish only after fixture plan is approved.", "No recommendation until fixture decision is complete.")
        ]
      }),
      wednesday: dashboardNight({
        label: "Wednesday night",
        competitions: ["Wednesday Mixed 6-A-Side", "Wednesday Open 3-A-Side"],
        teamCount: 38,
        courtsInUse: "6 of 7",
        fixtureReadiness: "Ready after approval",
        staffCoverage: "6 of 6 umpires confirmed",
        openIncidents: 0,
        stockIssues: ["First aid tape low"],
        alerts: [
          alert("stock", "Stock issue", "First aid tape should be restocked before finals week.", "Venue Operations")
        ],
        trends: [
          trend("Tonight vs same night last week", "Team numbers", "+1 team", "up"),
          trend("Last 7 days vs previous 7 days", "Enquiries", "+5 enquiries", "up"),
          trend("Lost teams", "Season movement", "0 lost", "up"),
          trend("Court utilisation", "All courts", "84 percent", "neutral")
        ],
        decisions: [
          decision("stock-followup", "Flag stock follow-up", "Waiting", "Low", "Venue Operations", "Assign first aid tape restock.", "System recommends adding to shift checklist."),
          decision("publish", "Publish fixtures", "Waiting", "Medium", "Customer Experience", "Staff can publish after final glance.", "System recommends publish.")
        ]
      })
    }
  },
  cvibv: {
    name: "Canning Vale Indoor Beach Volleyball",
    shortName: "CVIBV",
    nights: {
      wednesday: dashboardNight({
        label: "Wednesday night",
        competitions: ["Wednesday Mixed 6-A-Side", "Wednesday Men's 6-A-Side", "Wednesday Ladies 6-A-Side"],
        teamCount: 31,
        courtsInUse: "5 of 6",
        fixtureReadiness: "Needs review",
        staffCoverage: "4 of 4 staff confirmed",
        openIncidents: 0,
        stockIssues: ["Muzz Buzz vouchers ready", "Domino's pizza order pending"],
        alerts: [
          alert("house-team", "House team check", "Mixed Nuts* is used once and needs export review.", "Competition Management"),
          alert("lead-followup", "Lead follow-up", "Two team enquiries from yesterday are not assigned.", "Customer Experience"),
          alert("pizza", "Food partner", "Friday pizza order has not been confirmed.", "Commercial Management")
        ],
        trends: [
          trend("Tonight vs same night last week", "Team numbers", "+2 teams", "up"),
          trend("Last 7 days vs previous 7 days", "Enquiries", "+8 enquiries", "up"),
          trend("New teams", "Registration pipeline", "+1 team", "up"),
          trend("Court utilisation", "Wednesday night", "78 percent", "neutral")
        ],
        decisions: [
          decision("house", "Accept house-team warning", "Waiting", "High", "Competition Management", "Confirm Mixed Nuts* export handling before upload.", "System recommends staff confirmation."),
          decision("leads", "Follow up new leads", "Waiting", "Medium", "Customer Experience", "Assign two Wednesday team enquiries.", "System recommends Kayla as owner."),
          decision("partner", "Confirm partner order", "Waiting", "Low", "Commercial Management", "Confirm Domino's support for Friday socials.", "System prepared reminder."),
          decision("publish", "Publish fixtures", "Blocked", "High", "Customer Experience", "Publish after house-team warning is accepted.", "No recommendation until warning is resolved.")
        ]
      }),
      thursday: dashboardNight({
        label: "Thursday night",
        competitions: ["Thursday Open 4-A-Side", "Thursday Junior League", "Reds Junior Volley"],
        teamCount: 18,
        courtsInUse: "4 of 6",
        fixtureReadiness: "Ready after approval",
        staffCoverage: "3 of 3 staff confirmed",
        openIncidents: 0,
        stockIssues: ["Junior balls checked"],
        alerts: [
          alert("junior-promo", "Program promotion", "Junior League is open and should be promoted in public content.", "Customer Experience")
        ],
        trends: [
          trend("Tonight vs same night last week", "Junior numbers", "+7 players", "up"),
          trend("Last 7 days vs previous 7 days", "Bookings", "+2 bookings", "up"),
          trend("Lost teams", "Competition movement", "0 lost", "up"),
          trend("Estimated activity value", "Programs and comps", "$1,420", "up")
        ],
        decisions: [
          decision("promo", "Promote Junior League", "Waiting", "Medium", "Customer Experience", "Confirm whether public website should feature the new intake.", "System recommends promotion."),
          decision("publish", "Publish fixtures", "Waiting", "Medium", "Customer Experience", "Publish after Junior League promotion decision.", "System recommends publish.")
        ]
      })
    }
  },
  teis: {
    name: "Top End Indoor Sports",
    shortName: "TEIS",
    nights: {
      thursday: dashboardNight({
        label: "Thursday night",
        competitions: ["Thursday 6 Pack Cricket", "Thursday Mixed Soccer"],
        teamCount: 22,
        courtsInUse: "3 of 3",
        fixtureReadiness: "Needs review",
        staffCoverage: "2 of 3 officials confirmed",
        openIncidents: 2,
        stockIssues: ["Cricket ball stock low", "Court 2 scoreboard battery"],
        alerts: [
          alert("bye", "Bye fairness", "Side quest nerds has consecutive bye risk.", "Competition Management"),
          alert("coverage", "Official coverage", "Soccer and cricket overlap needs another official.", "Workforce Management"),
          alert("incident", "Incident review", "Two behaviour reports need manager attention.", "Venue Operations")
        ],
        trends: [
          trend("Tonight vs same night last week", "Forfeits", "+1 forfeit", "down"),
          trend("Last 7 days vs previous 7 days", "Incidents", "+2 incidents", "down"),
          trend("Court utilisation", "All courts", "96 percent", "up"),
          trend("Estimated activity value", "Mixed sport night", "$2,060", "up")
        ],
        decisions: [
          decision("bye", "Confirm bye allocation", "Waiting", "High", "Competition Management", "Check bye history before accepting Side quest nerds bye.", "System recommends alternate team if history confirms repeat."),
          decision("officials", "Confirm officials", "Waiting", "High", "Workforce Management", "Add one official or adjust sport overlap.", "System recommends casual official call-in."),
          decision("incidents", "Review incidents", "Waiting", "High", "Venue Operations", "Manager must review two reports before tonight.", "System summarised reports only."),
          decision("publish", "Publish fixtures", "Blocked", "High", "Customer Experience", "Publish after bye and official decisions.", "No recommendation until decisions are complete.")
        ]
      }),
      monday: dashboardNight({
        label: "Monday night",
        competitions: ["Monday Mixed Netball"],
        teamCount: 18,
        courtsInUse: "3 of 3",
        fixtureReadiness: "Ready after approval",
        staffCoverage: "3 of 3 officials confirmed",
        openIncidents: 0,
        stockIssues: ["No venue issues"],
        alerts: [
          alert("time-request", "Time request", "Off the couch cannot play at 6:00pm and fixture reflects later slot.", "Competition Management")
        ],
        trends: [
          trend("Tonight vs same night last week", "Team numbers", "No change", "neutral"),
          trend("Last 7 days vs previous 7 days", "Enquiries", "+1 enquiry", "up"),
          trend("Forfeits", "Netball", "-1 forfeit", "up"),
          trend("Court utilisation", "Netball night", "88 percent", "up")
        ],
        decisions: [
          decision("time-request", "Accept time request handling", "Waiting", "Medium", "Competition Management", "Confirm later slot for Off the couch.", "System recommends accepting current allocation."),
          decision("publish", "Publish fixtures", "Waiting", "Medium", "Customer Experience", "Publish after final staff approval.", "System recommends publish.")
        ]
      })
    }
  }
};

const pathways = [
  ["Competitions", "Competition setup, divisions, weeks and format decisions will live here."],
  ["Fixtures", "Fixture plans, warnings, approvals, exports and publication status will live here."],
  ["Teams", "Team entries, availability, payment blocks, forfeits and preferences will live here."],
  ["Leads / Enquiries", "Website enquiries, lead assignment, follow-ups and conversion status will live here."],
  ["Shift Operations", "Shift summaries, handover notes and routed business events will live here."],
  ["Incidents", "Behaviour, safety and operational incidents requiring human review will live here."],
  ["Inventory", "Stock alerts, reorder prompts and venue supplies will live here."],
  ["Staff", "Staff and umpire coverage, roles and availability will live here."],
  ["Configuration", "Venue rules, sport profiles, courts, time slots and external mappings will live here."],
  ["Reports", "Operational, financial, competition and customer reports will live here."]
];

let state = {};
const venueSelect = document.querySelector("#venueSelect");
const daySelect = document.querySelector("#daySelect");

function dashboardNight(data) {
  return data;
}

function alert(id, title, text, capability) {
  return { id, title, text, capability, accepted: false, followUp: false };
}

function trend(period, metric, value, direction) {
  return { period, metric, value, direction };
}

function decision(id, title, status, urgency, capability, action, recommendation) {
  return { id, title, status, urgency, capability, action, recommendation, resolved: false, followUp: false };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function setup() {
  Object.entries(sourceDashboards).forEach(([key, venue]) => {
    venueSelect.add(new Option(`${venue.name} (${venue.shortName})`, key));
  });
  venueSelect.value = "dibv";
  loadDays();
  venueSelect.addEventListener("change", () => {
    loadDays();
    loadDashboard();
  });
  daySelect.addEventListener("change", loadDashboard);
  document.querySelector("#resetButton").addEventListener("click", loadDashboard);
  loadDashboard();
}

function loadDays() {
  const venue = sourceDashboards[venueSelect.value];
  daySelect.innerHTML = "";
  Object.entries(venue.nights).forEach(([key, night]) => {
    daySelect.add(new Option(night.label, key));
  });
}

function loadDashboard() {
  const venue = sourceDashboards[venueSelect.value];
  state = clone(venue.nights[daySelect.value]);
  state.venueName = venue.name;
  state.shortName = venue.shortName;
  render();
}

function unresolvedDecisions() {
  return state.decisions.filter((item) => !item.resolved);
}

function unresolvedAlerts() {
  return state.alerts.filter((item) => !item.accepted);
}

function isReady() {
  return unresolvedDecisions().length === 0 && unresolvedAlerts().length === 0;
}

function render() {
  const needsAttention = unresolvedDecisions().length + unresolvedAlerts().length + state.openIncidents;
  const ready = isReady();
  document.querySelector("#headlineTitle").textContent = `${state.venueName} - ${state.label}`;
  document.querySelector("#headlineSummary").textContent = ready
    ? "No unresolved dashboard items remain. Staff can make the final operating call."
    : "The dashboard is surfacing the items that need staff judgement before the night is fully ready.";
  document.querySelector("#attentionCount").textContent = `${needsAttention} active items`;
  const readinessBadge = document.querySelector("#readinessBadge");
  readinessBadge.textContent = ready ? "Ready for manager sign-off" : "Needs attention";
  readinessBadge.className = `badge ${ready ? "ready" : "blocked"}`;
  document.querySelector("#fixtureReadiness").textContent = state.fixtureReadiness;

  renderRightNow();
  renderTrends();
  renderDecisions();
  renderPathways();
}

function renderRightNow() {
  const metrics = [
    ["Selected venue", state.shortName, state.venueName],
    ["Selected day/night", state.label, state.competitions.join(", ")],
    ["Team count", state.teamCount, "Active competition entries"],
    ["Courts in use", state.courtsInUse, "Operational capacity view"],
    ["Fixture readiness", state.fixtureReadiness, "Staff approval remains visible"],
    ["Staff coverage", state.staffCoverage, "Officials and shift coverage"],
    ["Open incidents", state.openIncidents, "Items needing manager attention"],
    ["Stock / venue issues", state.stockIssues.length, state.stockIssues.join(", ")]
  ];
  document.querySelector("#rightNowGrid").innerHTML = metrics.map(([label, value, note]) => `
    <div class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <p>${note}</p>
    </div>
  `).join("");

  document.querySelector("#alertList").innerHTML = state.alerts.map((item) => `
    <div class="item ${item.accepted ? "resolved" : ""}">
      <span class="tag ${item.accepted ? "ready" : "warn"}">${item.accepted ? "Accepted" : "Alert"}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <p>${item.capability}</p>
      <button class="small-button" type="button" data-action="accept-alert" data-id="${item.id}">${item.accepted ? "Reopen" : "Accept / dismiss"}</button>
      <button class="small-button" type="button" data-action="follow-alert" data-id="${item.id}">${item.followUp ? "Follow-up flagged" : "Flag follow-up"}</button>
    </div>
  `).join("");

  document.querySelectorAll("[data-action='accept-alert']").forEach((button) => {
    button.addEventListener("click", () => {
      const found = state.alerts.find((item) => item.id === button.dataset.id);
      found.accepted = !found.accepted;
      render();
    });
  });
  document.querySelectorAll("[data-action='follow-alert']").forEach((button) => {
    button.addEventListener("click", () => {
      const found = state.alerts.find((item) => item.id === button.dataset.id);
      found.followUp = !found.followUp;
      render();
    });
  });
}

function renderTrends() {
  document.querySelector("#trendList").innerHTML = state.trends.map((item) => `
    <div class="trend">
      <div>
        <h3>${item.metric}</h3>
        <p>${item.period}</p>
      </div>
      <span class="trend-value ${item.direction}">${item.value}</span>
    </div>
  `).join("");
}

function renderDecisions() {
  document.querySelector("#decisionList").innerHTML = state.decisions.map((item) => `
    <div class="decision ${item.resolved ? "resolved" : ""}">
      <div>
        <h3>${item.title}</h3>
        <p>${item.action}</p>
        <div class="decision-meta">
          <span class="tag ${item.resolved ? "ready" : "warn"}">${item.resolved ? "Approved" : item.status}</span>
          <span class="tag ${item.urgency === "High" ? "danger" : "warn"}">${item.urgency}</span>
          <span class="tag">${item.capability}</span>
        </div>
        <p><strong>System recommendation:</strong> ${item.recommendation}</p>
        <p><strong>Decision rule:</strong> Human confirmation is required.</p>
      </div>
      <div class="decision-actions">
        <button class="small-button" type="button" data-action="resolve-decision" data-id="${item.id}">${item.resolved ? "Reopen" : "Approve"}</button>
        <button class="small-button" type="button" data-action="follow-decision" data-id="${item.id}">${item.followUp ? "Follow-up flagged" : "Flag follow-up"}</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll("[data-action='resolve-decision']").forEach((button) => {
    button.addEventListener("click", () => {
      const found = state.decisions.find((item) => item.id === button.dataset.id);
      found.resolved = !found.resolved;
      render();
    });
  });
  document.querySelectorAll("[data-action='follow-decision']").forEach((button) => {
    button.addEventListener("click", () => {
      const found = state.decisions.find((item) => item.id === button.dataset.id);
      found.followUp = !found.followUp;
      render();
    });
  });
}

function renderPathways() {
  const pathwayList = document.querySelector("#pathwayList");
  pathwayList.innerHTML = pathways.map(([title, detail], index) => `
    <button class="pathway ${index === 0 ? "active" : ""}" type="button" data-detail="${detail}">
      <strong>${title}</strong>
    </button>
  `).join("");
  pathwayList.querySelectorAll(".pathway").forEach((button) => {
    button.addEventListener("click", () => {
      pathwayList.querySelectorAll(".pathway").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.querySelector("#pathwayDetail").innerHTML = `
        <strong>${button.textContent.trim()}</strong>
        <p>${button.dataset.detail}</p>
      `;
    });
  });
  const first = pathways[0];
  document.querySelector("#pathwayDetail").innerHTML = `<strong>${first[0]}</strong><p>${first[1]}</p>`;
}

setup();
