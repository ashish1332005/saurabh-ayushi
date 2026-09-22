import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnvelopeScreen({ onOpenGate, onStartMusic }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScratched, setIsScratched] = useState(false);
  const canvasRef = useRef(null);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    if (onStartMusic) onStartMusic();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF0B3', '#8B1E3F']
    });
  };

  // Setup Scratch Canvas for date reveal
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Fill with metallic gold scratch overlay
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#d4af37');
    grad.addColorStop(0.5, '#fff0b3');
    grad.addColorStop(1, '#aa7c11');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.font = 'bold 13px "Karla", sans-serif';
    ctx.fillStyle = '#3a080d';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH HERE TO REVEAL DATE ✨', width / 2, height / 2 + 4);

    let isDrawing = false;
    let scratchedPixels = 0;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();

      // Check scratched percentage roughly
      scratchedPixels += 1;
      if (scratchedPixels > 25 && !isScratched) {
        setIsScratched(true);
      }
    };

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * (canvas.width / rect.width),
        y: (clientY - rect.top) * (canvas.height / rect.height)
      };
    };

    const handleStart = (e) => {
      isDrawing = true;
      const { x, y } = getPos(e);
      scratch(x, y);
    };

    const handleMove = (e) => {
      if (!isDrawing) return;
      const { x, y } = getPos(e);
      scratch(x, y);
    };

    const handleEnd = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    canvas.addEventListener('touchstart', handleStart);
    canvas.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      canvas.removeEventListener('mousedown', handleStart);
      canvas.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('touchstart', handleStart);
      canvas.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isOpen]);

  const handleQuickReveal = () => {
    setIsScratched(true);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 bg-velvet text-[#fff8ea] overflow-hidden">
      {/* Background Decorative Gold Stars / Sparkles */}
      <div className="absolute inset-0 bg-royal-pattern opacity-40 pointer-events-none" />

      {/* Main Title Header */}
      <div className="text-center z-10 mb-6 max-w-lg">
        <p className="font-serif-royal tracking-[0.3em] uppercase text-xs text-[#d4af37] mb-2">
          Save The Date
        </p>
        <h1 className="font-display-royal text-5xl md:text-7xl text-gold-gradient drop-shadow-md">
          Riya &amp; Abhinav
        </h1>
        <p className="font-serif-royal text-sm md:text-base text-[#ebd79a]/90 mt-1 italic">
          Are tying the knot in Jaipur
        </p>
      </div>

      {/* Envelope Container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {!isOpen ? (
          /* Closed Envelope Card */
          <div 
            onClick={handleOpenEnvelope}
            className="group relative cursor-pointer transform hover:scale-[1.02] transition-all duration-500 w-full max-w-[340px]"
          >
            <div className="relative bg-[#4a0b12] border-2 border-[#d4af37]/60 rounded-2xl p-4 shadow-2xl overflow-hidden text-center">
              {/* Envelope Red Image */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <img 
                  src="/assets/envelope-red.png" 
                  alt="Red Velvet Envelope" 
                  className="w-full h-full object-contain filter drop-shadow-xl"
                />
                
                {/* Wax Seal Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] via-[#fff0b3] to-[#8b6508] p-[2px] shadow-2xl animate-pulse">
                    <div className="w-full h-full rounded-full bg-[#3a080d] flex items-center justify-center border border-[#d4af37]">
                      <span className="font-display-royal text-2xl text-[#fff0b3]">RA</span>
                    </div>
                  </div>
                  <span className="mt-3 font-serif-royal text-xs tracking-widest text-[#fff0b3] uppercase bg-[#2a060a]/80 px-3 py-1 rounded-full border border-[#d4af37]/40 shadow">
                    Tap to Open
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Opened Envelope & Date Reveal Card */
          <div className="w-full bg-[#2d0a10]/90 border-2 border-[#d4af37] rounded-2xl p-6 shadow-2xl text-center backdrop-blur-md transform animate-fadeIn">
            <div className="border border-[#d4af37]/30 rounded-xl p-5 bg-[#180407]/60">
              <p className="font-serif-royal text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-1">
                You are Cordially Invited
              </p>
              <h2 className="font-serif-royal text-2xl text-[#fff0b3] font-semibold mb-4">
                Wedding Celebrations
              </h2>

              {/* Scratch Area */}
              <div className="relative w-full max-w-[280px] h-24 mx-auto my-4 rounded-xl border border-[#d4af37]/60 overflow-hidden shadow-inner bg-[#3a080d] flex flex-col items-center justify-center">
                {/* Hidden Date Content behind canvas */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#4a0b12] to-[#2a060a]">
                  <p className="font-serif-royal text-xs text-[#ebd79a] uppercase tracking-widest">
                    8 • 9 • 10 DECEMBER 2026
                  </p>
                  <p className="font-display-royal text-3xl text-gold-gradient my-0.5">
                    Jaipur, Rajasthan
                  </p>
                  <p className="font-serif-royal text-[11px] text-[#fff0b3]/80">
                    Le Méridien Jaipur
                  </p>
                </div>

                {/* Scratch Canvas Overlay */}
                <canvas 
                  ref={canvasRef} 
                  width={280} 
                  height={96}
                  className="absolute inset-0 cursor-pointer touch-none z-10"
                />
              </div>

              {!isScratched && (
                <button
                  onClick={handleQuickReveal}
                  className="text-xs text-[#ebd79a] underline hover:text-[#fff0b3] transition-colors mb-4 inline-block"
                >
                  Quick Reveal Date
                </button>
              )}

              {/* Proceed to Royal Gate Button */}
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <button
                  onClick={onOpenGate}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fff0b3] to-[#d4af37] text-[#2a060a] font-serif-royal font-bold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Step Inside The Royal Gate</span>
                  <ArrowRight className="w-4 h-4 text-[#2a060a]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer hint */}
      <div className="mt-8 text-center text-xs text-[#ebd79a]/60 font-serif-royal">
        #AbhiKiRiya • Jaipur 2026
      </div>
    </div>
  );
}
