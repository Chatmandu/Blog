# manualmode.xyz — Cheat Sheet

---

## Images

### 1. Save the image
Drop the file into `public/images/`:
```
blog/public/images/your-post-slug.jpg
```

### 2. Add to post frontmatter (hero + social sharing)
```yaml
---
title: "Your Post Title"
description: "..."
pubDate: 2026-04-13
tags: []
ogImage: "/images/your-post-slug.jpg"
---
```
This displays the image as a full-width hero below the article header,
and populates the preview image when shared on social media / messaging apps.

### 3. Inline image within the post body
```markdown
![A description of the image](/images/your-post-slug.jpg)
```

---

## Links

### Link to another post
```markdown
[Link text](/blog/the-post-slug-here/)
```
The slug is the filename of the `.md` file without the extension.
e.g. `src/content/posts/on-thinking-in-public.md` → `/blog/on-thinking-in-public/`

### Link to a page (About, Tags etc.)
```markdown
[About](/about/)
[All tags](/tags/)
[A specific tag](/tags/writing/)
```

### External link
```markdown
[Link text](https://example.com)
```

### External link that opens in a new tab
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link text</a>
```
(Plain Markdown can't open new tabs — use the HTML version for external links where you want that behaviour.)

---

## Deploy

Every deploy is just: save → commit → push. Cloudflare rebuilds automatically.

```bash
cd blog

# Stage your changes
git add .

# Commit with a message
git commit -m "Add post: your post title"

# Push — Cloudflare rebuilds in ~30 seconds
git push
```

### Just changed one file?
```bash
git add src/content/posts/your-post.md
git commit -m "Publish: your post title"
git push
```

### Check build status
Go to: Cloudflare Dashboard → Workers & Pages → manualmode → Deployments
The latest deployment shows as "Active" when live.

---

## New post checklist

- [ ] Create `src/content/posts/your-slug.md`
- [ ] Add frontmatter (title, description, pubDate, tags, ogImage)
- [ ] Drop image into `public/images/your-slug.jpg`
- [ ] `git add . && git commit -m "Publish: title" && git push`

---

## Frontmatter reference

```yaml
---
title: "Post Title Here"
description: "One sentence summary — shows in cards and social previews."
pubDate: 2026-04-13
tags: ["writing", "craft"]      # optional, can be empty []
ogImage: "/images/slug.jpg"     # optional
draft: true                     # set true to hide from the site
---
```
