import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Database,
  Eye,
  FileText,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { DemoWorkspace } from "@/components/demo-workspace";
import { PROMPT_OPTIONS } from "@/data/corpus";
import { guidedAnswer } from "@/lib/guided-answers";

const initialAnswer = guidedAnswer(PROMPT_OPTIONS[0]);

export default function Home() {
  return (
    <>
      <header className="site-nav">
        <a className="site-brand" href="#top" aria-label="Decision Desk home">
          <span aria-hidden="true">D</span>
          Decision Desk
        </a>
        <nav aria-label="Primary navigation">
          <a href="#demo">Demo</a>
          <a href="#case-study">Case study</a>
          <a href="#build">How it works</a>
        </nav>
        <a className="nav-cta" href="#builder">
          About the builder
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="live-dot" aria-hidden="true" />
              Public product sandbox · built by Matthes Schramm
            </div>
            <h1>
              Ask the company.
              <br />
              <span>See the evidence.</span>
              <br />
              Decide faster.
            </h1>
            <p>
              An AI company brain automatically gathers context from the places
              work already happens, then turns scattered customer, product and
              operating signals into evidence-linked decisions you can defend.
              This public sandbox uses synthetic records to demonstrate that
              workflow.
            </p>
            <div
              className="hero-source-row"
              aria-label="Example company-brain inputs"
            >
              <span className="hero-source-label">Automatic inputs</span>
              <span>
                <MessageSquareText size={13} aria-hidden="true" />
                Slack conversations
              </span>
              <span>
                <GitBranch size={13} aria-hidden="true" />
                Linear / Jira tickets
              </span>
              <span>
                <FileText size={13} aria-hidden="true" />
                Google Meet transcripts
              </span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#demo">
                Try the workspace
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#case-study">
                Read the build story
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-assurances" aria-label="Demo assurances">
              <span>
                <ShieldCheck size={14} aria-hidden="true" />
                Synthetic data only
              </span>
              <span>
                <Eye size={14} aria-hidden="true" />
                Every claim is cited
              </span>
              <span>
                <LockKeyhole size={14} aria-hidden="true" />
                No sign-in required
              </span>
            </div>
          </div>

          <div className="hero-product" aria-label="Product preview">
            <div className="preview-window">
              <div className="preview-topbar">
                <div className="preview-brand">
                  <span>D</span>
                  Decision Desk
                </div>
                <span className="preview-status">
                  <span aria-hidden="true" />
                  7 sources live
                </span>
              </div>
              <div className="preview-body">
                <div className="preview-search">
                  <Search size={15} aria-hidden="true" />
                  Why are users abandoning Card Match?
                </div>
                <div className="preview-answer">
                  <span className="preview-label">
                    <Sparkles size={13} aria-hidden="true" />
                    Evidence synthesis
                  </span>
                  <h2>The journey is losing trust before intent.</h2>
                  <p>
                    Three signals compound: unclear consent, mismatched
                    expectations and a verified mobile defect.
                  </p>
                  <div className="preview-sources">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <small>7 linked records</small>
                  </div>
                </div>
                <div className="preview-decision">
                  <span>Recommended decision</span>
                  <p>
                    Fix the known Safari defect, then test consent
                    comprehension before funding a redesign.
                  </p>
                </div>
              </div>
            </div>
            <div className="floating-source source-one">
              <BarChartMini />
              Funnel analytics
              <span>18.4%</span>
            </div>
            <div className="floating-source source-two">
              <MessageSquareText size={14} aria-hidden="true" />
              Research signal
              <span>Trust</span>
            </div>
          </div>
        </section>

        <div className="proof-strip" aria-label="Product principles">
          <span>Problem first</span>
          <i aria-hidden="true" />
          <span>Evidence before opinion</span>
          <i aria-hidden="true" />
          <span>One metric per build</span>
          <i aria-hidden="true" />
          <span>Privacy by construction</span>
        </div>

        <DemoWorkspace
          initialAnswer={initialAnswer}
          promptOptions={PROMPT_OPTIONS}
          liveInferenceEnabled={Boolean(process.env.OPENAI_API_KEY)}
        />

        <section className="how-section" id="build">
          <div className="section-intro">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>Retrieval is only useful when it improves the decision.</h2>
            </div>
            <p>
              The demo deliberately connects search, synthesis, traceability
              and experimentation in one compact workflow.
            </p>
          </div>

          <div className="process-grid">
            <article>
              <span className="process-number">01</span>
              <Search size={20} aria-hidden="true" />
              <h3>Frame the question</h3>
              <p>
                Start with a decision or uncertainty, not a request for a
                dashboard.
              </p>
            </article>
            <article>
              <span className="process-number">02</span>
              <Database size={20} aria-hidden="true" />
              <h3>Retrieve the signals</h3>
              <p>
                Rank evidence across research, support, analytics, delivery
                and leadership records.
              </p>
            </article>
            <article>
              <span className="process-number">03</span>
              <Eye size={20} aria-hidden="true" />
              <h3>Show the receipts</h3>
              <p>
                Keep observations, inference and recommendations distinct;
                link every claim back to its source.
              </p>
            </article>
            <article>
              <span className="process-number">04</span>
              <Sparkles size={20} aria-hidden="true" />
              <h3>Design the read</h3>
              <p>
                End with the smallest useful test, its primary metric,
                guardrail and read threshold.
              </p>
            </article>
          </div>

          <div className="architecture-line" aria-label="Technical architecture">
            <div>
              <GitBranch size={16} aria-hidden="true" />
              Synthetic TypeScript corpus
            </div>
            <Chevron />
            <div>
              <Search size={16} aria-hidden="true" />
              Weighted local retrieval
            </div>
            <Chevron />
            <div>
              <Braces size={16} aria-hidden="true" />
              Validated API route
            </div>
            <Chevron />
            <div>
              <Sparkles size={16} aria-hidden="true" />
              Evidence-constrained AI
            </div>
          </div>
        </section>

        <section className="case-study-section" id="case-study">
          <div className="case-study-heading">
            <p className="eyebrow">Build case study</p>
            <h2>
              Making a private system
              <br />
              publicly inspectable—without leaking the company.
            </h2>
            <p>
              The production inspiration is a private company brain deployed
              in live operating workflows. This sandbox recreates its core
              value with a fictional consumer-finance company and records
              written from scratch.
            </p>
          </div>

          <div className="case-study-grid">
            <article>
              <span>Problem</span>
              <h3>Important context is scattered across tools.</h3>
              <p>
                Operators spend time reconstructing what happened before they
                can decide what to do. Conventional search returns documents;
                generic chat hides where its confidence came from.
              </p>
            </article>
            <article>
              <span>Hypothesis</span>
              <h3>Traceability can make synthesis trustworthy.</h3>
              <p>
                If an operator can ask a plain-language question, inspect every
                supporting record and leave with a measurable next step, they
                can decide faster without accepting a black box.
              </p>
            </article>
            <article>
              <span>What shipped</span>
              <h3>One end-to-end decision journey.</h3>
              <p>
                Nineteen synthetic records, weighted retrieval, constrained AI
                synthesis, source-level evidence, guided fallbacks, a
                decision-brief view and a responsive public interface.
              </p>
            </article>
            <article>
              <span>What was cut</span>
              <h3>Platform breadth that did not prove the thesis.</h3>
              <p>
                No authentication, ingestion admin, collaboration layer or
                sprawling dashboard. The public build focuses on the riskiest
                assumption: whether evidence changes trust in the answer.
              </p>
            </article>
          </div>

          <div className="measurement-panel">
            <div className="measurement-copy">
              <p className="eyebrow">Defined before testing</p>
              <h3>A build is not finished when it deploys.</h3>
              <p>
                The sandbox has a simple external usability read. Results will
                be published after the first five observed sessions rather
                than invented for the application.
              </p>
            </div>
            <dl>
              <div>
                <dt>Primary metric</dt>
                <dd>
                  4 of 5 testers reach a defensible answer in under 2 minutes
                  without help.
                </dd>
              </div>
              <div>
                <dt>Quality check</dt>
                <dd>
                  Tester can name the strongest evidence and the next test.
                </dd>
              </div>
              <div>
                <dt>Guardrail</dt>
                <dd>
                  No tester mistakes synthesis for certainty or synthetic data
                  for a real company record.
                </dd>
              </div>
              <div>
                <dt>Read threshold</dt>
                <dd>Five external sessions across at least two professions.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="privacy-section">
          <div className="privacy-icon">
            <LockKeyhole size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">Privacy boundary</p>
            <h2>Synthetic by design, not “anonymised” after the fact.</h2>
          </div>
          <p>
            No production documents, screenshots, customer records, employee
            names, internal URLs, source identifiers or company code were
            copied into this build. Model credentials remain server-side and
            the demo keeps a deterministic fallback when live synthesis is
            unavailable.
          </p>
        </section>

        <section className="builder-section" id="builder">
          <div className="builder-monogram" aria-hidden="true">
            MS
          </div>
          <div className="builder-copy">
            <p className="eyebrow">About the builder</p>
            <h2>Matthes Schramm</h2>
            <p className="builder-role">
              Founder, operator and hands-on AI builder
            </p>
            <p>
              I work across product, operations, finance and strategy as
              COO/CFO of a growth-stage technology company. I use AI coding
              agents and GitHub as part of my normal workflow to turn ambiguous
              operating problems into products and live systems—from
              customer-support automation to a cloud-hosted company brain.
            </p>
            <p>
              The common thread is end-to-end ownership: understand the real
              problem, build the smallest useful thing and let evidence decide
              what happens next.
            </p>
          </div>
          <a className="button button-primary" href="#demo">
            Explore the build
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer>
        <span>Decision Desk</span>
        <p>
          A public synthetic product sandbox. Built in Melbourne with AI coding
          agents.
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

function BarChartMini() {
  return (
    <span className="mini-chart" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function Chevron() {
  return (
    <span className="architecture-chevron" aria-hidden="true">
      →
    </span>
  );
}
