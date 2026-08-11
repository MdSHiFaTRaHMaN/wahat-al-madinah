"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaTruck, FaMoneyBillWave, FaShieldAlt, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Hero() {
  const phoneNum = "0510542230";
  const whatsappUrl = "https://wa.me/966510542230?text=" + encodeURIComponent("السلام عليكم ورحمة الله وبركاته، أرغب في بيع أثاث مستعمل / سكراب في المدينة المنورة وتحديد موعد للمعاينة.");

  const features = [
    { icon: <FaMoneyBillWave className="text-brand-gold text-lg" />, text: "أفضل سعر والدفع نقداً فوراً" },
    { icon: <FaTruck className="text-brand-gold text-lg" />, text: "خدمة الفك والنقل مجاناً بدون رسوم" },
    { icon: <FaShieldAlt className="text-brand-gold text-lg" />, text: "أمانة ومصداقية تامة في التقييم" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-gold-50 via-white to-brand-gold-100/50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column (RTL Right side) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs sm:text-sm font-bold mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>واحة المدينة | الخيار الأول لشراء الأثاث بالمدينة المنورة 📍</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.25] tracking-tight mb-6">
              نشتري أثاثك المستعمل والسكراب{" "}
              <span className="relative inline-block text-brand-green">
                بكل سهولة وأمانة
                <svg className="absolute -bottom-2 right-0 w-full h-3 text-brand-gold/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{" "}
              وبأعلى الأسعار
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-tajawal leading-relaxed mb-8 max-w-2xl">
              هل ترغب في بيع أثاث منزلك أو مكتبك أو مطبخك بالمدينة المنورة؟ نحن في <strong className="text-brand-green font-bold">واحة المدينة</strong> نشتري جميع أنواع الأثاث المستعمل (غرف النوم، الكنب والمجالس، المكيفات، المطابخ، الأجهزة الكهربائية، وسكراب المعادن) مع التكفل الكامل بالفك والنقل والدفع الفوري.
            </p>

            {/* Trust Features Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/80 p-3 rounded-xl border border-brand-gold/20 shadow-xs">
                  {feat.icon}
                  <span className="text-xs sm:text-sm font-bold text-slate-800 font-tajawal">{feat.text}</span>
                </div>
              ))}
            </div>

            {/* Highlighted WhatsApp & Phone CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              
              {/* Main WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-glow flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base shadow-xl shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FaWhatsapp className="text-2xl text-white animate-pulse" />
                <div className="flex flex-col text-right">
                  <span className="text-xs font-normal opacity-90">تواصل مباشر وسريع</span>
                  <span>أرسل صورة الأثاث واتساب</span>
                </div>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${phoneNum}`}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white hover:bg-brand-gold-100 text-slate-900 border-2 border-brand-gold/40 font-bold text-base shadow-md transition-all hover:-translate-y-0.5"
              >
                <FaPhoneAlt className="text-brand-gold text-lg" />
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-500 font-normal">إتصال مباشر</span>
                  <span dir="ltr" className="font-mono text-brand-green font-bold">{phoneNum}</span>
                </div>
              </a>
            </div>

            {/* Proof Stats Counter */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4 text-center sm:text-right">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-green">5,400+</div>
                <div className="text-xs text-slate-500 font-tajawal font-medium">عميل سعيد بالمدينة</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-gold">10+ سنوات</div>
                <div className="text-xs text-slate-500 font-tajawal font-medium">خبرة وأمانة بالتقييم</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-800">24/7</div>
                <div className="text-xs text-slate-500 font-tajawal font-medium">استجابة فورية للواتساب</div>
              </div>
            </div>

          </div>

          {/* Arched Green Card Showcase (Matching Layout Reference Image!) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Green Arch Container */}
              <div className="arch-card bg-brand-green p-4 sm:p-5 pt-8 shadow-2xl border-4 border-brand-gold/40 relative overflow-hidden group">
                
                {/* Gold Arch Border Accent inside */}
                <div className="absolute top-2 inset-x-4 h-12 rounded-t-full border-t-2 border-brand-gold/50 pointer-events-none"></div>

                {/* Main Hero Image */}
                <div className="relative h-96 sm:h-[430px] rounded-b-2xl overflow-hidden shadow-inner">
                  <Image
                    src="/images/hero.png"
                    alt="شراء الأثاث المستعمل بالمدينة المنورة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-transparent to-transparent"></div>
                  
                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl glass-card text-right border border-brand-gold/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-brand-green bg-brand-gold/20 px-2 py-0.5 rounded-md">
                        معاينة مجانية ⚡
                      </span>
                      <div className="flex text-brand-gold text-xs">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      نشتري كافة الأغراض المنزلية والسكراب بجميع أحياء المدينة
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-brand-gold/30 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">تسعير فوري خلال دقائق</div>
                  <div className="text-[10px] text-slate-500">عبر الواتساب 📲</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-brand-gold/30 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 rounded-xl bg-brand-gold-100 flex items-center justify-center text-brand-gold text-xl font-bold">
                  🚛
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">سيارات فك ونقل مجهزة</div>
                  <div className="text-[10px] text-slate-500">تصلك لباب منزلك فوراً</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
