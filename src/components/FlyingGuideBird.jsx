import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FlyingGuideBird() {
const { scrollYProgress } = useScroll();

// Vertical flight path on screen as user scrolls (14vh to 78vh)
const topPos = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['14vh', '32vh', '52vh', '68vh', '78vh']);

// Horizontal S-curve flight path across screen as user scrolls
const leftPos = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['10%', '75%', '14%', '80%', '46%']);

// Flight rotation angle following the movement curve
const rotateAngle = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [12, -18, 15, -12, 0]);

return (
<motion.div
style={{
top: topPos,
left: leftPos,
rotate: rotateAngle
}}
className="fixed z-40 pointer-events-none transition-all duration-300 ease-out flex items-center justify-center opacity-85 hover:opacity-100"
>
{/* Subtle Warm Glow Behind Bird */}
<div className="relative">
<div className="absolute -inset-1 rounded-full bg-radial from-[#d4af37]/30 to-transparent blur-[2px]" />

{/* Elegant Flying Golden Dove SVG (Harmonized with background palette) */}  
    <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center filter drop-shadow-[0_2px_6px_rgba(140,98,39,0.35)]">  
      <svg viewBox="0 0 100 80" className="w-full h-full">  
        {/* Left Wing Flapping */}  
        <path  
          d="M50,40 Q25,10 5,20 Q30,45 50,40 Z"  
          fill="#e8ce84"  
          stroke="#8c6227"  
          strokeWidth="1.2"  
          className="animate-wing-left opacity-90"  
        />  
        {/* Right Wing Flapping */}  
        <path  
          d="M50,40 Q75,10 95,20 Q70,45 50,40 Z"  
          fill="#e8ce84"  
          stroke="#8c6227"  
          strokeWidth="1.2"  
          className="animate-wing-right opacity-90"  
        />  
        {/* Bird Body & Head */}  
        <path  
          d="M50,30 Q40,45 50,70 Q60,45 50,30 Z"  
          fill="#cfa84e"  
          stroke="#7a5818"  
          strokeWidth="1"  
        />  
        {/* Head Circle */}  
        <circle cx="50" cy="26" r="5.5" fill="#fceabb" stroke="#8c6227" strokeWidth="1" />  
        {/* Beak */}  
        <polygon points="50,20 48,15 52,15" fill="#a84323" />  
      </svg>  
    </div>  
  </div>  
</motion.div>

);
}
