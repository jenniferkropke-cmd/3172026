import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FeaturedWorkSlider } from "../components/FeaturedWorkSlider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";
import { Instagram, Linkedin, Youtube, Music2, Mail, Facebook, TikTok, MapPin, Music } from "lucide-react";
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
      <SEO
        title="Jennifer Kropke - Creative Direction | Digital Media | Design"
        description="Multimedia professional specializing in video production, web design, social campaigns, and educational storytelling for mission-driven organizations."
        canonical="https://jenniferkropke.com/"
        keywords="Jennifer Kropke, creative direction, digital media, video production, web design, social media campaigns, nonprofit marketing, educational storytelling"
      />
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

      {/* Social Media Links Section - Prominent & Accessible */}
      <section className="py-16 bg-white border-b-2 border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
            Connect With Me
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Follow my journey across platforms
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61563168034809"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              title="Facebook"
            >
              <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-sm">
                <Facebook className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mrs._dancing_queen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full group-hover:from-pink-200 group-hover:to-purple-200 transition-all shadow-sm">
                <Instagram className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@mrsdancingqueen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-black transition-all duration-300 hover:scale-110"
              title="TikTok"
            >
              <div className="p-4 bg-gradient-to-br from-gray-100 to-black/10 rounded-full group-hover:from-gray-200 group-hover:to-black/20 transition-all shadow-sm">
                <TikTok className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">TikTok</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jenniferkropke/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-blue-700 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full group-hover:from-blue-200 group-hover:to-indigo-200 transition-all shadow-sm">
                <Linkedin className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">LinkedIn</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@JenniferKropke"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-red-600 transition-all duration-300 hover:scale-110"
              title="YouTube"
            >
              <div className="p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-full group-hover:from-red-200 group-hover:to-orange-200 transition-all shadow-sm">
                <Youtube className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">YouTube</span>
            </a>

            {/* Pinterest */}
            <a
              href="https://www.pinterest.com/jenniferkropke1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-red-700 transition-all duration-300 hover:scale-110"
              title="Pinterest"
            >
              <div className="p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-full group-hover:from-red-200 group-hover:to-pink-200 transition-all shadow-sm">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.834 8.207 11.387.6-.111.82-.481.82-1.069 0-.53-.019-1.921-.03-3.776-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .592.219.961.824 1.07 4.763-1.559 8.195-6.085 8.195-11.384C24 5.373 18.627 0 12 0z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-center">Pinterest</span>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/artist/3Bjg3nwgTBbIs4ApBk7gs4?si=91gqPHshR3KnUgZ9gnZgzQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110"
              title="Spotify"
            >
              <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full group-hover:from-green-200 group-hover:to-emerald-200 transition-all shadow-sm">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.122-.9-.52-.12-.403.052-.821.52-.92 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-12.009-1.379-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.06 9.26 14.4 9.921 17.821 12.181c.35.21.54.659.25 1.081zm.12-3.36C15.312 8.322 8.926 8.052 5.4 9.291c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.38 4.26-1.429 11.07-1.119 15.721 1.921.539.33.719 1.02.389 1.559-.329.54-1.02.72-1.56.39z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-center">Spotify</span>
            </a>

            {/* Apple Music */}
            <a
              href="https://music.apple.com/us/artist/jennifer-kropke/1887719017"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-pink-500 transition-all duration-300 hover:scale-110"
              title="Apple Music"
            >
              <div className="p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-full group-hover:from-pink-200 group-hover:to-red-200 transition-all shadow-sm">
                <Music className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">Apple Music</span>
            </a>

            {/* Google Business */}
            <a
              href="https://share.google/ncKyRj3xIk1ah66tX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
              title="Google Business"
            >
              <div className="p-4 bg-gradient-to-br from-yellow-100 to-red-100 rounded-full group-hover:from-yellow-200 group-hover:to-red-200 transition-all shadow-sm">
                <MapPin className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">Google Business</span>
            </a>

            {/* Email */}
            <a
              href="mailto:jenniferkropke@gmail.com"
              className="group flex flex-col items-center gap-3 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 transition-all shadow-sm">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-center">Email</span>
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
                src="https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2Ul[...]
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
