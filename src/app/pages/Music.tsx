import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import SongCard from '../components/SongCard';
import { getAllSongs } from '../data/songs';

export default function Music() {
  const navigate = useNavigate();
  const songs = getAllSongs();

  const handleLicenseClick = (songTitle: string) => {
    // Navigate to contact page with song info in state
    navigate('/contact', { state: { songTitle } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Music Licensing - Jennifer Kropke | AI-Generated Original Songs"
        description="License original AI-generated songs for TV, commercials, YouTube, TikTok, and podcasts. Professionally produced tracks exploring trauma, healing, and resilience with full commercial copyright. Genres include alternative rock, emo, jazz blues, and pop/EDM."
        canonical="https://jenniferkropke.com/music"
        keywords="music licensing, AI-generated music, stock music, royalty-free music, commercial music licensing, TV music, podcast music, YouTube music, alternative rock, emo rock, emotional music licensing"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-pink-500 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Music Licensing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Original AI-generated songs for TV, commercials, YouTube, TikTok, podcasts, and more. 
              Each track is professionally produced and available for licensing with full commercial rights.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              All music created with ilovesong.ai with complete commercial copyright protection.
            </p>
          </div>
        </section>

        {/* About the Music Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Story Behind the Music</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                These songs are deeply personal explorations of trauma, healing, resilience, and breaking generational cycles. 
                Created using AI music generation technology through ilovesong.ai, each track represents a chapter in a larger 
                story about surviving dysfunction, reclaiming identity, and choosing to love differently.
              </p>
              <p>
                From the raw vulnerability of "My Shame" to the triumphant anthem "The Endless Powers Of Me," 
                this collection spans multiple genres—alternative rock, emo, jazz blues, punk ballads, and pop/EDM. 
                The emotional range mirrors the complexity of real human experience: the pain of toxic relationships, 
                the healing power of dance and creativity, and the courage it takes to rebuild after trauma.
              </p>
              <p>
                While AI technology handled the musical composition and production, the heart, themes, and emotional truth 
                behind every lyric came from lived experience. This fusion of human storytelling and technological innovation 
                creates music that's both technically polished and emotionally authentic—perfect for projects that need depth, 
                rawness, and resonance.
              </p>
            </div>
          </div>
        </section>

        {/* Why License These Songs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why License These Songs?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Commercial Copyright Included</h3>
                <p className="text-gray-700">
                  All songs were created with ilovesong.ai under a commercial subscription, giving you complete legal 
                  protection for TV, film, advertising, social media, and any commercial use.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Emotionally Resonant Themes</h3>
                <p className="text-gray-700">
                  These aren't generic stock tracks. Each song tells a real story about trauma, healing, resilience, 
                  and transformation—perfect for projects exploring human complexity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Genre Diversity</h3>
                <p className="text-gray-700">
                  From alternative rock to piano ballads, punk to pop/EDM—this collection offers stylistic variety 
                  while maintaining thematic cohesion around survival and strength.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Professional Production Quality</h3>
                <p className="text-gray-700">
                  AI-generated music has evolved dramatically. These tracks feature polished production, strong vocals, 
                  and radio-ready mixing that rivals traditionally produced music.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Songs Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Songs</h2>
              <p className="text-gray-600">
                Listen to 30-second previews and contact me to license any track for your project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {songs.map((song) => (
                <SongCard 
                  key={song.id} 
                  song={song} 
                  onLicenseClick={handleLicenseClick}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Custom Music?
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              I can create custom songs tailored to your specific project needs. 
              Whether you need background music for a video project, a theme song for a podcast, 
              or original music that captures a specific mood or message, I can help bring your vision to life through AI-powered music creation.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Looking for other creative services? I also offer <Link to="/services" className="text-primary underline hover:text-secondary">video production, web design, and social media content creation</Link> for mission-driven organizations. Check out my <Link to="/projects" className="text-primary underline hover:text-secondary">portfolio of past work</Link> or read insights about creativity and storytelling on my <Link to="/blog" className="text-primary underline hover:text-secondary">blog</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-teal-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow"
              >
                License a Song
              </button>
              <Link
                to="/contact"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow inline-block"
              >
                Request Custom Music
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}