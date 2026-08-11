import { SYNTHETIC_CORPUS } from "@/data/corpus";
import type { SourceDocument } from "@/types";

const STOP_WORDS = new Set([
  "a",
  "about",
  "and",
  "are",
  "be",
  "for",
  "from",
  "how",
  "in",
  "is",
  "it",
  "of",
  "on",
  "should",
  "the",
  "to",
  "what",
  "why",
  "with",
]);

const EXPANSIONS: Record<string, string[]> = {
  abandon: ["drop-off", "completion", "exit", "funnel", "friction"],
  abandoning: ["drop-off", "completion", "exit", "funnel", "friction"],
  dropoff: ["drop-off", "abandonment", "completion", "funnel"],
  users: ["customer", "participant", "visitor"],
  journey: ["funnel", "flow", "card match"],
  test: ["experiment", "variant", "pilot", "metric", "read"],
  next: ["priority", "recommendation", "experiment", "decision"],
  advisor: ["handoff", "call", "queue", "context"],
  scale: ["capacity", "volume", "queue", "quality"],
  ready: ["capacity", "quality", "risk", "guardrail"],
  trust: ["consent", "credit check", "confidence", "comprehension"],
  mobile: ["safari", "iphone", "browser", "continue button"],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function queryTerms(query: string) {
  const baseTerms = normalize(query)
    .split(" ")
    .filter((term) => term.length > 1 && !STOP_WORDS.has(term));

  const expanded = baseTerms.flatMap((term) => EXPANSIONS[term] ?? []);
  return [...new Set([...baseTerms, ...expanded].map(normalize))];
}

function occurrences(haystack: string, needle: string) {
  if (!needle || !haystack.includes(needle)) return 0;
  return haystack.split(needle).length - 1;
}

function scoreDocument(document: SourceDocument, terms: string[]) {
  const title = normalize(document.title);
  const tags = normalize(document.tags.join(" "));
  const summary = normalize(document.summary);
  const content = normalize(document.content);

  const lexicalScore = terms.reduce((score, term) => {
    return (
      score +
      occurrences(title, term) * 7 +
      occurrences(tags, term) * 6 +
      occurrences(summary, term) * 4 +
      Math.min(occurrences(content, term), 3) * 1.5
    );
  }, 0);

  const recency = Math.max(
    0,
    1.5 -
      (Date.parse("2026-08-11") - Date.parse(document.date)) /
        (1000 * 60 * 60 * 24 * 30),
  );

  return lexicalScore + recency;
}

export function rankDocuments(query: string, limit = 7) {
  const terms = queryTerms(query);

  return SYNTHETIC_CORPUS.map((document) => ({
    document,
    score: scoreDocument(document, terms),
  }))
    .sort(
      (a, b) =>
        b.score - a.score ||
        Date.parse(b.document.date) - Date.parse(a.document.date),
    )
    .slice(0, limit)
    .map(({ document }) => document);
}

export function documentsById(ids: string[]) {
  const wanted = new Set(ids);
  return SYNTHETIC_CORPUS.filter((document) => wanted.has(document.id));
}
