import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FeaturedWorkSlider } from "../components/FeaturedWorkSlider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { getAllPosts } from "../data/blog-posts";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get the 2 latest blog posts
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.slice(0, 2);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - New Artistic & Energetic */}
      <section className="relative bg-gradient-to-br from-purple-500 via-pink-400 to-teal-400 py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative elements for artistic feel */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Listen. Create. Connect.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Dive into my music, explore my creative insights, and let's collaborate on something amazing.
          </p>
          
          {/* Three Main CTAs */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <a
              href="/music"
              className="bg-white text-purple-600 py-4 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🎵 Listen to My Music
            </a>
            <a
              href="/blog"
              className="bg-white text-pink-600 py-4 px-6 rounded-lg font-semibold hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📝 Read My Blog
            </a>
            <a
              href="#collaboration-section"
              className="bg-white text-teal-600 py-4 px-6 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ✨ Let's Collaborate
            </a>
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎶 My Music
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Music is at the heart of my creative expression. I blend artistry with storytelling, 
                creating pieces that resonate emotionally and inspire connection. Each track is carefully 
                crafted to evoke feeling and spark imagination.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for inspiration, a creative collaborator, or simply want to explore 
                new sounds, I invite you to dive into my musical journey.
              </p>
              <a
                href="/music"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Explore All Music →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/uploads/artist-photo-1.png"
                alt="Jennifer Kropke"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent">
            📝 Latest from My Blog
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Creative insights, stories, and reflections on music, design, and artistic collaboration.
          </p>
          
          {/* Blog preview cards - populated with actual blog posts */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow hover:scale-105 duration-300 block"
              >
                {post.featuredImage && (
                  <div className="mb-4 rounded-lg overflow-hidden h-40 bg-gray-200">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-pink-600 font-semibold hover:text-pink-700">
                  Read More →
                </span>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="/blog"
              className="inline-block bg-gradient-to-r from-pink-600 to-teal-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              View All Blog Posts →
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work Slider - De-emphasized */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700 text-center">
            Selected Projects
          </h2>
          <p className="text-center text-gray-500 mb-12">A glimpse at some of my recent creative work</p>
        </div>
        <FeaturedWorkSlider />
      </section>

      {/* About Section - Updated */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-primary">About Jennifer</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a creative visionary who blends music, design, and storytelling to create meaningful 
                experiences. My passion lies in connecting with audiences through authentic, artistic expression 
                and innovative digital solutions.
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-secondary">Creative Disciplines:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Music Production & Composition</li>
                  <li>• Video Production & Editing (Premiere Pro, Final Cut Pro)</li>
                  <li>• Web Design & Development (WordPress, Wix, Custom Solutions)</li>
                  <li>• Social Media Strategy & Content Creation</li>
                  <li>• Graphic Design (Photoshop, Illustrator, Canva)</li>
                  <li>• Event Documentation & Live Streaming</li>
                  <li>• Multilingual Content Production</li>
                </ul>
              </div>
              <p className="text-gray-700 italic">
                <strong>Mission:</strong> To create authentic, inspiring content that connects people with music, 
                art, and transformative ideas—while helping organizations amplify their message.
              </p>
            </div>
            <div className="order-first md:order-last">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlM[...]"
                alt="Creative workspace with music and design tools"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Collaboration Section */}
      <section id="collaboration-section" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Have a collaboration idea? Want to chat about music, design, or your project? Let's connect!
          </p>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} name="homepage-contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" className="space-y-6">
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="homepage-contact" />
              <input type="hidden" name="bot-field" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-medium shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-center text-sm text-green-600 mt-4">Thank you for your message! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-sm text-red-600 mt-4">There was an error submitting your message. Please try again later.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
