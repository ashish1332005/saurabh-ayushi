import React from 'react';

export default function RoyalFrame({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#f6eee2] text-[#3a080d] overflow-hidden select-none font-serif-royal">
      
      {/* Vintage Parchment Texture Layer */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-85 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 252, 245, 0.95) 0%, rgba(246, 237, 224, 0.85) 60%, rgba(235, 220, 198, 0.95) 100%)`
        }}
      />

      {/* Top Left Hanging Floral Garland */}
      <div className="fixed top-0 left-0 z-10 pointer-events-none w-36 sm:w-52 h-36 sm:h-52 opacity-90">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          {/* Leaves */}
          <path d="M0,0 Q60,40 100,10 Q140,80 180,0" stroke="#4a6b48" strokeWidth="3" fill="none"/>
          <path d="M10,20 Q40,60 70,30 Q110,90 140,20" stroke="#375235" strokeWidth="2.5" fill="none"/>
          {/* Floral Vine Leaf Clusters */}
          <circle cx="30" cy="35" r="7" fill="#6b8e68"/>
          <circle cx="70" cy="45" r="9" fill="#587955"/>
          <circle cx="120" cy="30" r="8" fill="#6b8e68"/>
          <circle cx="150" cy="15" r="6" fill="#4a6b48"/>
          {/* Marigold / Rose Petals */}
          <circle cx="45" cy="50" r="10" fill="#d95d39"/>
          <circle cx="45" cy="50" r="6" fill="#f4a261"/>
          <circle cx="90" cy="65" r="12" fill="#c1121f"/>
          <circle cx="90" cy="65" r="7" fill="#f4a261"/>
          <circle cx="135" cy="40" r="9" fill="#d95d39"/>
          <circle cx="135" cy="40" r="5" fill="#f4a261"/>
          {/* Hanging Droplets */}
          <line x1="45" y1="60" x2="45" y2="85" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="45" cy="88" r="4" fill="#d4af37"/>
          <line x1="90" y1="77" x2="90" y2="110" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="90" cy="113" r="5" fill="#d4af37"/>
        </svg>
      </div>

      {/* Top Right Hanging Floral Garland */}
      <div className="fixed top-0 right-0 z-10 pointer-events-none w-36 sm:w-52 h-36 sm:h-52 opacity-90 transform scale-x-[-1]">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path d="M0,0 Q60,40 100,10 Q140,80 180,0" stroke="#4a6b48" strokeWidth="3" fill="none"/>
          <circle cx="45" cy="50" r="10" fill="#d95d39"/>
          <circle cx="45" cy="50" r="6" fill="#f4a261"/>
          <circle cx="90" cy="65" r="12" fill="#c1121f"/>
          <circle cx="90" cy="65" r="7" fill="#f4a261"/>
          <line x1="90" y1="77" x2="90" y2="105" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="90" cy="108" r="4.5" fill="#d4af37"/>
        </svg>
      </div>

      {/* Right Edge Vertical Golden Beaded Border */}
      <div className="fixed top-0 right-0 bottom-0 z-10 pointer-events-none w-6 sm:w-8 flex flex-col items-center justify-around py-4 border-l-2 border-[#d4af37]/60 bg-gradient-to-l from-[#d4af37]/20 to-transparent">
        {Array.from({ length: 45 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#fff0b3] to-[#aa7c11] shadow-sm my-0.5" />
        ))}
      </div>

      {/* Left Edge Subtle Golden Border */}
      <div className="fixed top-0 left-0 bottom-0 z-10 pointer-events-none w-2 border-r border-[#d4af37]/30" />

      {/* Bottom Royal Palace Garden Landscape (Chhatri Gazebo, Lake, Golden Spires, Flying Bird) */}
      <div className="fixed bottom-0 left-0 right-0 z-0 pointer-events-none h-48 sm:h-64 opacity-35 sm:opacity-45 overflow-hidden">
        {/* Floating Golden Bird */}
        <div className="absolute top-4 right-1/4 animate-bounce duration-10000 opacity-80">
          <svg width="40" height="30" viewBox="0 0 100 80" fill="#d4af37">
            <path d="M10,40 Q30,10 60,35 Q80,20 95,10 Q75,45 55,45 Q35,65 10,40 Z" />
          </svg>
        </div>

        {/* Chhatri Gazebo (Bottom Left) */}
        <div className="absolute bottom-0 left-4 w-36 sm:w-56 h-40 sm:h-56">
          <svg viewBox="0 0 160 180" fill="none" className="w-full h-full">
            {/* Dome */}
            <path d="M40,70 Q80,10 120,70 Z" fill="#ebd5b3" stroke="#b58d46" strokeWidth="2"/>
            <path d="M80,10 L80,0" stroke="#d4af37" strokeWidth="3"/>
            <circle cx="80" cy="0" r="3" fill="#d4af37"/>
            {/* Dome Rim */}
            <rect x="35" y="70" width="90" height="8" rx="2" fill="#d4af37"/>
            {/* Pillars */}
            <rect x="45" y="78" width="8" height="70" fill="#cbb28d"/>
            <rect x="76" y="78" width="8" height="70" fill="#cbb28d"/>
            <rect x="107" y="78" width="8" height="70" fill="#cbb28d"/>
            {/* Arches */}
            <path d="M45,88 Q60,78 76,88" stroke="#8c6227" strokeWidth="2" fill="none"/>
            <path d="M76,88 Q91,78 107,88" stroke="#8c6227" strokeWidth="2" fill="none"/>
            {/* Base Balustrade */}
            <rect x="30" y="148" width="100" height="15" rx="3" fill="#b58d46"/>
          </svg>
        </div>

        {/* Golden Spires & Trees (Bottom Right) */}
        <div className="absolute bottom-0 right-12 w-44 sm:w-64 h-40 sm:h-52">
          <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
            {/* Spires */}
            <polygon points="140,160 155,40 170,160" fill="#c59b40" opacity="0.8"/>
            <polygon points="170,160 180,60 190,160" fill="#a87f28" opacity="0.8"/>
            {/* Trees */}
            <circle cx="80" cy="110" r="35" fill="#7d9b76" opacity="0.6"/>
            <circle cx="115" cy="120" r="30" fill="#5b7854" opacity="0.7"/>
            <rect x="78" y="130" width="5" height="30" fill="#4a3721"/>
            <rect x="113" y="140" width="4" height="20" fill="#4a3721"/>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 min-h-screen w-full flex flex-col items-center">
        {children}
      </div>

    </div>
  );
}
