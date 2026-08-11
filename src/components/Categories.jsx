"use client";

import React from "react";
import { FaSnowflake, FaUtensils, FaBed, FaCouch, FaTv, FaBriefcase, FaHotel, FaRecycle, FaWhatsapp } from "react-icons/fa";

export default function Categories() {
  const categories = [
    {
      id: "ac",
      icon: <FaSnowflake className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "المكيفات",
      desc: "نشتري المكيفات الخربانة والمستعملة (سبليت، شباك، مركزي) بجميع الحالات.",
      tag: "سبليت وشباك"
    },
    {
      id: "kitchen",
      icon: <FaUtensils className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "المطابخ",
      desc: "مطابخ ألمنيوم، خشب، كلادينج مع خدمة الفك والتركيب والتنظيف بأفضل سعر.",
      tag: "ألمنيوم وخشب"
    },
    {
      id: "bedroom",
      icon: <FaBed className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "غرف النوم",
      desc: "نشتري غرف النوم الكاملة، الأسرة، الدواليب، وغرف نوم الأطفال الفخمة.",
      tag: "كاملة ومنفردة"
    },
    {
      id: "sofa",
      icon: <FaCouch className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "الكنب والمجالس",
      desc: "كنب أمريكي، كورنر، مجالس عربية تقليدية ومودرن، أطقم صالونات متكاملة.",
      tag: "مجالس وكورنر"
    },
    {
      id: "appliances",
      icon: <FaTv className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "الأجهزة الكهربائية",
      desc: "ثلاجات، غسالات، شاشات، مايكروويف، أفران غاز وثلاجات عرض المطاعم.",
      tag: "شاشات وثلاجات"
    },
    {
      id: "office",
      icon: <FaBriefcase className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "الأثاث المكتبي",
      desc: "مكاتب الشركات، كراسي هيدروليك، خزن حديدية، وطاولات الاجتماعات.",
      tag: "مكاتب وكراسي"
    },
    {
      id: "hotels",
      icon: <FaHotel className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "أثاث الفنادق والشقق",
      desc: "نشتري محتويات وتجهيزات الفنادق كاملة الشقق المفروشة والمجمعات.",
      tag: "تصفية فنادق"
    },
    {
      id: "scrap",
      icon: <FaRecycle className="text-3xl text-brand-green group-hover:text-white transition-colors" />,
      title: "السكراب والمعادن",
      desc: "حديد، نحاس، ألومنيوم، خردة المباني، الهياكل المعدنية ومعدات المصانع.",
      tag: "حديد ونحاس"
    },
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-white via-brand-gold-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
            الخدمات والأنواع
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4">
            نشتري كل ما هو مستعمل تقريباً
          </h2>
          <p className="text-slate-600 font-tajawal text-base sm:text-lg leading-relaxed">
            مهما كانت حالة الأثاث أو كميته، نحن نضمن لك التقييم العادل والمريح مع الدفع الفوري والنقل على حسابنا بالكامل.
          </p>
        </div>

        {/* Circular Icon Grid (Matching Layout Reference Image) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const waCategoryUrl = `https://wa.me/966510542230?text=${encodeURIComponent(
              `السلام عليكم، أرغب في بيع (${cat.title}) بالمدينة المنورة والاستفسار عن السعر.`
            )}`;

            return (
              <div
                key={cat.id}
                className="group bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl border border-brand-gold/20 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-between"
              >
                <div>
                  {/* Circular Icon Badge */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-gold-100 border-2 border-brand-gold/40 flex items-center justify-center mb-5 group-hover:bg-brand-green group-hover:border-brand-gold transition-all duration-300 shadow-inner">
                    {cat.icon}
                  </div>

                  {/* Badge Category Tag */}
                  <span className="text-[11px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full">
                    {cat.tag}
                  </span>

                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-brand-green transition-colors">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-tajawal leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                {/* Direct WhatsApp Action for this Category */}
                <a
                  href={waCategoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white border border-slate-200 hover:border-emerald-600 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <FaWhatsapp className="text-emerald-600 group-hover:text-white text-base" />
                  <span>طلب تسعير {cat.title}</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
