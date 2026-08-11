"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentAlt } from "react-icons/fa";

export default function StickyFloatingBar() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNum = "0510542230";
  const whatsappUrl = "https://wa.me/966510542230?text=" + encodeURIComponent("السلام عليكم، أرغب في بيع وتثمين أثاث مستعمل / سكراب في المدينة المنورة.");

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Bubble (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
        
        {/* Animated Tooltip */}
        {showTooltip && (
          <div className="bg-slate-900 text-white text-xs font-bold py-2 px-3.5 rounded-2xl shadow-xl border border-brand-gold/40 flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>تواصل معنا عبر الواتساب فوراً 💬</span>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-glow w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="text-3xl sm:text-4xl text-white animate-pulse" />
        </a>
      </div>

      {/* Fixed Bottom Quick Action Bar for Mobile Screens */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-gold/30 p-2.5 shadow-2xl flex items-center gap-2">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${phoneNum}`}
          className="flex-1 py-3 px-3 rounded-xl bg-brand-gold-100 border border-brand-gold/30 text-brand-green font-bold text-xs sm:text-sm flex items-center justify-center gap-2 active:bg-brand-gold-200 transition-colors"
        >
          <FaPhoneAlt className="text-brand-gold" />
          <span dir="ltr">{phoneNum}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-3 px-4 rounded-xl bg-emerald-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:bg-emerald-700 transition-all"
        >
          <FaWhatsapp className="text-xl" />
          <span>تواصل واتساب للمعاينة</span>
        </a>

      </div>
    </>
  );
}
