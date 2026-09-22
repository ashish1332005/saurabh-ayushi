import React, { useState } from 'react';
import { X, Send, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    rooms: '1'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFF0B3', '#8B1E3F']
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', guests: '1', rooms: '1' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#2a060a] border-2 border-[#d4af37] rounded-2xl p-6 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#3a080d] text-[#d4af37] hover:text-[#fff0b3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="font-script-royal text-3xl text-[#d4af37]">
                Awaiting your presence
              </span>
              <h3 className="font-serif-royal text-xl font-bold text-[#fff0b3] uppercase tracking-wide mt-1">
                Kindly Respond
              </h3>
              <p className="font-serif-royal text-xs text-[#ebd79a]/70 mt-1">
                Please confirm by 15 November 2026
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-serif-royal text-xs uppercase tracking-wider text-[#d4af37] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh & Family"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#180407] border border-[#d4af37]/40 text-[#fff8ea] placeholder-[#ebd79a]/40 focus:outline-none focus:border-[#d4af37] font-serif-royal text-sm"
                />
              </div>

              <div>
                <label className="block font-serif-royal text-xs uppercase tracking-wider text-[#d4af37] mb-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#180407] border border-[#d4af37]/40 text-[#fff8ea] placeholder-[#ebd79a]/40 focus:outline-none focus:border-[#d4af37] font-serif-royal text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-serif-royal text-xs uppercase tracking-wider text-[#d4af37] mb-1">
                    Guests Attending
                  </label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#180407] border border-[#d4af37]/40 text-[#fff8ea] focus:outline-none focus:border-[#d4af37] font-serif-royal text-sm"
                  />
                </div>
                <div>
                  <label className="block font-serif-royal text-xs uppercase tracking-wider text-[#d4af37] mb-1">
                    Rooms Needed
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    min="0"
                    max="5"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#180407] border border-[#d4af37]/40 text-[#fff8ea] focus:outline-none focus:border-[#d4af37] font-serif-royal text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fff0b3] to-[#d4af37] text-[#2a060a] font-serif-royal font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#2a060a]" />
                <span>Send RSVP</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 animate-fadeIn">
            <CheckCircle2 className="w-14 h-14 text-[#d4af37] mx-auto mb-3" />
            <h3 className="font-display-royal text-4xl text-gold-gradient">
              Thank You!
            </h3>
            <p className="font-serif-royal text-sm text-[#fff0b3] mt-2">
              Your reply is on its way to us. We can't wait to celebrate with you in Udaipur!
            </p>
            <div className="mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-serif-royal text-[#ebd79a]/80">
              With warm regards,<br/>
              <span className="font-bold text-[#fff0b3] text-sm">Pooja &amp; Siddhart</span>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2 rounded-xl bg-[#3a080d] border border-[#d4af37] text-xs font-serif-royal text-[#fff0b3] hover:bg-[#4a0b12] transition-colors"
            >
              Back to Invitation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
