"use client";

import React from "react";
import { FaCommentDots, FaSearch, FaTools, FaMoneyCheckAlt, FaArrowLeft } from "react-icons/fa";

export default function Workflow() {
  const steps = [
    {
      num: "١",
      icon: <FaCommentDots className="text-2xl text-brand-gold" />,
      title: "التواصل والإرسال",
      desc: "تواصل معنا عبر الواتساب وأرسل صور وفيديوهات الأثاث أو السكراب المراد بيعه.",
    },
    {
      num: "٢",
      icon: <FaSearch className="text-2xl text-brand-gold" />,
      title: "المعاينة والتقييم",
      desc: "نرسل مندوبنا المتخصص لمعاينة الأغراض وتقديم أفضل عرض سعر عادل يناسبك.",
    },
    {
      num: "٣",
      icon: <FaTools className="text-2xl text-brand-gold" />,
      title: "الاتفاق والفك الاحترافي",
      desc: "عند موافقتك، يتولى فريقنا الاحترافي فك الأثاث والتجهيزات بعناية كاملة.",
    },
    {
      num: "٤",
      icon: <FaMoneyCheckAlt className="text-2xl text-brand-gold" />,
      title: "الدفع الفوري والنقل",
      desc: "تستلم مبلغك كاملاً نقداً في نفس اللحظة وقبل تحميل ونقل الأثاث بسياراتنا.",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-brand-gold-100/60 relative border-y border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3.5 py-1.5 rounded-full border border-brand-green/20">
            طريقة التعامل
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3">
            خطوات بسيطة من التواصل حتى استلام المبلغ
          </h2>
          <p className="text-slate-600 font-tajawal text-base sm:text-lg">
            نضمن لك عملية بيع مريحة وسريعة بدون أدنى مجهود أو تكاليف إضافية
          </p>
        </div>

        {/* 4 Connected Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              
              {/* Connector Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -left-1/2 w-full h-0.5 bg-gradient-to-l from-brand-gold/50 to-transparent z-0">
                  <FaArrowLeft className="absolute -left-2 -top-1.5 text-brand-gold text-xs" />
                </div>
              )}

              {/* Step Number Circle */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-gold/50 shadow-lg flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-brand-green transition-all duration-300">
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-green text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  {step.num}
                </span>
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2 group-hover:text-brand-green transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-tajawal leading-relaxed max-w-xs">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

        {/* WhatsApp Direct Action Banner */}
        <div className="mt-14 max-w-2xl mx-auto bg-white p-5 rounded-2xl border border-brand-gold/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">هل أنت جاهز لبيع أثاثك المستعمل الآن؟</h4>
            <p className="text-xs text-slate-500 font-tajawal">مندوبنا متواجد حالياً بالمدينة المنورة لخدمتك</p>
          </div>
          <a
            href="https://wa.me/966510542230?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D9%8F%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A8%D9%8A%D8%B9%20%D8%A3%D8%AB%D8%A7%D8%AB%20%D9%88%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%AA%D9%87"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-glow px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 flex items-center gap-2 shadow-md"
          >
            <span>ابتدئ المعاينة الآن</span>
            <FaArrowLeft className="text-xs" />
          </a>
        </div>

      </div>
    </section>
  );
}
