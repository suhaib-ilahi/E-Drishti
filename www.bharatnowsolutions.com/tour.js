(() => {
  "use strict";

  const tours = {
    home: [
      {
        target: "header",
        title: "Start here",
        text: "Use the top navigation to move between the public overview, solution explanation, project intelligence, and investigation areas.",
      },
      {
        target: "h1",
        title: "What eDrishti does",
        text: "This is the platform's core promise: turn MPLADS records into understandable signals for monitoring and verification.",
      },
      {
        target: "text:Explore Dashboard",
        title: "Open the intelligence workspace",
        text: "Use this action when you want to leave the introduction and inspect live prototype metrics, filters, risk queues, and role-specific views.",
      },
      {
        target: "#process",
        title: "Follow the intelligence loop",
        text: "The platform moves from data collection to analysis, anomaly detection, risk scoring, explanation, and investigation priority.",
      },
      {
        target: "#ai-detection",
        title: "Review detection signals",
        text: "These modules explain the kinds of patterns eDrishti can surface: financial, progress, cost, duplicate-work, delay, evidence, agency, and geographic signals.",
      },
      {
        target: "text:Every Risk Score Comes With an Explanation",
        title: "Understand why a case is flagged",
        text: "Risk is presented with contributing signals and recommended human verification. An alert is not a legal finding of fraud.",
      },
      {
        target: "#investigation",
        title: "Move from alert to action",
        text: "Use the investigation area to review high-risk projects, generate a dossier, and dispatch a field inspection.",
      },
      {
        target: "#geospatial",
        title: "See patterns on the map",
        text: "Compare districts and states by risk level, project activity, fund utilization, and anomaly counts.",
      },
      {
        target: "text:Ask eDrishti",
        title: "Ask questions in plain language",
        text: "The assistant is a secondary way to query the intelligence layer, for example by asking about delayed or high-risk works.",
      },
    ],
    login: [
      {
        target: "main h1",
        title: "Secure sign-in",
        text: "Use this page to enter an authorized account. The interface changes according to the selected stakeholder role.",
      },
      {
        target: "input[type=email], input",
        title: "Enter your user ID",
        text: "Provide the official email or user ID associated with the stakeholder account.",
      },
      {
        target: "input[type=password]",
        title: "Enter your password",
        text: "Your password is required for normal backend authentication.",
      },
      {
        target: "text:Demo Accounts (Quick Login)",
        title: "Try a role preview",
        text: "For demonstrations, open this list and choose a stakeholder. Preview accounts create a local demo session and redirect to the role dashboard.",
      },
      {
        target: "text:Secure Sign In",
        title: "Continue",
        text: "Use Secure Sign In for a real backend session, or use a demo account when presenting the prototype locally.",
      },
    ],
    demo: [
      {
        target: "h1",
        title: "Choose how to explore",
        text: "This page helps you select the best way to access eDrishti from a phone or laptop.",
      },
      {
        target: "text:Open on Phone",
        title: "Open on this device",
        text: "Use the phone option when presenting the public experience directly from the current device.",
      },
      {
        target: "text:Open on Laptop",
        title: "Continue on a laptop",
        text: "Use the laptop option to share the live system address with a larger-screen presenter.",
      },
      {
        target: "text:Copy Link",
        title: "Share the access link",
        text: "Copy the displayed address when moving the demonstration to another browser or device.",
      },
    ],
    dashboard: [
      {
        target: "header",
        title: "Your role workspace",
        text: "The dashboard navigation changes with the signed-in role. Use it to move between overview, progress, evidence, reports, and other permitted work areas.",
      },
      {
        target: "header select",
        title: "Preview another stakeholder",
        text: "In the local prototype, this role selector lets you demonstrate how the same intelligence is presented to different authorities.",
      },
      {
        target: "main select",
        title: "Narrow the scope",
        text: "Filter the dashboard by state, district, or risk tier. The cards and tables update to the selected jurisdiction.",
      },
      {
        target: "text:Export Official PDF",
        title: "Create a report",
        text: "Export the current view or investigation information as a report for review and follow-up.",
      },
      {
        target: "text:FLAGGED HIGH-RISK WORKS",
        title: "Prioritize attention",
        text: "This card shows the work volume that needs closer review. Start here when deciding where inspection resources should go.",
      },
      {
        target: "text:Risk Profile",
        title: "Read the risk distribution",
        text: "The risk profile groups work into priority, moderate, and normal pace categories so officials can triage quickly.",
      },
      {
        target: "text:District Progress",
        title: "Compare districts",
        text: "Use the district table to compare work counts, utilization, flagged cases, visits due, and progress status.",
      },
      {
        target: "text:Evidence Queue",
        title: "Check verification work",
        text: "The evidence area is where pending photographs, documents, and inspection records can be reviewed.",
      },
      {
        target: "text:Ask eDrishti",
        title: "Query the data",
        text: "Ask the assistant focused questions about the current jurisdiction and use the answers to open the next review task.",
      },
    ],
    aiIntelligence: [
      {
        target: "main h1",
        title: "Unified analysis workspace",
        text: "This page combines the platform's signals into one investigation view for a selected project.",
      },
      {
        target: "main h2",
        title: "Inspect the selected work",
        text: "Start with the project identity, location, amount, and current status before interpreting its risk indicators.",
      },
      {
        target: "text:8-Factor AI Risk Engine Matrix",
        title: "Review the signal matrix",
        text: "Use the factor matrix to understand which financial, progress, evidence, agency, and geographic signals contribute to the assessment.",
      },
      {
        target: "main button",
        title: "Take the next action",
        text: "Use the available actions to open evidence, generate a dossier, or send the case into the investigation workflow.",
      },
    ],
    browseMpMla: [
      {
        target: "main h1",
        title: "Browse MP performance",
        text: "Use this view to understand fund utilization and project delivery for individual Members of Parliament.",
      },
      {
        target: "main select",
        title: "Choose a constituency",
        text: "Select an MP or constituency to narrow the figures and project records shown below.",
      },
      {
        target: "main table",
        title: "Compare delivery indicators",
        text: "Review sanctioned funds, utilization, work counts, completion, and flagged activity for the selected representative.",
      },
      {
        target: "text:Supporting Intelligence Layer",
        title: "Interpret the results",
        text: "The view is decision support: unusual values should lead to a closer review of records and evidence.",
      },
    ],
    browseState: [
      {
        target: "main h1",
        title: "Review state performance",
        text: "This page provides a state-level view of MPLADS delivery, utilization, and risk patterns.",
      },
      {
        target: "main select",
        title: "Choose a state",
        text: "Select a state to focus the charts, district summaries, and project indicators.",
      },
      {
        target: "main table",
        title: "Read the state comparison",
        text: "Compare states using project volume, fund utilization, completion, and risk-related indicators.",
      },
      {
        target: "main button",
        title: "Open a deeper view",
        text: "Use the available controls to move from a state summary into district or project-level intelligence.",
      },
    ],
    compare: [
      {
        target: "main h1",
        title: "Compare constituencies",
        text: "This workspace helps you compare similar constituencies using consistent fund, progress, and risk measures.",
      },
      {
        target: "text:Select MPs to Compare",
        title: "Select up to four MPs",
        text: "Choose comparable representatives so the charts show differences without mixing unrelated scopes.",
      },
      {
        target: "text:Start Comparing",
        title: "Run the comparison",
        text: "Start Comparing generates the side-by-side view for the selected constituencies.",
      },
      {
        target: "main",
        title: "Look for meaningful gaps",
        text: "Use the comparison to spot unusually high utilization, low completion, delayed work, or elevated risk that deserves context.",
      },
    ],
    highRiskProjects: [
      {
        target: "main h1",
        title: "High-risk projects queue",
        text: "This is the operational starting point for prioritizing limited inspection and review capacity.",
      },
      {
        target: "main select",
        title: "Filter the queue",
        text: "Narrow the queue by state, district, risk tier, category, or other available filters.",
      },
      {
        target: "main table",
        title: "Review the priority cases",
        text: "Each row represents a project that needs attention. Read the score together with its primary signals.",
      },
      {
        target: "main button",
        title: "Open a case",
        text: "Select a project to review its dossier, evidence, timeline, and recommended verification action.",
      },
    ],
    evidenceReview: [
      {
        target: "main h1",
        title: "Evidence review workspace",
        text: "Use this page to examine whether uploaded photographs and documents support the reported project stage.",
      },
      {
        target: "main h2",
        title: "Confirm the project identity",
        text: "Check the project ID, description, district, and evidence stage before making a verification decision.",
      },
      {
        target: "main img",
        title: "Inspect visual evidence",
        text: "Review site photographs for location, construction stage, reuse, and consistency with the project record.",
      },
      {
        target: "main button",
        title: "Record the review",
        text: "Use the available controls to mark evidence, add findings, or move the case toward field verification.",
      },
    ],
    fieldVerification: [
      {
        target: "main h1",
        title: "Field verification workspace",
        text: "This page supports an inspector during physical verification of a flagged MPLADS work.",
      },
      {
        target: "text:Expected vs Actual Progress Matrix",
        title: "Compare expected and actual progress",
        text: "Use this matrix to identify milestone gaps between the approved plan and what is visible on site.",
      },
      {
        target: "text:GPS Location & Geofence Compliance",
        title: "Validate the location",
        text: "Check the recorded coordinates and geofence status to confirm that evidence belongs to the reported work site.",
      },
      {
        target: "main button",
        title: "Submit inspection findings",
        text: "Record observations, upload evidence, and send the verification result back to the investigation workflow.",
      },
    ],
    resolution: [
      {
        target: "main h1",
        title: "Resolve an investigation",
        text: "This workspace turns the investigation record into a documented decision and follow-up action.",
      },
      {
        target: "main h2",
        title: "Confirm the case",
        text: "Review the project identity and current status before accepting, escalating, or resolving the finding.",
      },
      {
        target: "text:Initial AI Anomaly Detection Findings",
        title: "Review the original signals",
        text: "Separate the automated warning from the human assessment and supporting evidence.",
      },
      {
        target: "main button",
        title: "Document the outcome",
        text: "Choose the appropriate resolution, add notes, and preserve the decision trail for later audit.",
      },
    ],
    team: [
      {
        target: "main h1",
        title: "Meet the team",
        text: "This page explains the people and roles behind the eDrishti prototype.",
      },
      {
        target: "main h2",
        title: "Understand ownership",
        text: "Review the team responsibilities so technical, analytical, and domain decisions are easy to identify.",
      },
      {
        target: "main",
        title: "Return to the product",
        text: "Use the main navigation or the guided-tour button to return to the intelligence and investigation workflows.",
      },
    ],
  };

  let overlay;
  let currentTour;
  let currentIndex = 0;
  let currentTarget;

  function routeType() {
    const path = location.pathname.toLowerCase();
    if (path.includes("login")) return "login";
    if (path.includes("demo")) return "demo";
    if (path.includes("dashboard")) return "dashboard";
    if (path.includes("aiintelligence")) return "aiIntelligence";
    if (path.includes("browsempmla")) return "browseMpMla";
    if (path.includes("browsestate")) return "browseState";
    if (path.includes("compare")) return "compare";
    if (path.includes("highriskprojects")) return "highRiskProjects";
    if (path.includes("evidencereview")) return "evidenceReview";
    if (path.includes("fieldverification")) return "fieldVerification";
    if (path.includes("resolution")) return "resolution";
    if (path.includes("team")) return "team";
    return "home";
  }

  function routeLabel() {
    return routeType()
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (character) => character.toUpperCase());
  }

  function findTarget(query) {
    if (!query) return null;
    if (query.startsWith("text:")) {
      const wanted = query.slice(5).toLowerCase();
      return (
        [
          ...document.querySelectorAll("button, h1, h2, h3, h4, p, span, div"),
        ].find((element) =>
          element.textContent.trim().toLowerCase().includes(wanted),
        ) || null
      );
    }
    try {
      return document.querySelector(query);
    } catch {
      return null;
    }
  }

  function ensureStyles() {
    if (document.getElementById("edrishti-tour-styles")) return;
    const style = document.createElement("style");
    style.id = "edrishti-tour-styles";
    style.textContent = `
      .ed-tour-launcher{position:fixed;right:18px;top:86px;z-index:10000;border:1px solid #10233f;background:#ff6b4a;color:#10233f;border-radius:4px;padding:9px 13px;font:600 12px "IBM Plex Mono",Consolas,monospace;letter-spacing:.03em;cursor:pointer;box-shadow:3px 3px 0 #10233f}
      .ed-tour-launcher:hover{background:#e8bc58}
      .ed-tour-overlay{position:fixed;inset:0;z-index:9998;pointer-events:none}
      .ed-tour-spotlight{position:fixed;z-index:9999;border:2px solid #ff6b4a;border-radius:6px;box-shadow:0 0 0 9999px #10233fb3,0 0 0 5px #ff6b4a55;pointer-events:none;transition:all .2s ease}
      .ed-tour-card{position:fixed;z-index:10001;width:min(360px,calc(100vw - 28px));padding:18px;background:#fff;border:1px solid #10233f;border-radius:8px;box-shadow:6px 6px 0 #10233f;color:#10233f;pointer-events:auto}
      .ed-tour-kicker{margin-bottom:7px;color:#1458d4;font:600 10px "IBM Plex Mono",Consolas,monospace;letter-spacing:.12em;text-transform:uppercase}
      .ed-tour-card h2{margin:0 0 8px;color:#10233f;font:700 21px/1.15 "Space Grotesk","Trebuchet MS",sans-serif}
      .ed-tour-card p{margin:0;color:#3e536f;font:15px/1.5 "Space Grotesk","Trebuchet MS",sans-serif}
      .ed-tour-progress{margin-top:14px;color:#6f8198;font:11px "IBM Plex Mono",Consolas,monospace}
      .ed-tour-actions{display:flex;justify-content:space-between;gap:8px;margin-top:15px}
      .ed-tour-actions button{border:1px solid #10233f;border-radius:3px;padding:8px 11px;background:#fff;color:#10233f;font:600 12px "Space Grotesk","Trebuchet MS",sans-serif;cursor:pointer}
      .ed-tour-actions button:last-child{background:#1458d4;color:#fff;box-shadow:2px 2px 0 #10233f}
      @media(max-width:700px){.ed-tour-launcher{top:76px;right:12px;padding:8px 10px}.ed-tour-card{padding:15px}.ed-tour-card h2{font-size:18px}}
    `;
    document.head.appendChild(style);
  }

  function positionCard(rect) {
    const card = overlay.querySelector(".ed-tour-card");
    const margin = 14;
    const cardWidth = Math.min(360, window.innerWidth - 28);
    let left = Math.min(
      Math.max(margin, rect.left),
      window.innerWidth - cardWidth - margin,
    );
    let top = rect.bottom + 18;
    if (top + card.offsetHeight > window.innerHeight - margin)
      top = rect.top - card.offsetHeight - 18;
    if (top < margin) top = margin;
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  }

  function closeTour() {
    if (overlay) overlay.remove();
    overlay = null;
    currentTarget = null;
    document.body.classList.remove("ed-tour-active");
  }

  function renderStep() {
    if (!currentTour || currentIndex >= currentTour.length) {
      closeTour();
      return;
    }
    const step = currentTour[currentIndex];
    const target = findTarget(step.target);
    if (!target) {
      currentIndex += 1;
      renderStep();
      return;
    }
    currentTarget = target;
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const spotlight = overlay.querySelector(".ed-tour-spotlight");
      spotlight.style.left = `${rect.left - 5}px`;
      spotlight.style.top = `${rect.top - 5}px`;
      spotlight.style.width = `${rect.width + 10}px`;
      spotlight.style.height = `${rect.height + 10}px`;
      overlay.querySelector(".ed-tour-kicker").textContent =
        `${routeLabel()} tour / ${currentIndex + 1} of ${currentTour.length}`;
      overlay.querySelector("h2").textContent = step.title;
      overlay.querySelector("p").textContent = step.text;
      overlay.querySelector(".ed-tour-progress").textContent =
        currentIndex === currentTour.length - 1
          ? "Last stop"
          : "Use Next to continue";
      overlay.querySelector("[data-tour-back]").disabled = currentIndex === 0;
      positionCard(rect);
    });
  }

  function startTour(force = false) {
    ensureStyles();
    const type = routeType();
    if (!force && localStorage.getItem(`edrishti-tour-${type}`)) return;
    currentTour = tours[type];
    currentIndex = 0;
    if (overlay) overlay.remove();
    overlay = document.createElement("div");
    overlay.className = "ed-tour-overlay";
    overlay.innerHTML = `<div class="ed-tour-spotlight"></div><section class="ed-tour-card" role="dialog" aria-modal="true" aria-label="Guided tour"><div class="ed-tour-kicker"></div><h2></h2><p></p><div class="ed-tour-progress"></div><div class="ed-tour-actions"><button type="button" data-tour-skip>Skip tour</button><span><button type="button" data-tour-back>Back</button> <button type="button" data-tour-next>Next</button></span></div></section>`;
    document.body.appendChild(overlay);
    overlay.querySelector("[data-tour-skip]").onclick = () => {
      localStorage.setItem(`edrishti-tour-${type}`, "done");
      closeTour();
    };
    overlay.querySelector("[data-tour-back]").onclick = () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        renderStep();
      }
    };
    overlay.querySelector("[data-tour-next]").onclick = () => {
      if (currentIndex === currentTour.length - 1) {
        localStorage.setItem(`edrishti-tour-${type}`, "done");
        closeTour();
      } else {
        currentIndex += 1;
        renderStep();
      }
    };
    renderStep();
  }

  function addLauncher() {
    ensureStyles();
    if (document.querySelector(".ed-tour-launcher")) return;
    const launcher = document.createElement("button");
    launcher.className = "ed-tour-launcher";
    launcher.type = "button";
    launcher.textContent = "? Guided tour";
    launcher.title = "Replay the guided tour for this page";
    launcher.onclick = () => startTour(true);
    document.body.appendChild(launcher);
  }

  function dashboardTabs() {
    if (!location.pathname.toLowerCase().includes("dashboard")) return;
    const nav = document.querySelector("header nav");
    const main = document.querySelector("main");
    const shell = main?.querySelector(
      ":scope > div:not(.ed-dashboard-section-status)",
    );
    if (!nav || !shell) return;
    const tabs = [...nav.querySelectorAll("button")];
    const panels = [...shell.children];
    if (!tabs.length || panels.length < 2) return;
    if (nav.dataset.edTabsReady === "true") return;
    nav.dataset.edTabsReady = "true";
    const overviewTab = document.createElement("button");
    overviewTab.type = "button";
    overviewTab.innerHTML =
      '<span aria-hidden="true">⌂</span><span>Overview</span>';
    overviewTab.title = "Show the dashboard summary";
    nav.insertBefore(overviewTab, nav.firstChild);
    tabs.unshift(overviewTab);
    const keywords = {
      diagnostics: [
        "model",
        "telemetry",
        "auc",
        "pillar",
        "weight",
        "pipeline",
        "feature importance",
      ],
      clusters: ["anomaly", "cluster", "outlier", "risk assessment", "flagged"],
      benchmarks: ["cost", "benchmark", "peer", "deviation", "median"],
      overview: [
        "overview",
        "summary",
        "total",
        "utilization",
        "national",
        "state",
      ],
      progress: ["progress", "district", "completion", "milestone", "delay"],
      evidence: ["evidence", "document", "photo", "verification", "inspection"],
      reports: ["report", "export", "dossier", "audit"],
      users: ["user", "account", "role", "permission"],
      investigation: ["investigation", "case", "queue", "resolution"],
    };
    const keyFor = (label) => {
      const normalized = label.toLowerCase();
      return (
        Object.keys(keywords).find((key) =>
          normalized.includes(
            key
              .replace("benchmarks", "benchmark")
              .replace("clusters", "cluster"),
          ),
        ) || normalized
      );
    };
    const matches = (panel, key) => {
      const text = panel.innerText.toLowerCase();
      const terms = keywords[key] || key.split(/\s+/);
      return terms.some((term) => text.includes(term));
    };
    let status = document.createElement("div");
    status.className = "ed-dashboard-section-status";
    status.setAttribute("aria-live", "polite");
    main.insertBefore(status, main.firstChild);
    const activate = (index) => {
      const tab = tabs[index] || tabs[0];
      const key = keyFor(tab.innerText);
      const adminSections = tabs.some((button) =>
        button.innerText.toLowerCase().includes("model diagnostics"),
      );
      const explicitPanels = adminSections
        ? {
            overview: [0, 1, 3],
            diagnostics: [0, 1, 2],
            clusters: [0, 3, 4],
            benchmarks: [0, 2],
          }[key]
        : null;
      tabs.forEach((button, tabIndex) => {
        button.dataset.edActive = String(tabIndex === index);
        button.setAttribute("aria-selected", String(tabIndex === index));
      });
      panels.forEach((panel, panelIndex) => {
        const shared = panelIndex === 0;
        const included = explicitPanels
          ? explicitPanels.includes(panelIndex)
          : shared || matches(panel, key);
        panel.hidden = false;
        panel.classList.toggle("ed-dashboard-panel-active", included);
        panel.classList.toggle("ed-dashboard-panel-muted", !included);
      });
      status.textContent = `${tab.innerText.trim()} section`;
      history.replaceState(null, "", `${location.pathname}#${key}`);
      const destination =
        explicitPanels?.find((panelIndex) => panelIndex > 0) ??
        panels.findIndex((panel) => matches(panel, key));
      if (destination > 0)
        panels[destination].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };
    tabs.forEach((tab, index) =>
      tab.addEventListener("click", () => activate(index)),
    );
    const hash = location.hash.slice(1);
    const initial = tabs.findIndex((tab) => keyFor(tab.innerText) === hash);
    activate(initial >= 0 ? initial : 0);
  }

  function boot() {
    if (!document.body) return;
    addLauncher();
    dashboardTabs();
    setTimeout(() => startTour(false), 900);
    new MutationObserver(() => {
      if (!document.querySelector(".ed-tour-launcher")) addLauncher();
      dashboardTabs();
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  window.addEventListener("resize", () => {
    if (currentTarget && overlay) renderStep();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay) closeTour();
  });
  new MutationObserver(() => {
    if (!document.querySelector(".ed-tour-launcher")) addLauncher();
  }).observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(boot, 150);
})();
