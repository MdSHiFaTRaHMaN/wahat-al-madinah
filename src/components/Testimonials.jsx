"use client";

import React from "react";
import { FaStar, FaQuoteRight, FaCheckCircle } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "أبو فهد الحبيشي",
      location: "حي العزيزية، المدينة المنورة",
      service: "بيع مطبخ وأثاث غرفة نوم",
      rating: 5,
      comment:
        "تعاملت مع واحة المدينة لبيع مطبخ ألمنيوم وغرفة نوم مستعملة. وصل الفني بسرعة وقيم الأغراض بسعر ممتاز جداً أعلى من محلات الحراج وتم الفك والنقل في نفس اليوم بدون أي إزعاج.",
    },
    {
      name: "أبو عبد الرحمن المطيري",
      location: "حي الهجرة، المدينة المنورة",
      service: "بيع مجالس ومكيفات سبليت",
      rating: 5,
      comment:
        "من أفضل وأصدق من تعاملت معهم في شراء الأثاث المستعمل بالمدينة. مصداقية عالية في التقييم، والدفع نقداً فوراً قبل تحميل الأغراض من الشقة.",
    },
    {
      name: "م. خالد الحربي",
      location: "حي العريض، المدينة المنورة",
      service: "تصفية أثاث شقق مفروشة وسكراب",
      rating: 5,
      comment:
        "كان لدينا تصفية محتويات شقق مفروشة بالكامل بالمدينة المنورة. تواصلت معهم عبر الواتساب وجاء الفريق فوراً واشتروا الكنب والمكيفات والسكراب دفعة واحدة بسعر مجزي جداً.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-gold-50/70 border-t border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3.5 py-1.5 rounded-full border border-brand-green/20">
            تجارب حقيقية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-3">
            آراء عملائنا بالمدينة المنورة
          </h2>
          <p className="text-slate-600 font-tajawal text-base sm:text-lg">
            نعتز بثقة ورضا آلاف العملاء الذين اختاروا واحة المدينة لشراء أثاثهم وسكرابهم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl border border-brand-gold/20 transition-all duration-300 relative flex flex-col justify-between"
            >
              <FaQuoteRight className="text-4xl text-brand-gold/20 absolute top-6 left-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, s) => (
                    <FaStar key={s} className="text-sm" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-slate-700 font-tajawal text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <FaCheckCircle className="text-emerald-500 text-xs" title="عميل موثق" />
                  </h4>
                  <span className="text-xs text-slate-400 font-tajawal">{rev.location}</span>
                </div>
                <span className="text-[11px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                  {rev.service}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
