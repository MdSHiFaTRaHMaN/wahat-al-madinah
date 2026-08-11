"use client";

import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

export default function CalloutBanner() {
  const phoneNum = "0510542230";
  const whatsappUrl = "https://wa.me/966510542230?text=" + encodeURIComponent("السلام عليكم، أود بيع أثاث مستعمل / سكراب بالمدينة المنورة وحجز موعد معاينة الآن.");

  return (
    <section className="py-20 green-gradient-bg text-white relative overflow-hidden shadow-2xl">
      
      {/* Background Ornaments */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Highlight Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold mb-6">
          <FaClock className="animate-spin text-xs" style={{ animationDuration: '8s' }} />
          <span>خدمة سريعة في جميع أحياء المدينة المنورة</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight max-w-4xl mx-auto">
          جاهز لبيع أثاثك المستعمل أو السكراب بأعلى سعر اليوم؟
        </h2>

        {/* Subtitle */}
        <p className="text-emerald-100/90 font-tajawal text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          أرسل الصور عبر الواتساب واحصل على تقييم فوري مجاني خلال دقائق. سيارات الفك والنقل جاهزة للانطلاق فوراً.
        </p>

        {/* Highlighted WhatsApp & Phone CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12">
          
          {/* Main WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-glow w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-brand-green font-black text-base flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105"
          >
            <FaWhatsapp className="text-2xl text-emerald-600 animate-bounce" />
            <span>تواصل عبر الواتساب الآن 💬</span>
          </a>

          {/* Call Button */}
          <a
            href={`tel:${phoneNum}`}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-gold hover:bg-brand-gold-hover text-slate-900 font-black text-base flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105"
          >
            <FaPhoneAlt className="text-xl" />
            <span dir="ltr">{phoneNum}</span>
          </a>

        </div>

        {/* Mini Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10 text-xs sm:text-sm font-tajawal text-emerald-100">
          <div className="flex items-center justify-center gap-2">
            <FaTruck className="text-brand-gold text-base" />
            <span>سيارات فك ونقل مجانية</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaShieldAlt className="text-brand-gold text-base" />
            <span>دفع نقدي فوري 100%</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaClock className="text-brand-gold text-base" />
            <span>متواجدون على مدار 24 ساعة</span>
          </div>
        </div>

      </div>
    </section>
  );
}
