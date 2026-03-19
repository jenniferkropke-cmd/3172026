import { useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
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
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-pink-500 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Music Licensing</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Original AI-generated songs for TV, commercials, TikTok, YouTube, and more. 
              Each track is professionally produced and available for licensing.
            </p>
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
            <p className="text-gray-600 mb-8 text-lg">
              I can create custom songs tailored to your specific project needs. 
              Let's discuss your vision and bring it to life.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-teal-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-shadow inline-block"
            >
              Get In Touch
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}