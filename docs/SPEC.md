# Pilot 2: Digital VC Team Agent
## Gregory Curtis — Environmental Foundation

_Created: 2026-02-15 by Aura_
_Status: Spec — Awaiting Approval_
_Priority: P1 — Findings report due Feb 27_

---

## User Story

As Greg, a solo foundation operator evaluating investment opportunities, I need an AI-powered due diligence team that can analyze deal data rooms in parallel — performing legal, financial, and business analysis simultaneously — so I can evaluate opportunities in hours instead of weeks.

## Problem

Greg evaluates investment opportunities single-handedly, performing work that normally requires three specialists:
1. **Legal analyst:** Review contracts, terms, regulatory compliance, IP
2. **Financial analyst:** Model projections, assess valuations, analyze burn rate, cap table
3. **Business analyst:** Market sizing, competitive landscape, team assessment, product-market fit

Currently takes him ~1 week per deal. Foundation wants to allocate 5% of budget to investments but can't execute at scale because of evaluation bottleneck.

He's already experimented with Claude manually — sees the potential but needs a structured system.

## Proposed Solution

### Core System: AI Due Diligence Team

**Input Layer:**
- Data room ingestion: PDFs, pitch decks, financials, legal docs
- Structured upload interface: drag-and-drop data room contents
- Document classification: auto-categorize uploaded docs (legal, financial, pitch, etc.)

**Analysis Agents (run in parallel):**

**Legal Agent:**
- Contract review: key terms, red flags, unusual clauses
- Regulatory check: industry-specific compliance requirements
- IP assessment: patent landscape, trade secrets, freedom to operate
- Output: Legal risk summary with flagged items

**Financial Agent:**
- Financial model analysis: revenue projections, burn rate, unit economics
- Valuation assessment: compare to market comps, assess reasonableness
- Cap table review: dilution analysis, investor rights, liquidation preferences
- Output: Financial health scorecard with projections

**Business Agent:**
- Market sizing: TAM/SAM/SOM with sourced data
- Competitive landscape: key competitors, differentiation, moats
- Team assessment: background checks on founders, relevant experience
- Product-market fit: customer evidence, traction metrics, retention
- Output: Business viability assessment with recommendation

**Synthesis Layer:**
- Combines all three analyses into a unified investment memo
- Overall recommendation: Pass / Investigate Further / Invest
- Risk matrix: legal × financial × business risk scoring
- Comparison to previous deals in portfolio

**Output Layer:**
- Investment memo: structured document matching Greg's preferred format
- Executive summary: 1-page decision brief
- Deep-dive appendix: full analysis from each agent
- Dashboard: portfolio view of all evaluated deals

### V1 Deliverable

**For findings report (Feb 27):**
- Working prototype that accepts a sample data room
- Three parallel analysis agents producing structured output
- Unified investment memo generation
- Demo with Greg's black soldier fly company data room (if available)

### Architecture

**Production Instance:**
- Repo: `Aurapath/greg-vc-agent` (new, private)
- Stack: Next.js + Supabase (matches Aurapath standard)
- Hosting: Vercel
- Document processing: PDF parsing + embedding for retrieval
- Agent orchestration: Three agents run in parallel, synthesis agent combines
- Storage: Supabase storage for uploaded documents

## Acceptance Criteria

- [ ] Upload interface accepts PDF, DOCX, XLSX, PPTX
- [ ] Document auto-classification works with >80% accuracy
- [ ] Three analysis agents produce structured output in parallel
- [ ] Synthesis agent combines into unified investment memo
- [ ] Memo includes recommendation with confidence score
- [ ] Processing time: < 30 minutes for a standard data room
- [ ] All analysis points cite specific source documents

## Cost Estimate

**Development:**
- V1 (4 weeks): Upload interface + document processing + 3 analysis agents + synthesis + memo generation
- V2 (2 weeks): Portfolio dashboard + deal comparison + refinement from Greg's feedback

**Ongoing:**
- Dedicated agent team improving analysis quality based on Greg's feedback
- Monthly retainer covers compute + iteration
- Per-deal processing cost: ~$5-15 in API calls per analysis (depending on data room size)

## Test Requirements

- [ ] Document upload and classification test: PDF ingested and correctly categorized
- [ ] Legal agent test: given sample contract, identifies key terms and red flags
- [ ] Financial agent test: given sample financials, produces accurate scorecard
- [ ] Business agent test: given sample pitch deck, produces market assessment
- [ ] Synthesis test: three agent outputs combine into coherent memo
- [ ] End-to-end: full data room → investment memo in < 30 minutes
