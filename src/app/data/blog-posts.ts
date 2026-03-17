export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  tags?: string[];
  content: string; // HTML content - you can use <h1>, <h2>, <p>, etc.
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-my-blog",
    title: "Welcome to My Blog",
    date: "2025-01-15",
    excerpt: "I'm excited to share my thoughts, insights, and creative journey with you through this blog.",
    featuredImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    tags: ["Welcome", "Updates"],
    content: `
      <h1>Welcome to My Blog!</h1>
      
      <p>I'm thrilled to launch this blog as a space to share my insights, creative process, and lessons learned along the way.</p>
      
      <h2>What You Can Expect</h2>
      
      <p>This blog will cover a variety of topics including:</p>
      
      <ul>
        <li>Creative processes and techniques</li>
        <li>Project case studies and behind-the-scenes insights</li>
        <li>Industry trends and observations</li>
        <li>Tips and tricks I've learned</li>
      </ul>
      
      <h2>Why I Started This Blog</h2>
      
      <p>Throughout my career, I've learned so much from others who generously share their knowledge. This blog is my way of giving back to the community and connecting with fellow creatives.</p>
      
      <p>I believe in the power of shared knowledge and open dialogue. Whether you're just starting out or are well-established in your field, I hope you'll find something valuable here.</p>
      
      <h2>Let's Connect</h2>
      
      <p>I'd love to hear from you! Feel free to reach out through my <a href="/contact" style="color: #14b8a6; text-decoration: underline;">contact page</a> if you have questions, suggestions, or just want to say hi.</p>
      
      <p>Thanks for being here, and I look forward to sharing this journey with you!</p>
    `
  },
  {
    slug: "creative-process",
    title: "My Creative Process: From Concept to Completion",
    date: "2025-01-10",
    excerpt: "A deep dive into how I approach creative projects, from initial brainstorming to final delivery.",
    featuredImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop",
    tags: ["Process", "Creativity", "Tips"],
    content: `
      <h1>My Creative Process: From Concept to Completion</h1>
      
      <p>Every project is unique, but over the years I've developed a process that helps me consistently deliver high-quality work. Here's a look behind the curtain.</p>
      
      <h2>Phase 1: Discovery & Research</h2>
      
      <p>Before touching any design tools, I spend time understanding:</p>
      
      <ul>
        <li><strong>The goal:</strong> What problem are we solving?</li>
        <li><strong>The audience:</strong> Who are we creating for?</li>
        <li><strong>The context:</strong> Where will this live?</li>
      </ul>
      
      <p>This foundation is crucial. A beautiful design that misses the mark isn't successful.</p>
      
      <h2>Phase 2: Ideation</h2>
      
      <p>This is where the fun begins! I brainstorm multiple approaches, sketch rough concepts, and explore different directions. I never commit to my first idea.</p>
      
      <blockquote style="border-left: 4px solid #14b8a6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
        "Your first idea is rarely your best idea. Give yourself permission to explore."
      </blockquote>
      
      <h2>Phase 3: Refinement</h2>
      
      <p>Once I've selected a direction, I refine the details. This includes:</p>
      
      <ol>
        <li>Developing the visual language</li>
        <li>Testing different variations</li>
        <li>Getting feedback from stakeholders</li>
        <li>Iterating based on insights</li>
      </ol>
      
      <h2>Phase 4: Execution</h2>
      
      <p>With a solid plan in place, I focus on execution. This is about attention to detail and maintaining consistency throughout.</p>
      
      <h2>Phase 5: Review & Polish</h2>
      
      <p>The final touches make all the difference. I review everything with fresh eyes, check for consistency, and ensure quality across all deliverables.</p>
      
      <h2>Key Takeaways</h2>
      
      <p>If I had to distill my process into core principles:</p>
      
      <ul>
        <li>Always start with understanding the problem</li>
        <li>Don't rush to solutions</li>
        <li>Embrace iteration</li>
        <li>Sweat the details</li>
      </ul>
      
      <p>What does your creative process look like? I'd love to hear about it!</p>
    `
  }
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get all posts sorted by date (newest first)
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
