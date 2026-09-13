import type { ReactNode } from "react";
import { Link } from "react-router";
import {
  DARK, DARKEST, GOLD, GOLDFAINT, INK, MUTED, OFFWHITE,
  PAPER, RULE, SANS, SERIF, DIM, NAV_H,
} from "../tokens";

/* ─── primitives ─── */

export function Label({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <p
      style={{
        fontSize: 11,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: dark ? "rgba(191,143,60,0.75)" : MUTED,
        marginBottom: 16,
        fontFamily: SANS,
      }}
    >
      {text}
    </p>
  );
}

export function SectionHeading({
  children,
  dark = false,
  style: extra = {},
}: {
  children: ReactNode;
  dark?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: SERIF,
        fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
        fontWeight: 300,
        lineHeight: 1.15,
        color: dark ? "#F0EDE8" : INK,
        margin: 0,
        ...extra,
      }}
    >
      {children}
    </h2>
  );
}

export function NumLabel({ n }: { n: string }) {
  return (
    <span
      style={{
        display: "block",
        fontSize: 11,
        letterSpacing: "0.22em",
        color: GOLD,
        fontFamily: "monospace",
        marginBottom: 20,
      }}
    >
      {n}
    </span>
  );
}

/* ─── CTA Band ─── */
export function CtaBand() {
  const items = [
    "Founders seeking capital and operational partnership",
    "Co-investors evaluating emerging-market exposure",
    "Advisors and intermediaries with qualified deal flow",
    "Partners in legal, compliance, and regional services",
  ];

  return (
    <section data-bg="dark" style={{ background: DARK, padding: "96px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          <div>
            <Label text="Get in touch" dark />
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#F0EDE8",
                marginBottom: 40,
              }}
            >
              If you are building something serious, we want to hear from you.
            </h2>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                background: GOLD,
                color: DARKEST,
                fontSize: 13,
                letterSpacing: "0.08em",
                fontWeight: 600,
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Start a conversation
            </Link>
          </div>

          <div style={{ paddingTop: 16 }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: DIM,
                marginBottom: 24,
                fontFamily: SANS,
              }}
            >
              We work with
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    fontSize: 15,
                    color: DIM,
                    lineHeight: 1.6,
                    fontFamily: SANS,
                  }}
                >
                  <span
                    style={{
                      color: GOLD,
                      fontFamily: "monospace",
                      fontSize: 11,
                      marginTop: 4,
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
export function Footer() {
  return (
    <footer
      data-bg="dark"
      style={{
        background: DARKEST,
        borderTop: "1px solid rgba(240,237,232,0.07)",
        padding: "28px 40px",
        fontFamily: SANS,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: SERIF,
            fontSize: 14,
            letterSpacing: "0.22em",
            color: "rgba(240,237,232,0.35)",
            textDecoration: "none",
          }}
        >
          EASTGATE
        </Link>
        <p
          style={{
            fontSize: 11,
            color: "rgba(240,237,232,0.28)",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          &copy; 2024 EastGate Venture Holdings LLP &middot; Registered in England &amp; Wales &middot; All rights reserved
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Legal", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: 11,
                color: "rgba(240,237,232,0.28)",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(240,237,232,0.65)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(240,237,232,0.28)")
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Interior hero band ─── */
export function InteriorHero({
  title,
  subhead,
  label,
}: {
  title: string;
  subhead: string;
  label: string;
}) {
  return (
    <section
      data-bg="dark"
      style={{
        background: DARK,
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: `${NAV_H}px 40px 72px`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        <Label text={label} dark />
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.07,
            color: "#F0EDE8",
            letterSpacing: "-0.01em",
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: DIM,
            maxWidth: 560,
          }}
        >
          {subhead}
        </p>
      </div>
    </section>
  );
}

/* ─── Interior content section ─── */
export type ContentBlock =
  | { type: "paragraph"; body: string }
  | { type: "cards"; items: { title: string; body: string }[] }
  | { type: "steps"; items: { n: string; title: string; body: string }[] }
  | { type: "bullets"; items: string[] }
  | { type: "team"; items: { name: string; role: string; bio: string }[] }
  | { type: "stat-row"; items: { value: string; label: string }[] };

export interface Section {
  label: string;
  heading: string;
  intro?: string;
  bg?: "paper" | "offwhite";
  content: ContentBlock;
}

export function InteriorSection({ section, index }: { section: Section; index: number }) {
  const bg = section.bg === "offwhite" || index % 2 === 1 ? OFFWHITE : PAPER;

  return (
    <section data-bg="light" style={{ background: bg, padding: "80px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: 64,
            marginBottom: 56,
            alignItems: "end",
          }}
        >
          <div>
            <Label text={section.label} />
            <SectionHeading>{section.heading}</SectionHeading>
          </div>
          {section.intro && (
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, fontFamily: SANS }}>
              {section.intro}
            </p>
          )}
        </div>

        {/* Content block */}
        <ContentBlockRenderer block={section.content} />
      </div>
    </section>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  if (block.type === "paragraph") {
    return (
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.85,
          color: MUTED,
          maxWidth: 720,
          fontFamily: SANS,
        }}
      >
        {block.body}
      </p>
    );
  }

  if (block.type === "cards") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {block.items.map((card, i) => (
          <div
            key={i}
            style={{
              padding: "36px 32px",
              border: `1px solid ${RULE}`,
              background: PAPER,
            }}
          >
            <NumLabel n={String(i + 1).padStart(2, "0")} />
            <h3
              style={{
                fontFamily: SERIF,
                fontSize: 20,
                fontWeight: 300,
                color: INK,
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: MUTED, fontFamily: SANS }}>
              {card.body}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <div>
        {block.items.map((step, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "48px 260px 1fr",
              gap: 32,
              padding: "24px 0",
              borderTop: `1px solid ${RULE}`,
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                color: GOLD,
                fontFamily: "monospace",
              }}
            >
              {step.n}
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: 20,
                fontWeight: 300,
                color: INK,
              }}
            >
              {step.title}
            </span>
            <span style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, fontFamily: SANS }}>
              {step.body}
            </span>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${RULE}` }} />
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {block.items.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              fontSize: 15,
              color: INK,
              lineHeight: 1.65,
              fontFamily: SANS,
            }}
          >
            <span
              style={{
                color: GOLD,
                fontFamily: "monospace",
                fontSize: 11,
                marginTop: 5,
                flexShrink: 0,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "team") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {block.items.map((member, i) => (
          <div
            key={i}
            style={{
              padding: "36px 32px",
              border: `1px solid ${RULE}`,
              background: PAPER,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                background: OFFWHITE,
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontFamily: SERIF,
                color: MUTED,
                fontWeight: 300,
              }}
            >
              {member.name.charAt(0)}
            </div>
            <h3
              style={{
                fontFamily: SERIF,
                fontSize: 20,
                fontWeight: 300,
                color: INK,
                marginBottom: 4,
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 16,
                fontFamily: SANS,
              }}
            >
              {member.role}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: MUTED, fontFamily: SANS }}>
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "stat-row") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${block.items.length}, 1fr)`,
          borderTop: `1px solid ${RULE}`,
        }}
      >
        {block.items.map((stat, i) => (
          <div
            key={i}
            style={{
              paddingTop: 32,
              paddingRight: 32,
              borderRight: i < block.items.length - 1 ? `1px solid ${RULE}` : "none",
              paddingLeft: i > 0 ? 32 : 0,
            }}
          >
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "2.5rem",
                fontWeight: 300,
                color: GOLD,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {stat.value}
            </p>
            <p style={{ fontSize: 13, color: MUTED, fontFamily: SANS }}>{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
