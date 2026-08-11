"use client";

import React from "react";
import Logo from "./Logo";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaHeart } from "react-icons/fa";

export default function Footer() {
  const phoneNum = "0510542230";
  const whatsappUrl = "https://wa.me/966510542230?text=" + encodeURIComponent("السلام عليكم، أود التواصل مع شركة واحة المدينة لشراء الأثاث المستعمل والسكراب.");

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-brand-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo light size="lg" />
            <p className="text-xs sm:text-sm font-tajawal text-slate-400 leading-relaxed pt-2">
              شركة <strong className="text-white font-bold">واحة المدينة</strong> متخصصة في شراء الأثاث المستعمل، غرف النوم، الكنب، المطابخ، المكيفات، الأجهزة الكهربائية، وسكراب المعادن بجميع أحياء المدينة المنورة بأعلى الأسعار مع الفك والنقل المجاني.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-lg transition-transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`tel:${phoneNum}`}
                className="w-9 h-9 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-slate-900 flex items-center justify-center text-sm font-bold transition-transform hover:scale-110"
                aria-label="Phone"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-r-2 border-brand-gold pr-3">
              روابط السريعة
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-tajawal text-slate-400">
              <li><a href="#hero" className="hover:text-brand-gold transition-colors">الرئيسية</a></li>
              <li><a href="#categories" className="hover:text-brand-gold transition-colors">نشتري الأثاث المستعمل</a></li>
              <li><a href="#workflow" className="hover:text-brand-gold transition-colors">خطوات بيع أثاثك</a></li>
              <li><a href="#showcase" className="hover:text-brand-gold transition-colors">شراء المطابخ والسكراب</a></li>
              <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">آراء العملاء بالمدينة</a></li>
            </ul>
          </div>

          {/* Purchased Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-r-2 border-brand-gold pr-3">
              خدمات الشراء بالمدينة
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-tajawal text-slate-400">
              <li>شراء غرف النوم والدواليب</li>
              <li>شراء الكنب والمجالس العربية</li>
              <li>شراء المطابخ الألمنيوم والكلادينج</li>
              <li>شراء المكيفات الشباك والسبليت</li>
              <li>شراء السكراب وحديد المباني</li>
              <li>تصفية أثاث الفنادق والشقق</li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-r-2 border-brand-gold pr-3">
              معلومات التواصل المباشر
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-tajawal text-slate-300">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-brand-gold text-base shrink-0" />
                <a href={`tel:${phoneNum}`} dir="ltr" className="hover:text-brand-gold font-bold font-mono">
                  {phoneNum}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-emerald-500 text-lg shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold">
                  تواصل عبر الواتساب (24/7)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-brand-gold text-base shrink-0" />
                <span>المدينة المنورة - جميع الأحياء والمناطق</span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-brand-gold text-base shrink-0" />
                <span>نعمل يومياً وعلى مدار 24 ساعة</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-tajawal gap-4">
          <p>© {new Date().getFullYear()} واحة المدينة لشراء الأثاث المستعمل والسكراب. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            تم التطوير بحرص بأعلى معايير الجودة والسرعة بالمدينة المنورة 🇸🇦
          </p>
        </div>

      </div>
    </footer>
  );
}
