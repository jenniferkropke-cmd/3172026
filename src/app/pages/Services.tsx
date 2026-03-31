import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { SEO } from "../components/SEO";
import { 
  Video, 
  Globe, 
  Share2, 
  Compass, 
  Camera, 
  Palette, 
  FileText, 
  BarChart, 
  PlayCircle,
  Film,
  MessageSquare,
  Layout
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    icon: Video,
    title: "Professional Video Production",
    description: "From concept to final edit, I create compelling videos for events, interviews, tutorials, and promotional content.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Custom Website Design",
    description: "Beautiful, responsive websites tailored to your brand and goals. Stop paying monthly fees—get custom sites with one-time pricing.",
  },
  {
    number: "03",
    icon: Share2,
    title: "Social Media Content Creation",
    description: "Engaging graphics, videos, and posts designed to grow your audience and strengthen your online presence.",
  },
  {
    number: "04",
    icon: Compass,
    title: "Virtual Tours & Interactive Media",
    description: "Immersive virtual experiences including 360° tours, interactive maps, and audio guides.",
  },
  {
    number: "05",
    icon: Camera,
    title: "Event Photography & Videography",
    description: "Professional documentation of your galas, conferences, workshops, and special events.",
  },
  {
    number: "06",
    icon: Palette,
    title: "Brand Identity Development",
    description: "Logo design, color schemes, typography, and comprehensive brand guidelines.",
  },
  {
    number: "07",
    icon: FileText,
    title: "Event Registration Pages",
    description: "Custom registration systems and landing pages for seamless event management.",
  },
  {
    number: "08",
    icon: MessageSquare,
    title: "Social Media Graphics & Integration",
    description: "Branded templates, cover images, and seamless social media integration across platforms.",
  },
  {
    number: "09",
    icon: BarChart,
    title: "Analytics & Multimedia Services",
    description: "Data-driven insights and comprehensive multimedia strategies to optimize your digital presence.",
  },
  {
    number: "10",
    icon: Layout,
    title: "Blog Design",
    description: "Engaging blog layouts with SEO optimization and content strategy support.",
  },
  {
    number: "11",
    icon: PlayCircle,
    title: "Video & Multimedia Integration",
    description: "Seamless embedding of videos, audio, and interactive media into your digital platforms.",
  },
  {
    number: "12",
    icon: Film,
    title: "Special Video Services",
    description: "Multilingual videos, educational content, testimonials, and custom storytelling projects.",
  },
];

const testimonials = [
  {
    quote: "Jennifer captured our wedding day beautifully! The video brought tears to our eyes. She was professional, creative, and made us feel so comfortable. We will treasure this forever.",
    author: "Emily & Jason N.",
    role: "Newlyweds",
  },
  {
    quote: "Working with Jennifer was a game-changer for my brand. She built my website and created an amazing promo video that perfectly captured my vision. Her attention to detail and creative input exceeded my expectations.",
    author: "David M.",
    role: "Content Creator",
  },
  {
    quote: "Jennifer transformed our online presence! Our new website is not only beautiful but also functional and easy to navigate. The SEO improvements she implemented have significantly increased our traffic. Highly recommend!",
    author: "Michael R.",
    role: "Small Business Owner",
  },
];

export default function Services() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Services - Jennifer Kropke | Video Production & Web Design"
        description="Professional video production, custom website design, social media content creation, and digital solutions for mission-driven organizations. Over a decade of experience helping nonprofits and educational institutions tell their stories."
        canonical="https://jenniferkropke.com/services"
        keywords="video production services, custom website design, social media content creation, nonprofit video, educational content, event videography, brand identity, Chicago video production, web design services"
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">My Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive digital solutions to help your organization tell its story and achieve its goals.
            </p>
          </div>
        </section>

        {/* Images Section */}
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1615268734097-12b6b02ca8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1peGluZyUyMGNvbnNvbGUlMjBzdHVkaW98ZW58MXx8fHwxNzczMzIyODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Audio mixing console"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695014192111-be8dd6e9d496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYSUyMHNldHxlbnwxfHx8fDE3NzMzNDg4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Film production"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Custom Web & Video Solutions by Jennifer Kropke
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I specialize in creating tailored digital experiences that combine stunning design, 
                compelling storytelling, and strategic thinking. Whether you need a complete brand 
                overhaul or a single promotional video, I bring creativity, technical expertise, 
                and a passion for mission-driven work to every project.
              </p>
              <p>
                With over a decade of experience working with nonprofits, educational institutions, 
                and community organizations, I understand the unique challenges mission-driven groups 
                face. Limited budgets, tight timelines, and the need to communicate complex ideas 
                simply—these are challenges I navigate daily. My approach is collaborative, transparent, 
                and focused on delivering results that exceed expectations while respecting your resources.
              </p>
              <p>
                What sets my work apart is the combination of technical skill and genuine understanding 
                of storytelling. I don't just create websites or videos—I craft experiences that connect 
                emotionally with your audience, inspire action, and amplify your impact. Every project 
                begins with listening: understanding your mission, your audience, and your goals. From 
                there, I develop a custom strategy that leverages the right mix of design, video, and 
                digital tools to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gradient-to-br from-teal-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center">How I Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-3">01</div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Strategy</h3>
                <p className="text-gray-700">
                  We start with a conversation about your goals, audience, and vision. I take time 
                  to understand your organization's unique story and what success looks like for you.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-secondary mb-3">02</div>
                <h3 className="text-xl font-semibold mb-3">Creation & Collaboration</h3>
                <p className="text-gray-700">
                  I develop concepts, share drafts, and incorporate your feedback throughout the process. 
                  You'll never be surprised—collaboration keeps us aligned every step of the way.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-primary mb-3">03</div>
                <h3 className="text-xl font-semibold mb-3">Delivery & Support</h3>
                <p className="text-gray-700">
                  I deliver polished, professional work on time and provide guidance on implementation. 
                  Post-launch support ensures everything runs smoothly and achieves your objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">What I Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.number}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-primary transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-2xl font-semibold text-primary">
                        {service.number}
                      </span>
                      <Icon className="w-6 h-6 text-secondary mt-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">What Clients Say</h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg relative">
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="px-4 py-2 bg-primary text-white hover:opacity-90 rounded-md transition-opacity"
                >
                  Previous
                </button>
                <button
                  onClick={nextTestimonial}
                  className="px-4 py-2 bg-secondary text-white hover:opacity-90 rounded-md transition-opacity"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Internal Links */}
        <section className="bg-gradient-to-br from-teal-50 to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss your project and create something amazing together. I'm here to help 
              bring your vision to life with custom digital solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-medium"
              >
                Start a Project
              </Link>
              <Link
                to="/projects"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-medium"
              >
                View My Work
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-gray-600 mb-4">
                Interested in other offerings? Check out my <Link to="/music" className="text-primary underline hover:text-secondary">original music for licensing</Link> or read about creative processes and industry insights on my <Link to="/blog" className="text-primary underline hover:text-secondary">blog</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}