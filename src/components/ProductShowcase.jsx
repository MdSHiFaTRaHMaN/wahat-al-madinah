"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaCheck, FaChevronRight, FaChevronLeft, FaTag, FaStar } from "react-icons/fa";

export default function ProductShowcase() {
  const items = [
    {
      id: "bedroom-majlis",
      title: "شراء غرف النوم والمجالس المستعملة",
      subtitle: "Master Bedroom & Majlis Sofa Buying",
      image: "/images/bedroom.png",
      gallery: ["/images/bedroom.png", "/images/hero.png"],
      desc: "نشتري غرف النوم المستعملة الكاملة، أسرة النوم، الدواليب السحب والعادية، بالإضافة إلى الكنب الكلاسيكي والمودرن والمجالس العربية الفخمة بالمدينة المنورة بأعلى أسعار الحراج.",
      specs: [
        { label: "نوع الأثاث", val: "غرف كاملة، كنب، مجالس" },
        { label: "التقييم", val: "حسب جودة الخشب والقماش" },
        { label: "الخدمة", val: "فك ونقل مجاني شاملاً" },
      ],
      bullets: [
        "نشتري غرف النوم الوطنية والإيطالية والتركية",
        "تقييم عادل للمجالس الكلاسيكية وأطقم الكنب",
        "فك الدواليب والأسرة بدون إحداث أي خدوش بالحوائط",
      ],
      whatsappMsg: "السلام عليكم، لدي غرف نوم / كنب مستعمل بالمدينة المنورة وأرغب في تقييمه وبيعه.",
      reverse: false,
    },
    {
      id: "kitchen-appliances",
      title: "شراء المطابخ والأجهزة الكهربائية",
      subtitle: "Kitchen Cabinets & Home Appliances",
      image: "/images/kitchen.png",
      gallery: ["/images/kitchen.png", "/images/hero.png"],
      desc: "نوفر لكم خدمة شراء مطابخ المستعملة بأعلى سعر (ألمنيوم، كلادينج، خشب، فورميكا) بالمدينة المنورة، إلى جانب الثلاجات والمكيفات والغسالات والشاشات وأفران الغاز.",
      specs: [
        { label: "خامة المطبخ", val: "ألمنيوم، كلادينج، خشب" },
        { label: "الأجهزة", val: "مكيفات، ثلاجات، غسالات" },
        { label: "التفكيك", val: "فنيون مختصون في الفك" },
      ],
      bullets: [
        "شراء المطابخ مهما كانت حالتها أو مقاساتها",
        "فحص سلامة الرخام والمفصلات لتقديم أعلى سعر",
        "شراء جميع أنواع المكيفات (سبليت وشباك)",
      ],
      whatsappMsg: "السلام عليكم، أرغب في بيع مطبخ / أجهزة كهربائية ومكيفات بالمدينة المنورة.",
      reverse: true,
    },
    {
      id: "scrap-metals",
      title: "شراء السكراب والمعادن بالكامل",
      subtitle: "Scrap Metals & Industrial Recycling",
      image: "/images/scrap.png",
      gallery: ["/images/scrap.png", "/images/hero.png"],
      desc: "نشتري السكراب والخردة وجميع أنواع المعادن (حديد المباني والهياكل، النحاس الأحمر والأصفر، الألومنيوم، الكوابل الكهربائية) بأسعار بورصة المعادن المحدثة بالمدينة المنورة.",
      specs: [
        { label: "المعادن", val: "حديد، نحاس، ألومنيوم" },
        { label: "الوزن", val: "موازين دقيقة وعادلة" },
        { label: "التحميل", val: "دينمات ورافعات مجهزة" },
      ],
      bullets: [
        "شراء سكراب الهدم والمباني والمصانع والورش",
        "دفع نقدي فوري بمجرد توزين واستلام الشحنة",
        "التكفل بتحميل ونقل السكراب بالكامل",
      ],
      whatsappMsg: "السلام عليكم، لدي كمية سكراب / معادن بالمدينة المنورة وأرغب في بيعها.",
      reverse: false,
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
            معروضاتنا وخدماتنا التفصيلية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4">
            تغطية شاملة لكل مستلزمات الأثاث والسكراب
          </h2>
          <p className="text-slate-600 font-tajawal text-base sm:text-lg">
            شاهد تفاصيل خدماتنا في شراء وتثمين مختلف الأثاث المنزلي والتجهيزات التجارية
          </p>
        </div>

        {/* Alternating Feature Cards (Empire Dress / Kaftan Dress Layout) */}
        <div className="space-y-24">
          {items.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ShowcaseCard({ item }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const whatsappUrl = `https://wa.me/966510542230?text=${encodeURIComponent(item.whatsappMsg)}`;

  return (
    <div className="bg-brand-gold-50/50 rounded-3xl p-6 sm:p-10 border border-brand-gold/20 shadow-lg transition-all hover:shadow-xl">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Image Showcase & Slider Box */}
        <div className={`lg:col-span-6 ${item.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-100 group">
            
            <div className="relative h-80 sm:h-96 w-full">
              <Image
                src={item.gallery[activeImgIndex] || item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Badge Overlay */}
            <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <FaTag className="text-brand-gold" />
              <span>{item.subtitle}</span>
            </div>

            {/* Bottom Controls / Dots */}
            {item.gallery.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2">
                {item.gallery.map((_, gIdx) => (
                  <button
                    key={gIdx}
                    onClick={() => setActiveImgIndex(gIdx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeImgIndex === gIdx
                        ? 'bg-brand-gold w-6'
                        : 'bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Slide ${gIdx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>
        </div>

        {/* Text & Specs Box */}
        <div className={`lg:col-span-6 flex flex-col items-start ${item.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            {item.title}
          </h3>

          <p className="text-slate-600 font-tajawal text-sm sm:text-base leading-relaxed mb-6">
            {item.desc}
          </p>

          {/* Specs Table Pill Grid */}
          <div className="grid grid-cols-3 gap-2 w-full mb-6 bg-white p-3 rounded-xl border border-slate-200">
            {item.specs.map((spec, sIdx) => (
              <div key={sIdx} className="text-center">
                <div className="text-[11px] text-slate-400 font-medium">{spec.label}</div>
                <div className="text-xs font-bold text-brand-green">{spec.val}</div>
              </div>
            ))}
          </div>

          {/* Bullets List */}
          <ul className="space-y-2.5 mb-8 w-full">
            {item.bullets.map((bText, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-tajawal">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FaCheck className="text-[10px]" />
                </span>
                <span>{bText}</span>
              </li>
            ))}
          </ul>

          {/* High Impact WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-glow w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
          >
            <FaWhatsapp className="text-xl" />
            <span>طلب معاينة وتسعير {item.title}</span>
          </a>

        </div>

      </div>
    </div>
  );
}
