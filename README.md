# My Blog (Astro)

## Run locally
```bash
cd /Users/imaginaryspace/Desktop/myWebsiteBlog/my-site
npm install
npm run dev
```
Visit http://localhost:4321

## Build
```bash
npm run build
npm run preview
```

## Add a new post
- Create a Markdown file in `src/content/blog/` like `my-post.md`:
```md
---
 title: My Post Title
 description: Short description
 pubDate: 2025-01-01
 heroImage: "../../assets/blog-placeholder-1.jpg" # optional
---

Write your content in Markdown here.
```
- The post appears automatically on `/` (latest 5) and `/blog` (all posts).

## Customize
- Edit site name/description in `src/consts.ts`.
- Edit header links in `src/components/Header.astro`.
- Tweak styles in `src/styles/global.css`.
