---
title: "What ten years of unruly content taught me about migration, after we'd already launched"
description: "We moved an 11,000-URL Drupal site to 2,000 WordPress pages. Five weeks of post-launch GSC data revealed what the pre-launch audit couldn't. A migration doesn't end at launch — that's when the useful data starts arriving."
ogImage: "/images/IMG_4095.jpg"
pubDate: 2026-05-01
tags: ["Digital", "Marketing", "Communication"]
---

There's a version of a website migration that goes like this. You audit your content, score it, make confident decisions about what stays and what goes, build the new site, launch cleanly, and move on.

That version is largely fictional.

It's especially fictional when the migration is your first project in a new job. I joined Liverpool School of Tropical Medicine as Director of Marketing a matter of weeks before this work began. Use of data in marketing decisions had been limited before I arrived. Someone five years in would have known which pages mattered to which research group, which PDFs got passed around at conferences, which obscure URL was actually a flagship piece of work. I didn't have that. What I had was the data I could read and the best interpretation I could put on it.

The reality was that we launched a new WordPress site on 25 March 2026 with around 2,000 pages, condensed from a Drupal site that had accumulated roughly 11,000 URLs over a decade. We made those decisions as carefully as we could. We used traffic data, stakeholder input, a content audit spreadsheet that became its own small project, and a lot of judgment calls under time pressure. I did ok.

And then Google started telling us things we didn't know.

### The www problem nobody warned us about

Most migrations move between two domains. Ours did something slightly different. We moved from www.lstmed.ac.uk to the apex domain lstmed.ac.uk, dropping the www entirely. It was the right call technically and for brand consistency, but it added a layer of complexity. [Google treats www and non-www as different versions of a site](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). When you move between them, you have to signal the change clearly. 301 redirects from every www URL to its non-www equivalent. Canonical tags throughout the new site pointing to the apex. A sitemap containing only apex URLs. And ideally, the [Change of Address tool](https://support.google.com/webmasters/answer/9370220) filed in [Google Search Console](https://search.google.com/search-console).

We had most of this prepared. We built a [Cloudflare](https://www.cloudflare.com/) redirect architecture covering roughly 29,000 legacy URLs, coordinated the DNS switch with our IT team, and configured our SEO plugin to serve apex canonicals throughout. The preparation was detailed and it showed in the numbers. Our average search position on day one was 42, which sounds bad but reflects Google re-evaluating the site from scratch. By week four it had recovered to 8.8. That's a faster recovery than you'd typically expect post-migration, and the redirect architecture being solid from day one is a significant part of why.

The Change of Address tool was trickier. It requires both the old and new properties to appear in a dropdown within GSC. On launch evening, when we went to file it, the new lstmed.ac.uk property hadn't propagated into GSC yet. It was too new. We deferred to the next morning, the immediate pressure of launch moved on, and it didn't get filed. Five weeks later I was looking at domain property data and seeing the www site still accounting for 28% of clicks. That's when the gap in the process became visible.

The redirects are doing their job. The recovery trajectory is strong. But the Change of Address tool would have accelerated Google's processing of those redirects by weeks. Put it in the launch checklist. Assign it to a specific person. Confirm it's done before 9am on launch day. Fifteen minutes of effort, weeks of compounding effect.

### The configuration issue that nearly wasn't a footnote

That wasn't the only configuration issue we hit. On launch morning, during the first hour of monitoring, we identified that pages across the new site were carrying a noindex directive that shouldn't have been there. A configuration in our SEO plugin, likely a legacy setting carried over from staging, was telling Google not to index content that very much needed to be indexed. We caught it within the hour and resolved it quickly. But the incident illustrated something that doesn't usually get written about. A migration checklist is not the same as a launch monitoring plan. We had an extensive pre-launch QA process and we still had a configuration issue that only surfaced under live conditions. The difference between catching it in hour one and catching it in week three is the difference between a footnote and a problem.

What saved us was a specific person with a specific brief watching GSC and GA4 in real time from 7am. Not checking in occasionally. Watching. If I'd been in back-to-back meetings on launch morning the way a lot of launch days go, this would have sat undetected. Build the monitoring window into the day explicitly. It's not optional.

### What traffic doesn't tell you

The deeper issue isn't operational, though. It's about what you can know before launch and what you can't.

Pre-migration, you have one primary signal for content value: traffic. A page with 400 views a month feels more valuable than one with 12. That logic is reasonable but incomplete, and it breaks down in a few specific ways.

Traffic doesn't tell you who is visiting. A page with 80 views a month from clinical referrers making actual diagnostic decisions is more valuable than a page with 800 views from people who clicked the wrong thing and immediately left. We had pages buried deep in the old site's research department structure, rarely surfaced in analytics dashboards, that were quietly serving GPs and laboratory scientists looking for specific test information. Low traffic, very high intent. We nearly binned them.

Traffic doesn't tell you what's linking to the page. Some of our lowest-traffic pages turned out to have strong inbound links from partner institutions, WHO documents, or academic databases. Those links carry [PageRank](https://en.wikipedia.org/wiki/PageRank). Removing the pages without redirecting them doesn't just lose the content. It loses the equity those links built up over years.

Traffic doesn't capture what people search for. Pre-launch, GA4 told us how many people visited a page. What we didn't have was a clear picture of the search queries bringing them there, the impressions those pages were generating in Google's index even for visitors who never clicked, or how a page was ranking for terms we'd never thought to optimise for. That only became visible in GSC post-launch. This connects to something I've been thinking about more broadly: [the audience you're failing to see is often bigger than the one you're tracking](/blog/building-for-the-visitors-wholl-never-visit/).

You make the best decisions you can with the information available, and then the data tells you what you missed.

### What five weeks of GSC revealed

Within the first five weeks, a few things became clear. A page about pneumonia complications — a standalone clinical reference page that had been on the old Drupal site for years — was sitting at position 3.48 in Google for a competitive clinical search term and generating over 15,000 impressions a month. We hadn't migrated it. It wasn't in the content plan. It had modest traffic by our standards but a very specific audience, and Google had rewarded it with a strong ranking built up over years of indexing.

Several PDFs hosted on the old server — facilitator manuals for obstetric care training programmes used in sub-Saharan Africa — were being served directly by Google as search results, collecting thousands of impressions from healthcare professionals in exactly the countries we work in. These weren't even pages. They were files sitting in a Drupal uploads folder. No analytics. No visibility in any dashboard we'd looked at during the audit. Until post-launch GSC data showed them generating traffic we'd never attributed to the site at all.

A research unit, Emergency Obstetric Care and Quality of Care, had accumulated traffic across dozens of Drupal sub-pages that, taken individually, looked unremarkable. Aggregated across all related URLs post-launch, it was generating close to 300 visits a month from a specific professional audience. The kind of audience you'd spend significant budget trying to reach through paid activity.

None of these were failures of the audit process. They were limitations of the signals available before launch.

### The partial picture problem

There's a version of "data-led decision making" that can give you false confidence in a migration context. The data you have pre-launch is a partial picture. It tells you about the content your current audience finds and uses in ways that GA4 can measure. It tells you relatively little about the content sitting quietly in your site's infrastructure, serving audiences you've never specifically tracked, ranking for queries you've never specifically targeted, or accumulating link equity from sources you've never specifically monitored.

Post-launch, the signal set changes. GSC becomes more granular and more accurate. You can see impressions, not just sessions. You can see which queries are arriving at which URLs. You can see how the old site's surviving pages are ranking against the new site's pages for the same terms — a real-time picture of cannibalisation that no pre-launch audit can replicate.

A migration doesn't end at launch. Launch is when the most useful data starts arriving.

### What I'd change

What I'd change isn't much. Most of the decisions we made were defensible given the information we had. But there are a few specific things. File the Change of Address tool on launch day itself, before anything else, assigned and confirmed by 9am. Make the noindex check the very first monitoring task post-launch, before anything else, because one configuration issue uncaught in the first hour compounds for weeks. Treat PDFs and downloadable files as a separate audit category, because in the rush of a migration they get swept into a general "the redirects will handle it" bucket, and files don't follow redirect logic the way HTML pages do. If they have accumulated search visibility over years, that visibility doesn't transfer cleanly without server-level redirects configured individually for each file path. That's a developer conversation to have before launch, not after.

Build an explicit post-launch content review window. Eight weeks, with a specific brief to look for high-impression, low-traffic URLs on the old site that slipped through. GSC data from the old domain, filtered by impressions rather than clicks, surfaces these pages in a way that pre-launch analytics never would.

And be upfront with stakeholders that content decisions made in the planning phase will need revisiting. Not because the decisions were wrong, but because the data available post-launch is materially better than the data available before it. Frame the post-launch review as a planned, expected part of the process. It makes the conversation considerably easier.

### The mistakes are the learning points

I'm writing this five weeks after launch with GSC data open in another tab, working through a list of content we missed and PDF files that need server-level redirects because we didn't treat them as their own category. It's not a comfortable position. It's a more useful one than a migration that goes perfectly and teaches you nothing.

The signals we missed during the audit are now built into the new site's [content and data strategy](/blog/building-for-the-visitors-wholl-never-visit/) and the [performance dashboard](/blog/building-a-he-marketing-analytics-dashboard-in-a-week-with-claude/) we run against it: impressions alongside clicks, query-level data alongside session data, the file-level visibility we didn't have. That's what shapes the next iteration of this project, and the projects after it.

You strive for the plan. The plan will have gaps. The gaps are where the next plan gets built.

---

*Niall Walsh is Director of Marketing at Liverpool School of Tropical Medicine. He writes about higher education marketing, digital strategy, and the gap between what the plan says and what actually happens. A considerably less serious companion to this post — [The Godfather's Guide to Website Migration](/blog/the-godfathers-guide-to-website-migration/) — was written at 1am the same week.*
