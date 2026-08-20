import { useEffect } from "react";

type DisqusPage = {
  identifier: string;
  title: string;
  url: string;
};

type DisqusConfigContext = {
  page: DisqusPage;
};

type DisqusResetOptions = {
  reload: boolean;
  config: (this: DisqusConfigContext) => void;
};

declare global {
  interface Window {
    DISQUS?: {
      reset: (options: DisqusResetOptions) => void;
    };
    disqus_config?: (this: DisqusConfigContext) => void;
  }
}

interface BlogCommentsProps {
  slug: string;
  title: string;
}

const DISQUS_SCRIPT_ID = "disqus-comments-script";
const LEGACY_DISQUS_COLORS = {
  color: "#374151",
  backgroundColor: "#ffffff",
};

export function BlogComments({ slug, title }: BlogCommentsProps) {
  const shortname = import.meta.env.VITE_DISQUS_SHORTNAME?.trim();
  const canonicalUrl = `https://jenniferkropke.com/blog/${slug}`;
  const identifier = `blog/${slug}`;

  useEffect(() => {
    if (!shortname) return;

    const configurePage = function (this: DisqusConfigContext) {
      this.page.url = canonicalUrl;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    if (window.DISQUS) {
      try {
        window.DISQUS.reset({
          reload: true,
          config: configurePage,
        });
      } catch (error) {
        // Disqus should never be allowed to take down the blog if its embed fails.
        console.error("Unable to reload Disqus comments.", error);
      }
      return;
    }

    window.disqus_config = configurePage;

    if (!document.getElementById(DISQUS_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = DISQUS_SCRIPT_ID;
      script.src = `https://${shortname}.disqus.com/embed.js`;
      script.async = true;
      script.setAttribute("data-timestamp", String(Date.now()));
      document.body.appendChild(script);
    }
  }, [canonicalUrl, identifier, shortname, title]);

  if (!shortname) return null;

  return (
    <section
      aria-labelledby="comments-heading"
      className="mt-12 border-t border-gray-200 pt-10"
      style={LEGACY_DISQUS_COLORS}
    >
      <div className="mb-6 text-center">
        <h2
          id="comments-heading"
          className="text-2xl font-semibold text-gray-900"
        >
          Join the Conversation
        </h2>
        <p className="mt-2 text-gray-600">
          What resonated with you? Share your thoughts below.
        </p>
      </div>

      <div id="disqus_thread" style={LEGACY_DISQUS_COLORS} />

      <noscript>
        Please enable JavaScript to view the comments powered by Disqus.
      </noscript>
    </section>
  );
}
