import { useState } from "react";
import { InteriorHero, InteriorSection, Footer, type Section } from "../../components/shared";
import { DARK, DARKEST, GOLD, GOLDFAINT, INK, MUTED, OFFWHITE, PAPER, RULE, SANS, SERIF, DIM } from "../../tokens";

const sections: Section[] = [
  {
    label: "Get in touch",
    heading: "Who we speak with",
    intro: "We keep our inbound process simple and direct. Tell us who you are and what you are looking for.",
    bg: "offwhite",
    content: {
      type: "bullets",
      items: [
        "Founders at seed or early Series A stage building in West Africa, East Africa, South Asia, or Southeast Asia",
        "Co-investors and family offices seeking emerging-market exposure with active operating management",
        "Advisors and intermediaries with specific deal flow or introductions to make",
        "Service providers — legal, compliance, accounting, and regional advisory — who work in our markets",
        "Journalists, researchers, and institutions studying venture building in undercapitalised markets",
      ],
    },
  },
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", type: "Founder", message: "" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderBottom: `1px solid ${RULE}`,
    background: "transparent",
    padding: "12px 0",
    fontSize: 15,
    color: INK,
    fontFamily: SANS,
    outline: "none",
    display: "block",
    marginBottom: 32,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: MUTED,
    marginBottom: 8,
    fontFamily: SANS,
  };

  if (submitted) {
    return (
      <div style={{ padding: "64px 0" }}>
        <p style={{ fontFamily: SERIF, fontSize: "1.75rem", fontWeight: 300, color: INK, marginBottom: 16 }}>
          Thank you. We will be in touch.
        </p>
        <p style={{ fontSize: 15, color: MUTED, fontFamily: SANS }}>
          We review every message personally and aim to respond within five business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ maxWidth: 600 }}
    >
      <div>
        <label style={labelStyle}>Full name</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>Organisation</label>
        <input
          value={form.org}
          onChange={(e) => setForm({ ...form, org: e.target.value })}
          placeholder="Company or institution"
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>I am a</label>
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option>Founder</option>
          <option>Co-investor</option>
          <option>Advisor or intermediary</option>
          <option>Service provider</option>
          <option>Researcher or journalist</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="What would you like to discuss?"
          rows={5}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
        />
      </div>
      <button
        type="submit"
        style={{
          display: "inline-block",
          padding: "16px 40px",
          background: INK,
          color: PAPER,
          fontSize: 13,
          letterSpacing: "0.08em",
          fontWeight: 500,
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          fontFamily: SANS,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = INK)}
      >
        Send message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <InteriorHero
        label="Contact"
        title="Start a conversation with EastGate."
        subhead="We respond to every message personally. No automated responses, no intake forms beyond this one."
      />

      {/* Contact form section */}
      <section data-bg="light" style={{ background: PAPER, padding: "80px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 7fr",
              gap: 80,
              marginBottom: 56,
              alignItems: "start",
            }}
          >
            <div style={{ position: "sticky", top: 80 }}>
              <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: MUTED, marginBottom: 16, fontFamily: SANS }}>
                Write to us
              </p>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", fontWeight: 300, lineHeight: 1.15, color: INK, marginBottom: 24 }}>
                Direct contact
              </h2>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 32, fontFamily: SANS }}>
                Prefer email? Write to us directly at{" "}
                <a href="mailto:enquiries@eastgate.vc" style={{ color: GOLD, textDecoration: "none" }}>
                  enquiries@eastgate.vc
                </a>
              </p>
              <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: 24 }}>
                <p style={{ fontSize: 12, letterSpacing: "0.06em", color: MUTED, marginBottom: 4, fontFamily: SANS }}>
                  Registered address
                </p>
                <p style={{ fontSize: 14, color: INK, lineHeight: 1.7, fontFamily: SANS }}>
                  EastGate Venture Holdings LLP<br />
                  Registered in England &amp; Wales<br />
                  London, United Kingdom
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <Footer />
    </>
  );
}
