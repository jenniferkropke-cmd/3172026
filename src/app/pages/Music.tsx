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
    navigate('/contact', { state: { songTitle } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Jennifer Kropke - Music Artist | Inherited Weather: Part 1"
        description="Electronic Press Kit for Jennifer Kropke. Inherited Weather: Part 1, The Endless Powers of Me is a 15-track album exploring trauma, healing, and breaking generational cycles through alternative rock, emo, jazz blues, and pop/EDM."
        canonical="https://jenniferkropke.com/music"
        keywords="Jennifer Kropke music, Inherited Weather album, alternative rock, emo rock, trauma healing music, generational cycles, independent artist"
      />
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-r from-teal-500 to-pink-500 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold mb-6">Jennifer Kropke</h1>
            <p className="text-2xl text-white/90 mb-4">Music Artist</p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Inherited Weather: Part 1, The Endless Powers of Me
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About the Artist</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Jennifer Kropke is a multimedia artist, creative director, and musician exploring the intersection
                of human experience and modern music production. Jennifer crafts emotionally resonant songs that
                center authenticity, emotional depth, and the courage to confront difficult truths.
              </p>
              <p>
                With over a decade of experience in video production, web design, and digital storytelling for
                mission-driven organizations, Jennifer brings a unique creative vision to music—one that prioritizes
                raw honesty about trauma, healing, and resilience over polished perfection.
              </p>
              <p>
                Based in Chicago, Jennifer's work spans multiple creative disciplines, but music remains the most
                personal: a raw, unfiltered exploration of what it means to survive dysfunction, reclaim identity,
                and choose to love differently.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-teal-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Inherited Weather: Part 1, The Endless Powers of Me
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <em>Inherited Weather: Part 1</em> is a 15-track album that chronicles the journey from dysfunction
                to healing, from trauma to transformation. Each song is a chapter in a larger story about what gets
                passed down through generations—the pain, the patterns, the silent struggles—and what it takes to
                break those cycles.
              </p>
              <p>
                From the raw vulnerability of "My Shame" to the triumphant anthem "The Endless Powers Of Me,"
                the album spans multiple genres: alternative rock, emo, jazz blues, punk ballads, piano-driven
                introspection, and pop/EDM celebration. This stylistic diversity mirrors the complexity of real
                human experience—the contradictions, the shifts, the moments of collapse and rebirth.
              </p>
              <p>
                The album explores toxic relationships ("Bleed In Stereo," "Let's Restart"), sexual assault survival
                ("Still Here"), mother-child dynamics ("Fire and Glitter," "16 Candles"), and the transformative
                power of intentional love ("Madelyn," "And Stayed"). At its core, <em>Inherited Weather</em> asks:
                What do we inherit from those who came before us? And more importantly—what do we choose to pass on?
              </p>
              <p>
                The heart, themes, and emotional truth behind every lyric came from lived experience. This is music
                for anyone who has ever had to rebuild themselves from scratch, who has questioned whether healing
                is possible, or who has chosen to love differently than they were taught.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Track Listing</h2>
              <p className="text-gray-600">
                15 tracks exploring trauma, healing, and the endless powers of resilience
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

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sound & Influences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Genre-Bending Approach</h3>
                <p className="text-gray-700">
                  Blending alternative rock, emo, jazz blues, punk, piano ballads, and pop/EDM to create
                  a sound that refuses to stay in one emotional or sonic lane. The genre diversity mirrors
                  the complexity of the human experience being explored.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Emotionally Raw Storytelling</h3>
                <p className="text-gray-700">
                  Every song confronts difficult truths: toxic love, sexual trauma, dysfunctional families,
                  and the courage it takes to break generational patterns. This isn't music that looks away—it
                  stares directly into the pain and finds power there.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Modern Production</h3>
                <p className="text-gray-700">
                  Professionally produced tracks with radio-ready mixing that balance polished production quality
                  with emotional authenticity. Each song is crafted to sound contemporary while staying true to
                  the raw emotional core of the story being told.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Resilience & Transformation</h3>
                <p className="text-gray-700">
                  While the album explores pain and trauma, it ultimately lands on hope, strength, and the
                  choice to rebuild. The final track, "The Endless Powers Of Me," is an anthem for anyone
                  who has survived and chosen to rise anyway.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Press & Bookings
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              For press inquiries, booking requests, interviews, or collaboration opportunities,
              please reach out. I'm available for podcast appearances, creative collaborations,
              and speaking engagements about trauma, creativity, and breaking generational cycles.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Beyond music, I also offer <Link to="/services" className="text-primary underline hover:text-secondary">video production, web design, and social media content creation</Link> for mission-driven organizations. Explore my <Link to="/projects" className="text-primary underline hover:text-secondary">portfolio of creative work</Link> or read insights about storytelling and resilience on my <Link to="/blog" className="text-primary underline hover:text-secondary">blog</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow inline-block"
              >
                Get in Touch
              </Link>
              <Link
                to="/blog"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow inline-block"
              >
                Read My Blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
