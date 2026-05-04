---
title: "The Godfather's Guide to Website Migration"
description: "I watched The Godfather while five weeks of post-launch redirect data loaded in another tab. By the third act I realised Francis Ford Coppola had essentially made a film about website migration."
ogImage: "/images/IMG_4095.jpg"
pubDate: 2026-05-02
tags: ["Digital", "Marketing", "Culture"]
---

I watched [The Godfather](https://www.imdb.com/title/tt0068646/) last night while five weeks of post-launch redirect data loaded in another tab. By the third act I realised that Francis Ford Coppola had essentially made a film about website migration. Allow me to explain.

### "Leave the gun. Take the cannoli."

This is content prioritisation. You cannot migrate everything. Some pages have to stay behind. The trick is knowing which ones are the gun — heavy, consequential, and will cause problems if left unattended — and which ones are the cannoli, fine to carry forward and still valuable.

We left behind a page about pneumonia complications. It turned out to be the gun. It was [ranking at position 3 in Google and serving 15,000 impressions a month](/blog/what-ten-years-of-unruly-content-taught-me-about-migration/) to clinical referrers. We took the cannoli. We are now going back for the gun.

### "Keep your friends close, but your enemies closer."

Your enemies in a migration are the URLs you do not know about. The PDFs buried in an uploads folder that Google has been quietly indexing for six years. The research unit microsite that lives eight clicks deep in your navigation but has accumulated 300 visits a month from a professional audience you never tracked. The old www domain that is still ranking for your own branded terms five weeks after you redirected it.

Keep them close. Put them in a spreadsheet. Watch them in [GSC](https://search.google.com/search-console). They will not announce themselves.

### "It's not personal. It's strictly business."

This is what you tell yourself when you redirect a page that a colleague spent three weeks writing in 2019. The content decisions in a migration are not a judgement on anyone's work. They are a judgement on traffic data that was incomplete to begin with and will look different in six months.

Try explaining this to the person who wrote the page. It remains not personal. It remains strictly business. Nobody is convinced.

### "In Sicily, women are more dangerous than shotguns."

In website migration, PDFs are more dangerous than pages. Pages follow redirect logic. PDFs do not.

A PDF that has been sitting in a Drupal uploads folder since 2017, accumulating inbound links from WHO publications and academic databases, will not follow your [Cloudflare](https://www.cloudflare.com/) rules to its new home. It will continue to be served by Google exactly where it was, generating impressions you never attributed to it, until someone writes a server-level redirect rule for its specific file path.

We had five of them. We are writing the rules now.

### "A man who doesn't spend time with his family can never be a real man."

A migration team that does not spend time watching GSC on launch morning will not catch the noindex incident in hour one. Same energy.

### "Just when I thought I was out, they pull me back in."

This is the [Change of Address tool](https://support.google.com/webmasters/answer/9370220) situation. Every time you think the www cannibalisation is resolving, the domain property data shows another 7,500 clicks going to old URLs.

You are never fully out. The old site is Michael Corleone. It keeps getting pulled back in. The redirects are doing their job. It just takes longer than you would like.

### "Leave the gun. Take the cannoli."

Worth repeating. You will make this mistake in both directions. You will retire pages that were quietly doing important work. You will migrate pages that did not need to come. The data will tell you which was which about five weeks after it is too late to change the decision easily.

This is fine. This is migration. The Corleones did not build the family business without leaving a few things behind they later wished they had not.

---

Because that is the part nobody really tells you before you start.

A migration is not a clean break. It is not a moment where the old site disappears and the new one takes over. It is a long tail of decisions, trade-offs and small corrections that play out over weeks and months. You do not launch and move on. You launch and start paying attention.

The redirects work. The rankings come back. The traffic stabilises. But only if you keep watching, keep adjusting and keep going back for the things you missed the first time.

Go to the mattresses. Submit the sitemap. File the [Change of Address](https://support.google.com/webmasters/answer/9370220) before 9am.

Then open GSC. And keep it open.

---

*Written at approximately 1am while watching The Godfather and waiting for GSC to update. No redirects were harmed in the making of this post. The more considered version of all this is [here](/blog/what-ten-years-of-unruly-content-taught-me-about-migration/).*
