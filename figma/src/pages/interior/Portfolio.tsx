import { InteriorHero, InteriorSection, CtaBand, Footer, type Section } from "../../components/shared";

const sections: Section[] = [
  {
    label: "Portfolio",
    heading: "Companies we have backed and are actively building",
    intro: "EastGate is an early-stage investor. Most of our portfolio companies are in active build phase — we are present in operations, not observing from a distance.",
    bg: "paper",
    content: {
      type: "cards",
      items: [
        {
          title: "Meridian Pay",
          body: "B2B payments infrastructure for cross-border trade across West Africa. Seed stage. Operating in Nigeria, Ghana, and Senegal. EastGate leads payments and regulatory strategy.",
        },
        {
          title: "Sahari Health",
          body: "Digital health platform improving access to diagnostics and specialist care in East Africa. Series A. Operating across Kenya and Tanzania with international expansion planned.",
        },
        {
          title: "Kota Logistics",
          body: "Last-mile logistics aggregator for SME merchants across Southeast Asia. Seed stage. Operating in Indonesia and the Philippines with EastGate supporting go-to-market.",
        },
        {
          title: "Navana Commerce",
          body: "B2B commerce enablement platform for SME exporters in South Asia. Seed stage. Operating in Bangladesh with early expansion to Pakistan. EastGate embedded in product and sales.",
        },
        {
          title: "Terraverde",
          body: "Carbon credit origination and verification for smallholder farmers in East Africa. Pre-seed. Piloting in Kenya with a proprietary MRV methodology developed with EastGate.",
        },
        {
          title: "Dala Credit",
          body: "Digital credit infrastructure for informal traders in West Africa. Seed stage. Operating in Nigeria. EastGate supporting credit model development and regulatory navigation.",
        },
      ],
    },
  },
  {
    label: "Our involvement",
    heading: "What EastGate does post-investment",
    intro: "We are not a passive observer. Every portfolio company has a defined operating engagement with EastGate.",
    bg: "offwhite",
    content: {
      type: "steps",
      items: [
        { n: "01", title: "Board representation", body: "A senior EastGate team member takes a board seat at every portfolio company. Board representation is active — not a quarterly call." },
        { n: "02", title: "Functional embedding", body: "We identify the function where EastGate can add the most leverage in the first 12 months — finance, product, market entry, or regulatory — and embed directly." },
        { n: "03", title: "Network deployment", body: "We actively introduce portfolio companies to co-investors, distribution partners, and regulatory contacts across our institutional network." },
        { n: "04", title: "Build phase review", body: "At 12 months, we review our operating engagement with founders and adjust based on what the company needs for the next phase of growth." },
        { n: "05", title: "Scale preparation", body: "As companies approach Series A and beyond, EastGate focuses on institutional investor preparation, international market entry, and succession in roles we have filled." },
      ],
    },
  },
  {
    label: "Co-investment",
    heading: "Our co-investor network",
    intro: "We work with a selective group of co-investors who bring complementary expertise and capital.",
    bg: "paper",
    content: {
      type: "bullets",
      items: [
        "Development finance institutions active in Africa and Asia — DFI co-investment on terms consistent with private market standards",
        "Pan-African and pan-Asian venture funds with sector specialisation complementary to EastGate",
        "UK and European family offices seeking emerging-market exposure with active local management",
        "Corporate venture arms of international companies seeking market intelligence and strategic access",
        "Angel networks and individual operators with deep in-market expertise in specific sectors",
      ],
    },
  },
];

export default function Portfolio() {
  return (
    <>
      <InteriorHero
        label="Portfolio"
        title="Six companies in active build phase across Africa and Asia."
        subhead="Seed to Series A. Operationally embedded. Built for long-term scale."
      />
      {sections.map((section, i) => (
        <InteriorSection key={i} section={section} index={i} />
      ))}
      <CtaBand />
      <Footer />
    </>
  );
}
