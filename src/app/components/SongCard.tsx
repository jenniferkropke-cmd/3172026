import { useState, useRef } from 'react';
import { Music, Play, Pause } from 'lucide-react';
import type { Song } from '../data/songs';

interface SongCardProps {
  song: Song;
  onLicenseClick: (songTitle: string) => void;
}

export default function SongCard({ song, onLicenseClick }: SongCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current && !hasError) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Silently handle error - audio file not uploaded yet
            setHasError(true);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleError = () => {
    // Silently handle error - audio file not uploaded yet
    setHasError(true);
    setIsPlaying(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Header with Icon and Genre */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900">{song.title}</h3>
              <p className="text-sm text-gray-600 capitalize">{song.genre}</p>
            </div>
          </div>
          <span className="text-sm text-gray-500 font-mono">{song.duration}</span>
        </div>

        {/* Theme/Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">{song.theme}</p>

        {/* Audio Player */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-pink-500 flex items-center justify-center hover:shadow-md transition-shadow"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
            <div className="flex-1">
              <div className="text-xs text-gray-500 mb-1">Preview (30 seconds)</div>
              <audio
                ref={audioRef}
                src={song.audioFile}
                onEnded={handleEnded}
                onError={handleError}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* License Button */}
        <button
          onClick={() => onLicenseClick(song.title)}
          className="w-full bg-gradient-to-r from-teal-500 to-pink-500 text-white py-3 px-4 rounded-lg hover:shadow-lg transition-shadow font-medium"
        >
          License This Song
        </button>
      </div>
    </div>
  );
}