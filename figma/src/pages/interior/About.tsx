import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "Who we are",
    heading: "A venture holding company built for undercapitalised markets",
    intro: "EastGate is not a traditional fund. We are a holding company that takes long positions in companies we help build — combining patient capital with operational depth that passive investors cannot offer.",
    bg: "paper",
    content: {
      type: "paragraph",
      body: "Incorporated in England and Wales as a Limited Liability Partnership, EastGate Venture Holdings LLP was founded on a single conviction: that the most consequential companies of the next decade will emerge from markets in Africa and Asia that remain systematically underfunded by global venture capital. Our structure allows us to hold, build, and scale these companies over a timeframe that matches their actual development arc — not the artificial pressure of a traditional fund cycle.",
    },
  },
  {
    label: "Our conviction",
    heading: "Why Africa and Asia",
    intro: "The opportunity is structural, not cyclical. Capital scarcity in these markets is not a risk — it is the asymmetry.",
    bg: "offwhite",
    content: {
      type: "cards",
      items: [
        {
          title: "Demographic scale",
          body: "Africa and Asia together represent over 5 billion people, the majority of the world's youth population, and the fastest-growing consumer classes of the coming decades.",
        },
        {
          title: "Infrastructure leapfrog",
          body: "Markets without legacy infrastructure adopt new technology faster. Mobile-first fintech, digital health, and logistics platforms find product-market fit at speed that mature markets cannot replicate.",
        },
        {
          title: "Capital scarcity premium",
          body: "Institutional venture capital reaches less than 3% of founders in our target markets. Scarcity creates pricing power, founder loyalty, and access that late-arriving capital cannot buy.",
        },
      ],
    },
  },
  {
    label: "Structure",
    heading: "Why an LLP holding structure",
    intro: "The holding model gives us capabilities that fund structures prohibit.",
    bg: "paper",
    content: {
      type: "bullets",
      items: [
        "Indefinite hold periods matched to company development timelines, not fund liquidity cycles",
        "Direct operating involvement without the conflicts of a management fee model",
        "Ability to re-invest proceeds at the holding level without triggering fund-level distributions",
        "UK legal structure providing institutional counterparty credibility for African and Asian portfolio companies",
        "Partnership structure aligning incentives between EastGate leadership and portfolio founders",
      ],
    },
  },
  {
    label: "Credentials",
    heading: "Institutional grounding",
    bg: "offwhite",
    content: {
      type: "stat-row",
      items: [
        { value: "2024", label: "Incorporated in England & Wales" },
        { value: "LLP", label: "Partnership structure" },
        { value: "London", label: "Registered headquarters" },
        { value: "Africa · Asia", label: "Primary investment mandate" },
      ],
    },
  },
];

export default function About() {
  return (
    <>
      <InteriorHero
        label="About EastGate"
        title="We invest in, build, and hold companies in markets that global capital underweights."
        subhead="UK-incorporated. Africa and Asia-focused. Operationally embedded from day one."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
