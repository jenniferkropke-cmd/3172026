import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SEO } from "../components/SEO";

const projects = [
  {
    number: "01",
    title: "Seeds of Service",
    description: "Seeds of Service: Sowing Change is an immersive pop-up museum at Southwest Creative Studio celebrating servant leadership through art, history, storytelling, workshops, and community engagement. My work on the project spans exhibition development, educational content, creative direction, programming, and promotion.",
    image: "https://images.squarespace-cdn.com/content/v1/61ec502f80be7a2b22a1a0bf/a4216c28-b1c4-40d8-88b0-e400d5c55470/Add%2Ba%2Bheading.png",
    link: "https://www.southwestcreativestudio.com/seeds-of-service",
    highlights: [
      {
        text: "🌱 Exhibition Development & Curation — Helped shape the pop-up museum experience and organize content around the core principles of servant leadership.",
        url: "https://www.southwestcreativestudio.com/seeds-of-service"
      },
      {
        text: "✍️ Historical & Educational Writing — Researched and wrote featured leader profiles connecting artists, activists, educators, and changemakers to servant-leadership principles.",
        url: "https://jenniferkropke.com/blog/seeds-of-service-grand-opening/"
      },
      {
        text: "🎨 Graphic Design & Museum Materials — Created and contributed to promotional, educational, and exhibition visuals supporting the museum experience.",
        url: "https://www.southwestcreativestudio.com/seeds-of-service"
      },
      {
        text: "📚 Workshop Development — Developed five interactive community workshops connected to the museum's themes of listening, empathy, healing, community, hopeful vision, and stewardship.",
        url: "https://luma.com/seedsofservice"
      },
      {
        text: "📣 Marketing & Promotion — Created digital storytelling, social content, launch materials, event promotion, and outreach supporting the grand opening and ongoing programming.",
        url: "https://luma.com/seedsofservice"
      },
      {
        text: "🎥 Photo, Video & Event Content — Documented and promoted the opening and ongoing Seeds of Service programming through multimedia content.",
        url: "https://jenniferkropke.com/blog/seeds-of-service-grand-opening/"
      },
      {
        text: "🌐 Digital Content & Blogging — Extended the project beyond the physical exhibition through web content, event information, and reflective storytelling.",
        url: "https://jenniferkropke.com/blog/seeds-of-service-grand-opening/"
      },
      {
        text: "🤝 Community Engagement — Supported an experience designed to invite visitors into conversation, reflection, learning, and service.",
        url: "https://dehfoundation.org/international-servant-leaders-museum/"
      },
    ],
  },
  {
    number: "02",
    title: "Dehkhoda Education Foundation",
    description: "The Dehkhoda Educational Foundation promotes peace, progress, and prosperity through cultural and educational initiatives. My creative work with Dehkhoda focuses on multimedia sto[...]",
    image: "https://images.unsplash.com/photo-1764032758859-634187751c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBlZHVjYXRpb24lMjBjdWx0dXJhbCUyMGxlYX[...]",
    link: "https://dehfoundation.org/",
    highlights: [
      {
        text: "🎧 International Servant Leaders Museum Audio Tour — Wrote, produced, and edited a full AI-narrated audio tour showcasing stories of servant leadership.",
        url: "https://youraudiotour.com/tours/welcome-86a096b0-4e17-4fe8-b3f8-81c1d99b22bd/"
      },
      {
        text: "🌐 Virtual Tour Creation & Integration — Designed and integrated a virtual museum tour to expand global accessibility.",
        url: "https://dehfoundation.org/museum-virtual-tour/"
      },
      {
        text: "💻 Website Design & Maintenance — Ongoing design and content updates to maintain accessibility, clarity, and modern visuals.",
        url: "https://dehfoundation.org/"
      },
      {
        text: "📰 Blog Writing & Posting — Created educational and reflective blog content promoting servant leadership and community learning.",
        url: "https://dehfoundation.org/blog/"
      },
      {
        text: "📅 Event Page Creation & Maintenance — Designed and maintained the events page showcasing concerts, lectures, and cultural programs.",
        url: "https://dehfoundation.org/past-events/"
      },
      {
        text: "🎨 Graphic Design & Promotional Materials — Designed event posters, social graphics, and marketing collateral for events and overall promotion.",
        url: "https://www.facebook.com/DehkhodaFoundation"
      },
      {
        text: "🎥 Video & Graphic Creation — Produced promotional and recap videos to highlight events and community engagement.",
        url: "https://www.youtube.com/watch?v=0i3_yHV8S9k"
      },
      {
        text: "📣 Social Media Management & Content Creation — Directed social strategy and produced creative content across platforms.",
        url: "https://www.tiktok.com/@dehfoundation"
      },
    ],
  },
  {
    number: "03",
    title: "Say Yes To Childcare",
    description: "Say Yes To Childcare is a community initiative dedicated to increasing access to the Child Care Assistance Program (CCAP) and supporting childcare centers that serve low-income f[...]",
    image: "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZGNhcmUlMjBraWRzJTIwcGxheWluZyUyMGNvbG9yZj[...]",
    link: "https://sayyestochildcare.org/en/",
    highlights: [
      {
        text: "🌍 Awareness & Outreach Campaign — Directed and produced the overall digital campaign strategy, social content, and partnerships.",
        url: "https://sayyestochildcare.org/en/"
      },
      {
        text: "🎬 CCAP Tutorial Video Creation — Researched, scripted, and produced multilingual tutorial videos guiding parents through the CCAP process.",
        url: "https://sayyestochildcare.org/en/families/#online-application"
      },
      {
        text: "🗺️ CCAP Map Research & Creation — Developed a digital map identifying centers accepting CCAP.",
        url: "https://sayyestochildcare.org/en/ccap-providers-in-northern-cook-county/#provider-list"
      },
      {
        text: "🖋️ Blog Writing & Posting — Wrote and published educational content and success stories.",
        url: "https://sayyestochildcare.org/en/blog/"
      },
      {
        text: "💻 Website Maintenance — Managed content updates, visuals, and structure for user-friendly navigation.",
        url: "https://sayyestochildcare.org/en/"
      },
      {
        text: "📱 Social Media Campaigns & Video Ads — Produced social videos, ads, and campaign materials for platforms including TikTok, YouTube, and Instagram.",
        url: "https://sayyestochildcare.org/en/"
      },
      {
        text: "🎁 Supply Smiles Drive — Led creative direction and marketing for school supply donation drive.",
        url: "https://sayyestochildcare.org/en/supply-smiles-drive/"
      },
      {
        text: "🎁 Tools for Tomorrow Supply Drive — Led creative direction and marketing for educational materials fundraising campaign.",
        url: "https://sayyestochildcare.org/en/tools-for-tomorrow-supply-drive/"
      },
      {
        text: "🎁 Share the Joy Toy Drive — Led creative direction and marketing for holiday toy donation drive.",
        url: "https://sayyestochildcare.org/en/share-the-joy-toy-drive/"
      },
      {
        text: "🎁 Stories for Schools Book Drive — Led creative direction and marketing for book donation drive.",
        url: "https://sayyestochildcare.org/en/stories-for-schools-book-drive/"
      },
    ],
  },
  {
    number: "04",
    title: "Kids Academy Early Learning Center",
    description: "Kids Academy is an early learning center dedicated to nurturing young minds in a creative and structured environment. My projects support communication, organization, and staff c[...]",
    image: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjbGFzc3Jvb20lMjBsZWFybmluZyUyM[...]",
    link: "https://kidsacademy.love/",
    highlights: [
      {
        text: "💻 Staff Resource Webpage — Designed an internal webpage featuring classroom inventory lists, documents, and resources to improve communication and workflow.",
        url: "https://kidsacademy.love/"
      },
      {
        text: "🖋️ Blog Writing & Posting — Created engaging educational blog posts for parents and staff on classroom learning and child development topics.",
        url: "https://kidsacademy.love/news/"
      },
      {
        text: "🖼️ Website Maintenance & Updates — Updated photos, events, menus, and calendars to keep website content current and engaging for families.",
        url: "https://kidsacademy.love/"
      },
      {
        text: "🎨 Social Media Graphic Design & Content Creation — Designed visuals and wrote copy for social media posts promoting school programs, holidays, and community events.",
        url: "https://www.facebook.com/TheKidsAcademy"
      },
      {
        text: "🎶 Multimedia Production for Performance Nights — Mixed music tracks and created slideshow presentations for Kids Academy's performance nights, combining photos, graphics, and [...].",
        url: "https://kidsacademy.love/"
      },
      {
        text: "🏫 Virtual Tour Creation — Created an interactive virtual tour of the Kids Academy facility, providing families with an engaging digital walkthrough experience that highlights [...].",
        url: "https://kidsacademy.love/virtual-tour/"
      },
    ],
  },
  {
    number: "05",
    title: "Twinkle Toes Today",
    description: "Twinkle Toes Today offers creative dance education and online learning opportunities for children. My work elevated their online presence and streamlined digital interaction.",
    image: "https://images.unsplash.com/photo-1596315458574-d99efaea3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGJhbGxldCUyMGRhbmNlJTIwY2xhc3N8Z[...]",
    link: "https://twinkletoes2day.com/#/",
    highlights: [
      {
        text: "💻 Website Design & E-Store Creation — Developed a modern site with integrated e-commerce, event registration, and live streaming.",
        url: "https://twinkletoes2day.com/#/"
      },
      {
        text: "🎨 Logo Design & Branding — Created a playful, modern logo and full visual identity system.",
        url: "https://jlkproductions.wixsite.com/twinkletoes2day"
      },
      {
        text: "🛒 E-Commerce Integration — Built an online store for merchandise and ticket sales.",
        url: "https://t3-apparel.creator-spring.com/"
      },
      {
        text: "📺 Live Streaming Setup — Established online event systems and live broadcast workflows for performances.",
        url: "https://jlkproductions.wixsite.com/twinkletoes2day"
      },
      {
        text: "📱 Social Media Video Creation — Produced promotional videos and event highlights for YouTube and TikTok.",
        url: "https://www.youtube.com/watch?v=uB4MCvUNo4s"
      },
    ],
  },
  {
    number: "06",
    title: "Prestige Transportation Group",
    description: "Prestige Transportation Group is a professional driving and logistics company providing safe, reliable, and high-end transportation services. My work focused on creating a cohes[...]",
    image: "https://images.unsplash.com/photo-1653464138788-621777596fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaW1vdXNpbmUlMjBibGFjayUyMGNhciUyM[...]",
    link: "https://ptglimos.com/",
    highlights: [
      {
        text: "💻 Website Design & Development — Designed and built the company's website to highlight its services, fleet, and booking process. Focused on intuitive navigation, clear service[...]",
        url: "https://ptglimos.com/"
      },
      {
        text: "💼 Business Card Design — Created sleek, professional business cards aligning with the brand's aesthetic and color palette. The design emphasized modern typography, readability[...]",
        url: "https://ptglimos.com/"
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Projects - Jennifer Kropke | Creative Direction & Digital Media"
        description="Portfolio of creative direction, museum and exhibition work, digital media, web design, social campaigns, video production, and educational storytelling for mission-driven organizations."
        canonical="https://jenniferkropke.com/projects"
        keywords="portfolio, projects, creative direction, digital media, video production, web design, nonprofit marketing, educational content"
      />
      <Header />

      <main className="flex-1 bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-4">Projects</h1>
          <p className="text-center text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            A collection of my creative direction, digital media, and design work — spanning 
            video production, web design, social campaigns, and educational storytelling for 
            organizations dedicated to community, education, and servant leadership.
          </p>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-semibold text-gray-300">
                        {project.number}
                      </span>
                      <a
                        href={project.link}
                        className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        {project.title}
                      </a>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => {
                        if (typeof highlight === 'string') {
                          return (
                            <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                              {highlight}
                            </p>
                          );
                        }
                        return (
                          <a
                            key={idx}
                            href={highlight.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-gray-700 hover:text-gray-900 leading-relaxed transition-colors hover:underline"
                          >
                            {highlight.text}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}