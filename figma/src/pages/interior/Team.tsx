import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "Leadership",
    heading: "The EastGate team",
    intro: "Operators and investors who have worked across the markets we back — not observers, but practitioners.",
    bg: "paper",
    content: {
      type: "team",
      items: [
        {
          name: "Adaeze Okonkwo",
          role: "Managing Partner",
          bio: "Former investment director at a pan-African development finance institution. Fifteen years structuring equity and quasi-equity in West and East Africa across fintech, logistics, and agritech sectors.",
        },
        {
          name: "Ravi Krishnamurthy",
          role: "Partner, South & Southeast Asia",
          bio: "Co-founded two venture-backed companies in South Asia before transitioning to investing. Deep operator network across Bangladesh, Pakistan, and Sri Lanka.",
        },
        {
          name: "James Whitmore",
          role: "General Counsel & CFO",
          bio: "Qualified solicitor with twelve years in private equity and venture transactions. Previously at a Magic Circle firm advising on cross-border emerging-market transactions.",
        },
        {
          name: "Amara Diallo",
          role: "Head of Portfolio Operations",
          bio: "Built and scaled operational functions at two Series B companies in West Africa. Specialist in go-to-market execution, regulatory navigation, and market-entry strategy.",
        },
        {
          name: "Priya Mehta",
          role: "Principal, Investments",
          bio: "Led diligence and transaction execution on over thirty early-stage investments across India and Southeast Asia. MBA from London Business School.",
        },
        {
          name: "Kofi Asante",
          role: "Venture Partner, East Africa",
          bio: "Based in Nairobi. Former country director for a global payments company in East Africa. Extensive network across Kenya, Uganda, and Tanzania.",
        },
      ],
    },
  },
  {
    label: "Advisors",
    heading: "Advisory network",
    intro: "Senior practitioners who advise on regional strategy, sector expertise, and institutional relationships.",
    bg: "offwhite",
    content: {
      type: "bullets",
      items: [
        "Former central bank governor, West Africa — regulatory strategy and financial services sector access",
        "Managing partner, Asia-Pacific growth equity fund — Southeast Asia market intelligence and co-investment",
        "Chief investment officer, UK family office — institutional co-investor relations and UK market access",
        "General partner, pan-African venture fund — deal flow, syndication, and regional due diligence",
        "Chief executive, listed telecoms group, East Africa — infrastructure sector expertise and regional networks",
      ],
    },
  },
  {
    label: "Culture",
    heading: "How we work",
    bg: "paper",
    content: {
      type: "cards",
      items: [
        {
          title: "In-market presence",
          body: "We maintain active in-market relationships rather than investing remotely. Decisions are made by people who know the markets, not by committee from London.",
        },
        {
          title: "Operator-first mindset",
          body: "Every team member has built or operated something. We bring no consultants, no observers — only practitioners who can roll up their sleeves alongside founders.",
        },
        {
          title: "Long-term alignment",
          body: "Our holding structure means we are with founders for as long as the company needs us. No artificial fund cycles, no forced timelines, no misaligned exits.",
        },
      ],
    },
  },
];

export default function Team() {
  return (
    <>
      <InteriorHero
        label="The Team"
        title="Operators and investors with direct experience in the markets we back."
        subhead="London-headquartered with in-market depth across Africa and Asia."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
