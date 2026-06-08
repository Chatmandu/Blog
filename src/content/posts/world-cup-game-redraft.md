---
title: "I Built a 2026 World Cup Prediction Game with AI in One Afternoon"
description: "How my two kids and I designed and built a daily 2026 World Cup squad-building game with AI in a single afternoon, bugs, squad data and all. Play it free."
ogImage: "/images/world-cup.jpg"
pubDate: 2026-06-08
tags: ["Digital", "AI", "Culture"]
---

![Graphic design in the style of a 1950s–60s American film poster by Saul Bass. Eight bold vermillion rectangles of varying widths are stacked in a rough column on the left side of the frame, bleeding off the left edge — compressed, jostling. One rectangle breaks cleanly from the stack, larger than the rest, pulling rightward into open space, driven by a short sharp forest green arrow. The remaining seven stay behind. A B&W photographic cutout of a single football trophy — small, front-facing, simplified silhouette — placed inside the lone breakaway rectangle..](/images/world-cup.jpg)

It started, the way a lot of these things do, with me trying to show the boys something something I hope they might find interesting.

The thing was [38-0](https://38-0.app/), a gloriously simple Premier League simulation. You spin for a club, draft a player, build an XI, and watch it try to win the league without dropping a point. It has no business being as addictive as it is. The boys took one look and inside ninety seconds had moved past "this is fun" to "why isn't there a World Cup one?"

I did what any reasonably confident parent does and said I'd be amazed if one didn't already exist. It did, of course. But they'd already moved the goalposts. Not just a World Cup game. A game about *this* World Cup, the 2026 one, with the actual squads heading to North America this summer. That, as far as we could tell, didn't exist.

So we built it. Or rather, we sat down on a Sunday morning and designed it, and then I spent a few hours building it while the two of them drifted off to do something less boring than watching their dad type. More on that betrayal later.

The core loop we lifted straight from 38-0, because why argue with something that works. A slot machine spins up a nation from the 2026 World Cup. You pick one player from that nation's squad to slot into your formation, and the moment you do, the rest of that squad is locked away forever. Take Mbappé and you walk away from Dembélé and Tchouaméni for good. That single decision, the one you can't take back, is the whole game. You keep spinning and picking until your eleven is full, then you watch it play through the tournament: three group games, then the knockouts, all the way to the final.

A quick word on the name. We started out calling it 7-0, on the assumption that a perfect run was seven wins. The boys, who pay closer attention to these things than I do, pointed out that 2026 is the first 48-team World Cup, which adds a brand new Round of 32 before the last 16. That makes the winner's path eight games, not seven. So 7-0 became 8-0, which is a better name anyway. A perfect, unbeaten, eight-game run to lift the trophy.

The bit I'm most pleased with is the part we borrowed from somewhere other than football. Like everyone else on earth, we'd been playing [Wordle](https://www.nytimes.com/games/wordle), and the thing that makes Wordle Wordle isn't the word game. It's that everyone gets the same puzzle on the same day. That shared constraint is what turns a solitaire game into a competition. So we built a Daily mode. Every player who opens the game on a given day gets the exact same nations, in the exact same order. The only variable is who you pick. Suddenly "I went 6-1-0 today" isn't a number floating in space. It's a challenge your mates can take on the identical draw and try to beat. That, more than anything, is what's made the boys want to share it.

Here's the part that surprised me. We went from a rough sketch on a Sunday morning to a working, playable, deployed prototype in a few hours. Not a mockup. A real thing, with real squad data, a match engine, a shareable result card, the lot.

I built it conversationally, describing what I wanted and iterating on what came back. The squad data is a good example of where this approach earns its keep and where it needs watching. The 2026 tournament had only just finished qualifying, so a lot of the squads were genuinely new information. The AI was good at assembling real squads with current clubs, but I had to keep it honest. At one point it had cheerfully included Italy, who, painfully for them, didn't qualify. Same with Denmark, Poland and Nigeria. We caught those, swapped in the teams that actually made it (Norway with Haaland finally getting his tournament, Austria, Ivory Coast, Paraguay), and moved on. The lesson, which I already knew from the day job, is that this stuff is a phenomenal accelerator and a terrible source of unchecked truth. You bring the judgement. It brings the speed.

The design phase held the boys' attention. The building did not. But they came back for the testing, because testing a football game means playing it, and playing it means looking for ways it's broken.

And they found a good one. My eldest, three or four games in, looked up and said the run felt wrong. He'd played Germany in the Round of 32, then Germany again in the quarter-final, then Germany again in the semi. The same opponent, three knockout rounds running. His brother, not to be outdone, had played Egypt twice in the same group stage.

This is a proper bug, and a satisfying one to explain to a ten-year-old, because the cause is intuitive once you see it. The match engine was picking each opponent fresh every game, drawing from a pool of nations at random, with no memory of who you'd already faced. So nothing stopped it pulling the same country out of the hat twice, or four times. The fix was to give the engine a memory: keep a running list of who you've played, and exclude them from the next draw. We talked it through together, why it happened, what "exclude them from the pool" actually means, and then watched it work. There's something quite nice about a bug your kid finds becoming a five-minute lesson in how software actually behaves.

For anyone who likes to know what's under the bonnet, the whole thing is deliberately lightweight. The interface is React, built with Vite, a single-page app and no framework heavier than it needs to be. There's no backend and no database, and that was a design decision, not a limitation. The Daily mode works by seeding everything from the date itself: the day's number drives a deterministic shuffle of the nations, so every player's browser independently generates the identical draw without ever talking to a server. The match results are seeded the same way, which means the same eleven on the same day always produces the same outcome. That's what makes the head-to-head fair, and it costs nothing to run.

The match engine itself is a small simulation. Each player carries a real 2024-25 club season, goals and assists, and a derived rating, and the games resolve with a bit of weighted probability and a Poisson model for the scoreline. Nothing fancy, but it produces results that feel about right. The giants are hard, the minnows beatable, and a perfect 8-0 is rare enough to mean something. Sharing happens two ways: a formatted text summary that drops straight into WhatsApp via the native share sheet, and a generated image card rendered on a canvas, both stamped with the day's date and a link back to the game. It's hosted on Cloudflare Pages, deployed from a Git repo, sitting on a subdomain of this site. Static files, served from the edge, free.

The architecture is simple on purpose. A static, serverless, date-seeded site is about the cheapest and most durable thing you can put on the internet, and for a game that just needs to hand everyone the same daily puzzle, it's exactly enough.

It was a different sort of Sunday morning, and a fun one. The boys got a game that didn't exist before, I got a reminder of how far you can get in an afternoon when the tooling is good and you keep your wits about you, and the thing is, genuinely, quite fun to play. They've been firing the daily draw at their friends all week, which is the only review that really matters.

If you fancy a go, it's [here](https://eight-nil.manualmode.xyz/). See if your eleven can go eight-nil. Mine still hasn't.
