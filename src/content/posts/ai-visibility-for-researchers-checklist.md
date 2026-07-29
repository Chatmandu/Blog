---
title: "AI visibility for researchers: the practical checklist"
description: "A tiered checklist for researchers and PhD students: what to fix, in what order, so AI assistants can find your work and describe it correctly."
ogImage: "/images/checklist.jpg"
pubDate: 2026-07-29
tags: ["AI", "Digital"]
faqs:
  - question: "How long does the whole checklist take?"
    answer: "Tier one is about an hour and does most of the work. Tier two takes an afternoon. Tiers three and four are ongoing habits rather than tasks. If you have one hour this month, spend it completing an ORCID record."
  - question: "ORCID or Google Scholar: which matters more?"
    answer: "ORCID, because it is a persistent identifier that survives name changes and job moves, and it is the thread that ties your scattered outputs together. Google Scholar matters as a highly visible public profile that both people and machines check early. You want both, and you want them linked to each other."
  - question: "An AI tool described my research wrongly. Can I correct it?"
    answer: "Not directly. You can't edit a model's answer, and there is no submission form. What you can do is fix the underlying sources it is reading: update the stale staff page, correct the affiliation on Scholar, complete the ORCID record, and publish a clear current summary. Then re-run your audit prompts in a few weeks and check whether the answers have moved."
  - question: "Do I need a personal website?"
    answer: "No. A well-maintained staff page, a complete ORCID record and a verified Scholar profile cover the essentials. A personal site helps if your institutional page is thin, out of date or hard to update, or if you move institutions often and want one stable address that is always yours."
  - question: "I've published under three different name forms. Is it too late?"
    answer: "No. Add every variant to your ORCID record and claim all of those papers against your iD. That is precisely the problem ORCID was built to solve: it connects outputs published under different names to a single verified person. Then choose one form and use it consistently going forward."
---
![A single large vertical checklist — four horizontal bars of decreasing width, stacked like a bar chart on its side, descending from top to bottom. The bars are solid deep red. Behind them, a faint grid of small dots in pale warm cream, suggesting a field of data or academic records.](/images/checklist.jpg)

When someone asks an AI assistant who works on your topic, it assembles an answer from whatever it can read and verify about you on the open web. This is the checklist for making that possible. Work down it in order. Most of it takes an afternoon, once. None of it is self-promotion.

If you want to understand *why* this matters before working through the steps, [The researcher AI can't see](/blog/the-researcher-ai-cant-see-and-how-to-fix-it/) covers the underlying problem: how excellent researchers disappear from AI answers not because their work is weak, but because the signals AI uses to find them are broken or absent.

## Start by finding out what AI already says about you

Ten minutes. Open ChatGPT, Claude, Perplexity and Google, and run the same prompts in each:

- Who is [your full name]?
- What does [your name] at [your institution] research?
- Who are the leading researchers working on [your topic]?
- Summarise the recent work of [your name].

Write down every error: the old affiliation, the abandoned research focus, the moment two people with your surname get merged into one, the blank. That list is your to-do list, and it is more useful than any generic advice. Repeat this every three months.

## Tier one: remove the ambiguity

About an hour. This tier does most of the work.

**1. Claim an ORCID iD, then complete it.** A permanent identifier that stays yours regardless of how your name is spelled or where you work next. Claiming is not completing: fill in employment, education, a short biography and your name variants. A blank record does half the job.

**2. Verify a Google Scholar profile.** Use your institutional email, set it public, check the affiliation is current, and prune papers that aren't yours. It is often the first thing both people and machines find when they go looking for an academic.

**3. Fix your staff page.** Your name exactly as you publish it, your current role, and one plain sentence describing what you work on. Not a list of paper titles a machine has to decode.

**4. Pick one form of your name and use it from now on.** J. Smith, Jane Smith and J. A. Smith are three people as far as a machine is concerned. You can't easily fix the back catalogue. You can stop adding to it.

## Tier two: make the work readable

An afternoon.

**5. Write one plain-language summary and reuse it word for word.** Two or three sentences, no jargon, phrased so it could be quoted and still be accurate. For example: *"I'm an epidemiologist studying how drug resistance spreads in malaria parasites, and what that means for treatment policy."* Then paste that identical sentence into your staff page, ORCID bio, Scholar profile, LinkedIn and conference bios. Repetition is the point. Identical wording across independent sources reads as corroboration.

**6. Make your outputs open access.** Where you can't, deposit the accepted manuscript in your institutional repository. A crawlable full text beats a paywalled abstract every time, and it is better scholarly practice anyway.

This is the same principle that applies to any content trying to be found by AI: [the gap between what you publish and what AI can actually read](/blog/why-your-content-isnt-showing-up-in-ai-search-and-how-to-fix-it/) is the visibility problem. Paywalled abstracts are the academic version of content that exists but can't be cited.

## Tier three: build corroboration

Ongoing, low effort.

**7. Cross-link your profiles.** ORCID to Scholar, Scholar to staff page, staff page back to both. You are giving a machine a path to follow between sources that already agree.

**8. Keep one professional channel current.** One is enough. Its value is being an independent source saying the same true things, not reach.

**9. Publish what you already produce.** Talks, slides, preprints, datasets, a short explainer of your last paper. Public, dated and clearly attributed. You don't need to manufacture these, only to stop them disappearing into a shared drive.

## Tier four: optional, if you're technical

**10. Add `schema.org` Person markup to a personal site**, including a `sameAs` list of every profile you own. The evidence that schema alone earns citations is mixed, so don't oversell it to yourself. What it reliably does is state, in machine-readable form, that all of those profiles are the same person.

**11. Consider an `llms.txt` file or a clean, machine-readable about page.** A tidy note left specifically for an AI crawler. The [building for the visitors who'll never visit](/blog/building-for-the-visitors-wholl-never-visit/) post covers the broader idea: as AI becomes a primary route to discovery, what you publish for machines matters as much as what you publish for people.

## If you only do three things

Complete an ORCID. Write one plain-language summary and use it everywhere. Deposit your work open access. That puts you ahead of most researchers working today.

## One caution

Being visible is not the same as being correctly represented. These tools misattribute work, invent affiliations and merge two people into one, all with total confidence. Being found and described wrongly can be worse than not being found, which is why the audit step comes first and repeats. Visibility is also not rigour: surfacing in an AI answer says nothing about the quality of the work, and trying to appear more important than your work warrants is both possible and pointless.

Everything here is hygiene, not marketing. You are removing ambiguity so that work you have already done can be found and attributed to you correctly.

This is based on a session I ran at Liverpool School of Tropical Medicine Postgraduate Research Student Conference, 'Get Cited by AI: building a researcher profile that's actually found'. The rules are genuinely changing, and that is the opportunity: anyone building a research profile now can set these habits from the start, rather than retrofitting them years later.
