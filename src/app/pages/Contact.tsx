import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function Contact() {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get song title from navigation state if available
  const songTitle = (location.state as any)?.songTitle;

  useEffect(() => {
    if (songTitle) {
      const descriptionField = document.getElementById('description') as HTMLTextAreaElement;

      if (descriptionField) {
        descriptionField.value = `I'm interested in licensing the song "${songTitle}" for my project.`;
      }

      const projectTypeField = document.getElementById('projectType') as HTMLSelectElement;

      if (projectTypeField) {
        projectTypeField.value = 'music';
      }
    }
  }, [songTitle]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO
        title="Contact - Jennifer Kropke"
        description="Contact Jennifer Kropke for podcast appearances, interviews, music licensing, collaborations, speaking engagements, and creative projects."
        canonical="https://jenniferkropke.com/contact"
        keywords="Jennifer Kropke contact, podcast guest, music licensing, artist interview, creative collaboration, speaking engagement"
      />

      <Header />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <div className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Connect
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Interested in music licensing, podcast appearances, interviews,
              speaking engagements, creative collaborations, or creative services?
              I'd love to hear from you.
            </p>
          </div>

          {/* AVAILABILITY BOX */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white mb-10 shadow-xl">
            <h2 className="text-2xl font-semibold mb-5">
              Currently Available For
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Podcast Appearances",
                "Interviews",
                "Press Features",
                "Music Licensing",
                "Creative Collaborations",
                "Speaking Engagements",
                "Creative Direction",
                "Video Projects"
              ].map((item) => (
                <span
                  key={item}
                  className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">

            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              className="space-y-10"
            >
              {/* Hidden Netlify Fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {/* CONTACT INFO */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  Contact Information
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
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
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization / Podcast / Company
                    </label>

                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="Your organization or platform"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                </div>
              </div>

              {/* INQUIRY */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                  Inquiry Details
                </h2>

                <div className="space-y-5">

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select an inquiry type</option>

                      <optgroup label="Music & Media">
                        <option value="podcast">Podcast Appearance</option>
                        <option value="interview">Interview Request</option>
                        <option value="press">Press / Media Inquiry</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="collaboration">Creative Collaboration</option>
                        <option value="music">Music Licensing</option>
                        <option value="performance">Live Performance Inquiry</option>
                      </optgroup>

                      <optgroup label="Creative Services">
                        <option value="video">Video Production</option>
                        <option value="website">Website Design</option>
                        <option value="social">Social Media Content</option>
                        <option value="branding">Brand Identity</option>
                        <option value="event">Event Documentation</option>
                      </optgroup>

                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Me More
                    </label>

                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      placeholder="Tell me more about your inquiry, collaboration idea, interview request, licensing opportunity, or creative vision..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>

                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1-2 Weeks</option>
                        <option value="1month">1 Month</option>
                        <option value="2-3months">2-3 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget (Optional)
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a budget range</option>
                        <option value="under1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-5k">$3,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="over10k">$10,000+</option>
                      </select>
                    </div>

                  </div>

                </div>
              </div>

              {/* ADDITIONAL */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-secondary">
                  Additional Information
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label htmlFor="additionalOption" className="block text-sm font-medium text-gray-700 mb-2">
                      How Did You Hear About Me?
                    </label>

                    <select
                      id="additionalOption"
                      name="additionalOption"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="referral">Referral</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="podcast">Podcast / Interview</option>
                      <option value="event">Live Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preference" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>

                    <select
                      id="preference"
                      name="preference"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select your preference</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>

                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
              </button>

              {/* SUCCESS */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <p className="text-green-700">
                    Thank you for reaching out! I'll review your inquiry and get back to you within 24-48 hours.
                  </p>
                </div>
              )}

              {/* ERROR */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <p className="text-red-600">
                    There was an error submitting your inquiry. Please try again later.
                  </p>
                </div>
              )}

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
