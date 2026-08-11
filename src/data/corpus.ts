import type { SourceDocument } from "@/types";

export const WORKSPACE_NAME = "Atlas";

export const SYNTHETIC_CORPUS: SourceDocument[] = [
  {
    id: "analytics-funnel-0804",
    kind: "Analytics",
    title: "Card Match funnel — week ending 4 August",
    author: "Product Analytics",
    location: "Amplitude weekly readout",
    date: "2026-08-04",
    summary:
      "Completion fell to 18.4%; the largest controllable loss is between eligibility and consent.",
    content:
      "Of 12,480 visitors, 5,116 started Card Match and 2,302 reached eligibility. Only 1,147 opened the consent step and 942 completed the journey, a completion rate of 18.4% from start. The sharpest fall is eligibility to consent. Users who reach results convert to an application at 27%, so results quality is not the primary constraint. Median completion time is 4 minutes 38 seconds against the 3-minute expectation used in acquisition copy.",
    tags: [
      "card match",
      "funnel",
      "drop-off",
      "abandonment",
      "completion",
      "consent",
      "results",
    ],
  },
  {
    id: "analytics-device-0805",
    kind: "Analytics",
    title: "Mobile browser breakdown",
    author: "Product Analytics",
    location: "Journey diagnostics",
    date: "2026-08-05",
    summary:
      "Mobile Safari underperforms Android Chrome by 9.7 points, with repeat taps on the sticky continue button.",
    content:
      "Mobile accounts for 71% of starts. Safari completion is 13.1% versus 22.8% on Android Chrome. Session replay sampling shows the sticky Continue button is partly covered by the browser toolbar after the keyboard closes. Seven percent of Safari sessions contain three or more taps on the button without navigation. Desktop completion is stable at 26.2%.",
    tags: [
      "mobile",
      "safari",
      "browser",
      "bug",
      "continue button",
      "completion",
      "engineering",
    ],
  },
  {
    id: "interview-u01-0801",
    kind: "Customer interview",
    title: "Interview U01 — first credit-card comparison",
    author: "Customer Research",
    location: "Research repository",
    date: "2026-08-01",
    summary:
      "The participant stopped at consent because they believed continuing might trigger a credit check.",
    content:
      "U01 wanted a card for travel rewards and had never used a comparison service. At consent they said, 'I don't know if pressing this affects my score.' They searched the page for a plain answer, opened the privacy link, then abandoned. They understood why income mattered but not why employer status was required before seeing any indicative matches.",
    tags: [
      "trust",
      "credit check",
      "consent",
      "plain language",
      "first-time user",
      "income",
    ],
  },
  {
    id: "interview-u02-0802",
    kind: "Customer interview",
    title: "Interview U02 — returning comparison user",
    author: "Customer Research",
    location: "Research repository",
    date: "2026-08-02",
    summary:
      "The participant expected instant matches and felt the journey asked for personal details too early.",
    content:
      "U02 entered from an ad promising 'See your best matches in minutes'. After the third screen they asked how many steps remained. They were willing to share income once the product explained how it improved the recommendation, but the rationale arrived below the input and was not noticed. They described the experience as 'a loan application before I know what is available'.",
    tags: [
      "expectation",
      "acquisition",
      "instant matches",
      "personal details",
      "progress",
      "trust",
    ],
  },
  {
    id: "interview-u03-0803",
    kind: "Customer interview",
    title: "Interview U03 — balance-transfer shopper",
    author: "Customer Research",
    location: "Research repository",
    date: "2026-08-03",
    summary:
      "Industry language made product differences difficult to evaluate.",
    content:
      "U03 was comparing balance-transfer offers and could not explain the difference between the promotional period and revert rate. They selected the first familiar bank rather than the strongest fit. When shown a plain-language card explaining total cost over 18 months, they changed their preference and said that was the first time the trade-off felt clear.",
    tags: [
      "jargon",
      "balance transfer",
      "product comparison",
      "plain language",
      "decision",
      "trust",
    ],
  },
  {
    id: "support-digest-0804",
    kind: "Support",
    title: "Card Match contact reasons — weekly digest",
    author: "Customer Support",
    location: "Support intelligence",
    date: "2026-08-04",
    summary:
      "Questions about credit-score impact and journey progress make up 44% of Card Match contacts.",
    content:
      "From 86 tagged contacts: 24 asked whether comparison affects their credit score, 14 asked how many steps remained, 12 reported an unresponsive mobile button, 11 could not interpret product terms, and 9 asked why an advisor repeated information already entered. The remaining 16 covered eligibility, missing providers, and account access.",
    tags: [
      "support",
      "credit score",
      "progress",
      "mobile",
      "advisor",
      "repeat information",
    ],
  },
  {
    id: "support-safari-0805",
    kind: "Support",
    title: "Escalation cluster — Continue button on iPhone",
    author: "Customer Support",
    location: "#card-match-escalations",
    date: "2026-08-05",
    summary:
      "Twelve contacts describe the same iPhone failure, concentrated after income entry.",
    content:
      "Support linked 12 conversations from the past seven days where an iPhone user could not continue after dismissing the numeric keyboard on the income screen. Refreshing sometimes resolves the issue but clears entered data. Three customers retried on desktop; the remainder abandoned or asked for an advisor.",
    tags: [
      "iphone",
      "safari",
      "continue button",
      "income",
      "bug",
      "abandonment",
    ],
  },
  {
    id: "growth-message-match-0806",
    kind: "Product",
    title: "Acquisition message-match review",
    author: "Growth",
    location: "#growth-card-match",
    date: "2026-08-06",
    summary:
      "The highest-volume campaign promises instant results while the current journey requires 11 inputs.",
    content:
      "The 'instant matches' campaign supplies 38% of paid starts and has the lowest completion rate at 12.6%. Landing-page copy says 'answer a few quick questions'; the journey currently contains 11 inputs across six screens. The lower-volume 'compare with confidence' campaign completes at 21.9% despite a higher cost per start. Growth recommends aligning the promise before increasing spend.",
    tags: [
      "growth",
      "paid acquisition",
      "instant matches",
      "message match",
      "completion",
      "expectation",
    ],
  },
  {
    id: "experiment-short-form-0729",
    kind: "Product",
    title: "Experiment CM-17 — defer employer details",
    author: "Product Experimentation",
    location: "Experiment archive",
    date: "2026-07-29",
    summary:
      "Deferring two employer fields increased completion by 10.8% without reducing qualified applications.",
    content:
      "Variant B moved employer name and time-in-role until after indicative results. Over 6,200 starts, end-to-end completion increased from 17.6% to 19.5% (+10.8% relative, 95% confidence). Results-to-application conversion was unchanged within the test threshold, and advisor qualification rate moved from 62.1% to 61.8%. The experiment was paused after two advisors raised concerns about missing context in handoff notes.",
    tags: [
      "experiment",
      "short form",
      "employer",
      "completion",
      "qualified applications",
      "advisor handoff",
    ],
  },
  {
    id: "compliance-consent-0805",
    kind: "Leadership",
    title: "Consent copy review",
    author: "Risk & Compliance",
    location: "Review note RC-42",
    date: "2026-08-05",
    summary:
      "Required disclosures can be presented progressively; the existing legal paragraph is not mandatory.",
    content:
      "Compliance confirmed the journey must state the purpose of data collection, identify the relevant privacy terms, and obtain affirmative consent. The exact current paragraph is not prescribed. A two-layer treatment is acceptable: a plain-language explanation beside the action, with full detail available on demand. Copy must not imply guaranteed eligibility or that no provider will conduct a later credit check.",
    tags: [
      "compliance",
      "consent",
      "plain language",
      "progressive disclosure",
      "credit check",
      "legal",
    ],
  },
  {
    id: "engineering-safari-0806",
    kind: "Engineering",
    title: "ATLAS-284 — sticky CTA obscured after keyboard close",
    author: "Engineering",
    location: "Engineering tracker",
    date: "2026-08-06",
    summary:
      "The Safari defect is reproduced, isolated and estimated at one engineering day plus regression testing.",
    content:
      "Reproduced on iOS 18.5 and 18.6 when the numeric keyboard closes after editing annual income. The viewport-height listener does not recalculate the safe-area inset, leaving the CTA beneath the browser chrome. Proposed fix removes the custom height calculation and uses dynamic viewport units with a safe-area fallback. Estimate: one day implementation, half-day cross-browser QA. No backend dependency.",
    tags: [
      "engineering",
      "safari",
      "ios",
      "bug",
      "continue button",
      "estimate",
      "mobile",
    ],
  },
  {
    id: "research-readout-0806",
    kind: "Product",
    title: "Card Match research synthesis",
    author: "Product & Research",
    location: "Weekly product review",
    date: "2026-08-06",
    summary:
      "Three recurring barriers are unclear consequence, hidden progress and a mismatch between promise and effort.",
    content:
      "Across eight moderated sessions, the team observed three repeated barriers: users could not tell whether consent initiated a credit check; users did not know how much work remained; and acquisition copy set an expectation of near-instant results. Six of eight participants completed when the facilitator explained those points verbally. Product recommends testing comprehension before redesigning the entire flow.",
    tags: [
      "research",
      "synthesis",
      "trust",
      "progress",
      "expectation",
      "comprehension",
    ],
  },
  {
    id: "leadership-priorities-0807",
    kind: "Leadership",
    title: "Weekly decision log — Card Match",
    author: "Product Leadership",
    location: "Leadership notes",
    date: "2026-08-07",
    summary:
      "Leadership agreed to fix the verified mobile defect and test consent comprehension before a full redesign.",
    content:
      "Decision: ship the Safari CTA fix behind monitoring, then run a consent treatment that explains what happens now versus later. Do not begin the proposed six-week visual redesign until these two assumptions are read. Growth will align the highest-volume ad with the actual journey. Owner: Card Match squad. Target read: after 1,000 eligible users or seven days, whichever comes later.",
    tags: [
      "decision",
      "priority",
      "safari",
      "consent",
      "experiment",
      "growth",
      "read date",
    ],
  },
  {
    id: "advisor-handoff-audit-0803",
    kind: "Advisor",
    title: "Advisor handoff audit — 40 recent cases",
    author: "Advisor Operations",
    location: "Service quality review",
    date: "2026-08-03",
    summary:
      "Advisors repeat at least three questions in 72% of calls because intent and trade-offs are absent from the handoff.",
    content:
      "Review of 40 recorded handoffs found that 29 calls repeated income, preferred benefit, and current-card questions already answered online. The advisor view shows raw field values but not why the user is comparing, which trade-offs they considered, or where they hesitated. Median call handling time was 18 minutes; calls with a manually written context note averaged 12 minutes.",
    tags: [
      "advisor",
      "handoff",
      "repeat questions",
      "context",
      "call time",
      "quality",
    ],
  },
  {
    id: "advisor-capacity-0805",
    kind: "Advisor",
    title: "Advisor queue and capacity",
    author: "Advisor Operations",
    location: "Daily operations dashboard",
    date: "2026-08-05",
    summary:
      "Median first-contact time is 31 hours and demand is concentrated after paid campaign peaks.",
    content:
      "The current median time from handoff request to first advisor contact is 31 hours, with the 75th percentile at 53 hours. Forty-two percent of requests arrive between Sunday evening and Monday noon. Abandonment before contact is 23%. The team can absorb roughly 15% more qualified volume without schedule changes, but not the forecast 35% increase from the next campaign.",
    tags: [
      "advisor",
      "capacity",
      "queue",
      "wait time",
      "abandonment",
      "scale",
    ],
  },
  {
    id: "analytics-lead-quality-0806",
    kind: "Analytics",
    title: "Qualified lead and application quality",
    author: "Commercial Analytics",
    location: "Commercial scorecard",
    date: "2026-08-06",
    summary:
      "Shorter journeys have not yet reduced lead quality, but advisor context remains a guardrail.",
    content:
      "Qualified-lead rate has remained between 61% and 64% across the past six weeks. CM-17's deferred employer fields did not create a measurable decline. However, advisors rated context quality 3.1/5 for the variant versus 3.8/5 for control because the current handoff view did not explain that the fields would be collected later. Application approval data is too immature for a conclusive downstream read.",
    tags: [
      "lead quality",
      "qualified",
      "application",
      "short form",
      "advisor context",
      "guardrail",
    ],
  },
  {
    id: "product-handoff-packet-0807",
    kind: "Product",
    title: "Handoff context packet — prototype brief",
    author: "Service Product",
    location: "Prototype PRD",
    date: "2026-08-07",
    summary:
      "A compact intent summary could reduce repetition without adding fields to the customer journey.",
    content:
      "The prototype derives a five-line advisor brief from existing answers: customer goal, preferred benefit, current product, key constraint, and confidence concern. No new customer inputs are required. Open questions are whether advisors trust generated summaries and whether the brief changes handling time. Proposed pilot: 20 handoffs, side-by-side with raw fields, advisor correction captured before each call.",
    tags: [
      "advisor",
      "handoff",
      "prototype",
      "summary",
      "ai",
      "pilot",
      "call time",
    ],
  },
  {
    id: "experiment-consent-plan-0807",
    kind: "Product",
    title: "CM-19 — consent comprehension test plan",
    author: "Product Experimentation",
    location: "Experiment backlog",
    date: "2026-08-07",
    summary:
      "The proposed test isolates comprehension with a plain-language explanation and explicit progress cue.",
    content:
      "Variant: replace the legal-first consent block with 'Checking your matches will not itself affect your credit score. A provider may run a credit check if you later apply.' Show 'About 90 seconds left' above the action and retain full terms in an expandable section. Primary metric: eligibility-to-consent continuation. Guardrails: qualified-lead rate, support contacts about credit checks, and compliance complaints. Read after 1,000 eligible users and at least seven days.",
    tags: [
      "experiment",
      "consent",
      "credit score",
      "progress",
      "plain language",
      "metric",
      "guardrail",
    ],
  },
  {
    id: "product-results-language-0731",
    kind: "Product",
    title: "Results-card language usability check",
    author: "Content Design",
    location: "Prototype test",
    date: "2026-07-31",
    summary:
      "Plain-language cost framing helped five of six participants identify the better-fit card.",
    content:
      "Six participants compared the same three balance-transfer cards. In the current design, two selected primarily by brand and only one correctly explained the revert rate. With a prototype showing estimated total cost, promotional period, and the main trade-off in one sentence, five selected the lower-cost fit and could explain why. The test did not evaluate live provider data or application conversion.",
    tags: [
      "results",
      "content design",
      "plain language",
      "balance transfer",
      "usability",
      "decision",
    ],
  },
];

export const PROMPT_OPTIONS = [
  "Why are users abandoning the Card Match journey?",
  "What should the team test next?",
  "Is the advisor handoff ready to scale?",
];
