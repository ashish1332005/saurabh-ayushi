import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RoyalGate({ onGateOpened }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGate = () => {
    if (isOpening) return;

    // The visual state and navigation never depend on the optional confetti effect.
    setIsOpening(true);
    window.setTimeout(onGateOpened, 420);

    try {
      confetti({
        particleCount: 160,
        spread: 160,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#E87A90', '#FFB7B2', '#FFD166', '#FFF0B3', '#8C1823'],
        ticks: 320,
        gravity: 0.75,
        scalar: 1.3
      });
      window.setTimeout(() => {
        try {
          confetti({ particleCount: 85, angle: 60, spread: 90, origin: { x: 0.1, y: 0.65 }, colors: ['#FFD700', '#FF85A1', '#FFF8EA'] });
          confetti({ particleCount: 85, angle: 120, spread: 90, origin: { x: 0.9, y: 0.65 }, colors: ['#FFD700', '#FF85A1', '#FFF8EA'] });
        } catch (_) { /* optional effect only */ }
      }, 250);
    } catch (_) { /* optional effect only */ }
  };

  // Falling ambient flower petals
  const surprisePetals = Array.from({ length: 24 }).map((_, i) => {
    const angle = (i / 24) * 360;
    const distance = 100 + (i % 6) * 30;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance;
    const colors = ['#e87a90', '#ffb7b2', '#ffd166', '#d4af37', '#8c1823'];
    return {
      id: i,
      tx: `${tx.toFixed(1)}px`,
      ty: `${ty.toFixed(1)}px`,
      delay: `${(0.04 + (i % 6) * 0.05).toFixed(2)}s`,
      size: 16 + (i % 4) * 4,
      color: colors[i % colors.length]
    };
  });

  return (
    <div className={`royal-gate-stage ${isOpening ? 'is-opening' : ''}`}><div className="gate-opening-reveal" aria-hidden="true" /><div className="gate-door gate-door-left" aria-hidden="true" /><div className="gate-door gate-door-right" aria-hidden="true" /><div className="relative z-20 w-full h-full max-w-[480px] mx-auto flex flex-col items-center justify-between pt-2 pb-8 px-4 overflow-hidden select-none">
      
      {/* 1. TOP LOGO SECTION: Transparent Monogram */}
      <div 
        className={`flex flex-col items-center text-center z-20 w-full pt-1 transition-all duration-700 ease-out ${
          isOpening ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Hanging Chain & Monogram */}
        <div className="flex flex-col items-center animate-hanging-chain">
          {/* Delicate Antique Gold Vine Stem */}
          <div className="w-5 sm:w-6 h-9 sm:h-12 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 24 120" fill="none" className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" preserveAspectRatio="none">
              <defs>
                <linearGradient id="vineGoldStem" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF0B3" />
                  <stop offset="45%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#997312" />
                </linearGradient>
                <linearGradient id="leafGoldFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bfa15f" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#785e25" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              <path d="M12,0 Q9,30 12,60 Q15,90 12,120" stroke="url(#vineGoldStem)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M12,8 Q4,4 6,12 Q10,11 12,8" fill="url(#leafGoldFill)" stroke="#544116" strokeWidth="0.5" />
              <path d="M12,16 Q20,12 18,20 Q14,19 12,16" fill="url(#leafGoldFill)" stroke="#544116" strokeWidth="0.5" />
              <path d="M12,34 Q4,30 5,38 Q10,37 12,34" fill="url(#leafGoldFill)" stroke="#544116" strokeWidth="0.5" />
              <path d="M12,42 Q20,38 19,46 Q14,45 12,42" fill="url(#leafGoldFill)" stroke="#544116" strokeWidth="0.5" />
              <path d="M12,62 Q4,58 6,66 Q10,65 12,62" fill="url(#leafGoldFill)" stroke="#544116" strokeWidth="0.5" />
              <path d="M12,70 Q20,66 18,74 Q14,73 12,70" fill="url(#leafGoldFill)" stroke="#544116" strokeWidth="0.5" />
              <circle cx="12" cy="24" r="1.4" fill="#FFF0B3" stroke="#D4AF37" strokeWidth="0.4" />
              <circle cx="12" cy="52" r="1.4" fill="#FFF0B3" stroke="#D4AF37" strokeWidth="0.4" />
              <circle cx="12" cy="80" r="1.4" fill="#FFF0B3" stroke="#D4AF37" strokeWidth="0.4" />
            </svg>
          </div>

          {/* Clean Transparent "अ & S" Monogram */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 -mt-2 hover:scale-105 transition-transform cursor-pointer flex items-center justify-center">
            <img 
              src="/assets/saurabh-aayushi/as-monogram-clean.png" 
              alt="Saurabh & Aayushi Monogram" 
              className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.28)]"
            />
          </div>
        </div>
      </div>

      {/* 2. CENTER TITLE: "Wardrobe Planner" */}
      <div 
        className={`planner-title flex flex-col items-center justify-center py-1 px-2 z-20 text-center transition-all duration-700 ease-out ${
          isOpening ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <img 
          src="/assets/saurabh-aayushi/wardrobe-planner-title.png" 
          alt="Wardrobe Planner - Let's help you pack for the wedding" 
          className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain filter drop-shadow-xs"
        />
      </div>

      {/* 3. CENTER DOOR PLAQUE: "Open me" (Positioned directly over the painted plaque) */}
      <div className="gate-plaque relative z-40 w-full flex flex-col items-center justify-center" onPointerUp={handleOpenGate}>
        {!isOpening ? (
          <button
            onClick={handleOpenGate}
            className="group relative px-7 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-b from-[#fffefc] via-[#fff8ec] to-[#fdedce] border-2 border-[#b58b4c] shadow-[0_12px_32px_rgba(0,0,0,0.35)] rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5"
          >
            {/* Shimmer pulse effect */}
            <span className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping pointer-events-none opacity-40" />
            <span className="text-[#b58b4c] text-sm animate-pulse">🌸</span>
            <span className="font-serif-royal text-xl sm:text-2xl font-bold text-[#5c131a] tracking-wider leading-none">
              Open me
            </span>
            <span className="text-[#b58b4c] text-sm animate-pulse">🌸</span>
          </button>
        ) : (
          /* Bursting petals on click */
          surprisePetals.map((p) => (
            <div
              key={p.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-flower-surprise z-40"
              style={{
                '--tx': p.tx,
                '--ty': p.ty,
                animationDelay: p.delay
              }}
            >
              <svg width={p.size} height={p.size * 1.3} viewBox="0 0 30 40" fill={p.color} className="opacity-95 filter drop-shadow-md">
                <path d="M15,0 Q30,15 15,40 Q0,15 15,0 Z" />
              </svg>
            </div>
          ))
        )}
      </div>

      </div>
      <div className="gate-opening-glow" aria-hidden="true" />
    </div>
  );
}
