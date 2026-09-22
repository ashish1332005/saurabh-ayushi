import React from 'react';
import { motion } from 'framer-motion';
import ScratchCard from './ScratchCard';

export default function AnnouncementSection() {

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 sm:py-10 px-3 max-w-lg mx-auto text-center">
      
      {/* Saurabh & Aayushi "ÃƒÂ Ã‚Â¤Ã¢â‚¬Â¦ & S" Ornate Monogram */}
      <motion.div 
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 h-32 sm:w-40 sm:h-40 mb-3 hover:scale-105 transition-transform flex items-center justify-center cursor-pointer"
      >
        <img 
          src="/assets/saurabh-aayushi/as-monogram-clean.png" 
          alt="Saurabh & Aayushi Monogram" 
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        />
      </motion.div>
      {/* Supplied invitation typography graphic replaces the plain intro and names text. */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-[340px] sm:max-w-[470px] my-1"
      >
        <img
          src="/assets/saurabh-aayushi/media_1790058783764.png"
          alt="We hope this guide helps you select the perfect attire for our big day. Saurabh and Aayushi"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Interactive Scratch Card: Mark Your Calender */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full my-3"
      >
        <ScratchCard />
      </motion.div>
    </div>
  );
}
