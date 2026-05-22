import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import SongCard from '../components/SongCard';
import { getAllSongs } from '../data/songs';
import { Music as MusicIcon, Headphones, Mic2 } from 'lucide-react';

export default function Music() {
  const navigate = useNavigate();
  const songs = getAllSongs();

  const handleLicenseClick = (songTitle: string) => {
    navigate('/contact', { state: { songTitle } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <SEO
        title="Jennifer Kropke - Music | Inherited Weather: Part 1"
        description="Cinematic alternative pop about healing, identity, and breaking inherited patterns. 15-track album Inherited Weather: Part 1, The Endless Powers of Me by Jennifer Kropke."
        canonical="https://jenniferkropke.com/music"
        keywords="Jennifer Kropke music, Inherited Weather, alternative pop, emo rock, healing music, trauma, generational cycles, independent artist, Chicago musician"
      />
      <Header />

      <main className="flex-1">
        {/* HERO SECTION - Dramatic Artist Photo */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* PLACEHOLDER: Replace this div with your dramatic artist photo */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-20"></div>

        <img
  src="/images/uploads/album-cover.jpg"
  className="absolute inset-0 w-full h-full object-cover"
  alt="Jennifer Kropke - Inherited Weather"
/>
          <div className="relative z-30 max-w-5xl mx-auto px-6 text-center text-white">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
              Inherited Weather
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-teal-300 font-light">
              Cinematic alternative pop about healing, identity, and breaking inherited patterns
            </p>
            <p className="text-xl text-white/80">
              Jennifer Kropke
            </p>
          </div>
        </section>

{/* LATEST RELEASE / MUSIC PLAYER SECTION */}
<section className="py-16 bg-gradient-to-b from-gray-900 to-slate-900">
  <div className="max-w-6xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Latest Releases
      </h2>

      <p className="text-gray-400 text-xl">
        Stream Jennifer Kropke on all platforms
      </p>
    </div>

    {/* =========================
        THE ENDLESS POWERS OF ME
    ========================== */}

    <div className="mb-24">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-teal-300 mb-3">
          The Endless Powers Of Me
        </h3>

        <p className="text-gray-400 text-lg">
          Healing. Rebuilding. Becoming.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">

        {/* Spotify */}
        <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-8 text-center shadow-xl shadow-teal-900/20">
          <Headphones className="w-12 h-12 text-teal-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-white mb-4">
            Spotify
          </h3>

          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/7IWEaFpzM8a5lv1yceIO0c?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Apple Music */}
        <div className="bg-slate-800/80 border border-pink-500/30 rounded-2xl p-8 text-center shadow-xl shadow-pink-900/20">
          <MusicIcon className="w-12 h-12 text-pink-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-white mb-4">
            Apple Music
          </h3>

<iframe
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameBorder="0"
  height="450"
  style={{
    width: "100%",
    maxWidth: "660px",
    overflow: "hidden",
    borderRadius: "10px",
  }}
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/album/still-here-single/1894400768"
></iframe>
        </div>
      </div>

      {/* YouTube */}
      <div className="bg-slate-800/80 border border-purple-500/30 rounded-2xl p-8 text-center shadow-xl shadow-purple-900/20">
        <Mic2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />

        <h3 className="text-xl font-semibold text-white mb-4">
          YouTube
        </h3>

<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/djb6CcV5MGs?si=avXNbNqu7PUkw9Y6"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  className="rounded-lg"
></iframe>
      </div>
    </div>

    {/* =========================
            STILL HERE
    ========================== */}

    <div>
      <div className="text-center mb-10">
        <h3 className="text-4xl font-bold text-purple-300 mb-3">
          Still Here
        </h3>

        <p className="text-gray-400 text-lg">
          Surviving what tried to silence you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">

        {/* Spotify */}
        <div className="bg-slate-800/80 border border-purple-400/30 rounded-2xl p-8 text-center shadow-xl shadow-purple-950/30">
          <Headphones className="w-12 h-12 text-purple-300 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-white mb-4">
            Spotify
          </h3>

<iframe
  data-testid="embed-iframe"
  style={{ borderRadius: "12px" }}
  src="https://open.spotify.com/embed/album/4nmiuOsSykjLiGfsui1Qob?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowFullScreen
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
        {/* Apple Music */}
        <div className="bg-slate-800/80 border border-slate-400/30 rounded-2xl p-8 text-center shadow-xl shadow-slate-900/30">
          <MusicIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-white mb-4">
            Apple Music
          </h3>

          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="175"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/still-here-single/1894400768"></iframe>"
          ></iframe>
        </div>
      </div>

      {/* YouTube */}
      <div className="bg-slate-800/80 border border-purple-300/30 rounded-2xl p-8 text-center shadow-xl shadow-purple-950/30">
        <Mic2 className="w-12 h-12 text-purple-300 mx-auto mb-4" />

        <h3 className="text-xl font-semibold text-white mb-4">
          YouTube
        </h3>

        <iframe
          width="100%"
          height="315"
          src="<iframe width="560" height="315" src="https://www.youtube.com/embed/djb6CcV5MGs?si=avXNbNqu7PUkw9Y6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>

  </div>
</section>


        {/* ABOUT INHERITED WEATHER - Emotional Storytelling */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400">Inherited Weather</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl text-teal-300 italic">
                What do we inherit from the people who raised us? And what do we choose to pass on?
              </p>
              <p>
                <em>Inherited Weather: Part 1,</em> is a 15-track album that chronicles
                the journey from dysfunction to healing, from trauma to transformation. Each song is a chapter in
                a larger story about what gets passed down through generations—the pain, the patterns, the silent
                struggles—and what it takes to break those cycles.
              </p>
              <p>
                From the raw vulnerability of "My Shame" to the triumphant anthem "The Endless Powers Of Me,"
                the album refuses to stay in one emotional or sonic lane. Alternative rock bleeds into emo.
                Jazz blues collapses into punk ballads. Piano-driven introspection explodes into pop/EDM celebration.
                This stylistic chaos mirrors the complexity of real human experience—the contradictions, the shifts,
                the moments of collapse and rebirth.
              </p>
              <p>
                The album explores toxic love that consumes you ("Bleed In Stereo," "Let's Restart"), the quiet
                resilience of sexual assault survival ("Still Here"), the complicated love between parent and child
                ("Fire and Glitter," "The Ways We Cracked"), and the transformative power of choosing to parent differently
                ("The Endless Powers Of Me").
              </p>
              <p>
                This is music for anyone who has ever had to rebuild themselves from scratch. For anyone who has
                questioned whether healing is even possible. For anyone who has chosen to love differently than
                they were taught.
              </p>
              <p className="text-xl text-pink-300 font-semibold">
                Because true power doesn't come from escaping pain—it comes from surviving it, rebuilding from it,
                and choosing to rise anyway. Coming Soon: September 2026.
              </p>
            </div>
          </div>
        </section>

        {/* TRACK LISTING */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-2">The Album</h2>
              <p className="text-gray-400 text-lg">
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

        {/* VISUAL IDENTITY SECTION - Artist Photos Placeholder */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Artist Photos</h2>

           <div className="grid md:grid-cols-3 gap-6 mb-8">
  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/images/uploads/artist-photo-1.png"
      alt="Jennifer Kropke"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/images/uploads/artist-photo-2.png"
      alt="Jennifer Kropke"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="aspect-square rounded-lg overflow-hidden">
    <img
      src="/images/uploads/artist-photo-3.png"
      alt="Jennifer Kropke"
      className="w-full h-full object-cover"
    />
  </div>
</div>

 <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-gray-400">
              <p className="text-sm">
                <strong className="text-white">Inherited Weather:</strong> A visual extension of the music itself. 
                Raw emotion, cinematic shadows, resilience, identity, and the tension between surviving what shaped you and becoming something entirely your own.
              </p>
            </div>
          </div>
        </section>

        {/* PRESS / INTERVIEW TOPICS */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Press & Interviews</h2>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">What I Talk About</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  Breaking generational cycles of trauma and dysfunction
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  The intersection of creativity, healing, and resilience
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  Navigating toxic relationships and reclaiming personal power
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  Modern music production and genre-bending approaches
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  Choosing to parent differently and intentional motherhood
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-3">•</span>
                  The emotional truth behind creating deeply personal art
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6 text-lg">
                Available for podcast appearances, interviews, creative collaborations, and speaking engagements.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-teal-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow"
              >
                Book an Interview
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT / SOCIALS */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Connect</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Follow the journey. Stay updated on new releases, shows, and stories.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">

  <a
    href="https://www.instagram.com/mrs._dancing_queen/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-pink-400 transition-all"
  >
    Instagram
  </a>

  <a
    href="https://www.tiktok.com/@mrsdancingqueen"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-teal-400 transition-all"
  >
    TikTok
  </a>

  <a
    href="https://www.youtube.com/@JenniferKropke1"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-red-400 transition-all"
  >
    YouTube
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61563168034809"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-blue-400 transition-all"
  >
    Facebook
  </a>

</div>

            <div className="border-t border-slate-700 pt-8">
              <p className="text-gray-400 mb-6">
                Looking for <Link to="/licensing" className="text-teal-400 underline hover:text-teal-300">music licensing</Link> or other creative services?
                I also offer <Link to="/services" className="text-teal-400 underline hover:text-teal-300">video production and web design</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
