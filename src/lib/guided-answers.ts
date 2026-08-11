import { documentsById, rankDocuments } from "@/lib/retrieval";
import type { AnswerPayload, SourceDocument } from "@/types";

function evidenceFor(ids: string[]) {
  return documentsById(ids).map(
    ({ id, kind, title, author, location, date, summary, content }) => ({
      id,
      kind,
      title,
      author,
      location,
      date,
      summary,
      content,
    }),
  );
}

function abandonmentAnswer(query: string): AnswerPayload {
  const evidenceIds = [
    "analytics-funnel-0804",
    "interview-u01-0801",
    "growth-message-match-0806",
    "analytics-device-0805",
    "engineering-safari-0806",
    "compliance-consent-0805",
    "research-readout-0806",
  ];

  return {
    query,
    headline: "The journey is losing trust before it loses intent.",
    summary:
      "The evidence points to three compounding causes: users fear an unclear consequence at consent, acquisition copy understates the effort required, and a verified Safari defect blocks a meaningful share of mobile users. Results quality is comparatively healthy once people finish.",
    findings: [
      {
        title: "Consent creates uncertainty at the worst moment",
        detail:
          "The largest funnel loss occurs between eligibility and consent. Research and support both show that users cannot tell whether continuing will affect their credit score. Compliance has confirmed the required disclosure can be expressed more clearly.",
        sourceIds: [
          "analytics-funnel-0804",
          "interview-u01-0801",
          "compliance-consent-0805",
        ],
      },
      {
        title: "The promise does not match the work",
        detail:
          "The highest-volume campaign promises instant matches, while the live journey asks for 11 inputs and takes a median 4 minutes 38 seconds. That campaign completes materially below the better-aligned confidence message.",
        sourceIds: [
          "growth-message-match-0806",
          "analytics-funnel-0804",
          "research-readout-0806",
        ],
      },
      {
        title: "A contained mobile defect is amplifying abandonment",
        detail:
          "Safari completion trails Android Chrome by 9.7 points. The sticky CTA issue is reproduced, has no backend dependency and is estimated at one implementation day plus regression testing.",
        sourceIds: [
          "analytics-device-0805",
          "engineering-safari-0806",
        ],
      },
    ],
    recommendation:
      "Ship the contained Safari fix first, then test a plain-language consent treatment with an explicit progress cue. Align the paid-ad promise in parallel. Do not fund a full redesign until those two causal assumptions are read.",
    experiment: {
      change:
        "Explain what checking matches does now versus what may happen if the user later applies, add “about 90 seconds left”, and retain the full terms on demand.",
      primaryMetric:
        "Eligibility-to-consent continuation, with an initial target of +8 percentage points.",
      guardrail:
        "Qualified-lead rate, credit-check support contacts, application starts and compliance complaints.",
      readWhen:
        "After 1,000 eligible users and at least seven complete days.",
    },
    confidence: "High",
    evidence: evidenceFor(evidenceIds),
    mode: "guided",
    generatedAt: new Date().toISOString(),
  };
}

function nextTestAnswer(query: string): AnswerPayload {
  const evidenceIds = [
    "engineering-safari-0806",
    "analytics-device-0805",
    "experiment-consent-plan-0807",
    "compliance-consent-0805",
    "experiment-short-form-0729",
    "leadership-priorities-0807",
    "growth-message-match-0806",
  ];

  return {
    query,
    headline: "Fix the known defect; test the uncertain behaviour.",
    summary:
      "The team should not bundle every idea into a redesign. The Safari failure is already proven and cheap to correct. The riskiest remaining assumption is whether clearer consent and progress language restores trust without reducing lead quality.",
    findings: [
      {
        title: "The mobile fix is delivery work, not an experiment",
        detail:
          "The CTA defect is reproduced, isolated and concentrated in the weakest-performing browser segment. Ship it behind monitoring and verify that repeat taps and Safari completion recover.",
        sourceIds: ["engineering-safari-0806", "analytics-device-0805"],
      },
      {
        title: "Consent comprehension is the next clean test",
        detail:
          "Research identifies uncertainty about credit-score impact, while Compliance allows progressive disclosure. CM-19 already defines a focused variant, primary metric and guardrails.",
        sourceIds: [
          "experiment-consent-plan-0807",
          "compliance-consent-0805",
        ],
      },
      {
        title: "Shortening can work, but the handoff needs protection",
        detail:
          "Deferring employer details improved completion without reducing qualification. Advisor context weakened, so future form reductions should improve the handoff packet rather than restore customer friction.",
        sourceIds: ["experiment-short-form-0729"],
      },
    ],
    recommendation:
      "Sequence the work: ship and monitor the Safari fix, launch CM-19 as a single-variable comprehension test, and update the acquisition message now. Hold the visual redesign until the read.",
    experiment: {
      change:
        "Replace legal-first consent copy with a two-layer explanation and make remaining effort visible.",
      primaryMetric:
        "Eligibility-to-consent continuation; evaluate the full completion rate as a secondary metric.",
      guardrail:
        "Qualified-lead rate, support contacts, compliance complaints and results-to-application conversion.",
      readWhen:
        "After 1,000 eligible users and seven days; stop early only for a compliance or conversion guardrail breach.",
    },
    confidence: "High",
    evidence: evidenceFor(evidenceIds),
    mode: "guided",
    generatedAt: new Date().toISOString(),
  };
}

function advisorAnswer(query: string): AnswerPayload {
  const evidenceIds = [
    "advisor-handoff-audit-0803",
    "advisor-capacity-0805",
    "analytics-lead-quality-0806",
    "product-handoff-packet-0807",
    "experiment-short-form-0729",
  ];

  return {
    query,
    headline: "The handoff is useful, but it is not ready to scale.",
    summary:
      "Current handoffs create avoidable repetition and then enter a queue with a 31-hour median wait. The team has room for roughly 15% more qualified demand, well below the next campaign forecast. A context-packet pilot should come before broader rollout.",
    findings: [
      {
        title: "The customer has to tell the story twice",
        detail:
          "Advisors repeat at least three already-answered questions in 72% of audited calls. Raw fields arrive, but the user’s goal, trade-offs and hesitation do not.",
        sourceIds: ["advisor-handoff-audit-0803"],
      },
      {
        title: "The operating queue is already a constraint",
        detail:
          "Median first contact is 31 hours and nearly one quarter abandon before contact. Available capacity supports about 15% growth, not the 35% campaign forecast.",
        sourceIds: ["advisor-capacity-0805"],
      },
      {
        title: "A smaller intervention can test the core assumption",
        detail:
          "A generated five-line context packet uses existing answers and adds no journey fields. Lead quality is currently stable; trust in the summary and call-time reduction are the unanswered questions.",
        sourceIds: [
          "product-handoff-packet-0807",
          "analytics-lead-quality-0806",
        ],
      },
    ],
    recommendation:
      "Do not scale campaign volume into the current service. Run the 20-case context-packet pilot, capture advisor corrections, and pair it with a capacity plan for peak periods.",
    experiment: {
      change:
        "Show advisors an AI-generated intent brief beside the original fields, requiring correction before the call.",
      primaryMetric:
        "Median call-handling time and number of repeated questions per call.",
      guardrail:
        "Advisor trust score, correction rate, qualified-lead rate and customer complaint rate.",
      readWhen:
        "After 20 completed handoffs across at least three advisors.",
    },
    confidence: "High",
    evidence: evidenceFor(evidenceIds),
    mode: "guided",
    generatedAt: new Date().toISOString(),
  };
}

function genericAnswer(query: string, ranked: SourceDocument[]): AnswerPayload {
  const top = ranked.slice(0, 5);
  const [first, second, third] = top;

  return {
    query,
    headline: first?.title ?? "No strong signal found",
    summary:
      first?.summary ??
      "The synthetic workspace does not contain enough evidence to answer that question.",
    findings: [first, second, third]
      .filter((document): document is SourceDocument => Boolean(document))
      .map((document) => ({
        title: document.title,
        detail: document.summary,
        sourceIds: [document.id],
      })),
    recommendation:
      "Use the cited evidence to frame a narrower question, identify the riskiest unresolved assumption and define what would change the decision.",
    experiment: {
      change: "Test the narrowest unresolved assumption surfaced by the evidence.",
      primaryMetric: "Choose one behavioural outcome before launching the test.",
      guardrail: "Monitor quality, trust and unintended service demand.",
      readWhen: "Set a sample threshold and minimum full-week read before launch.",
    },
    confidence: top.length >= 4 ? "Medium" : "Low",
    evidence: evidenceFor(top.map((document) => document.id)),
    mode: "guided",
    generatedAt: new Date().toISOString(),
  };
}

export function guidedAnswer(query: string) {
  const normalized = query.toLowerCase();

  if (/\b(advisor|handoff|call|queue|scale|capacity)\b/.test(normalized)) {
    return advisorAnswer(query);
  }

  if (/\b(test|experiment|next|priority|try|ship)\b/.test(normalized)) {
    return nextTestAnswer(query);
  }

  if (
    /\b(abandon|drop|completion|consent|trust|journey|card match|mobile|safari)\b/.test(
      normalized,
    )
  ) {
    return abandonmentAnswer(query);
  }

  return genericAnswer(query, rankDocuments(query));
}
