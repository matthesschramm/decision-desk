# Decision Desk

Decision Desk is a public, synthetic demonstration of an evidence-backed company brain.

It begins with an operating question, retrieves relevant records from a fictional consumer-finance workspace, separates evidence from inference, cites every claim and converts the result into a measurable decision brief.

Live demo: https://decision-desk-blue.vercel.app

Tagline: Ask the company. See the evidence. Decide faster.

## Why this exists

The production inspiration is a private company brain used in live operating workflows. Opening that system to the public would expose confidential company and customer information.

This repository recreates the core user journey from scratch with:

- a fictional company named Atlas
- 19 synthetic records across research, analytics, support, product, engineering, advisor operations and leadership
- no copied production source code, records, screenshots, names, URLs or identifiers
- a public interface that makes the evidence and privacy boundary inspectable

## Product hypothesis

If an operator can ask a plain-language question, inspect every supporting record and leave with a measurable next step, they can decide faster without accepting a black box.

The first external usability read is defined before testing:

- Primary metric: 4 of 5 testers reach a defensible answer in under two minutes without help
- Quality check: each tester can identify the strongest evidence and proposed next test
- Guardrail: no tester mistakes synthesis for certainty or synthetic data for a real company record
- Read threshold: five external sessions across at least two professions

## Core flow

1. Frame a question.
2. Rank relevant synthetic records with local weighted retrieval.
3. Synthesize only from retrieved evidence.
4. Link every finding to source-level evidence.
5. Generate a decision, experiment, primary metric, guardrail and read threshold.

Three guided questions demonstrate the intended journey:

- Why are users abandoning the Card Match journey?
- What should the team test next?
- Is the advisor handoff ready to scale?

## Architecture

- Next.js App Router and React
- TypeScript synthetic corpus
- Local weighted retrieval with query expansion
- Validated POST route with Zod input and output schemas
- OpenAI Responses API for optional live synthesis
- Deterministic guided synthesis when no API key is configured or the model is unavailable
- Server-side credentials, input limits, basic request throttling and no response caching

The in-memory limiter is suitable for a low-traffic portfolio demonstration. A sustained public product should use a shared limiter such as Vercel Firewall or a durable rate-limit store.

## Run locally

Requirements:

- Node.js 20 or newer
- npm

Install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The app works without any environment variables in guided mode.

For live synthesis:

```bash
cp .env.example .env.local
```

Add `OPENAI_API_KEY` to `.env.local`. Never commit that file.

## Verification

```bash
npm run lint
npm run build
npm run test:e2e
```

Before publication:

- run the guided prompts and an arbitrary query
- verify every source reference opens the correct synthetic record
- test answer and decision-brief views at desktop and mobile widths
- scan the repository for secrets and real-company identifiers
- verify the deployed API key is server-side only
- complete the five-session usability read and publish the observed results

## Privacy model

This demo is synthetic by construction, not anonymised after the fact.

No real customer or company content is required for the app to build, run or answer questions. The corpus is intentionally committed so reviewers can inspect exactly what the model is allowed to use.

## Builder

Built by Matthes Schramm with AI coding agents and GitHub as part of the normal delivery workflow.
