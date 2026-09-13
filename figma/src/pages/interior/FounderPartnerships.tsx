import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "For founders",
    heading: "What you get when EastGate invests",
    intro: "Capital is necessary but not sufficient. What founders in our markets need is a partner who can build alongside them — not just fund them.",
    bg: "paper",
    content: {
      type: "cards",
      items: [
        {
          title: "Operating partnership",
          body: "We embed in your company in a structured way — contributing to specific functions like finance, product, or distribution — and step back as your own team develops.",
        },
        {
          title: "UK market access",
          body: "EastGate's UK incorporation and institutional relationships open doors for African and Asian founders that are otherwise difficult to access — partnerships, regulatory navigation, and investor introductions.",
        },
        {
          title: "Patient capital",
          body: "We hold for as long as the company needs us. Our structure has no forced liquidation timeline. We align our exit timing with what is right for the business, not our fund cycle.",
        },
      ],
    },
  },
  {
    label: "What we look for",
    heading: "The companies EastGate backs",
    intro: "We are selective and specific. We back founders who are building something structurally important in a market that institutional capital underserves.",
    bg: "offwhite",
    content: {
      type: "bullets",
      items: [
        "Founders with deep in-market knowledge — local insight, not imported playbooks",
        "Companies solving problems at infrastructure level — payments, logistics, health access, data",
        "Seed to Series A stage with proof of initial traction and a clear path to unit economics",
        "Openness to a hands-on operating partner, not just a passive board observer",
        "Willingness to think long-term about scale — regional and international expansion, not only local optimisation",
      ],
    },
  },
  {
    label: "The process",
    heading: "From first conversation to investment close",
    bg: "paper",
    content: {
      type: "steps",
      items: [
        { n: "01", title: "Initial conversation", body: "A 45-minute call to understand your business, your market, and what you need from a partner beyond capital." },
        { n: "02", title: "Preliminary assessment", body: "We review your materials and conduct initial market analysis. We will be direct about fit within two weeks." },
        { n: "03", title: "Structured diligence", body: "For companies that proceed, we conduct a proprietary diligence process covering commercial, legal, and operational dimensions." },
        { n: "04", title: "Term sheet", body: "We issue terms quickly. We do not use diligence as a delay mechanism." },
        { n: "05", title: "Close and embed", body: "Legal close followed immediately by the start of our operating partnership — not a handover to a portfolio team, but direct engagement." },
      ],
    },
  },
  {
    label: "Commitments",
    heading: "What EastGate commits to every founder",
    bg: "offwhite",
    content: {
      type: "bullets",
      items: [
        "A decision within 30 days of receiving complete materials — no indefinite diligence",
        "Direct engagement from senior team members, not analysts or associates",
        "Honest feedback whether or not we invest — we will tell you why",
        "No information shared beyond EastGate without explicit permission",
        "Active board participation, not passive observation",
      ],
    },
  },
];

export default function FounderPartnerships() {
  return (
    <>
      <InteriorHero
        label="Founder Partnerships"
        title="We back founders who are building something structurally important."
        subhead="Capital combined with operating partnership — for companies in markets that institutional investors underserve."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
