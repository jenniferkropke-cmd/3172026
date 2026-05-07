import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import SongCard from '../components/SongCard';
import { getAllSongs } from '../data/songs';

export default function Licensing() {
  const navigate = useNavigate();
  const songs = getAllSongs();

  const handleLicenseClick = (songTitle: string) => {
    navigate('/contact', { state: { songTitle } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Music Licensing - Jennifer Kropke | Sync & Commercial Use"
        description="License original songs from Inherited Weather: Part 1 for TV, film, commercials, podcasts, and digital media. Professionally produced alternative rock, emo, and pop tracks with full commercial rights."
        canonical="https://jenniferkropke.com/licensing"
        keywords="music licensing, sync licensing, TV music, film music, commercial music, podcast music, alternative rock licensing, emo rock licensing"
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-pink-600 text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Music Licensing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              License emotionally resonant tracks from <em>Inherited Weather: Part 1</em> for your TV, film,
              podcast, commercial, or digital media project.
            </p>
            <p className="text-lg text-white/80">
              All songs available for sync licensing with full commercial rights.
            </p>
          </div>
        </section>

        {/* Why License These Songs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why License These Songs?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Emotionally Resonant Themes</h3>
                <p className="text-gray-700">
                  These aren't generic stock tracks. Each song tells a real story about trauma, healing, resilience,
                  and transformation—perfect for projects exploring human complexity and emotional depth.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Genre Diversity</h3>
                <p className="text-gray-700">
                  From alternative rock to piano ballads, emo to pop/EDM—this collection offers stylistic variety
                  while maintaining thematic cohesion around survival, strength, and breaking cycles.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Professional Production Quality</h3>
                <p className="text-gray-700">
                  Radio-ready mixing and polished production that rivals traditionally produced music. Each track
                  is professionally mastered and ready for immediate use in your project.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Full Commercial Rights</h3>
                <p className="text-gray-700">
                  Clear licensing with complete legal protection for TV, film, advertising, podcasts, social media,
                  YouTube, and any commercial use. Simple, straightforward licensing terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Film & TV</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dramatic scenes</li>
                  <li>• Character development moments</li>
                  <li>• Montages & transitions</li>
                  <li>• Emotional turning points</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Media</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Podcasts & audio stories</li>
                  <li>• YouTube content</li>
                  <li>• Social media campaigns</li>
                  <li>• Documentary projects</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Commercial Use</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Brand storytelling</li>
                  <li>• Cause-driven campaigns</li>
                  <li>• Mental health awareness</li>
                  <li>• Nonprofit messaging</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Available Tracks */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Available Tracks</h2>
              <p className="text-gray-600 text-center">
                Listen to 30-second previews and inquire about licensing any track for your project.
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

        {/* Album Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              About Inherited Weather: Part 1
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <em>Inherited Weather: Part 1, The Endless Powers of Me</em> is a 15-track album exploring trauma,
                healing, and breaking generational cycles. The album spans multiple genres—alternative rock, emo,
                jazz blues, punk ballads, piano-driven introspection, and pop/EDM—creating an emotionally diverse
                sonic landscape.
              </p>
              <p>
                The collection explores toxic relationships ("Bleed In Stereo," "Let's Restart"), sexual assault
                survival ("Still Here"), mother-child dynamics ("Fire and Glitter," "16 Candles"), and the
                transformative power of intentional love ("Madelyn," "And Stayed"). Each track brings emotional
                authenticity and depth to projects that need resonance beyond surface-level background music.
              </p>
            </div>
          </div>
        </section>

        {/* Licensing Process / CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to License?
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Get in touch to discuss licensing terms, usage rights, and pricing for your specific project.
              Whether you need a single track or multiple songs, I work with productions of all sizes.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Interested in the artist behind the music? Visit my <Link to="/music" className="text-primary underline hover:text-secondary">artist page</Link> to
              learn more about <em>Inherited Weather</em> or explore my other creative work in <Link to="/services" className="text-primary underline hover:text-secondary">video production and web design</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow inline-block"
              >
                Inquire About Licensing
              </Link>
              <Link
                to="/music"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow inline-block"
              >
                Visit Artist Page
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
