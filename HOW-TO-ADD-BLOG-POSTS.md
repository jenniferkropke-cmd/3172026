# How to Add a New Blog Post

Adding a blog post is super simple! Just edit one file and push to GitHub.

## Steps to Add a Post

1. **Open the file:** `/src/app/data/blog-posts.ts`

2. **Add your new post** to the `blogPosts` array at the top (it will appear first):

```typescript
{
  slug: "my-new-post",  // URL-friendly name (use dashes, lowercase)
  title: "My Amazing New Post Title",
  date: "2025-01-20",  // Format: YYYY-MM-DD
  excerpt: "A short preview that shows on the blog listing page",
  featuredImage: "https://images.unsplash.com/photo-xxxxx",  // Optional
  tags: ["Category", "Topic"],  // Optional
  content: `
    <h1>Main Heading</h1>
    
    <p>Your introduction paragraph goes here.</p>
    
    <h2>A Section Heading</h2>
    
    <p>More content here. You can use:</p>
    
    <ul>
      <li>Bullet points</li>
      <li>Like this</li>
    </ul>
    
    <ol>
      <li>Numbered lists</li>
      <li>Like this</li>
    </ol>
    
    <h3>Smaller Heading</h3>
    
    <p>Use <strong>bold text</strong> and <em>italic text</em>.</p>
    
    <blockquote style="border-left: 4px solid #14b8a6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
      "Add quotes like this"
    </blockquote>
    
    <p>Add <a href="/contact" style="color: #14b8a6; text-decoration: underline;">links</a> too!</p>
  `
},
```

3. **Push to GitHub** - your site auto-deploys!

## HTML Tags You Can Use

- `<h1>` - Main heading (biggest)
- `<h2>` - Section heading
- `<h3>` - Subsection heading
- `<p>` - Paragraph
- `<ul><li>` - Bullet list
- `<ol><li>` - Numbered list
- `<strong>` - Bold text
- `<em>` - Italic text
- `<a href="">` - Links
- `<blockquote>` - Quotes
- `<img src="">` - Images

## Finding Images

Get free images from [Unsplash](https://unsplash.com/):
1. Search for an image
2. Click the image
3. Copy the photo URL
4. Use it in `featuredImage`

## Tips

- Keep the `slug` short and URL-friendly (no spaces, use dashes)
- Write your excerpt to hook readers
- Use H1 for the title, H2 for main sections, H3 for subsections
- Add line breaks between paragraphs for readability in your code
- Preview locally before pushing to check formatting

That's it! No build scripts, no CMS, no hassle. Just edit → push → live! 🎉
