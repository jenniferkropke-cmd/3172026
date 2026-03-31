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
  slug: "inherited-weather-introduction",
  title: "Inherited Weather: Why I’m Finally Sharing My Story",
  date: "2026-03-17",
  excerpt: "This blog is where creativity, motherhood, growth, and real life collide. Here’s why I’m finally sharing my story.",
  featuredImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
  tags: ["Personal", "Creativity", "Motherhood", "Growth"],
  content: `
    <h1>Inherited Weather: Why I’m Finally Sharing My Story</h1>

    <p>I’ve started this blog a hundred times in my head.</p>

    <p>Different names. Different directions. Different versions of myself.</p>

    <p>But this one feels right.</p>

    <p>This space isn’t just about one thing. It’s about everything I carry, everything I’ve built, and everything I’m still becoming.</p>

    <h2>What “Inherited Weather” Means</h2>

    <p>The idea behind this blog comes from something I’ve been thinking about a lot lately: the things we inherit without choosing.</p>

    <p>The emotional patterns. The storms. The survival habits. The strength.</p>

    <p>Some of it protects us. Some of it holds us back.</p>

    <p>And at some point, especially when you become a parent, you realize… you get to decide what continues and what changes.</p>

    <blockquote style="border-left: 4px solid #14b8a6; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #4b5563;">
      "You may not control the weather you were given, but you can change the climate you create."
    </blockquote>

    <h2>Why I’m Starting This Now</h2>

    <p>I’m in a season of building.</p>

    <p>Building a career that blends creativity and purpose.  
    Building projects that actually mean something.  
    Building a life that feels aligned with who I really am.</p>

    <p>And honestly, I don’t have it all figured out. Not even close.</p>

    <p>But I’ve learned that waiting until everything is perfect usually means never starting at all.</p>

    <p>So this is me starting.</p>

    <h2>What You’ll Find Here</h2>

    <p>This blog is going to be a mix of everything I care about:</p>

    <ul>
      <li>Creative projects and behind the scenes of what I’m building</li>
      <li>Music, storytelling, and ideas that turn into something real</li>
      <li>Motherhood and the lessons that come with it</li>
      <li>Growth, healing, and figuring things out in real time</li>
      <li>Moments that feel small but actually matter the most</li>
    </ul>

    <p>Some posts will be practical. Some will be messy. Some will probably surprise me.</p>

    <h2>This Is Me Showing Up</h2>

    <p>If you’re here, thank you. Really.</p>

    <p>This isn’t about being perfect or polished. It’s about being honest, creative, and willing to share the process as it unfolds.</p>

    <p>If anything here resonates with you, I hope you stick around.</p>

    <p>We’re all navigating something. We’re all carrying something.</p>

    <p>And maybe, together, we can learn how to shape something better out of it.</p>

    <p>— Jen</p>
  `
},
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
