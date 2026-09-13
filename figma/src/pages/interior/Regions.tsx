import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "Regional focus",
    heading: "Where we invest and why",
    intro: "Our regional focus is not opportunistic — it is the product of deliberate network-building across markets where we can provide genuine operating value, not just capital.",
    bg: "paper",
    content: {
      type: "paragraph",
      body: "EastGate invests across four primary regions: West Africa, East Africa, South Asia, and Southeast Asia. Each region is served by a dedicated in-market network — not a visiting investor, but practitioners who live and work in the markets we back. We invest only where we can provide operating support that is genuinely useful to a founder. That constraint means we occasionally pass on attractive financial opportunities in markets where we cannot back up capital with presence.",
    },
  },
  {
    label: "West Africa",
    heading: "West Africa",
    intro: "Anchor markets: Nigeria, Ghana, Senegal. Population of 420 million across the ECOWAS region.",
    bg: "offwhite",
    content: {
      type: "cards",
      items: [
        {
          title: "Fintech and payments",
          body: "Mobile money penetration and a large unbanked population create structural demand for financial infrastructure. We back companies building payment rails, credit infrastructure, and digital banking.",
        },
        {
          title: "Agritech and food systems",
          body: "Agriculture accounts for 25-35% of GDP across West Africa. Digital platforms connecting smallholder farmers to markets, inputs, and finance represent an underinvested opportunity at scale.",
        },
        {
          title: "Logistics and trade",
          body: "Intra-African trade expansion under the AfCFTA creates demand for digital logistics infrastructure. We back companies building freight, last-mile delivery, and cross-border trade platforms.",
        },
      ],
    },
  },
  {
    label: "East Africa",
    heading: "East Africa",
    intro: "Anchor markets: Kenya, Uganda, Tanzania. One of the world's most mature mobile-money ecosystems.",
    bg: "paper",
    content: {
      type: "cards",
      items: [
        {
          title: "Digital health",
          body: "Kenya and East Africa have produced some of the most sophisticated healthtech companies on the continent. We back companies improving access, delivery, and financing of healthcare.",
        },
        {
          title: "Climate and energy",
          body: "East Africa leads the continent in off-grid energy adoption. Climate-tech companies addressing energy access, carbon markets, and sustainable agriculture are a primary focus.",
        },
        {
          title: "Digital infrastructure",
          body: "Cloud, connectivity, and data infrastructure enabling the next generation of software companies across the region. B2B SaaS built for the East African market reality.",
        },
      ],
    },
  },
  {
    label: "South Asia",
    heading: "South Asia",
    intro: "Anchor markets: Pakistan, Bangladesh, Sri Lanka. Markets with structural underrepresentation in global VC despite significant scale.",
    bg: "offwhite",
    content: {
      type: "steps",
      items: [
        { n: "01", title: "Pakistan", body: "220 million people, a young median age, and a fintech sector growing rapidly despite regulatory complexity. One of the most underinvested large markets globally." },
        { n: "02", title: "Bangladesh", body: "The world's third-largest garment exporter with a rapidly digitising SME economy. Commerce enablement, logistics, and B2B SaaS are primary focus areas." },
        { n: "03", title: "Sri Lanka", body: "A recovering economy with strong engineering talent and a historically underdeveloped venture ecosystem. Opportunity to back the first generation of institutionally-backed startups." },
      ],
    },
  },
  {
    label: "Southeast Asia",
    heading: "Southeast Asia",
    intro: "Anchor markets: Indonesia, Philippines, Vietnam. Emerging-market dynamics within a region with established institutional venture infrastructure.",
    bg: "paper",
    content: {
      type: "cards",
      items: [
        {
          title: "Indonesia",
          body: "The world's fourth most populous country with a deeply fragmented SME economy. Fintech, logistics aggregation, and commerce enablement at the intersection of formal and informal sectors.",
        },
        {
          title: "Philippines",
          body: "Strong remittance-driven fintech adoption and a large outsourcing economy creating B2B software demand. Consumer fintech and embedded finance are active focus areas.",
        },
        {
          title: "Vietnam",
          body: "Manufacturing growth and a digitising supply chain create demand for logistics and trade finance infrastructure. One of Southeast Asia's fastest-growing tech ecosystems.",
        },
      ],
    },
  },
];

export default function Regions() {
  return (
    <>
      <InteriorHero
        label="Regions"
        title="Four regions. In-market presence. Operating support that is genuinely local."
        subhead="West Africa, East Africa, South Asia, and Southeast Asia — markets where capital scarcity creates structural opportunity."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
