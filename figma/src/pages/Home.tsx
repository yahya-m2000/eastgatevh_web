import { useState } from "react";
import { Link } from "react-router";
import {
  DARK, DARKEST, GOLD, GOLDFAINT, INK, MUTED, OFFWHITE,
  PAPER, RULE, SANS, SERIF, DIM,
} from "../tokens";
import { CtaBand, Footer, Label, SectionHeading, NumLabel } from "../components/shared";

/* ─── data ─── */
const STATS = [
  { value: "2024", label: "Incorporated, England & Wales" },
  { value: "LLP", label: "Limited Liability Partnership" },
  { value: "Africa · Asia", label: "Primary Investment Regions" },
];

const TABS = [
  {
    id: "ventures",
    label: "Ventures",
    heading: "We build companies, not just portfolios.",
    body: "EastGate takes an operating role in every company it backs. We embed alongside founding teams — contributing product leadership, operational infrastructure, and go-to-market execution — so our involvement is structural, not merely advisory.",
    items: [
      "Active board representation from day one",
      "Shared operational leadership across critical functions",
      "Proprietary deal origination through in-market networks",
    ],
  },
  {
    id: "capital",
    label: "Capital",
    heading: "Patient capital for markets that reward patience.",
    body: "We deploy structured equity into seed and early-growth stage companies in markets where institutional capital is genuinely scarce. Our capital is long-duration and calibrated to the realities of emerging-market growth trajectories.",
    items: [
      "Seed to Series A focus with follow-on capacity",
      "Emerging-market-appropriate term structures",
      "Active co-investor coordination and syndication",
    ],
  },
  {
    id: "advisory",
    label: "Advisory",
    heading: "Institutional access for local operators.",
    body: "EastGate gives portfolio companies UK-market access, regulatory navigation, and introductions to international distribution partners — translating institutional credibility into direct commercial advantage.",
    items: [
      "UK and international market entry support",
      "Regulatory and compliance guidance",
      "LP and strategic partner introductions",
    ],
  },
];

const PILLARS = [
  {
    n: "01",
    heading: "Originate with conviction",
    body: "We identify founders in undercapitalised markets before institutional consensus forms. In-market sourcing networks across West Africa, East Africa, and South and Southeast Asia give us first access to companies that global funds miss.",
  },
  {
    n: "02",
    heading: "Invest with structure",
    body: "Diligence is conducted through a proprietary framework built for markets with limited comparable data. We price risk deliberately and structure terms that protect the company, its founders, and our capital simultaneously.",
  },
  {
    n: "03",
    heading: "Build with intent",
    body: "Post-investment, EastGate functions as an operating partner. We co-build the functions, systems, and relationships that allow a company to scale beyond its initial market.",
  },
];

const PROCESS = [
  { n: "01", label: "Origination", desc: "In-market sourcing and network referral across Africa and Asia" },
  { n: "02", label: "Diligence", desc: "Structured evaluation across commercial, legal, and operational dimensions" },
  { n: "03", label: "Investment", desc: "Term negotiation, structuring, legal close, and initial capital deployment" },
  { n: "04", label: "Build Phase", desc: "Embedded operating partnership — typically 12 to 36 months post-close" },
  { n: "05", label: "Scale", desc: "Market expansion, follow-on capital, and international distribution" },
];

const REGIONS = [
  { name: "West Africa", cities: "Lagos · Accra · Dakar", sectors: "Fintech, agritech, logistics" },
  { name: "East Africa", cities: "Nairobi · Kampala · Dar es Salaam", sectors: "Health, climate, digital infrastructure" },
  { name: "South Asia", cities: "Karachi · Dhaka · Colombo", sectors: "B2B SaaS, commerce enablement" },
  { name: "Southeast Asia", cities: "Jakarta · Manila · Ho Chi Minh City", sectors: "Fintech, logistics, consumer" },
  { name: "North Africa", cities: "Cairo · Casablanca · Tunis", sectors: "Fintech, edtech, logistics" },
];

const PORTFOLIO = [
  { name: "Meridian Pay", stage: "Seed", region: "West Africa", sector: "Fintech" },
  { name: "Sahari Health", stage: "Series A", region: "East Africa", sector: "Healthtech" },
  { name: "Kota Logistics", stage: "Seed", region: "Southeast Asia", sector: "Logistics" },
  { name: "Navana Commerce", stage: "Seed", region: "South Asia", sector: "Commerce" },
  { name: "Terraverde", stage: "Pre-seed", region: "East Africa", sector: "Climatetech" },
  { name: "Dala Credit", stage: "Seed", region: "West Africa", sector: "Fintech" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("ventures");
  const tab = TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      {/* ── HERO ── */}
      <section
        data-bg="light"
        style={{
          background: PAPER,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "68px 40px 80px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: 40,
              fontFamily: SANS,
            }}
          >
            EastGate Venture Holdings LLP &middot; Registered in England &amp; Wales
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.75rem, 5.5vw, 5.25rem)",
              fontWeight: 300,
              lineHeight: 1.06,
              color: INK,
              letterSpacing: "-0.01em",
              maxWidth: 820,
            }}
          >
            Capital and operating partnership for founders building in Africa and Asia.
          </h1>
          <p
            style={{
              marginTop: 32,
              fontSize: 18,
              lineHeight: 1.65,
              color: MUTED,
              maxWidth: 520,
              fontFamily: SANS,
            }}
          >
            We invest, embed, and build — as a long-term operating partner, not a passive check-writer.
          </p>
          <div
            style={{
              marginTop: 96,
              paddingTop: 24,
              borderTop: `1px solid ${RULE}`,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 12, color: MUTED, fontFamily: SANS }}>Scroll to explore</p>
            <p style={{ fontSize: 12, color: MUTED, fontFamily: SANS }}>Est. 2024 &middot; London</p>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP — dark ── */}
      <section data-bg="dark" style={{ background: DARK, padding: "56px 40px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                paddingLeft: i > 0 ? 40 : 0,
                paddingRight: 40,
                borderLeft: i > 0 ? "1px solid rgba(240,237,232,0.1)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: "2.75rem",
                  fontWeight: 300,
                  color: GOLD,
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.value}
              </p>
              <p style={{ marginTop: 8, fontSize: 12, letterSpacing: "0.04em", color: DIM, fontFamily: SANS }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TABBED SHOWCASE — light ── */}
      <section data-bg="light" style={{ background: PAPER, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Label text="What we do" />
          <div style={{ display: "flex", borderBottom: `1px solid ${RULE}`, marginBottom: 64 }}>
            {TABS.map((t) => {
              const active = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: active ? `2px solid ${GOLD}` : "2px solid transparent",
                    marginBottom: -1,
                    padding: "0 0 16px",
                    marginRight: 40,
                    fontSize: 14,
                    color: active ? INK : MUTED,
                    cursor: "pointer",
                    fontWeight: active ? 500 : 400,
                    transition: "color 0.2s, border-color 0.2s",
                    fontFamily: SANS,
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <SectionHeading>{tab.heading}</SectionHeading>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: MUTED, marginBottom: 32, fontFamily: SANS }}>
                {tab.body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {tab.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: INK, lineHeight: 1.5, fontFamily: SANS }}>
                    <span style={{ color: GOLD, fontSize: 10, marginTop: 5, flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS — off-white ── */}
      <section data-bg="light" style={{ background: OFFWHITE, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 80, marginBottom: 64, alignItems: "end" }}>
            <div>
              <Label text="Our approach" />
              <SectionHeading>How EastGate operates</SectionHeading>
            </div>
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, fontFamily: SANS }}>
              Three principles govern everything we do — from the way we source companies to the way we show up after close.
            </p>
          </div>
          <div style={{ borderTop: `1px solid ${RULE}`, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {PILLARS.map((p, i) => (
              <div
                key={i}
                style={{
                  paddingTop: 36,
                  paddingRight: 40,
                  borderRight: i < 2 ? `1px solid ${RULE}` : "none",
                  paddingLeft: i > 0 ? 40 : 0,
                }}
              >
                <NumLabel n={p.n} />
                <h3 style={{ fontSize: 17, fontWeight: 500, color: INK, marginBottom: 12, lineHeight: 1.3, fontFamily: SANS }}>
                  {p.heading}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: MUTED, fontFamily: SANS }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — dark ── */}
      <section data-bg="dark" style={{ background: DARK, padding: "96px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 80, marginBottom: 64, alignItems: "end" }}>
            <div>
              <Label text="The journey" dark />
              <SectionHeading dark>From first meeting to scaled company</SectionHeading>
            </div>
            <p style={{ fontSize: 15, color: DIM, lineHeight: 1.75, fontFamily: SANS }}>
              A repeatable, structured process applied to every company we back — adapted to market realities, never abbreviated.
            </p>
          </div>
          {PROCESS.map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 280px 1fr",
                gap: 32,
                padding: "24px 0",
                borderTop: "1px solid rgba(240,237,232,0.1)",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: "0.2em", color: GOLD, fontFamily: "monospace" }}>{step.n}</span>
              <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 300, color: "#F0EDE8" }}>{step.label}</span>
              <span style={{ fontSize: 14, color: DIM, fontFamily: SANS }}>{step.desc}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(240,237,232,0.1)" }} />
        </div>
      </section>

      {/* ── REGIONS — horizontal scroll — light ── */}
      <section data-bg="light" style={{ background: PAPER, padding: "96px 0 96px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 40px", paddingRight: 40 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <Label text="Where we invest" />
              <SectionHeading>Regional focus</SectionHeading>
            </div>
            <Link to="/regions" style={{ fontSize: 13, color: GOLD, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: 2 }}>
              View all regions &rarr;
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8, paddingRight: 40 }}>
          {REGIONS.map((r, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 280,
                padding: "36px 32px",
                border: `1px solid ${RULE}`,
                background: OFFWHITE,
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = GOLD)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = RULE)}
            >
              <p style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: MUTED, marginBottom: 20, fontFamily: SANS }}>
                {r.cities}
              </p>
              <h3 style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 300, color: INK, lineHeight: 1.2, marginBottom: 16 }}>
                {r.name}
              </h3>
              <p style={{ fontSize: 13, color: MUTED, fontFamily: SANS }}>{r.sectors}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO — off-white, dark cards ── */}
      <section data-bg="light" style={{ background: OFFWHITE, padding: "0 0 96px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto 40px", paddingRight: 40, paddingTop: 96 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <Label text="Portfolio" />
              <SectionHeading>Selected companies</SectionHeading>
            </div>
            <Link to="/portfolio" style={{ fontSize: 13, color: GOLD, textDecoration: "none", borderBottom: `1px solid ${GOLD}`, paddingBottom: 2 }}>
              Full portfolio &rarr;
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8, paddingRight: 40 }}>
          {PORTFOLIO.map((p, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 240,
                padding: "32px 28px",
                background: DARK,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#151B29")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = DARK)}
            >
              <p style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLDFAINT, marginBottom: 20, fontFamily: SANS }}>
                {p.stage} &middot; {p.sector}
              </p>
              <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 300, color: "#F0EDE8", lineHeight: 1.2, marginBottom: 20 }}>
                {p.name}
              </h3>
              <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,237,232,0.35)", fontFamily: SANS }}>
                {p.region}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
