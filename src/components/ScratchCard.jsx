import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function ScratchCard({ onReveal }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    if (!container) return;

    // Set canvas dimensions to match container exactly
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Use the supplied floral royal artwork as the scratch-off cover.
    const cover = new Image();
    cover.onload = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(cover, 0, 0, width, height);
    };
    cover.src = '/assets/saurabh-aayushi/scratch-card-cover.png';
  }, []);

  const getPosition = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const scratch = (e) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pos = getPosition(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 24, 0, Math.PI * 2, false);
    ctx.fill();

    checkRevealPercentage();
  };

  const checkRevealPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Sample pixels to calculate scratched percentage
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    let transparentPixels = 0;
    const totalSampled = data.length / 16;

    for (let i = 3; i < data.length; i += 16) {
      if (data[i] < 128) {
        transparentPixels++;
      }
    }

    const percent = (transparentPixels / totalSampled) * 100;
    if (percent > 38 && !isRevealed) {
      handleCompleteReveal();
    }
  };

  const handleCompleteReveal = () => {
    setIsRevealed(true);
    if (onReveal) onReveal();

    // Confetti celebration upon scratch completion
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#FFD700', '#FF85A1', '#FFF0B3']
    });
  };

  return (
    <div className="relative w-full max-w-[310px] sm:max-w-[350px] mx-auto select-none my-2">
      {/* Content under the scratch card */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[2/1] flex flex-col items-center justify-center rounded-[1.35rem] p-5 sm:p-6 text-center bg-gradient-to-b from-[#fffefc] via-[#fff8e8] to-[#f7e4bc] border-[3px] border-[#b88a35] shadow-[0_12px_30px_rgba(78,42,12,0.24),inset_0_0_0_3px_rgba(255,255,255,0.55)] overflow-hidden"
      >
        <span className="font-serif-royal text-xs sm:text-sm uppercase tracking-[0.22em] text-[#8c5a1e] font-bold block mb-1">
          MARK YOUR CALENDER
        </span>
        
        <h2 className="font-serif-royal text-2xl sm:text-3xl font-extrabold text-[#5c131a] my-1 tracking-wide">
          23-26 NOVEMBER 2026
        </h2>
        
        <span className="font-serif-royal text-xs sm:text-sm uppercase tracking-[0.18em] text-[#8c5a1e] block font-semibold mt-1">
          THE AAUREUM RESORT, BHILWARA
        </span>
      </div>

      {/* Interactive Scratch Canvas Overlay */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          onMouseDown={(e) => {
            setIsDrawing(true);
            scratch(e);
          }}
          onMouseMove={(e) => {
            if (isDrawing) scratch(e);
          }}
          onMouseUp={() => setIsDrawing(false)}
          onMouseLeave={() => setIsDrawing(false)}
          onTouchStart={(e) => {
            setIsDrawing(true);
            scratch(e);
          }}
          onTouchMove={(e) => {
            if (isDrawing) scratch(e);
          }}
          onTouchEnd={() => setIsDrawing(false)}
          className="absolute inset-0 w-full h-full rounded-2xl cursor-pointer touch-none z-20 shadow-md"
        />
      )}

      {/* Helper Scratch button */}
      {!isRevealed && (
        <div className="mt-1.5 flex justify-center">
          <button
            onClick={handleCompleteReveal}
            className="flex items-center gap-1.5 text-[11px] font-serif-royal text-[#8c5a1e] hover:text-[#5c131a] bg-[#fffdfa]/80 px-3 py-1 rounded-full border border-[#d4af37]/50 shadow-xs cursor-pointer transition-transform hover:scale-105"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Tap to reveal instantly</span>
          </button>
        </div>
      )}
    </div>
  );
}
