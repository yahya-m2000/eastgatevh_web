import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "The model",
    heading: "Invest, build, scale — in that order, with full commitment at each stage",
    intro: "Most investors hand capital over and observe. EastGate is different: we treat each investment as the beginning of an operating relationship, not the end of an origination process.",
    bg: "paper",
    content: {
      type: "paragraph",
      body: "The EastGate model is built around three consecutive phases. In the investment phase, we structure capital carefully — taking equity positions sized to give us meaningful operating authority without diluting the founder. In the build phase, we embed directly in the company, contributing to specific functional areas for 12 to 36 months. In the scale phase, we use our UK institutional relationships and co-investor network to open markets and capital that the company could not access independently. Across all three phases, we remain a single, continuous partner — there is no handoff, no portfolio team, no observer role.",
    },
  },
  {
    label: "Investment criteria",
    heading: "What we invest in",
    intro: "Specific about stage, sector, and market. Flexible about structure.",
    bg: "offwhite",
    content: {
      type: "cards",
      items: [
        {
          title: "Stage",
          body: "Seed to Series A. We occasionally participate in pre-seed rounds where the founder has a strong in-market track record. Follow-on capacity at each subsequent round.",
        },
        {
          title: "Sectors",
          body: "Financial services infrastructure, logistics and supply chain, digital health, agritech, and B2B software. We avoid consumer-only plays without a clear infrastructure layer.",
        },
        {
          title: "Geographies",
          body: "West Africa, East Africa, South Asia, and Southeast Asia. We invest only in markets where we have active in-market relationships and the ability to provide genuine operating support.",
        },
      ],
    },
  },
  {
    label: "Structure",
    heading: "How we structure our investments",
    bg: "paper",
    content: {
      type: "bullets",
      items: [
        "Equity-primary — we take direct equity stakes, not convertible instruments in most cases",
        "Meaningful ownership — typically 10 to 25% at entry, structured to preserve founder control",
        "Operating rights embedded in investment terms — board seat plus defined functional involvement",
        "Anti-dilution provisions structured to protect without deterring future institutional co-investors",
        "Follow-on rights and pro-rata allocation to maintain position through subsequent rounds",
      ],
    },
  },
  {
    label: "For co-investors",
    heading: "Partnering alongside EastGate",
    intro: "We actively seek co-investors who bring complementary capital, expertise, or market access.",
    bg: "offwhite",
    content: {
      type: "cards",
      items: [
        {
          title: "What you get",
          body: "Access to diligenced, structured deals in markets you may not source independently. EastGate's operating presence reduces execution risk materially versus investing without an active operator.",
        },
        {
          title: "What we expect",
          body: "Co-investors who add value beyond capital — sector expertise, regional networks, or later-stage follow-on capacity. We select co-investors with the same rigour we apply to founders.",
        },
        {
          title: "Terms",
          body: "Co-investors invest on the same terms as EastGate. We do not create separate classes or preferences for co-investors that disadvantage founders or each other.",
        },
      ],
    },
  },
];

export default function InvestmentModel() {
  return (
    <>
      <InteriorHero
        label="Investment Model"
        title="Patient capital combined with operating depth — held for as long as the company needs."
        subhead="Seed to Series A focus. Africa and Asia. Hands-on from close to scale."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
