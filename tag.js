const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "CyberSentinel AI";

// ─── DESIGN SYSTEM ───────────────────────────────────────────────────────────
// Monochrome + one cold accent. Precise. No gradients. Swiss-influenced.
const C = {
  bg:       "0A0C10",   // near-black background
  bg2:      "111318",   // card surface
  bg3:      "181C24",   // elevated card
  line:     "1E2430",   // subtle dividers
  mid:      "3A4558",   // muted elements
  dim:      "5C6F8A",   // secondary text
  body:     "8A9BB5",   // body text
  light:    "C8D6E8",   // primary text (not pure white — softer)
  white:    "FFFFFF",
  accent:   "00C2FF",   // cold electric blue — one accent only
  accentDim:"0A3D52",   // accent at low opacity (backgrounds)
  success:  "22C55E",
  warn:     "F59E0B",
  red:      "EF4444",
};

const F = {
  head: "Georgia",    // authority, weight
  body: "Calibri",    // clean body
  mono: "Consolas",   // data, code
};

// Shared helper: slide slide number badge (top-right)
function slideNum(slide, n) {
  slide.addText(String(n).padStart(2, "0"), {
    x: 9.2, y: 0.18, w: 0.6, h: 0.25,
    fontFace: F.mono, fontSize: 9, color: C.mid, bold: false,
    align: "right", margin: 0,
  });
}

// Thin top accent line
function accentBar(slide) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.04,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });
}

// Section label above a heading
function sectionLabel(slide, label, x, y, w) {
  slide.addText(label.toUpperCase(), {
    x, y, w, h: 0.22,
    fontFace: F.body, fontSize: 8, color: C.accent, bold: false,
    charSpacing: 3, margin: 0,
  });
}

// Stat card helper
function statCard(slide, x, y, w, h, value, unit, label, sub) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h, fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
  });
  // left accent
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w: 0.04, h,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });
  // value
  slide.addText(value, {
    x: x + 0.18, y: y + 0.16, w: w - 0.22, h: 0.6,
    fontFace: F.head, fontSize: 36, color: C.white, bold: true,
    margin: 0,
  });
  if (unit) {
    slide.addText(unit, {
      x: x + 0.18, y: y + 0.74, w: w - 0.22, h: 0.22,
      fontFace: F.body, fontSize: 10, color: C.dim, margin: 0,
    });
  }
  slide.addText(label, {
    x: x + 0.18, y: y + h - 0.42, w: w - 0.22, h: 0.28,
    fontFace: F.body, fontSize: 11, color: C.light, bold: true, margin: 0,
  });
  if (sub) {
    slide.addText(sub, {
      x: x + 0.18, y: y + h - 0.22, w: w - 0.22, h: 0.2,
      fontFace: F.body, fontSize: 8, color: C.dim, margin: 0,
    });
  }
}

// Feature row helper
function featureRow(slide, x, y, w, dot_color, label, desc) {
  slide.addShape(pres.shapes.OVAL, {
    x, y: y + 0.04, w: 0.08, h: 0.08,
    fill: { color: dot_color }, line: { color: dot_color, width: 0 },
  });
  slide.addText(label, {
    x: x + 0.16, y, w: 1.8, h: 0.2,
    fontFace: F.body, fontSize: 10, color: C.white, bold: true, margin: 0,
  });
  slide.addText(desc, {
    x: x + 0.16, y: y + 0.18, w: w - 0.16, h: 0.22,
    fontFace: F.body, fontSize: 9, color: C.body, margin: 0,
  });
}

// ─── SLIDE 1: TITLE ───────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);

  // Large left vertical rule
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 0.9, w: 0.04, h: 3.8,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  // Hackathon label
  s.addText("CYBER NEXUS HACKATHON 2026", {
    x: 0.78, y: 0.92, w: 6, h: 0.28,
    fontFace: F.body, fontSize: 9, color: C.accent, charSpacing: 3,
    bold: false, margin: 0,
  });

  // Product name — split weight
  s.addText("CyberSentinel", {
    x: 0.78, y: 1.28, w: 7, h: 1.05,
    fontFace: F.head, fontSize: 68, color: C.white, bold: true, margin: 0,
  });
  s.addText("AI", {
    x: 0.78, y: 2.26, w: 2, h: 0.75,
    fontFace: F.head, fontSize: 68, color: C.accent, bold: true, margin: 0,
  });

  // Tagline
  s.addText("Autonomous Agentic AI for Real-Time Cyber Threat Response", {
    x: 0.78, y: 3.18, w: 6.8, h: 0.38,
    fontFace: F.body, fontSize: 14, color: C.body, margin: 0,
  });

  // Divider
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.78, y: 3.7, w: 4, h: 0.015,
    fill: { color: C.line }, line: { color: C.line, width: 0 },
  });

  // Tags
  const tags = ["Agentic AI", "GenAI", "Cyber Security", "MERN Stack"];
  tags.forEach((t, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.78 + i * 1.56, y: 3.85, w: 1.46, h: 0.28,
      fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
    });
    s.addText(t, {
      x: 0.78 + i * 1.56, y: 3.85, w: 1.46, h: 0.28,
      fontFace: F.body, fontSize: 9, color: C.dim, align: "center", margin: 0,
    });
  });

  // Team footer
  s.addText("Team Faiz Hussain  ·  Dr. A.P.J. Abdul Kalam Technical University (AKTU)  ·  CSE 2024–2028", {
    x: 0.78, y: 5.1, w: 8.5, h: 0.24,
    fontFace: F.body, fontSize: 9, color: C.mid, margin: 0,
  });

  // Right side: decorative grid dots
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 5; col++) {
      s.addShape(pres.shapes.OVAL, {
        x: 7.8 + col * 0.32, y: 1.0 + row * 0.42, w: 0.06, h: 0.06,
        fill: { color: C.line }, line: { color: C.line, width: 0 },
      });
    }
  }
}

// ─── SLIDE 2: THE PROBLEM ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 2);

  sectionLabel(s, "The Problem", 0.55, 0.28, 3);
  s.addText("The threat landscape has outpaced human response.", {
    x: 0.55, y: 0.56, w: 7.5, h: 0.52,
    fontFace: F.head, fontSize: 28, color: C.white, bold: true, margin: 0,
  });

  // 3 stat cards
  const stats = [
    { v: "33B+", u: "cyber attacks per year globally", l: "Attack Volume" },
    { v: "$9.5T", u: "cost of cybercrime in 2024 (USD)", l: "Financial Impact" },
    { v: "280", u: "average days to detect a breach", l: "Detection Lag" },
  ];
  stats.forEach((st, i) => {
    statCard(s, 0.55 + i * 3.08, 1.3, 2.82, 1.4, st.v, st.u, st.l, null);
  });

  // Pain points section
  s.addText("Key Pain Points", {
    x: 0.55, y: 3.02, w: 4, h: 0.26,
    fontFace: F.body, fontSize: 10, color: C.accent, charSpacing: 2, margin: 0,
  });

  const pains = [
    "Security analysts are drowning in thousands of daily alerts",
    "Manual investigation is too slow — attackers move faster than humans",
    "Existing tools detect threats but cannot autonomously respond",
    "Black-box AI decisions lack explainability for enterprise teams",
  ];

  pains.forEach((p, i) => {
    // dash
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.55, y: 3.45 + i * 0.4 + 0.1, w: 0.18, h: 0.03,
      fill: { color: C.accent }, line: { color: C.accent, width: 0 },
    });
    s.addText(p, {
      x: 0.85, y: 3.42 + i * 0.4, w: 8.5, h: 0.3,
      fontFace: F.body, fontSize: 12, color: C.light, margin: 0,
    });
  });
}

// ─── SLIDE 3: SOLUTION ────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 3);

  sectionLabel(s, "Our Solution", 0.55, 0.28, 3);
  s.addText("CyberSentinel AI", {
    x: 0.55, y: 0.56, w: 9, h: 0.6,
    fontFace: F.head, fontSize: 34, color: C.white, bold: true, margin: 0,
  });
  s.addText("An autonomous multi-agent system that monitors, investigates, and responds to cyber threats in real-time — with full GenAI explainability.", {
    x: 0.55, y: 1.18, w: 8.5, h: 0.5,
    fontFace: F.body, fontSize: 12, color: C.body, margin: 0,
  });

  // 6 capability cards, 2 rows x 3 cols
  const caps = [
    { label: "Monitor",     desc: "Real-time log & network traffic analysis, 24/7",         col: C.accent },
    { label: "Investigate", desc: "LLM-powered root cause analysis of every anomaly",       col: C.accent },
    { label: "Respond",     desc: "Auto-block IPs, isolate endpoints, alert teams",         col: C.success },
    { label: "Explain",     desc: "Plain-English report for every AI decision made",        col: C.accent },
    { label: "Learn",       desc: "Improves from false positives over time via feedback",   col: C.warn },
    { label: "Dashboard",   desc: "Live MERN-based threat monitoring and alert center",     col: C.accent },
  ];

  caps.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const cx = 0.55 + col * 3.12;
    const cy = 1.9 + row * 1.42;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 2.96, h: 1.28,
      fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 2.96, h: 0.04,
      fill: { color: c.col }, line: { color: c.col, width: 0 },
    });
    s.addText(c.label.toUpperCase(), {
      x: cx + 0.18, y: cy + 0.16, w: 2.6, h: 0.24,
      fontFace: F.body, fontSize: 9, color: c.col, bold: true, charSpacing: 1.5, margin: 0,
    });
    s.addText(c.desc, {
      x: cx + 0.18, y: cy + 0.44, w: 2.6, h: 0.72,
      fontFace: F.body, fontSize: 10.5, color: C.light, margin: 0,
    });
  });
}

// ─── SLIDE 4: HOW IT WORKS ────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 4);

  sectionLabel(s, "How It Works", 0.55, 0.28, 3);
  s.addText("Agent Flow", {
    x: 0.55, y: 0.56, w: 9, h: 0.6,
    fontFace: F.head, fontSize: 34, color: C.white, bold: true, margin: 0,
  });

  // Flow nodes
  const nodes = [
    { label: "Network\nLogs In", color: C.mid },
    { label: "Monitor\nAgent",   color: C.accent },
    { label: "Analyst\nAgent",   color: C.accent },
    { label: "Response\nAgent",  color: C.success },
    { label: "Dashboard\nAlert", color: C.accent },
  ];

  const nodeW = 1.4, nodeH = 0.72, startX = 0.55, nodeY = 1.48;
  const totalW = 10 - 1.1;
  const step = totalW / (nodes.length - 1);

  nodes.forEach((n, i) => {
    const nx = startX + i * step - nodeW / 2;
    const isActive = n.color !== C.mid;
    s.addShape(pres.shapes.RECTANGLE, {
      x: nx, y: nodeY, w: nodeW, h: nodeH,
      fill: { color: isActive ? C.bg3 : C.bg2 },
      line: { color: isActive ? n.color : C.line, width: isActive ? 1 : 0.5 },
    });
    // top accent
    s.addShape(pres.shapes.RECTANGLE, {
      x: nx, y: nodeY, w: nodeW, h: 0.04,
      fill: { color: n.color }, line: { color: n.color, width: 0 },
    });
    s.addText(n.label, {
      x: nx + 0.06, y: nodeY + 0.12, w: nodeW - 0.12, h: nodeH - 0.18,
      fontFace: F.body, fontSize: 10, color: isActive ? C.white : C.body,
      align: "center", bold: isActive, margin: 0,
    });
    // arrow connector
    if (i < nodes.length - 1) {
      const arrowX = nx + nodeW + 0.06;
      s.addShape(pres.shapes.RECTANGLE, {
        x: arrowX, y: nodeY + nodeH / 2 - 0.01, w: step - nodeW - 0.12, h: 0.02,
        fill: { color: C.mid }, line: { color: C.mid, width: 0 },
      });
    }
  });

  // Description cards below
  const descs = [
    { title: "Monitor Agent", body: "Continuously parses firewall logs, IDS alerts, & API calls. Flags anomalies using rule-based + ML heuristics." },
    { title: "Analyst Agent (GenAI)", body: "Claude/GPT LLM reasons over flagged data, correlates with threat intelligence, generates investigation report." },
    { title: "Response Agent", body: "Autonomously executes playbooks: block IP, isolate device, rotate credentials, notify SIEM & Slack." },
  ];

  descs.forEach((d, i) => {
    const cx = 0.55 + i * 3.12;
    const cy = 2.6;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 2.96, h: 1.52,
      fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 0.04, h: 1.52,
      fill: { color: C.accent }, line: { color: C.accent, width: 0 },
    });
    s.addText(d.title, {
      x: cx + 0.18, y: cy + 0.14, w: 2.6, h: 0.26,
      fontFace: F.body, fontSize: 10, color: C.accent, bold: true, margin: 0,
    });
    s.addText(d.body, {
      x: cx + 0.18, y: cy + 0.44, w: 2.6, h: 1.0,
      fontFace: F.body, fontSize: 10, color: C.light, margin: 0,
    });
  });

  // Footer note
  s.addText("All agents operate asynchronously with shared memory and a centralized event bus.", {
    x: 0.55, y: 4.9, w: 8.5, h: 0.25,
    fontFace: F.body, fontSize: 9, color: C.mid, italic: true, margin: 0,
  });
}

// ─── SLIDE 5: TECH STACK ──────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 5);

  sectionLabel(s, "Technology", 0.55, 0.28, 3);
  s.addText("Tech Stack", {
    x: 0.55, y: 0.56, w: 9, h: 0.6,
    fontFace: F.head, fontSize: 34, color: C.white, bold: true, margin: 0,
  });

  const stacks = [
    {
      title: "Frontend",
      color: C.accent,
      items: [
        ["React.js", "Dashboard UI"],
        ["Recharts", "Live threat charts"],
        ["TailwindCSS", "Utility-first styling"],
        ["Toast Alerts", "Real-time notifications"],
      ]
    },
    {
      title: "Backend / Agents",
      color: C.success,
      items: [
        ["Node.js + Express", "API server"],
        ["LangChain.js", "Agent pipeline orchestration"],
        ["Claude API", "GenAI reasoning core"],
        ["MongoDB", "Log & alert storage"],
      ]
    },
    {
      title: "Security Layer",
      color: C.warn,
      items: [
        ["JWT Auth", "Secure access control"],
        ["Simulated IDS Feed", "Log injection pipeline"],
        ["IP Reputation API", "Threat intelligence"],
        ["SIEM Pipeline", "Event aggregation & routing"],
      ]
    },
  ];

  stacks.forEach((st, i) => {
    const cx = 0.55 + i * 3.12;
    const cy = 1.38;
    const cw = 2.96;
    const ch = 3.72;

    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
    });
    // header bg
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cw, h: 0.46,
      fill: { color: C.bg3 }, line: { color: C.line, width: 0 },
    });
    s.addText(st.title.toUpperCase(), {
      x: cx + 0.18, y: cy + 0.12, w: cw - 0.22, h: 0.26,
      fontFace: F.body, fontSize: 9, color: st.color, bold: true, charSpacing: 1.5, margin: 0,
    });

    st.items.forEach((item, j) => {
      const ry = cy + 0.6 + j * 0.78;
      // divider
      if (j > 0) {
        s.addShape(pres.shapes.RECTANGLE, {
          x: cx + 0.18, y: ry - 0.06, w: cw - 0.36, h: 0.01,
          fill: { color: C.line }, line: { color: C.line, width: 0 },
        });
      }
      s.addText(item[0], {
        x: cx + 0.18, y: ry, w: cw - 0.22, h: 0.24,
        fontFace: F.body, fontSize: 10.5, color: C.white, bold: true, margin: 0,
      });
      s.addText(item[1], {
        x: cx + 0.18, y: ry + 0.24, w: cw - 0.22, h: 0.2,
        fontFace: F.body, fontSize: 9, color: C.dim, margin: 0,
      });
    });
  });
}

// ─── SLIDE 6: IMPACT ──────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 6);

  sectionLabel(s, "Impact & Market Opportunity", 0.55, 0.28, 5);
  s.addText("What CyberSentinel AI changes.", {
    x: 0.55, y: 0.56, w: 9, h: 0.6,
    fontFace: F.head, fontSize: 34, color: C.white, bold: true, margin: 0,
  });

  // 4 metric cards across top
  const metrics = [
    { v: "90%",  label: "Reduction in response time",      color: C.success },
    { v: "80%",  label: "Fewer false positives over time", color: C.accent },
    { v: "24/7", label: "Autonomous monitoring",           color: C.accent },
    { v: "₹0",   label: "Extra analyst cost needed",       color: C.success },
  ];

  metrics.forEach((m, i) => {
    const cx = 0.55 + i * 2.24;
    const cy = 1.38;
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 2.08, h: 1.52,
      fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 2.08, h: 0.04,
      fill: { color: m.color }, line: { color: m.color, width: 0 },
    });
    s.addText(m.v, {
      x: cx + 0.14, y: cy + 0.18, w: 1.8, h: 0.7,
      fontFace: F.head, fontSize: 38, color: C.white, bold: true, margin: 0,
    });
    s.addText(m.label, {
      x: cx + 0.14, y: cy + 0.88, w: 1.8, h: 0.52,
      fontFace: F.body, fontSize: 9.5, color: C.body, margin: 0,
    });
  });

  // Market chart
  s.addText("Global Cybersecurity Market", {
    x: 0.55, y: 3.12, w: 5, h: 0.28,
    fontFace: F.body, fontSize: 10, color: C.accent, charSpacing: 1, margin: 0,
  });
  s.addChart(pres.charts.BAR, [{
    name: "Market Size (USD B)",
    labels: ["2022", "2023", "2024", "2025E", "2026E"],
    values: [139, 162, 193, 215, 250],
  }], {
    x: 0.55, y: 3.44, w: 5.4, h: 1.86, barDir: "col",
    chartColors: ["1E2D3D", "1E2D3D", "1E2D3D", "00C2FF", "00C2FF"],
    chartArea: { fill: { color: C.bg } },
    dataLabelColor: C.dim,
    catAxisLabelColor: C.dim,
    valAxisLabelColor: C.dim,
    valGridLine: { color: C.line, size: 0.5 },
    catGridLine: { style: "none" },
    showValue: true,
    showLegend: false,
    valAxisMinVal: 0,
  });

  // Target market
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 3.12, w: 3.25, h: 2.18,
    fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 3.12, w: 0.04, h: 2.18,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });
  s.addText("Target Market", {
    x: 6.38, y: 3.22, w: 2.9, h: 0.24,
    fontFace: F.body, fontSize: 9, color: C.accent, bold: true, charSpacing: 1, margin: 0,
  });
  const targets = ["Banking & Financial Services", "Healthcare & Hospitals", "Government Agencies", "IT Firms & MSPs"];
  targets.forEach((t, i) => {
    s.addText("—  " + t, {
      x: 6.38, y: 3.56 + i * 0.38, w: 2.9, h: 0.3,
      fontFace: F.body, fontSize: 10, color: C.light, margin: 0,
    });
  });

  // Market size label
  s.addText("Market Est. $250B", {
    x: 0.55, y: 5.18, w: 5.4, h: 0.22,
    fontFace: F.mono, fontSize: 8.5, color: C.dim, margin: 0,
  });
}

// ─── SLIDE 7: BUSINESS MODEL ──────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 7);

  sectionLabel(s, "Business Model", 0.55, 0.28, 3);
  s.addText("Tiered SaaS, enterprise-ready.", {
    x: 0.55, y: 0.56, w: 9, h: 0.6,
    fontFace: F.head, fontSize: 34, color: C.white, bold: true, margin: 0,
  });

  const tiers = [
    {
      name: "Starter",
      price: "₹11,999/mo",
      color: C.mid,
      features: ["Up to 10k events/day", "3 agent workflows", "Email alerts", "Basic dashboard"],
    },
    {
      name: "Business",
      price: "₹49,999/mo",
      color: C.accent,
      highlight: true,
      features: ["Unlimited events", "Custom agent flows", "SIEM integration", "24/7 support + SLA"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      color: C.dim,
      features: ["On-premise deploy", "Custom LLM fine-tune", "Compliance reports", "Dedicated team"],
    },
  ];

  tiers.forEach((t, i) => {
    const cx = 0.55 + i * 3.12;
    const cy = 1.38;
    const cw = 2.96;
    const ch = 3.98;

    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cw, h: ch,
      fill: { color: t.highlight ? C.bg3 : C.bg2 },
      line: { color: t.highlight ? C.accent : C.line, width: t.highlight ? 1 : 0.5 },
    });
    if (t.highlight) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: cx, y: cy, w: cw, h: 0.04,
        fill: { color: C.accent }, line: { color: C.accent, width: 0 },
      });
    }

    s.addText(t.name.toUpperCase(), {
      x: cx + 0.2, y: cy + 0.2, w: cw - 0.26, h: 0.26,
      fontFace: F.body, fontSize: 9, color: t.color, bold: true, charSpacing: 2, margin: 0,
    });
    s.addText(t.price, {
      x: cx + 0.2, y: cy + 0.54, w: cw - 0.26, h: 0.56,
      fontFace: F.head, fontSize: 26, color: C.white, bold: true, margin: 0,
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: cx + 0.2, y: cy + 1.18, w: cw - 0.4, h: 0.01,
      fill: { color: C.line }, line: { color: C.line, width: 0 },
    });

    t.features.forEach((f, j) => {
      s.addShape(pres.shapes.OVAL, {
        x: cx + 0.2, y: cy + 1.36 + j * 0.6 + 0.07, w: 0.07, h: 0.07,
        fill: { color: t.color }, line: { color: t.color, width: 0 },
      });
      s.addText(f, {
        x: cx + 0.38, y: cy + 1.34 + j * 0.6, w: cw - 0.5, h: 0.3,
        fontFace: F.body, fontSize: 10.5, color: C.light, margin: 0,
      });
    });
  });
}

// ─── SLIDE 8: TEAM ────────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);
  slideNum(s, 8);

  sectionLabel(s, "The Team", 0.55, 0.28, 3);
  s.addText("Built by people who ship.", {
    x: 0.55, y: 0.56, w: 9, h: 0.6,
    fontFace: F.head, fontSize: 34, color: C.white, bold: true, margin: 0,
  });

  const members = [
    { name: "Md Faiz Hussain",  role: "Lead Developer",         spec: "MERN · Agent Architecture · GenAI Integration" },
    { name: "Team Member 2",    role: "GenAI Engineer",          spec: "Claude API · Data Pipeline" },
    { name: "Team Member 3",    role: "Frontend Developer",      spec: "React · UX · Visual Design" },
    { name: "Team Member 4",    role: "Security Analyst",        spec: "IDS · SIEM · Data Visualization" },
  ];

  members.forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const cx = 0.55 + col * 4.72;
    const cy = 1.52 + row * 1.72;

    s.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 4.44, h: 1.48,
      fill: { color: C.bg2 }, line: { color: C.line, width: 0.5 },
    });
    // Avatar placeholder
    s.addShape(pres.shapes.OVAL, {
      x: cx + 0.22, y: cy + 0.3, w: 0.74, h: 0.74,
      fill: { color: C.bg3 }, line: { color: C.mid, width: 0.5 },
    });
    // Initials
    const initials = m.name.split(" ").map(w => w[0]).join("").slice(0, 2);
    s.addText(initials, {
      x: cx + 0.22, y: cy + 0.34, w: 0.74, h: 0.66,
      fontFace: F.head, fontSize: 16, color: C.mid, align: "center", valign: "middle", margin: 0,
    });

    s.addText(m.name, {
      x: cx + 1.12, y: cy + 0.2, w: 3.1, h: 0.32,
      fontFace: F.body, fontSize: 12, color: C.white, bold: true, margin: 0,
    });
    s.addText(m.role, {
      x: cx + 1.12, y: cy + 0.52, w: 3.1, h: 0.26,
      fontFace: F.body, fontSize: 10, color: C.accent, margin: 0,
    });
    s.addText(m.spec, {
      x: cx + 1.12, y: cy + 0.84, w: 3.1, h: 0.44,
      fontFace: F.mono, fontSize: 8.5, color: C.dim, margin: 0,
    });
  });

  s.addText("Dr. A.P.J. Abdul Kalam Technical University (AKTU)  ·  Computer Science & Engineering  ·  Batch 2024–2028", {
    x: 0.55, y: 5.14, w: 9, h: 0.24,
    fontFace: F.body, fontSize: 9, color: C.mid, align: "center", margin: 0,
  });
}

// ─── SLIDE 9: CLOSE ───────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  accentBar(s);

  // Left rule
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 0.9, w: 0.04, h: 3.8,
    fill: { color: C.accent }, line: { color: C.accent, width: 0 },
  });

  s.addText("Why CyberSentinel AI", {
    x: 0.78, y: 0.92, w: 8, h: 0.5,
    fontFace: F.body, fontSize: 11, color: C.dim, charSpacing: 2, margin: 0,
  });
  s.addText("Deserves to Win.", {
    x: 0.78, y: 1.36, w: 8, h: 1.0,
    fontFace: F.head, fontSize: 48, color: C.white, bold: true, margin: 0,
  });

  const reasons = [
    "Covers Agentic AI + Cyber Security — two tracks in one",
    "Real-world problem with billion-dollar market impact",
    "Explainable AI — builds enterprise trust, no black box",
    "100% MERN — buildable prototype in 48 hours",
    "Unique multi-agent architecture using LangChain.js + Claude API",
  ];

  reasons.forEach((r, i) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.78, y: 2.62 + i * 0.44 + 0.14, w: 0.16, h: 0.03,
      fill: { color: C.accent }, line: { color: C.accent, width: 0 },
    });
    s.addText(r, {
      x: 1.08, y: 2.6 + i * 0.44, w: 8.2, h: 0.34,
      fontFace: F.body, fontSize: 11.5, color: C.light, margin: 0,
    });
  });

  s.addText("Thank You  ·  Questions Welcome", {
    x: 0.78, y: 5.08, w: 5, h: 0.28,
    fontFace: F.body, fontSize: 10, color: C.mid, margin: 0,
  });

  // Grid dots right side
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 5; col++) {
      s.addShape(pres.shapes.OVAL, {
        x: 7.8 + col * 0.32, y: 1.0 + row * 0.42, w: 0.06, h: 0.06,
        fill: { color: C.line }, line: { color: C.line, width: 0 },
      });
    }
  }
}

pres.writeFile({ fileName: "/home/claude/CyberSentinel_AI_v2.pptx" });
console.log("Done.");