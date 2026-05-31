"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden"
      dir="rtl" id="home"
    >

      {/* 🎥 Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-[#0b1f3a]/70" />

      {/* Optional gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 px-4">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          ابدأ رحلتك في عالم الطيران ✈️
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          برايم فلايت أكاديمي – طريقك نحو شركات الطيران العالمية
        </p>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
  المرخص والمعتمد بمزاولة نشاط التدريب طبقا لقرار رئيس الجمهورية رقم 351 لسنة 2012 بانشاء المعهد القومي للجودةوالكتاب الدوري الصادر عن رئاسة مجلس الوزراء رقم ( 6886-6 ) لسنة 2017 بقرار وزارة رقم 347 لسنة 2010         </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">

          <Link
            href="/student"
            className="bg-white text-[#0b1f3a] px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            دخول الطالب
          </Link>

          <Link
            href="https://forms.gle/6RfTgggUg2AD7dbx6"
            className="bg-[#f5c542] text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            قدم الآن
          </Link>

        </div>

      </div>

    </section>
  );
}