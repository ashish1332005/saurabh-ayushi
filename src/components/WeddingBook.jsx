import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Clock, Sparkles, Heart, CheckCircle } from 'lucide-react';
import WardrobeGuide from './WardrobeGuide';

export default function WeddingBook({ onOpenRSVP }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Countdown timer calculations
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-12-08T11:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
          secs: Math.floor((diff / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const galleryImages = [
    { src: '/assets/gallery-1.png', caption: 'Us' },
    { src: '/assets/gallery-2.png', caption: 'Forever' },
    { src: '/assets/gallery-3.png', caption: 'Together' },
    { src: '/assets/gallery-4.png', caption: 'Always' }
  ];

  const events = [
    {
      id: 'haldi',
      title: 'Haldi Carnival',
      img: '/assets/event-haldi.png',
      tint: '#2d2208',
      accent: '#B8860B',
      border: '#EBD79A',
      date: 'Tuesday, 8 December 2026',
      time: '11:00 AM onwards',
      venue: 'Marigold Lawns, Le Méridien Jaipur',
      dress: 'Yellow & Marigold',
      note: 'A golden morning of turmeric, laughter and blessings.'
    },
    {
      id: 'mayra',
      title: 'Nanihaal ka Dulaar (Mayra)',
      img: '/assets/event-mayra.png',
      tint: '#2d0818',
      accent: '#C2185B',
      border: '#F3C2D4',
      date: 'Wednesday, 9 December 2026',
      time: '12:00 PM onwards',
      venue: 'Heritage Courtyard, Le Méridien Jaipur',
      dress: 'Traditional Ivory',
      note: 'A family ceremony of gifts, warmth and tradition.'
    },
    {
      id: 'sangeet',
      title: 'Sangeet Night',
      img: '/assets/event-sangeet.png',
      tint: '#2a060f',
      accent: '#8B1E3F',
      border: '#E7B9BE',
      date: 'Wednesday, 9 December 2026',
      time: '7:30 PM onwards',
      venue: 'Crystal Ballroom, Le Méridien Jaipur',
      dress: 'Glitter & Glam',
      note: 'Tabla, ghungroo and dance till the last song.'
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony',
      img: '/assets/event-wedding.png',
      tint: '#0f240e',
      accent: '#4B6B4A',
      border: '#C4D6BF',
      date: 'Thursday, 10 December 2026',
      time: 'Sunset, 5:30 PM',
      venue: 'Mandap Gardens, Le Méridien Jaipur',
      dress: 'Royal Reds & Gold',
      note: 'Seven vows beneath a canopy of stars and marigolds.'
    },
    {
      id: 'reception',
      title: 'Grand Reception',
      img: '/assets/event-reception.png',
      tint: '#0a162d',
      accent: '#27408B',
      border: '#BDC9E6',
      date: 'Thursday, 10 December 2026',
      time: '9:00 PM onwards',
      venue: 'Grand Ballroom, Le Méridien Jaipur',
      dress: 'Black Tie & Blush',
      note: 'A royal feast under crystal chandeliers.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-3 sm:p-6 bg-velvet text-[#fff8ea]">
      {/* Background Ornament Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-30 pointer-events-none" />

      {/* Book Container Frame */}
      <div className="book-perspective relative w-full max-w-2xl mx-auto z-10">
        
        {/* Book Hardcover & Page Shadow */}
        <div className="relative bg-[#26050a] border-4 border-[#d4af37] rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-md min-h-[580px] flex flex-col justify-between">
          
          {/* Inner Golden Foil Border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#d4af37]/40 rounded-2xl pointer-events-none" />

          {/* PAGE CONTENT RENDERING */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">

            {/* PAGE 1: COVER & PORTRAIT GALLERY */}
            {currentPage === 1 && (
              <div className="text-center animate-fadeIn py-2">
                <span className="font-script-royal text-3xl sm:text-4xl text-[#d4af37]">
                  Royal Wedding Invitation
                </span>
                <h1 className="font-display-royal text-5xl sm:text-7xl text-gold-gradient my-1">
                  Riya &amp; Abhinav
                </h1>
                <p className="font-serif-royal text-xs tracking-[0.25em] text-[#ebd79a] uppercase mb-4">
                  8 • 9 • 10 December 2026 • Jaipur
                </p>

                {/* Portrait Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-lg mx-auto my-4">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="group relative rounded-xl overflow-hidden border border-[#d4af37]/50 aspect-[3/4] shadow-md bg-[#180407]">
                      <img 
                        src={img.src} 
                        alt={img.caption} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 text-center">
                        <span className="font-script-royal text-sm text-[#fff0b3]">
                          {img.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-serif-royal text-xs text-[#ebd79a]/70 italic mt-2">
                  "Two souls, one royal celebration. Turn page to read invitation."
                </p>
              </div>
            )}

            {/* PAGE 2: INVITATION & FAMILY BLESSINGS */}
            {currentPage === 2 && (
              <div className="text-center animate-fadeIn py-4 px-2 sm:px-6">
                <p className="font-serif-royal text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-2">
                  Shree Ganeshay Namah
                </p>
                <h2 className="font-display-royal text-4xl sm:text-5xl text-gold-gradient mb-4">
                  You Are Invited
                </h2>

                <div className="space-y-4 max-w-md mx-auto bg-[#180407]/70 border border-[#d4af37]/30 rounded-2xl p-5 shadow-inner">
                  {/* Bride Details */}
                  <div>
                    <h3 className="font-display-royal text-3xl text-[#fff0b3]">Riya</h3>
                    <p className="font-serif-royal text-xs text-[#ebd79a]/80">
                      (Daughter of Smt. Kavita &amp; Sh. Manish Bahety)
                    </p>
                  </div>

                  <div className="font-script-royal text-2xl text-[#d4af37]">&amp;</div>

                  {/* Groom Details */}
                  <div>
                    <h3 className="font-display-royal text-3xl text-[#fff0b3]">Abhinav</h3>
                    <p className="font-serif-royal text-xs text-[#ebd79a]/80">
                      (Son of Smt. Jyoti &amp; Sh. Kailash Agarwal)
                    </p>
                  </div>
                </div>

                <div className="mt-6 font-serif-royal text-xs text-[#ebd79a] space-y-1">
                  <p className="italic">Soliciting your gracious presence and blessings</p>
                  <p className="font-bold text-[#fff0b3] text-sm pt-1">
                    Bahety &amp; Agarwal Parivaar
                  </p>
                </div>
              </div>
            )}

            {/* PAGE 3: THREE DAYS OF CELEBRATION (EVENTS) */}
            {currentPage === 3 && (
              <div className="animate-fadeIn py-2">
                <div className="text-center mb-4">
                  <h2 className="font-display-royal text-4xl sm:text-5xl text-gold-gradient">
                    Wedding Events
                  </h2>
                  <p className="font-serif-royal text-xs uppercase tracking-[0.2em] text-[#ebd79a]">
                    Three Days of Joyous Festivities
                  </p>
                </div>

                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                  {events.map((ev) => (
                    <div 
                      key={ev.id}
                      style={{ backgroundColor: ev.tint, borderColor: ev.border + '60' }}
                      className="border rounded-2xl p-3.5 flex flex-col sm:flex-row gap-3 items-center shadow-lg transition-transform hover:scale-[1.01]"
                    >
                      <img 
                        src={ev.img} 
                        alt={ev.title} 
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl bg-black/20 p-1 flex-shrink-0"
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="font-serif-royal text-base sm:text-lg font-bold text-[#fff0b3]">
                            {ev.title}
                          </h3>
                          <span 
                            style={{ color: ev.accent, borderColor: ev.accent + '60' }} 
                            className="font-serif-royal text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border bg-black/30 inline-block self-center sm:self-auto"
                          >
                            {ev.dress}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center sm:justify-start gap-3 font-serif-royal text-xs text-[#ebd79a]/90 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#d4af37]" />
                            {ev.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#d4af37]" />
                            {ev.time}
                          </span>
                        </div>

                        <p className="font-serif-royal text-xs text-[#fff0b3]/70 italic mt-1">
                          {ev.venue} — {ev.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 4: WARDROBE GUIDE */}
            {currentPage === 4 && (
              <div className="animate-fadeIn py-2">
                <WardrobeGuide />
              </div>
            )}

            {/* PAGE 5: COUNTDOWN, MAP & RSVP */}
            {currentPage === 5 && (
              <div className="text-center animate-fadeIn py-2">
                <span className="font-script-royal text-3xl text-[#d4af37]">
                  Counting Down to the Celebration
                </span>
                <h2 className="font-serif-royal text-2xl font-bold text-[#fff0b3] mb-4">
                  #AbhiKiRiya
                </h2>

                {/* Countdown Cards */}
                <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto mb-6">
                  {[
                    { label: 'Days', val: timeLeft.days },
                    { label: 'Hours', val: timeLeft.hours },
                    { label: 'Mins', val: timeLeft.mins },
                    { label: 'Secs', val: timeLeft.secs }
                  ].map((unit, i) => (
                    <div key={i} className="bg-[#180407] border border-[#d4af37]/40 rounded-xl p-2 text-center shadow">
                      <span className="font-serif-royal text-xl sm:text-2xl font-bold text-gold-gradient block">
                        {unit.val}
                      </span>
                      <span className="font-serif-royal text-[9px] uppercase tracking-wider text-[#ebd79a]">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Venue Details & Map Link */}
                <div className="bg-[#180407]/80 border border-[#d4af37]/30 rounded-2xl p-4 max-w-md mx-auto mb-6">
                  <div className="flex items-center justify-center gap-2 text-[#d4af37] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-serif-royal text-xs uppercase font-bold tracking-widest">
                      Venue Location
                    </span>
                  </div>
                  <h4 className="font-serif-royal text-base text-[#fff0b3] font-semibold">
                    Le Méridien Jaipur
                  </h4>
                  <p className="font-serif-royal text-xs text-[#ebd79a]/70 mt-0.5">
                    RIICO, Kukas, Jaipur, Rajasthan 302028
                  </p>
                  
                  <a 
                    href="https://maps.google.com/?q=Le+Meridien+Jaipur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-serif-royal text-[#d4af37] underline hover:text-[#fff0b3] transition-colors"
                  >
                    <span>Fly me to the venue</span>
                  </a>
                </div>

                {/* RSVP Launch Button */}
                <button
                  onClick={onOpenRSVP}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fff0b3] to-[#d4af37] text-[#2a060a] font-serif-royal font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all"
                >
                  Confirm Your RSVP
                </button>
              </div>
            )}

          </div>

          {/* PAGE NAVIGATION FOOTER CONTROLS */}
          <div className="relative z-20 pt-4 border-t border-[#d4af37]/30 flex items-center justify-between">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border font-serif-royal text-xs transition-all ${
                currentPage === 1 
                  ? 'border-gray-700 text-gray-600 opacity-40 cursor-not-allowed' 
                  : 'border-[#d4af37]/60 bg-[#3a080d] text-[#fff0b3] hover:bg-[#4a0b12]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Page</span>
            </button>

            {/* Page Indicators */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === page 
                      ? 'bg-[#d4af37] w-6' 
                      : 'bg-[#d4af37]/30 hover:bg-[#d4af37]/60'
                  }`}
                  title={`Page ${page}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border font-serif-royal text-xs transition-all ${
                currentPage === totalPages 
                  ? 'border-gray-700 text-gray-600 opacity-40 cursor-not-allowed' 
                  : 'border-[#d4af37]/60 bg-[#3a080d] text-[#fff0b3] hover:bg-[#4a0b12]'
              }`}
            >
              <span>Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
