export type SourceKind =
  | "Analytics"
  | "Customer interview"
  | "Support"
  | "Product"
  | "Engineering"
  | "Advisor"
  | "Leadership";

export type SourceDocument = {
  id: string;
  kind: SourceKind;
  title: string;
  author: string;
  location: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
};

export type Finding = {
  title: string;
  detail: string;
  sourceIds: string[];
};

export type Experiment = {
  change: string;
  primaryMetric: string;
  guardrail: string;
  readWhen: string;
};

export type EvidenceDocument = Pick<
  SourceDocument,
  "id" | "kind" | "title" | "author" | "location" | "date" | "summary" | "content"
>;

export type AnswerPayload = {
  query: string;
  headline: string;
  summary: string;
  findings: Finding[];
  recommendation: string;
  experiment: Experiment;
  confidence: "High" | "Medium" | "Low";
  evidence: EvidenceDocument[];
  mode: "live" | "guided";
  generatedAt: string;
};
