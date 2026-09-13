import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "Perspectives",
    heading: "How we think about the markets we invest in",
    intro: "EastGate publishes occasional writing on the structural dynamics of our target markets — not market commentary, but the frameworks and observations that inform our investment convictions.",
    bg: "paper",
    content: {
      type: "cards",
      items: [
        {
          title: "The capital scarcity premium in early-stage Africa",
          body: "Why institutional venture capital's absence from African seed rounds is not a signal of risk but a structural opportunity for investors with genuine operating presence. Published March 2024.",
        },
        {
          title: "Building financial infrastructure in markets without legacy rails",
          body: "The compounding advantage of markets that never built traditional banking infrastructure — and what it means for fintech founders building from first principles. Published January 2024.",
        },
        {
          title: "What the holding model enables that funds cannot",
          body: "A structural comparison of fund vehicles and holding companies for early-stage emerging-market investing — incentives, time horizons, and operating authority. Published November 2023.",
        },
      ],
    },
  },
  {
    label: "Market observations",
    heading: "What we are watching",
    intro: "Structural themes that are shaping our investment priorities in 2024 and beyond.",
    bg: "offwhite",
    content: {
      type: "bullets",
      items: [
        "AfCFTA implementation creating the first truly continental trade infrastructure across Africa — and the logistics and payments companies that will service it",
        "Mobile money maturation in East Africa creating the base layer for digital credit, insurance, and wealth products",
        "Pakistan and Bangladesh entering a first generation of institutional venture activity — with the valuation and access characteristics of East Africa a decade ago",
        "Climate finance finding its way to smallholder agriculture across Sub-Saharan Africa through voluntary carbon markets",
        "Southeast Asian logistics fragmentation creating durable demand for aggregation and technology platforms across Indonesia and the Philippines",
      ],
    },
  },
  {
    label: "Subscribe",
    heading: "Receive our occasional writing",
    intro: "We publish infrequently and only when we have something worth saying. No newsletters, no content marketing.",
    bg: "paper",
    content: {
      type: "paragraph",
      body: "If you would like to receive EastGate's occasional writing on emerging-market venture building, please contact us directly at enquiries@eastgate.vc with the subject line 'Insights'. We do not maintain a subscription platform — we send directly to a curated list of practitioners, founders, and institutional investors who have expressed interest.",
    },
  },
];

export default function Insights() {
  return (
    <>
      <InteriorHero
        label="Insights"
        title="Writing on venture building in undercapitalised markets."
        subhead="Frameworks and observations from practitioners — published infrequently, when we have something worth saying."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
