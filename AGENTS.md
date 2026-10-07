# SCP Essay Lab — LLM operating guide

This repository is an isolated product experiment. Its purpose is to discover a stronger essay-learning interaction before changing production `scp-study`.

## Experiment boundary

- `main` here is the live **lab**, not the production Study app.
- Do not modify `ksariash/scp-study` as part of Essay Lab work unless the user explicitly asks for a production change.
- Keep learner state local and disposable. Do not add production Analytics, Sync, Push, authentication, or cross-repo protocols during early prototyping.
- Do not copy production persistence schemas just for compatibility. First settle the learning model and interaction model.

## Content authority

- Do not invent halachic facts, rulings, authorities, or criteria.
- When using current course material, source it from the canonical `scp-study` Zman data and preserve its meaning.
- A prototype may reshape the *interaction* around approved content, but a content correction or new substantive course answer requires owner approval.
- Clearly label intentionally synthetic placeholder content if it is ever needed for interaction testing.

## Product question

The lab is testing a specific hypothesis: **structured reconstruction with fading support can train independent essay recall better than visible-answer multiple choice while remaining programmatically assessable.**

Every feature should help answer that question. Prefer small experiments over building production infrastructure.

## Core model

Think in terms of an essay containing semantic tasks rather than assuming every fact is an authority/position pair. Candidate task shapes include:

- required-point / set reconstruction;
- authority or concept matching;
- structured outline / rule-exception-conclusion reconstruction;
- ordered steps only where sequence is genuinely part of the knowledge.

The UI vocabulary should be `essay`, `task`, `point`, `outline`, and `build your answer`; reserve `pairing` for an actual matching task.

Support must be able to fade:

1. **Guided** — answer ideas visible.
2. **Cued** — structural cues visible; answer ideas hidden until requested.
3. **Recall** — retrieve first, then reveal/check.

Do not treat a correct recognition response as equivalent to unaided recall. Preserve enough state to distinguish unaided recall, cue use, reveal use, and misses when the experiment reaches mastery tracking.

## Current prototype direction

The active experiment is a Scripta-like **sentence-job builder**. The learner is shown the rhetorical/structural job a strong sentence must perform and a partially written sentence, but must retrieve key authorities, concepts, thresholds, and distinctions in short text fields. Grading is deterministic against approved aliases. The app itself records first-try success, cue use/retries, and answer reveals; do not ask the learner to self-grade mastery.

A completed sentence is appended to a growing essay so the learner sees how discrete retrieval becomes a coherent answer. Keep the full model answer hidden until the essay is complete. A cue may expose conceptual structure but should not simply reveal the missing term. "Reveal answer" is an explicit escape hatch and must be recorded as revealed rather than recalled.

For list-style answers where order is not part of the knowledge, use unordered concept-set grading rather than forcing an arbitrary sequence.

## UI implementation gate

For every UI change, check all task shapes and all three support levels. On mobile, explicitly verify narrow iPhone widths, touch scrolling, software-keyboard behavior for any text field, reachable close/navigation controls, and no accidental selection during scrolling. Prefer tap interactions to drag-and-drop unless drag provides a clear learning benefit and remains reliable on touch devices.

The lab should always expose the current experiment controls clearly so two interaction variants can be compared without redeploying.

## Build and release

Before committing:

1. Run `npm run build`.
2. Syntax-check modified JavaScript with `node --check`.
3. Inspect the built `dist/index.html` and confirm referenced assets exist.
4. Commit to `main` when the user wants the lab updated.
5. Inspect the Cloudflare Workers Builds check. Do not claim the live lab updated until that check succeeds.
