import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted) {
      playAudio();
    }
  }, [autoPlayTrigger]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(err => {
          console.log("Audio autoplay prevented by browser:", err);
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
      <audio
        ref={audioRef}
        src="/assets/wedding-song.mp3"
        loop
        preload="auto"
      />
      
      <button
        onClick={togglePlay}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#d4af37] shadow-xl transition-all duration-300 transform hover:scale-105 ${
          isPlaying 
            ? 'bg-gradient-to-br from-[#7a1525] to-[#3a080d] text-[#fff0b3]' 
            : 'bg-[#2a060a]/90 text-[#d4af37]'
        }`}
        title={isPlaying ? "Mute Music" : "Play Wedding Song"}
        aria-label="Toggle Wedding Music"
      >
        {/* Animated equalizer waves when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/40 animate-ping pointer-events-none" />
        )}
        
        {isPlaying ? (
          <div className="flex items-center justify-center gap-0.5">
            <Volume2 className="w-5 h-5 text-[#fff0b3] animate-pulse" />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#d4af37]" />
        )}
      </button>
    </div>
  );
}
