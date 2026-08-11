"use client";

import {
  ArrowUp,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Database,
  FileText,
  FlaskConical,
  Lightbulb,
  LoaderCircle,
  LockKeyhole,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
  TicketCheck,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

import type {
  AnswerPayload,
  EvidenceDocument,
  SourceKind,
} from "@/types";

type DemoWorkspaceProps = {
  initialAnswer: AnswerPayload;
  promptOptions: string[];
  liveInferenceEnabled: boolean;
};

const loadingStages = [
  "Searching 19 synthetic records",
  "Checking corroborating signals",
  "Separating evidence from inference",
  "Designing the smallest useful test",
];

const sourceIcons: Record<SourceKind, typeof BarChart3> = {
  Analytics: BarChart3,
  "Customer interview": MessageSquareText,
  Support: MessageSquareText,
  Product: FileText,
  Engineering: TicketCheck,
  Advisor: FileText,
  Leadership: ShieldCheck,
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
  }).format(new Date(`${date}T00:00:00`));
}

function SourceReference({
  sourceId,
  evidence,
  onSelect,
}: {
  sourceId: string;
  evidence: EvidenceDocument[];
  onSelect: (id: string) => void;
}) {
  const index = evidence.findIndex((item) => item.id === sourceId);
  if (index < 0) return null;

  return (
    <button
      className="source-reference"
      type="button"
      aria-label={`Open source ${index + 1}: ${evidence[index].title}`}
      onClick={() => onSelect(sourceId)}
    >
      {index + 1}
    </button>
  );
}

function EvidenceCard({
  evidence,
  index,
  isActive,
  onSelect,
}: {
  evidence: EvidenceDocument;
  index: number;
  isActive: boolean;
  onSelect: (id: string) => void;
}) {
  const Icon = sourceIcons[evidence.kind];

  return (
    <button
      className={`evidence-card${isActive ? " is-active" : ""}`}
      type="button"
      onClick={() => onSelect(evidence.id)}
      aria-expanded={isActive}
    >
      <span className="evidence-index">{index + 1}</span>
      <span className="evidence-card-copy">
        <span className="evidence-meta">
          <Icon size={13} aria-hidden="true" />
          {evidence.kind} · {formatDate(evidence.date)}
        </span>
        <span className="evidence-title">{evidence.title}</span>
        {isActive && (
          <>
            <span className="evidence-location">{evidence.location}</span>
            <span className="evidence-content">{evidence.content}</span>
          </>
        )}
      </span>
      <ChevronRight
        className="evidence-chevron"
        size={15}
        aria-hidden="true"
      />
    </button>
  );
}

export function DemoWorkspace({
  initialAnswer,
  promptOptions,
  liveInferenceEnabled,
}: DemoWorkspaceProps) {
  const [query, setQuery] = useState(initialAnswer.query);
  const [answer, setAnswer] = useState(initialAnswer);
  const [activeEvidenceId, setActiveEvidenceId] = useState(
    initialAnswer.evidence[0]?.id ?? "",
  );
  const [view, setView] = useState<"answer" | "brief">("answer");
  const [hasQueried, setHasQueried] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoading) return;

    const interval = window.setInterval(() => {
      setLoadingStage((current) =>
        Math.min(current + 1, loadingStages.length - 1),
      );
    }, 650);

    return () => window.clearInterval(interval);
  }, [isLoading]);

  const activeEvidence = useMemo(
    () =>
      answer.evidence.find((item) => item.id === activeEvidenceId) ??
      answer.evidence[0],
    [activeEvidenceId, answer.evidence],
  );

  const sourceKinds = useMemo(
    () => [...new Set(answer.evidence.map((item) => item.kind))],
    [answer.evidence],
  );

  async function ask(nextQuery: string) {
    const cleanQuery = nextQuery.trim();
    if (cleanQuery.length < 4 || isLoading) return;

    setQuery(cleanQuery);
    setLoadingStage(0);
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: cleanQuery }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "The workspace could not answer.");
      }

      const nextAnswer = payload as AnswerPayload;
      setAnswer(nextAnswer);
      setHasQueried(true);
      setActiveEvidenceId(nextAnswer.evidence[0]?.id ?? "");
      setView("answer");
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "The workspace could not answer. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(query);
  }

  function selectEvidence(id: string) {
    setActiveEvidenceId(id);
  }

  return (
    <section className="demo-section" id="demo" aria-labelledby="demo-heading">
      <div className="section-intro">
        <div>
          <p className="eyebrow">Interactive product sandbox</p>
          <h2 id="demo-heading">Start with a question, not a dashboard.</h2>
        </div>
        <p>
          Decision Desk searches a fictional consumer-finance workspace,
          reconciles signals and shows exactly what supports the answer.
        </p>
      </div>

      <div className="workspace-shell">
        <header className="workspace-header">
          <div className="workspace-brand">
            <span className="workspace-mark" aria-hidden="true">
              D
            </span>
            <div>
              <span className="workspace-name">Decision Desk</span>
              <span className="workspace-context">
                Atlas workspace · synthetic data
              </span>
            </div>
          </div>
          <div className="workspace-status">
            <span className="status-dot" aria-hidden="true" />
            7 sources connected
          </div>
        </header>

        <div className="workspace-grid">
          <aside className="source-rail" aria-label="Connected data sources">
            <div className="rail-heading">
              <Database size={14} aria-hidden="true" />
              Sources
            </div>
            <ul className="source-list">
              <li>
                <MessageSquareText size={15} aria-hidden="true" />
                <span>Research</span>
                <span>3</span>
              </li>
              <li>
                <BarChart3 size={15} aria-hidden="true" />
                <span>Analytics</span>
                <span>3</span>
              </li>
              <li>
                <MessageSquareText size={15} aria-hidden="true" />
                <span>Support</span>
                <span>2</span>
              </li>
              <li>
                <TicketCheck size={15} aria-hidden="true" />
                <span>Engineering</span>
                <span>1</span>
              </li>
              <li>
                <FileText size={15} aria-hidden="true" />
                <span>Product</span>
                <span>6</span>
              </li>
              <li>
                <ShieldCheck size={15} aria-hidden="true" />
                <span>Leadership</span>
                <span>2</span>
              </li>
              <li>
                <FileText size={15} aria-hidden="true" />
                <span>Advisors</span>
                <span>2</span>
              </li>
            </ul>
            <div className="rail-freshness">
              <CheckCircle2 size={14} aria-hidden="true" />
              <div>
                <span>Corpus checked</span>
                <small>11 Aug · 09:40</small>
              </div>
            </div>
          </aside>

          <main className="answer-panel" aria-live="polite">
            <div className="answer-toolbar">
              <div className="view-toggle" aria-label="Answer view">
                <button
                  className={view === "answer" ? "is-selected" : ""}
                  type="button"
                  onClick={() => setView("answer")}
                >
                  Evidence answer
                </button>
                <button
                  className={view === "brief" ? "is-selected" : ""}
                  type="button"
                  onClick={() => setView("brief")}
                >
                  Decision brief
                </button>
              </div>
              <span
                className={`mode-badge ${
                  answer.mode === "live" ||
                  (liveInferenceEnabled && !hasQueried)
                    ? "live"
                    : "guided"
                }`}
                title={
                  answer.mode === "live"
                    ? "Generated live from the retrieved evidence"
                    : liveInferenceEnabled && !hasQueried
                      ? "Ask any question to generate a live answer"
                      : liveInferenceEnabled
                        ? "The live model was unavailable, so the guided fallback was used"
                        : "Curated fallback used when no model key is configured"
                }
              >
                <Sparkles size={12} aria-hidden="true" />
                {answer.mode === "live"
                  ? "Live synthesis"
                  : liveInferenceEnabled && !hasQueried
                    ? "Live inference ready"
                    : liveInferenceEnabled
                      ? "Guided fallback"
                      : "Guided demo"}
              </span>
            </div>

            {isLoading ? (
              <div className="loading-state">
                <div className="loading-orbit" aria-hidden="true">
                  <LoaderCircle size={28} />
                </div>
                <p>Building an evidence-backed answer</p>
                <span>{loadingStages[loadingStage]}</span>
                <div className="loading-progress" aria-hidden="true">
                  <span
                    style={{
                      width: `${((loadingStage + 1) / loadingStages.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ) : view === "answer" ? (
              <article className="answer-content">
                <div className="question-label">
                  <Search size={13} aria-hidden="true" />
                  Question
                </div>
                <p className="asked-question">{answer.query}</p>
                <div className="answer-title-row">
                  <h3>{answer.headline}</h3>
                  <span className="confidence-pill">
                    {answer.confidence} confidence
                  </span>
                </div>
                <p className="answer-summary">{answer.summary}</p>

                <div className="finding-list">
                  {answer.findings.map((finding, index) => (
                    <div className="finding" key={finding.title}>
                      <span className="finding-number">0{index + 1}</span>
                      <div>
                        <h4>{finding.title}</h4>
                        <p>
                          {finding.detail}{" "}
                          <span className="source-reference-group">
                            {finding.sourceIds.map((sourceId) => (
                              <SourceReference
                                key={sourceId}
                                sourceId={sourceId}
                                evidence={answer.evidence}
                                onSelect={selectEvidence}
                              />
                            ))}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="recommendation-card">
                  <Lightbulb size={17} aria-hidden="true" />
                  <div>
                    <span>Recommended decision</span>
                    <p>{answer.recommendation}</p>
                  </div>
                </div>
              </article>
            ) : (
              <article className="decision-brief">
                <div className="brief-heading">
                  <span>Decision brief · generated from current evidence</span>
                  <h3>{answer.headline}</h3>
                </div>
                <div className="brief-decision">
                  <span>Decision</span>
                  <p>{answer.recommendation}</p>
                </div>
                <div className="brief-grid">
                  <div>
                    <span className="brief-label">Why now</span>
                    <p>{answer.summary}</p>
                  </div>
                  <div>
                    <span className="brief-label">Evidence coverage</span>
                    <ul>
                      {sourceKinds.map((kind) => (
                        <li key={kind}>
                          <CheckCircle2 size={13} aria-hidden="true" />
                          {kind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="experiment-card">
                  <div className="experiment-heading">
                    <FlaskConical size={17} aria-hidden="true" />
                    Smallest useful test
                  </div>
                  <div className="experiment-row">
                    <span>Change</span>
                    <p>{answer.experiment.change}</p>
                  </div>
                  <div className="experiment-row">
                    <span>Primary metric</span>
                    <p>{answer.experiment.primaryMetric}</p>
                  </div>
                  <div className="experiment-row">
                    <span>Guardrail</span>
                    <p>{answer.experiment.guardrail}</p>
                  </div>
                  <div className="experiment-row">
                    <span>Read when</span>
                    <p>{answer.experiment.readWhen}</p>
                  </div>
                </div>
              </article>
            )}

            <div className="query-dock">
              <div className="prompt-options" aria-label="Suggested questions">
                {promptOptions.map((prompt) => (
                  <button
                    type="button"
                    key={prompt}
                    onClick={() => void ask(prompt)}
                    disabled={isLoading}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <form onSubmit={submit}>
                <Search size={17} aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  maxLength={240}
                  aria-label="Ask the Atlas workspace"
                  placeholder="Ask a question about the Atlas workspace…"
                />
                <button
                  type="submit"
                  aria-label="Ask question"
                  disabled={isLoading || query.trim().length < 4}
                >
                  <ArrowUp size={17} aria-hidden="true" />
                </button>
              </form>
              {error && <p className="query-error">{error}</p>}
              <p className="query-note">
                <LockKeyhole size={11} aria-hidden="true" />
                Fictional workspace. Synthetic records. No company or customer
                data.
              </p>
            </div>
          </main>

          <aside className="evidence-panel" aria-label="Supporting evidence">
            <div className="evidence-panel-header">
              <div>
                <span>Evidence</span>
                <small>{answer.evidence.length} sources in this answer</small>
              </div>
              <span className="evidence-health">
                <span aria-hidden="true" />
                current
              </span>
            </div>

            {activeEvidence && (
              <div className="active-source-summary">
                <Clock3 size={13} aria-hidden="true" />
                Latest selected source: {formatDate(activeEvidence.date)}
              </div>
            )}

            <div className="evidence-list">
              {answer.evidence.map((evidence, index) => (
                <EvidenceCard
                  key={evidence.id}
                  evidence={evidence}
                  index={index}
                  isActive={evidence.id === activeEvidence?.id}
                  onSelect={selectEvidence}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
