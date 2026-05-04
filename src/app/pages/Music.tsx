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
        description="Electronic Press Kit for Jennifer Kropke. Inherited Weather: Part 1, The Endless Powers of Me is a genre-blending album exploring trauma, healing, and breaking generational cycles."
        canonical="https://jenniferkropke.com/music"
        keywords="Jennifer Kropke music, Inherited Weather album, alternative rock, emo rock, trauma healing music, generational cycles, independent artist"
      />
      <Header />

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-gradient-to-r from-teal-500 to-pink-500 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold mb-6">Jennifer Kropke</h1>
            <p className="text-2xl text-white/90 mb-4">Music Artist</p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Inherited Weather: Part 1, The Endless Powers of Me
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About the Artist</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Jennifer Kropke is a Chicago-based alternative artist blending raw emotional storytelling with
                genre-bending production. Her music explores trauma, healing, and breaking generational cycles—
                transforming deeply personal experiences into powerful, anthemic sound.
              </p>
              <p>
                Drawing from a background in digital storytelling and creative direction, Jennifer brings a
                cinematic and emotionally immersive approach to her music. Each track is rooted in lived experience,
                offering an unfiltered look at resilience, identity, and the choice to rebuild.
              </p>
            </div>
          </div>
        </section>

        {/* ALBUM */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-pink-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Inherited Weather: Part 1, The Endless Powers of Me
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <em>Inherited Weather: Part 1</em> is a 15-track concept album exploring generational trauma,
                healing, and identity. Each song represents a chapter in breaking inherited patterns and choosing
                a different path forward.
              </p>
              <p>
                Blending alternative rock, emo, piano-driven ballads, and pop/EDM elements, the album reflects
                the emotional complexity of real human experience—shifting between vulnerability, collapse,
                and empowerment.
              </p>
              <p>
                Standout tracks include <strong>"Still Here"</strong>, a quiet anthem of survival,
                <strong> "My Shame"</strong>, exploring toxic love cycles, and
                <strong> "The Endless Powers Of Me"</strong>, a powerful statement of resilience and self-reclamation.
              </p>
            </div>
          </div>
        </section>

        {/* FOR FANS OF */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">For Fans Of</h2>
            <p className="text-lg text-gray-700">
              Adele • Sia • Halsey • Evanescence • Paramore
            </p>
          </div>
        </section>

        {/* TRACK LIST + LISTEN */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Track Listing</h2>
              <p className="text-gray-600">
                15 tracks exploring trauma, healing, and resilience
              </p>
            </div>

            {/* LISTEN LINKS */}
            <div className="text-center mb-10">
              <p className="text-gray-600 mb-4">Listen Now</p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a href="https://open.spotify.com/artist/3Bjg3nwgTBbIs4ApBk7gs4?si=AgBmwBfqTsuZcVet-0Y0NA" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Spotify
                </a>
                <a href="https://music.apple.com/us/artist/jennifer-kropke/1887719017" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Apple Music
                </a>
                <a href="https://www.youtube.com/@JenniferKropke1" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  YouTube
                </a>
              </div>
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

        {/* SOUND & INFLUENCES */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sound & Influences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Genre-Bending Sound</h3>
                <p className="text-gray-700">
                  A fusion of alternative rock, emo, piano ballads, and modern pop production that moves fluidly
                  between vulnerability and intensity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Emotional Storytelling</h3>
                <p className="text-gray-700">
                  Each song is rooted in real experience, confronting difficult themes while creating space for
                  connection, reflection, and healing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Modern Production</h3>
                <p className="text-gray-700">
                  Clean, contemporary production designed to feel both radio-ready and emotionally authentic.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Resilience & Transformation</h3>
                <p className="text-gray-700">
                  Music that moves through pain but ultimately lands in strength, growth, and self-reclamation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Press & Bookings
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              For press inquiries, interviews, collaborations, or booking requests, please get in touch.
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
