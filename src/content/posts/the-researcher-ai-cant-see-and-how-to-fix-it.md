---
title: "The researcher AI can't see (and how to fix it)"
description: "AI has quietly become a new front door to research, each with its own lock. Why excellent researchers vanish from AI answers, and the small fixes — ORCID, a plain-language summary, open access — that bring them back."
ogImage: "/images/revision.jpg"
pubDate: 2026-06-28
tags: ["AI", "Content Design", "Digital"]
faqs:
  - question: "Why doesn't my research show up when people ask AI about my field?"
    answer: "Usually it's ambiguity, not weak work. If a machine can't confidently tie your papers, profiles and affiliation to one person — because your name is spelled three ways, you have no persistent identifier, or your work sits behind paywalls — it can't build a coherent picture of you, so it leaves you out. What predicts surfacing is web legibility, not raw citation count."
  - question: "How do I get cited by AI tools like ChatGPT and Perplexity?"
    answer: "Make a corroborated, machine-readable record of who you are. Claim and complete an ORCID, keep a public Google Scholar profile, and put one plain-English sentence about your work everywhere it appears. The tools cross-check sources, so the same clear answer in several places is what earns confidence — and citation."
  - question: "Does ChatGPT use Google to find sources?"
    answer: "No. ChatGPT's web search runs on Bing's index, not Google's — one study found around 87% of the pages it cited matched Bing's top results. Different tools use different sources: Perplexity crawls the web live, Claude leans on its training snapshot, and Google's AI Overviews use Google's index. There's no single front door any more."
  - question: "How does ORCID help with AI visibility?"
    answer: "ORCID is a permanent, unique identifier that says 'this is me' regardless of how your name is spelled or where you work. It's the thread that lets every system tie your scattered outputs together, which is the single most effective fix for the ambiguity that makes researchers invisible. Claiming it isn't enough, though — complete it with your employment, education, bio and name variants."
  - question: "Isn't making my research visible to AI just gaming the system?"
    answer: "There's a clear line. Removing ambiguity so true things about you are findable is hygiene and stewardship. Inflating your importance beyond what your work warrants is gaming — and it doesn't work for long. Visibility is not the same as rigour, and surfacing in an AI answer says nothing about the quality of the work itself."
---

![Graphic design in the style of a 1950s–60s American film poster by Saul Bass. A black-and-white photographic cutout of an old brass key sits at the centre, with bold cobalt-blue arrows radiating outward to the right and rays converging from the left, on a warm amber background. Flat screen-print texture. The concept: several doors, each with its own lock.](/images/revision.jpg)

The work is good. The machine can't see it.

I built my first website in 1999. Over the years that followed I drifted away from the code, into design, and then into the thing that still holds me: discoverability. You can do brilliant work and it counts for very little if nobody can find it.

For most of twenty-five years, finding things meant one thing. Google. It became so dominant it stopped being a noun and turned into a verb. You didn't search for a restaurant, a paper, a researcher. You Googled them. And from where I sat, Google was almost reassuringly formulaic. There was a recipe. Understand the crawler, understand how links signal authority, structure the page properly, and you broadly knew how to be found. That was my job for years.

Then, partway through [rebuilding the website at the Liverpool School of Tropical Medicine](/blog/building-for-the-visitors-wholl-never-visit/), I noticed the ground had moved. People were quietly stopping. They weren't asking Google. They were asking ChatGPT, or Claude, or Perplexity. "Summarise the recent work on this." "Who are the leading people studying that." Same questions. Different door.

What unsettled me was the black box. With Google I always knew where an answer came from. With these tools I didn't. So I did what I always do, which is go and look under the hood.

Here is what's under there. When ChatGPT searches the web, it doesn't read Google's index. It reads Bing's. One study found around 87% of the pages ChatGPT cited matched the pages ranking in Bing's top results for the same query. If you have never once thought about Bing, ChatGPT may not be able to see you at all. Claude leans heavily on its training data, a snapshot of the web frozen at a point in time, rather than crawling live, so being in that snapshot, clearly and consistently, is what counts. Perplexity crawls continuously and cites a source for almost every claim. Google's own AI Overviews pull from Google's index, but not the way classic search did, and a page good enough to earn an Overview citation won't automatically show up in ChatGPT's pool, because the two are drawing from different places.

So the thing that genuinely surprised me is this. There is no single front door any more. There are four or five, each with its own lock. And none of them opens the way the old one did.

Which leaves a question worth sitting with. When someone asks an AI about your field, who surfaces, and why? For most researchers, the honest answer is that it's accidental. It doesn't have to be.

## How these tools actually decide

You don't need the computer science. You need about ninety seconds.

Every one of these tools is doing one of two things, usually a blend. The first is memory: the model was trained on a huge snapshot of the open web, and when it answers from memory it reaches for what it absorbed. If your work was public, readable, and clearly yours when that snapshot was taken, you're in there. If it wasn't, you're not. The second is live retrieval: the tool fetches pages now, reads them, summarises them.

The useful part is that it barely matters which is happening, because both reward the same things, and they're [the same things ordinary search is starting to reward too](/blog/why-your-content-isnt-showing-up-in-ai-search-and-how-to-fix-it/). Content that is public. Content a machine can crawl and read. Content that is structured cleanly and unambiguously attributed to you. Memory or retrieval, the recipe is the same. Be legible to a machine.

Now, the natural assumption is that the people who surface are simply the most cited. The biggest names. That isn't what I found. What predicts whether you surface is something closer to web legibility, and it correlates surprisingly weakly with raw citation count and surprisingly strongly with whether a machine can confidently work out who you are and what you do.

The mechanism is triangulation. These systems don't trust a single page. They cross-check. One page that mentions you is a weak signal, easily ignored. But your ORCID, your Scholar profile, your staff page, a conference listing, a co-author's site, all saying the same name, the same field, the same affiliation, and the system gets confident. Confidence is what gets you cited. So the question is not whether you are important enough. It's whether a machine can assemble a coherent, corroborated picture of you from the open web. Those are very different questions, and the second one you can actually control.

Which is how strong researchers go missing. It's almost never that the work is weak. It's ambiguity. It's publishing as J. Smith on one paper, Jane Smith on the next, J.A. Smith on a third, so nothing ties together. It's having no persistent identifier. It's work that lives entirely inside paywalled PDFs a crawler can't read. It's the absence, anywhere on the open web, of a single plain sentence that says what you work on. Each one is small. Stacked up, they're how a genuinely excellent researcher ends up absent from the answer entirely.

The good news is buried in that. Almost every fix is hygiene, not self-promotion. Nobody is asking you to market yourself, or become an influencer, or play a game you find distasteful. You're being asked to remove ambiguity, so that work you've already done can be found and correctly attributed. That's the whole job.

## What to actually do

Start at the top and go as far as your energy lasts. If you only ever do the first few things, you'll have done more than most researchers alive.

The foundation is a persistent identifier. Claim an [ORCID](https://orcid.org/), and then complete it. It's a permanent, unique number that says "this is me" regardless of how your name is spelled or where you work this year, and it's the single most powerful thing you have against the ambiguity problem, because it's the thread that lets every system tie your trail together. It's free, it takes ten minutes, and funders and publishers increasingly demand it anyway. Then the part most people skip: claiming the iD is not the same as completing it. Fill in your employment, your education, a short biography, your name variants. A blank record does half the job.

Alongside it, two more foundations. A public [Google Scholar profile](https://scholar.google.com/), verified with your institutional email, a clean photo, the right affiliation, because it's often the first thing both humans and machines find when they go looking for an academic. And a canonical page, your staff profile or a simple personal one, that states in plain English who you are and what you work on. The plain English matters more than it should. A machine reads "I'm a parasitologist studying drug resistance in malaria, and here's why it matters" far more reliably than it reads fifty paper titles it has to decode.

Once that's there, make the work legible. Write a plain-language summary of your research, two or three sentences, no jargon, something an AI could lift word for word and get right. Then use the same summary everywhere. The same words on your staff page, your ORCID, your LinkedIn. Repetition isn't lazy here. It's corroboration. You're handing the machine the same clean answer from five directions, which is [the same answer-first instinct that gets ordinary content cited](/blog/faqs-from-content-design-sin-to-ai-citation-strategy/). Pick one form of your name and use it consistently from now on. You can't easily fix the past, but you can stop adding to it. And make your outputs open access where you can, or at least deposit the accepted manuscript in your repository, because a crawlable full text beats a paywalled abstract every time, and it's better scholarly practice anyway.

After that comes corroboration, which is just deliberately building the web of agreeing sources. Cross-link your profiles so they point at each other: ORCID to Scholar, Scholar to staff page, staff page back again. Add one real presence on a professional channel you'll actually maintain. One is enough, because its value is being an independent source saying the same true things. And let everything else you already produce, talks, datasets, preprints, a short explainer of your last paper, become a signal, if it's public. You don't have to manufacture these. You have to make the ones you already produce findable.

For the keen, there's a further tier, and I'd be straight with you about it. Structured data on a personal site, [schema markup](https://schema.org/), is a way of labelling your details so a machine parses them cleanly. The evidence that schema alone earns citations is mixed, so don't oversell it to yourself. What it reliably does is remove ambiguity, and its most useful piece is a property called [`sameAs`](https://schema.org/sameAs), which is literally a list of links to your other profiles telling the machine "all of these are the same person". That's the triangulation idea, written in code. The same instinct sits behind an [llms.txt file](https://llmstxt.org/) or a clean machine-readable "about" page: a tidy note left specifically for the AI. And then audit yourself. Ask the tools directly what they know about you and who works on your topic, find the gaps and the errors, and go fix the sources. That's the feedback loop, and it's how you move from guessing to knowing.

If all of that is too much, photograph this. Claim an ORCID and complete it. Write one plain-language summary and use it everywhere. Deposit your work open access. Three things. The rest is refinement.

## Where I'd slow down

If I stopped there I'd have written a marketing piece, and this isn't one.

Visibility is not accuracy. These tools hallucinate. They misattribute work with total confidence, invent affiliations, merge two people into one, occasionally cite papers that don't exist. Being visible is not the goal. Being correctly represented is. That's exactly why the audit step earns its place, because being found and described wrongly can be worse than not being found.

Visibility is not rigour either, and the two should never be confused. Surfacing in an AI answer says nothing about the quality of the work, and it never will. Trying to appear more important than your work warrants is both possible and pointless. It corrodes the one thing that makes scholarship worth finding.

So here's the framing I'd hold onto. You've already done the hard part. None of this is about inflating that. It's stewardship, making sure your own scholarly record can be found, read, and represented correctly, which is a responsibility you already had to your research. The medium changed. The duty didn't. And there's a collective version of it, too. When you make your work open, clearly described, properly identified, the next PhD student trying to understand your subfield benefits. So does the journalist trying to get it right, and the collaborator on the other side of the world. You make the whole field more legible.

The old front door is still there. It's just not the only one any more. And the difference between surfacing and vanishing isn't how good the work is. It's whether anyone, or anything, can tell it was yours.
