import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const sourceIndex = path.join(distDir, "index.html");

if (!fs.existsSync(sourceIndex)) {
  throw new Error("dist/index.html was not found. Run this script after vite build.");
}

const page = {
  slug: "seeds-of-service-grand-opening",
  url: "https://jenniferkropke.com/blog/seeds-of-service-grand-opening",
  title: "Seeds of Service: What We Planted, What Grew, and What Stayed With Me",
  description:
    "Inside the Seeds of Service grand opening at Southwest Creative Studio in Chicago: servant leadership, interactive art, spoken word, community, workshops, and the poem the night inspired.",
  image: "https://jenniferkropke.com/images/uploads/grand-opening-hero.jpg",
  imageAlt: "Visitors experiencing the Seeds of Service pop-up museum at Southwest Creative Studio in Chicago",
  published: "2026-08-31",
  author: "Jennifer Kropke"
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

let html = fs.readFileSync(sourceIndex, "utf8");

// Remove the generic SEO/social tags from the SPA shell so crawlers see
// only the article-specific values below.
html = html
  .replace(/<title>[\s\S]*?<\/title>/i, "")
  .replace(/<meta\s+name=["']title["'][^>]*>/gi, "")
  .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
  .replace(/<meta\s+name=["']keywords["'][^>]*>/gi, "")
  .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
  .replace(/<meta\s+(?:name|property)=["']twitter:[^"']+["'][^>]*>/gi, "")
  .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "");

const socialTags = `
    <!-- Route-specific SEO and social preview metadata -->
    <title>${escapeHtml(page.title)} | Jennifer Kropke</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${page.url}" />

    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Jennifer Kropke" />
    <meta property="og:url" content="${page.url}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:image" content="${page.image}" />
    <meta property="og:image:secure_url" content="${page.image}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1536" />
    <meta property="og:image:height" content="864" />
    <meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />
    <meta property="article:published_time" content="${page.published}" />
    <meta property="article:author" content="${escapeHtml(page.author)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${page.url}" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${page.image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}" />

    <script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: page.title,
  description: page.description,
  image: [page.image],
  datePublished: page.published,
  dateModified: page.published,
  author: {
    "@type": "Person",
    name: page.author,
    url: "https://jenniferkropke.com"
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": page.url
  }
}, null, 2)}
    </script>
`;

html = html.replace("</head>", `${socialTags}\n  </head>`);

const routeDir = path.join(distDir, "blog", page.slug);
fs.mkdirSync(routeDir, { recursive: true });
fs.writeFileSync(path.join(routeDir, "index.html"), html);

console.log(`✅ Generated social/SEO HTML for ${page.url}`);
