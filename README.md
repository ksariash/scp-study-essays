# SCP Essay Lab

A deliberately isolated prototype for workshopping a next-generation SCP essay-learning system before any changes are made to the production `scp-study` repository.

## Goal

Test whether structured reconstruction can move a learner toward independently producing an essay without reducing essay study to ordinary multiple choice and without requiring automated grading of arbitrary prose.

The lab currently compares three support levels against several essay shapes:

- **Guided** — the answer ideas are visible and the learner reconstructs the answer.
- **Cued** — structural cues remain visible, but answer ideas stay hidden until requested.
- **Recall** — the learner retrieves the answer mentally first, then reveals a checklist and self-checks each point.

This repository is experimental. It has no production analytics, sync, authentication, or shared learner state.

## Development

```bash
npm install
npm run dev
```

`npm run build` copies the canonical static source from `public-src/` into `dist/` for Cloudflare Workers Static Assets.

## Deployment

`main` is connected to the Cloudflare Worker `scp-study-essays`. The intended live lab URL is:

`https://scp-study-essays.ksariash.workers.dev/`

## Content policy

Do not invent or silently alter halachic course content. Prototype examples copied or adapted from `ksariash/scp-study` should preserve the source meaning. New course content belongs here only when supplied or approved by the course owner. Interaction mechanics may change freely in the lab.
