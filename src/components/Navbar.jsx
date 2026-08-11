"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { FaWhatsapp, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNum = "0510542230";
  const whatsappUrl = "https://wa.me/966510542230?text=" + encodeURIComponent("السلام عليكم، أرغب في تقييم وبيع أثاث مستعمل / سكراب بالمدينة المنورة");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "الخدمات والمنتجات", href: "#categories" },
    { name: "خطوات العمل", href: "#workflow" },
    { name: "المعروضات والتفاصيل", href: "#showcase" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-brand-green via-emerald-800 to-brand-green text-white text-xs py-1.5 px-4 text-center border-b border-brand-gold/30 flex items-center justify-center gap-2">
        <HiSparkles className="text-brand-gold animate-spin text-sm shrink-0" style={{ animationDuration: '6s' }} />
        <span>
          نشتري غرف النوم، الكنب، المكيفات، المطابخ والسكراب بأعلى سعر بالمدينة المنورة - فك ونقل مجاني!
        </span>
        <span className="hidden md:inline-block font-bold text-brand-gold bg-black/20 px-2 py-0.5 rounded-full text-[10px]">
          دفع فوري نقداً
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-brand-gold/20 py-2.5"
            : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#hero" className="hover:opacity-95 transition-opacity">
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-slate-700 hover:text-brand-green font-medium text-sm transition-colors hover:font-semibold relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Direct Contact CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Direct Phone */}
              <a
                href={`tel:${phoneNum}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-800 bg-brand-gold-100 hover:bg-brand-gold-200 border border-brand-gold/30 text-xs font-bold transition-all"
              >
                <FaPhoneAlt className="text-brand-green text-xs" />
                <span dir="ltr">{phoneNum}</span>
              </a>

              {/* Highlighted WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-glow flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="text-xl text-white animate-bounce" style={{ animationDuration: '2s' }} />
                <span>تواصل عبر الواتساب</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white p-2 rounded-lg text-lg flex items-center justify-center shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-green rounded-lg bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-brand-gold/20 shadow-xl px-4 pt-3 pb-6 mt-2 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 font-semibold text-base py-2 border-b border-slate-100 hover:text-brand-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-base shadow-md"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>أرسل صور الأثاث على الواتساب</span>
                </a>
                <a
                  href={`tel:${phoneNum}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-gold-100 text-brand-green font-bold text-sm border border-brand-gold/30"
                >
                  <FaPhoneAlt />
                  <span>اتصال مباشر: {phoneNum}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
