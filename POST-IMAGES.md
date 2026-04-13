# Post Image Prompt Guide
### Generating 60s film poster artwork for blog posts

Each post gets a header image generated in the style of 1950s–60s American film posters
(Saul Bass, Robert Brownjohn, Leo Lionni). The look: bold geometry, 2–3 colours maximum,
collage-style photography, screen-print texture, confident typography used as shape.

---

## The base prompt (copy this, fill in the [BRACKETS])

```
Graphic design in the style of a 1950s–60s American film poster by Saul Bass.
Bold geometric shapes — rectangles, arrows, circles — in a strictly limited palette
of [COLOUR 1], [COLOUR 2], and off-white cream. Flat screen-print texture with
visible grain. A single [PHOTOGRAPHIC ELEMENT] composited as a high-contrast
black-and-white cutout. The composition is strongly diagonal or asymmetric.
Abstract and conceptual, not literal. No text. No gradients. No drop shadows.
Square format 1:1, clean white border.

The concept: [ONE SENTENCE DESCRIBING THE POST'S CENTRAL IDEA].
```

---

## Colour palettes by topic

Choose the palette that fits the mood of the post, not just the topic.

| Mood              | Colour 1        | Colour 2        | Use for…                         |
|-------------------|-----------------|-----------------|----------------------------------|
| **Danger/critique** | Vermillion `#C8291A` | Near-black `#100E0B` | AI risk, accountability, politics |
| **Curiosity/tech**  | Cobalt `#1A3A8F`     | Warm amber `#D4820A`  | AI tools, search, digital media  |
| **Cultural/social** | Forest green `#1A6B47` | Deep ochre `#B8860B` | Society, media, behaviour        |
| **Personal/craft**  | Warm teal `#1A6B6B`  | Dusty rose `#C47A5A`  | Writing, creativity, process     |
| **Institutional**   | Navy `#0D2545`       | Stone `#8A7E72`       | Education, healthcare, government |

---

## Photographic element guide

The single B&W photo element anchors the composition. Keep it unexpected — a part
rather than the whole.

| Post type                   | Try this element                                      |
|-----------------------------|-------------------------------------------------------|
| AI / technology             | Close-up of hands at a keyboard; eye; circuit pattern |
| Search / content strategy   | Open book from below; filing cabinet drawer           |
| Social media / platforms    | Television set; crowd silhouette from behind          |
| Education / institutions    | Lecture hall empty seats; blackboard corner           |
| Writing / craft             | Typewriter keys; single pen nib; stacked pages        |
| Culture / society           | Cinema seats; street corner from above; newspaper     |
| Personal / reflective       | Window looking out; hands holding something           |

---

## Worked examples

### "Building for the Visitors Who'll Never Visit"
*Topic: AI search changing how websites get found*

```
Graphic design in the style of a 1950s–60s American film poster by Saul Bass.
Bold geometric shapes — a large black rectangle bisected by a cobalt blue arrow —
in a strictly limited palette of cobalt blue, near-black, and off-white cream.
Flat screen-print texture with visible grain. A single high-contrast black-and-white
cutout of a person's back, mid-frame, facing away from the viewer into the shapes.
Strongly asymmetric composition. Abstract and conceptual. No text. No gradients.
No drop shadows. Square format 1:1, clean white border.

The concept: something is being read and summarised without ever being visited.
```

---

### "Nobody Lets the Moment Land"
*Topic: we scroll past everything before it's finished*

```
Graphic design in the style of a 1950s–60s American film poster by Saul Bass.
A large warm teal circle interrupted by a sharp black diagonal bar, against
off-white cream. Flat screen-print texture with visible grain. A single
high-contrast B&W cutout of a hand, fingers slightly open, mid-release.
Palette: warm teal, near-black, cream. Diagonal energy, top-right to bottom-left.
No text. No gradients. Square format 1:1, clean white border.

The concept: the moment is already gone before we decided how to feel about it.
```

---

### "AI, Beer-Chugging Aliens, and a $2K NBA Ad"
*Topic: AI-generated TV advertising and what it signals*

```
Graphic design in the style of a 1950s–60s American film poster by Saul Bass.
A bold vermillion arrow pointing right, overlaid on a black vertical band,
against cream. Inside the arrow: a B&W close-up of a single eye, direct gaze.
Palette: vermillion, near-black, cream. Strong horizontal tension.
No text. No gradients. Flat screen-print texture. Square 1:1, white border.

The concept: something is being sold to you by something that doesn't exist.
```

---

## How to generate

Paste the prompt into **Midjourney**, **DALL-E 3** (via ChatGPT), or **Adobe Firefly**.

**Midjourney parameters to add:**
```
--style raw --ar 1:1 --stylize 750
```

**Tips:**
- If it comes out too photorealistic, add: *"flat graphic, no photorealism, no 3D rendering"*
- If colours bleed, add: *"strict two-colour separation, screen-print halftone"*
- If there's unwanted text, add: *"absolutely no typography, no letters, no numbers"*

Once generated, save as `/public/images/[post-slug].jpg` and add to the post frontmatter:

```yaml
---
title: "Your Post Title"
ogImage: "/images/your-post-slug.jpg"
---
```

The image will appear in social shares automatically. To add it as a header inside
the post, drop this at the top of the Markdown body:

```markdown
![Alt description of the image](/images/your-post-slug.jpg)
```

---

## Writing your own prompt

Three things make a good prompt in this style:

1. **One concrete visual metaphor** from the post's core idea — not the topic, the *feeling* of the topic
2. **One unexpected photographic fragment** — a part, not a whole; hands not people
3. **A direction of tension** — diagonal, or a strong left-right or top-bottom pull

The geometry does the concept. The photo does the humanity. The palette does the mood.
