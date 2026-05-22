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
        description="Cinematic alternative pop about healing, identity, and breaking inherited patterns."
        canonical="https://jenniferkropke.com/music"
        keywords="Jennifer Kropke music, Inherited Weather, alternative pop, emo rock, healing music"
      />

      <Header />

      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

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

        {/* MUSIC SECTION */}
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
                    style={{ borderRadius: '12px' }}
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
                    height="175"
                    style={{
                      width: '100%',
                      maxWidth: '660px',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/song/the-endless-powers-of-me/1888047838"
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
                  src="https://www.youtube.com/embed/KzXtJY1a6_A"
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
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/album/4nmiuOsSykjLiGfsui1Qob?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>

                </div>

                {/* Apple Music */}
                <div className="bg-slate-800/80 border border-slate-400/30 rounded-2xl p-8 text-center shadow-xl shadow-slate-900/30">

                  <MusicIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold text-white mb-4">
                    Apple Music
                  </h3>

                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameBorder="0"
                    height="450"
                    style={{
                      width: '100%',
                      maxWidth: '660px',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/album/still-here-single/1894400768"
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
                  src="https://www.youtube.com/embed/djb6CcV5MGs"
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

        {/* ABOUT SECTION */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400">
                Inherited Weather
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">

              <p className="text-xl text-teal-300 italic">
                What do we inherit from the people who raised us? And what do we choose to pass on?
              </p>

              <p>
                <em>Inherited Weather: Part 1</em> is a 15-track album exploring trauma,
                healing, survival, resilience, and transformation.
              </p>

              <p>
                From raw vulnerability to explosive empowerment, the album refuses
                to stay in one emotional or sonic lane.
              </p>

              <p>
                This is music for anyone who has ever had to rebuild themselves from scratch.
              </p>

            </div>
          </div>
        </section>

        {/* TRACK LISTING */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-gray-900">

          <div className="max-w-6xl mx-auto px-6">

            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-2">
                The Album
              </h2>

              <p className="text-gray-400 text-lg">
                15 tracks exploring trauma, healing, and resilience
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

      </main>

      <Footer />
    </div>
  );
}
