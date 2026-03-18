export const blogPosts: BlogPost[] = [
  
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
