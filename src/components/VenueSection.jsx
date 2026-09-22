import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function VenueSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-xl mx-auto pt-2 pb-6 px-3 sm:px-4">

      {/* 1. Header Graphic ("The Venue") */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[330px] sm:max-w-[410px] mb-6 sm:mb-8 text-center"
      >        <img
          src="/assets/padam/7.png"
          alt="The Venue"
          className="w-full h-auto object-contain filter drop-shadow-sm mx-auto"
        />
      </motion.div>

      {/* 2. Resort Photo Card (The Aaureum Resort) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="w-full max-w-[380px] sm:max-w-[480px] rounded-3xl p-1.5 bg-gradient-to-b from-[#d4af37] via-[#fff0b3] to-[#aa7c11] shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.01] mb-5"
      >
        <div className="w-full aspect-[16/10] sm:aspect-[16/10] rounded-[20px] overflow-hidden bg-[#2a060a]">
          <img
            src="/assets/saurabh-aayushi/aaureum-resort.jpg"
            alt="The Aaureum Resort, Bhilwara"
            className="w-full h-full object-cover filter brightness-[1.03] contrast-[1.02]"
          />
        </div>
      </motion.div>

      {/* 3. Venue Name & Location Text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        className="text-center mb-5"
      >
        <h3 className="font-serif-royal text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5c131a] tracking-wide mb-1 filter drop-shadow-xs">
          The Aaureum Resort
        </h3>
        <span className="font-serif-royal text-lg sm:text-xl text-[#8c5a1e] font-medium block">
          Bhilwara, Rajasthan
        </span>
      </motion.div>

      {/* 4. Action Button: Google Maps Directions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="w-full max-w-xs sm:max-w-sm"
      >
        <a
          href="https://maps.google.com/?q=The+Aaureum+Resort+Bhilwara"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-6 rounded-full bg-[#8c1823] hover:bg-[#6b1018] text-[#fff8ea] font-serif-royal text-sm font-semibold tracking-wider text-center border border-[#d4af37]/70 shadow-lg hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-[#fff0b3]" />
          <span>Get Directions</span>
        </a>
      </motion.div>

    </div>
  );
}
