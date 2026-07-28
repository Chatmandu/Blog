---
title: "I built it. Then I tried to break it."
description: "A reflection on designing an analytics system for a small team that's allowed to disagree with you — playbooks, honest measurement, and what happened when the system said we were solving the wrong problem."
ogImage: "/images/Level.jpg"
pubDate: 2026-06-20
tags: ["AI", "Code", "Marketing"]
---

*A reflection on designing an analytics system that is allowed to tell us we are wrong.*

I went into this sceptical.

Not of the idea, but of the tooling. [AI-assisted development has reached the point where you can build genuinely substantial systems](/blog/building-a-he-marketing-analytics-dashboard-in-a-week-with-claude/) at a speed that would have seemed absurd two years ago, and my instinct about things that look that easy is that they are usually a magic trick. Impressive from the front, hollow from the side. I have seen enough demos in my career to have developed a healthy resistance to fluency.

So I designed something deliberately, using the background I have in product and marketing operations, and then spent a great deal of time trying to find where it fell apart. That was the actual project. Not "can I build this", but "does it survive contact with reality, or is it a very articulate way of telling me what I want to hear?"

### What I was actually trying to solve

Our marketing team at [LSTM](https://www.lstmed.ac.uk/) is small. Smaller than my ambitions, which is true of most teams in our sector and always will be. The constraint that matters is not what we can see, because modern analytics will show you everything. It is what we can act on.

That is the problem I set out to address. Not reporting. Not dashboards. Continuous improvement for a team without spare capacity: knowing which of the hundred visible things deserve our hours, acting on them deliberately, and then finding out afterwards whether we were right.

That last part is where almost every analytics setup I have encountered quietly gives up. There is an unspoken convention in marketing that recommendations are made, work is done, and the loop is never closed. Nobody checks. New numbers appear next month and everyone moves on. It is not dishonesty. It is the path of least resistance, and it means teams accumulate confident habits without ever learning whether they work.

I wanted a system that could not do that.

### Playbooks: small, self-contained, permanent

The part I would most want another team to steal is the simplest.

Rather than building one large analysis that tries to explain everything, the system is a set of playbooks. Small, self-contained checks, each asking a single question, the same way, on a schedule, forever. Which course pages appear constantly in search but rarely get clicked. Whether our research is actually findable. What prospective applicants are asking that no page of ours answers. Whether our advertising is being measured correctly. Which of our pages are broken. What happens at our news front door.

Each is a genuinely small piece of work. What makes them valuable is that they are permanent. The judgement goes in once — covering what counts as evidence, what the thresholds are, what the caveats must say, and what the check cannot know. After that it runs without anyone remembering to run it, without getting bored, and without being seduced by a good story.

That is also what makes them shareable, and it is where this goes next. A playbook is a unit of institutional knowledge small enough to hand to someone else. A colleague in research communications does not need to learn analytics. They need one check that asks their question every month and returns evidence with its limitations attached. Every new question the school has becomes a small addition rather than a new system.

It is a very [Mark Watney](https://en.wikipedia.org/wiki/The_Martian_(film)) way to work. Solve one problem, then the next one, with what you have, and write down what happened so the next person does not have to guess.

### One playbook, in full: research discoverability

LSTM's research is organised into themes, and each has a home on the site. The question the check asks each month is deceptively simple: when someone searches for the subjects we actually work on, does our research come up, and if it does, does the page they land on give them a proper way in?

Those are two different questions and most tools conflate them. Appearing in search results and providing a good destination are separate problems with separate fixes, so the check keeps them apart. It looks at where we appear, what kind of page is catching that attention, and whether that page is the right one. A news article ranking for a permanent research question is a different situation from a theme page ranking for it, even though the traffic looks identical. This connects to a broader problem we are working on: [the researcher AI can't see](/blog/the-researcher-ai-cant-see-and-how-to-fix-it/) is often the same researcher whose work isn't findable through conventional search either.

What makes it more than a report is the way it handles patterns.

Like any organisation that has recently rebuilt its website, we have been working through the long tail of a migration — the stretch where search engines are still catching up with a new structure and visibility settles unevenly across a large site. The check flagged that a group of our research theme pages were not yet appearing in search.

The obvious response is to treat that as a set of separate content problems, and therefore a set of separate rewrites. It's a reasonable plan and it would have taken about a fortnight.

The check said something different. A whole section going quiet at the same time is unlikely to be many independent problems. It is far more likely to be one structural cause upstream of all of them, worth confirming before anyone writes a word. So rather than producing a list of pages to rewrite, it produced a single item: check the structural explanation first, and hold the content work until you know.

That is the judgement I actually wanted from it. Not more findings, but fewer and better ones. The instinct to fix each visible symptom is exactly the instinct a small team cannot afford, because the alternative is fourteen days of confident, well-intentioned effort aimed at the wrong layer of the problem.

It behaves the same way in the other direction. When it does find genuine content opportunities, it clusters related search demand into a single topic-level finding rather than generating one recommendation per search term. Forty search queries about the same subject is one piece of work, not forty. The whole design is an attempt to find the smallest true description of a problem rather than the longest list of things wrong.

The honest limitations sit on every finding it produces. It reasons about pages rather than people, because the model connecting researchers, projects and publications is designed but not yet populated. It can tell us we do not appear for a subject, but it cannot tell us whether that is because the page is weak, because something structural is in the way, or because the competition is simply better. And it says so, on each finding, rather than implying a confidence it has not earned.

We are confirming the structural diagnosis now. If it holds, one fix resolves a section rather than many pages taking a fortnight. If it does not, we will have spent an hour finding out, and I will report that too.

### Designing for scepticism

The other decisions all came from the same place. Assume I am capable of fooling myself, and design against it.

Nothing becomes work automatically. Playbooks produce findings, findings go to a queue, and a human decides: do it, defer it to a date, dismiss it, or fold it into something already underway. Every finding carries its evidence — the numbers, the source, the date range, the confidence and the caveats. Anything that cannot clear the bar is labelled a hypothesis rather than dressed as fact. The system is allowed to be uncertain. It is not allowed to be vague.

It remembers our refusals. Dismiss something and you must give a reason, after which it stops raising it. Six months later, when someone asks why we never fixed a page, the answer exists. Most organisational memory evaporates. Ours is written down.

There is a ceiling on active work, currently six things. You can exceed it, but you have to say why, and the override is recorded along with the workload at the time. A tool that helps you decide what to do is ordinary. One that helps you decide what not to do is what a finite team actually needs.

It measures its own advice. When we commit to something, it captures the relevant number first. A month later, with enough data to be fair, it delivers a verdict: worked, did not work, unclear, or too early. The verdicts are deliberately grudging. Small numbers can never earn "worked" however flattering the percentage, and it never claims a change happened because of us — only after us — since recruitment cycles and news moments and search algorithms are all moving at once and honesty is worth more than credit.

And uncertainty cannot be filed away. When the verdict is unclear, the system refuses to archive it. You have to say what the ambiguity means: extend the measurement, we measured the wrong thing, suspect the tracking, or accept that we cannot tell. Ambiguous results are how organisations corrupt their own memory. Whoever proposed the work remembers a success, the sceptic remembers a failure, and nobody can produce the basis for either.

### Where the scepticism paid off

Two moments told me this was not a magic trick.

The first was a bug I went looking for. Two buttons in the interface could create duplicate work, bypassing every check the system had. The easy fix is to patch the buttons. I insisted the check move inside the storage layer, computing from live data and refusing to trust any claim that it had already been validated. That is the difference between a convention and a guarantee, and everything built afterwards inherits it, including features nobody has thought of yet.

The second was the research theme finding described above — the moment the system disagreed with me productively. It declined to produce a list of fourteen pages to rewrite and produced one item instead: check the structural cause first. That is the behaviour I would most want from a system like this, and seeing it work in practice is what settled the question of whether this was a magic trick or something more durable.

I also deleted a lot. The AI-generated summary features went, once it was clear they were paraphrasing what the deterministic checks already knew — fluently, expensively and unauditably. A report was merged into another. Two overlapping analyses collapsed into one after running them side by side and finding that one produced the same insight nine times in nine slightly different sentences. Every time the system got smaller it got better, which is what you would expect once you accept that attention, not information, is the scarce resource.

### What it does not do

A reflection that only lists strengths is not a reflection.

It cannot see past the moment someone clicks Apply, because what happens after that lives in a system I do not yet have access to. Every verdict it issues is therefore about interest, not enrolment. Our paid social attribution is still being repaired, so those figures understate reality and the system says so on every relevant screen. It only knows about broken links that a real person actually hit, not the ones nobody has stumbled on yet. The model connecting researchers, projects and publications is designed but unpopulated, so the research checks currently reason about pages rather than people. And it runs for one user on one machine. The shared, institutional version is designed and not yet built.

None of that is hidden inside the tool. Every finding carries its own limitations, because a system that overstates what it knows is worse than no system at all.

### The uncomfortable part

I do not think what I have built is technically novel. Work-in-progress limits come from [Kanban](https://en.wikipedia.org/wiki/Kanban). Triage queues exist in every bug tracker. Grading evidence comes from evidence-based practice. Baseline-then-measure is just experimental method.

Every component is borrowed. What is unusual is the assembly, and the discipline of applying it here.

That is the observation I keep returning to. I do not think this is beyond most teams. I think it is rarely attempted. The barrier was never capability. The tooling used to be expensive, and now it is not, and the habit has not caught up with the economics.

### What I can and cannot claim

I am confident in the design. I am confident in the engineering, which has held up under scrutiny I went looking for rather than avoided.

I am not confident about impact yet, and I will not pretend to be. The system is built to prove whether our work works, and that proof needs time. Snapshots accumulating, actions completed, a month of patience before any verdict is fair. Building the machine that measures impact is not the same as having impact, and conflating the two is exactly the self-flattery this thing exists to prevent.

So, the commitment. We are going to document what happens, including the failures.

When it says something worked, I will show the numbers. When it says something did not — and given how grudging it is, some will — I will show that too. When it says unclear, I will say what we decided the uncertainty meant, because that decision is often the most interesting part.

That is the real test. Not whether the architecture is elegant, but whether, a year from now, there is a record of decisions made on evidence, work measured honestly, and a small team that knows which of its instincts were correct.

Watney's method was never heroic. He worked the problem, wrote down what happened, and did the next thing. If it turns out we mostly learned we were wrong about things, that is still further than most dashboards get, and I will write that one up too.
