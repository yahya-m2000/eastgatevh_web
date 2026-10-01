# Business content notes

Business copy follows the owner's brief and subsequent corrections. The full name is **EastGate Venture Holdings** (owner-confirmed capitalisation), the brand shorthand is **EastGate** and the venture is **A&A Trade Solutions**.

## Owner-supplied facts

- Partner-led, closed-loop holdings model; sovereign venture building; direct operations and retained majority ownership.
- Build–Operate–Transfer: build the venture, support operations and train founders, then prepare a founder handover with EastGate retaining a majority stake.
- Former identity: The Eastern Trade Group. A&A Trade Solutions was acquired under that identity and is the first full BOT project.
- Current activity in Africa and Asia, within a global mandate.
- Founder Ridwan Mohamed; partners Noah Mohamed and Yahya Mohamed, with Yahya undertaking contracted technical delivery for A&A Trade Solutions.
- Noah worked within Africa to establish and run A&A Trade Solutions operations and train the founders towards self-sufficient management. His governance and information security experience includes Ayvens, HyperJar and Imperial College London.
- Yahya built **A&A Store**, which the owner confirms is available on **Google Play**. His profile and the case study foreground this delivery.
- Yahya also conceived and built **HOYBNB**, but the owner confirms it did not take off. It is now a brief reference to earlier work that did not gain traction, with no active-development or future-launch claim.
- The owner supplied [A&A Trade Solutions' website](https://www.aatradesolutions.com/), which is linked from the homepage venture feature, portfolio feature and trading-operations section.

## Supporting sources

The initial review was read-only. No sibling project was modified, built or deployed.

| Source                                                                                             | Use                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `C:/dev/aagroup-web/messages/en.json` and [the company website](https://www.aatradesolutions.com/) | China–Africa sourcing, procurement and logistics offer. Shipment, satisfaction and testimonial claims were not reused.                                                                                                 |
| `C:/dev/aa_catalog/README.md`                                                                      | A&A Store catalogue, basket, guest checkout and manual commercial fulfilment. No accounts or in-app payment.                                                                                                           |
| `C:/dev/aa_catalog/app/README.md`                                                                  | Expo / React Native app architecture.                                                                                                                                                                                  |
| `C:/dev/aa_catalog/server/README.md`                                                               | TypeScript backend, order repricing, order records and email workflow. Feature-flagged WhatsApp automation is not represented as live.                                                                                 |
| `C:/dev/hoy-app` and `C:/dev/hoy-api`                                                              | Historical evidence of a property discovery and booking platform. Repository version labels do not establish its current commercial status. The owner's correction supersedes the earlier development-stage inference. |

The owner later supplied the [Google Play listing](https://play.google.com/store/apps/details?id=com.aatradesolutions.aacatalog), titled “A&A Store”, which is linked from the portfolio's A&A Store section. No download figures or ratings have been invented.

## Owner copy revision (1 October 2026)

The owner supplied finished copy for the home page (BOT tabs and principles), About, Our approach (`/investment-model`) and Our world (`/regions`). It is used as written, with only punctuation tidied.

- **Removed at the owner's request:** About's “Independent direction” section (replaced by “Commitment to international standards”), plus Our approach's “Ownership & continuity” and “The closed-loop model” sections.
- **Ownership language:** the new copy describes EastGate as a long-term shareholder and partner after Transfer. “Majority ownership” was removed from these pages, and from the home hero, stat strip, journey step and page descriptions. Founder partnerships, contact, portfolio and insights still mention it, pending the owner's review.
- **Geography:** the current network is named as Somaliland, the wider East African region and China. Our world's separate Africa and Asia sections were replaced by one “Current focus” section (`#current-focus`).
- **A&A Store:** the app formerly called A&A Shop is now A&A Store throughout. At the owner's instruction, the site describes it as the first e-commerce platform in Somaliland. This claim has not been independently verified.
- **Our story:** the three stages are a switcher (tabs with a progress rail and previous/next controls). Each stage shows that stage's logo: The Eastern Trade Group, A&A Trade Solutions and EastGate. Sources are in `ASSETS.md`.
- **Home criteria:** the home page's five-step “Built together. Prepared to lead.” journey repeated Build–Operate–Transfer and overlapped the selection criteria. It was replaced by a short summary of the three criteria (“What we look for before we commit”). The summary keeps the criterion names but paraphrases the full wording from Our approach (`selectionCriteria`). If the criteria change, update both. The five-step `founderJourney` is still used on the Founder Partnerships page.
- **Team page hidden:** pending the owner's review, `/team` has no route and redirects to the home page. It is also removed from the menu, footer and nav lists. `src/pages/TeamPage.jsx` and the team content in `siteContent.js` remain, so restoring it means re-adding the route and links.
- **Pending review:** portfolio and the other footer-linked pages are unchanged until the owner reviews them.

## Remaining detail

- **Transfer:** a handover of day-to-day management to the venture's leadership, with EastGate remaining a long-term shareholder providing strategic and advisory support. No percentage, legal transaction, fixed timetable or completed transfer is asserted.
- **Founder readiness:** Noah's training supports self-sufficient founder management; the copy does not claim the transfer is complete.
- **Ridwan:** the visible “Experience profile to follow” remains the authorised placeholder. No career history or credentials were fabricated.
- **Team experience:** relevant responsibilities are summarised from the supplied material. Inconsistent LinkedIn durations and private edit-profile links are omitted.
- **Contact:** `admin@eastgatevh.com` and London remain from the existing project. Mailbox deliverability was not verified.
- **Photography:** regional images are illustrative, not claims of EastGate offices or A&A facilities. Sources remain in `ASSETS.md`.

The former fictional portfolio, team, co-investor network, demographic statistics, minority positions, fixed timelines and dated publication claims remain removed from active content.
